import Endy from "../settings/Endy";

const game = {
    url: '',
    protocolVersion: 0,
    clientVersion: 0
}

WebSocketDayo.prototype.storedSend = WebSocketDayo.prototype.send
WebSocketDayo.prototype.send = function (buffer) {
    this.storedSend(buffer)
    if (!this.url.match(/agar\.io/)) return;
    const dataView = new DataView(new Uint8Array(buffer).buffer)
    if (!game.protocolVersion && dataView.getUint8(0) === 254) game.protocolVersion = dataView.getUint32(1, true)
    else if (!game.clientVersion && dataView.getUint8(0) === 255) game.clientVersion = dataView.getUint32(1, true)
}

export default class {
    static boot() {
        if (this.booted) return;
        this.booted = true;

        const HS = window.SettingsStore;
        class Writer {
            constructor(size) {
                this.dataView = new DataView(new ArrayBuffer(size))
                this.byteOffset = 0
            }
            writeUint8(value) {
                this.dataView.setUint8(this.byteOffset++, value)
            }
            writeInt32(value) {
                this.dataView.setInt32(this.byteOffset, value, true)
                this.byteOffset += 4
            }
            writeUint32(value) {
                this.dataView.setUint32(this.byteOffset, value, true)
                this.byteOffset += 4
            }
            writeString(string) {
                for (let i = 0; i < string.length; i++) this.writeUint8(string.charCodeAt(i))
                this.writeUint8(0)
            }
        }

        const user = {
            startedBots: false,
            isAlive: false,
            mouseX: 0,
            mouseY: 0,
            offsetX: 0,
            offsetY: 0,
            macroFeedInterval: null
        }

        const bots = {
            name: '',
            amount: 0,
            ai: false
        }

        const buffers = {
            startBots() {
                const botsName = window.unescape(window.encodeURIComponent(HS.NelBotsName))
                const writer = new Writer(13 + window.target.length + botsName.length)
                writer.writeUint8(0)
                writer.writeString(window.target)
                writer.writeUint32(game.protocolVersion)
                writer.writeUint32(game.clientVersion)
                writer.writeUint8(Number(user.isAlive))
                writer.writeString(HS.NelBotsName)
                writer.writeUint8(HS.NelBotsAmount)
                return writer.dataView.buffer
            },
            mousePosition(x, y) {
                const writer = new Writer(9)
                writer.writeUint8(6)
                writer.writeInt32(x)
                writer.writeInt32(y)
                return writer.dataView.buffer
            }
        }

        const checkPlayer = function () {
            if (window.target != game.url) {
                if (user.startedBots) window.connection.send(new Uint8Array([1]).buffer)
                game.url = window.target;
                user.isAlive = false
                user.macroFeedInterval = null
            }
            if (!window.playerCells) return;
            if (window.playerCells[0].size + window.playerCells[1].size == 0) {
                user.isAlive = false;
                if (user.startedBots) window.connection.send(new Uint8Array([5, Number(user.isAlive)]).buffer)
            } else {
                user.isAlive = true;
                if (user.startedBots) window.connection.send(new Uint8Array([5, Number(user.isAlive)]).buffer)
            }
        }
        const sendMouse = setInterval(() => {
            let pos = window.playerPos;
            if (pos && pos.x && pos.y) {
                let buf = buffers.mousePosition(pos.x, pos.y);
                if (user.startedBots && user.isAlive) window.connection.send(buf);
                checkPlayer();
            }
        }, 50);

        window.connection = {
            ws: null,
            connect() {
                this.ws = new WebSocket(HS.NelBotsServer)
                this.ws.binaryType = 'arraybuffer'
                this.ws.onopen = this.onopen.bind(this)
                this.ws.onmessage = this.onmessage.bind(this)
                this.ws.onclose = this.onclose.bind(this)
            },
            send(buffer) {
                if (this.ws && this.ws.readyState === 1) this.ws.send(buffer)
            },
            onopen() {
                document.getElementById('nel_serverStatus').style.color = '#00C02E'
                document.getElementById('nel_serverStatus').innerText = 'Connected'
                document.getElementById('nel_toggle').disabled = false
                window.recaptchaExecuteLoop();
            },
            sendToken(token) {
                if (token === undefined) return;
                let buf = new Writer(2 + token.length);
                buf.writeUint8(7);
                buf.writeString(token);
                window.connection.send(buf.dataView.buffer)
            },
            onmessage(message) {
                const dataView = new DataView(message.data)
                switch (dataView.getUint8(0)) {
                    case 0:
                        document.getElementById('nel_toggle').innerText = 'Stop Bots'
                        user.startedBots = true
                        break
                    case 1:
                        document.getElementById('nel_toggle').disabled = true
                        document.getElementById('nel_toggle').innerText = 'Stopping Bots...'
                        break
                    case 2:
                        document.getElementById('nel_botsAI').style.color = '#DA0A00'
                        document.getElementById('nel_botsAI').innerText = 'Disabled'
                        document.getElementById('nel_toggle').innerText = 'Stop Bots'
                        user.startedBots = false
                        bots.ai = false
                        break
                    case 3:
                        Endy.Toast.showToast('info', 'NelBots', 'Your IP has captcha and bots are unable to spawn, change your ip with a VPN or something to one that doesn\'t has captcha in order to use the bots');
                        break
                    case 4:
                        //Connected Bot count = getUint8(1)
                        //Spawned Bot count = getUint8(2)
                        //Server player amount = getUint8(3)
                        $('#nel_botsAmount').html(`${dataView.getUint8(1)}/${dataView.getUint8(2)}/${HS.NelBotsAmount}`)
                        // $('#slots').html(dataView.getUint8(3) + "/200")
                        break;
                    case 5:
                        $('#nel_players').html(dataView.getUint8(1) + "/200")
                        break;
                }
            },
            onclose() {
                document.getElementById('nel_serverStatus').style.color = '#DA0A00'
                document.getElementById('nel_serverStatus').innerText = 'Disconnected'
                document.getElementById('nel_botsAI').style.color = '#DA0A00'
                document.getElementById('nel_botsAI').innerText = 'Disabled'
                user.startedBots = false
                bots.ai = false

                setTimeout(() => {
                    this.connect();
                }, 500)
            }
        }

        function setKeysEvents() {
            document.addEventListener('keydown', e => {
                switch (e.key.toLocaleUpperCase()) {
                    case HS.BotSplitHotkey:
                        if (user.startedBots && user.isAlive) window.connection.send(new Uint8Array([2]).buffer)
                        break
                    case HS.BotFeedHotkey:
                        if (user.startedBots && user.isAlive) window.connection.send(new Uint8Array([3]).buffer)
                        break
                    case HS.BotAiHotkey:
                        if (user.startedBots && user.isAlive) {
                            if (!bots.ai) {
                                document.getElementById('nel_botsAI').style.color = '#00C02E'
                                document.getElementById('nel_botsAI').innerText = 'Enabled'
                                bots.ai = true
                                window.connection.send(new Uint8Array([4, Number(bots.ai)]).buffer)
                            } else {
                                document.getElementById('nel_botsAI').style.color = '#DA0A00'
                                document.getElementById('nel_botsAI').innerText = 'Disabled'
                                bots.ai = false
                                window.connection.send(new Uint8Array([4, Number(bots.ai)]).buffer)
                            }
                        }
                        break
                }
            })
            document.addEventListener('keyup', e => {
                /* if (e.keyCode === options.hotkeys["MACRO_FEED_KEY"].keycode && user.macroFeedInterval) {
                    clearInterval(user.macroFeedInterval)
                    user.macroFeedInterval = null
                } */
            })
        }

        document.getElementById("nel_toggle").addEventListener("click", e => {
            if (user.startedBots) {
                window.connection.send(new Uint8Array([1]).buffer)
            } else {
                game.clientVersion &&
                    game.protocolVersion &&
                    window.target &&
                    window.connection.send(buffers.startBots())
            }
        })

        setKeysEvents();

        window.connection.connect();
    }
}