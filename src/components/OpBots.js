const config = {
    APIKey: "",
}

export default class {
    static setConfig(key, value) {
        config[key] = value;
    }
    static boot() {
        if (this.booted) return;
        this.booted = true;
        const _global = window;

        class serverManager {
            constructor() {
                this.ws = null;
                this.data = {}
                this.server = null;
                this.mousePosition = {
                    x: 0,
                    y: 0,
                    oX: 0,
                    oY: 0
                }
                this.mapLocation = {
                    minx: 0,
                    miny: 0,
                    maxx: 0,
                    maxy: 0
                };

                this.started = false;
                this.botFreeze = false;

                this.wsip = `op-bots.com`;
                setTimeout(() => {
                    this.connect();
                }, 3000);

                setInterval(() => {
                    if (this.started) {
                        this.gameData(2); // mouse
                    }
                }, 50)
            }
            connect() {
                //this.ws = new WebSocket(`ws://${this.wsip}:8000`);
                _global.op_gui.changeServerStatus("Connecting...");
                window.location.protocol == "https:" ? this.ws = new WebSocket(`wss://${this.wsip}:8001`) : this.ws = new WebSocket(`ws://${this.wsip}:8000`);
                this.ws.binaryType = "arraybuffer";
                this.ws.onopen = this.open.bind(this);
                this.ws.onclose = this.close.bind(this);
                this.ws.onerror = this.error.bind(this);
                this.ws.onmessage = this.message.bind(this);
            }
            open() {
                _global.op_gui.changeServerStatus("Connected");
            }
            close() {
                _global.op_gui.changeServerStatus("Disconnected");
                this.server = null;
                this.started = false;

                setTimeout(this.connect.bind(this), 1000);
            }
            error() { }
            sendSpawn() {
                this.sendData(new Uint8Array([3, 5]));
            }
            sendDeath() {
                this.sendData(new Uint8Array([3, 4]));
            }
            message(msg) {
                msg = _global.op_inject.normalizeBuffer(msg.data);
                let offset = 0;
                let opcode = msg.getUint8(offset++);
                switch (opcode) {
                    case 254:
                        let state = msg.getUint8(offset++);
                        switch (state) {
                            case 1:
                                this.data.bots = msg.getUint16(offset, true);
                                offset += 2;
                                this.data.maxbots = msg.getUint16(offset, true);
                                _global.op_gui.changeBotsState(this.data.bots, this.data.maxbots);
                                break;
                            case 2:
                                this.data.time = msg.getFloat64(offset, true);
                                _global.op_gui.changeDateState(this.data.time);
                                break;
                            case 3:
                                this.data.sessionID = msg.getFloat64(offset, true);
                                _global.op_gui.changeSessionID(this.data.sessionID);
                                break;
                        }
                        break;
                    case 200:
                        let message = "";
                        let byte = 0;
                        while ((byte = msg.getUint8(offset++)) != 0) {
                            message += String.fromCharCode(byte);
                        }
                        alert(message);
                        break;
                    case 25:
                        let op2 = msg.getUint8(offset++);
                        switch (op2) {
                            case 0:
                                this.started = false;
                                document.getElementById("op_controlStart").innerHTML = "START BOTS";
                                _global.op_gui.changeBotsState(0, 0)
                                break;
                            case 1:
                                this.started = true;
                                document.getElementById("op_controlStart").innerHTML = "STOP BOTS";
                                break;
                        }
                        break;
                    case 87: {
                        this.sendData(new Uint8Array([87]));
                    } break;
                    case 41: {
                        // let apikey = prompt("You can enter your API key to get access to your plan (only if you have problems with authorization)");
                        let apikey = config.APIKey;
                        if (apikey) {
                            let buf = this.createBuffer(2 + apikey.length);
                            offset = 0;
                            buf.setUint8(offset++, 41);
                            for (let i = 0; i < apikey.length; i++) {
                                buf.setUint8(offset++, apikey.charCodeAt(i))
                            }
                            buf.setUint8(offset++, 0);
                            this.sendData(buf);
                        }
                    } break;
                }
            }
            addController() {
                document.getElementById("op_controlStart").onclick = () => {
                    if (this.started) {
                        this.sendData(new Uint8Array([25, 0]))
                    } else {
                        let buf = this.createBuffer(3 + _global.target.length);
                        let offset = 0;
                        buf.setUint8(offset++, 25);
                        buf.setUint8(offset++, 1);
                        for (let i = 0; i < _global.target.length; i++) {
                            buf.setUint8(offset++, _global.target.charCodeAt(i))
                        };
                        buf.setUint8(offset++, 0)
                        this.sendData(buf);
                        this.sendSpawn();
                    }
                };
                document.getElementById("op_reconnect").onclick = () => {
                    const s = _global.op_server;
                    if (s.ws) {
                        _global.op_server.ws.close();
                    }
                };
            }
            sendBytesDebug(text) {
                let buf = this.createBuffer(2 + text.length);
                let offset = 0;
                buf.setUint8(offset++, 50);
                for (let i = 0; i < text.length; i++) {
                    buf.setUint8(offset++, text.charCodeAt(i))
                };
                buf.setUint8(offset++, 0)
                this.sendData(buf);
            }
            sendData(data) {
                if (this.ws && this.ws.readyState == 1) {
                    this.ws.send(data);
                }
            }
            createBuffer(len) {
                return new DataView(new ArrayBuffer(len));
            }
            gameData(type, message) {
                if (type == 1) { // game server
                    let buf = this.createBuffer(2 + _global.target.length);
                    let offset = 0;
                    buf.setUint8(offset++, 1);
                    for (let i = 0; i < _global.target.length; i++) {
                        buf.setUint8(offset++, _global.target.charCodeAt(i))
                    };
                    buf.setUint8(offset++, 0)
                    this.sendData(buf);
                } else if (type == 2) { // game mouse data
                    if (!this.started || this.botfreeze) return;
                    let buf = this.createBuffer(18);
                    let offset = 0;
                    buf.setUint8(offset++, 2);
                    buf.setFloat64(offset, _global.playerPos.x, true);
                    offset += 8;
                    buf.setFloat64(offset, _global.playerPos.y, true);
                    this.sendData(buf);
                } else if (type == 3) { // game user modified data

                } else if (type == 4) {
                    let buf = this.createBuffer(3 + message.length);
                    let offset = 0;
                    buf.setUint8(offset++, 19);
                    buf.setUint8(offset++, 0)
                    buf.setUint8(offset++, message.length)
                    for (let i = 0; i < message.length; i++) {
                        buf.setUint8(offset++, message.charCodeAt(i))
                    };
                    this.sendData(buf);
                }
            }
        }

        class keyboardHandler {
            constructor() {
                this.keys = {};
                this.init();
            }
            init() {
                const HS = window.SettingsStore;
                this.keys = {
                    botsplit: {
                        keyname: HS.BotSplitHotkey || "E"
                    },
                    boteject: {
                        keyname: HS.BotFeedHotkey || "R"
                    },
                    botai: {
                        keyname: HS.BotAiHotkey || "Z"
                    },
                    botfreeze: {
                        keyname: HS.BotFreezeHotkey || "F"
                    },
                    /* prompt: {
                        keycode: 80,
                        keyname: "P"
                    }, */
                }
                this.addListeners();
            }
            addListeners() {
                const HS = window.SettingsStore;
                _global.addEventListener("keydown", (event) => {
                    //event = event.keyCode || event.which;
                    event = event.key;
                    //  console.log(event)
                    switch (event.toLocaleUpperCase()) {
                        case HS.BotSplitHotkey: {
                            _global.op_server.sendData(new Uint8Array([3, 1]));
                        } break;
                        case HS.BotFeedHotkey: {
                            _global.op_server.sendData(new Uint8Array([3, 2]));
                        } break;
                        case HS.BotAiHotkey: {
                            _global.op_server.sendData(new Uint8Array([3, 3]));
                        } break;
                        case HS.BotFreezeHotkey:
                            _global.op_server.botFreeze = true;
                            break;
                    };
                });
                _global.addEventListener("keyup", (event) => {
                    event = event.key;
                    switch (event.toLocaleUpperCase()) {
                        case HS.BotFreezeHotkey:
                            _global.op_server.botFreeze = false;
                            break;
                    }
                });
            }
        }

        class inject {
            constructor() { }

            normalizeBuffer(buf) {
                buf = new Uint8Array(buf);
                //if(buf[0] != 5) console.log(buf)
                let newBuf = new DataView(new ArrayBuffer(buf.byteLength));
                for (let i = 0; i < buf.byteLength; i++) {
                    newBuf.setUint8(i, buf[i])
                }
                return newBuf;
            }
        }

        class guiHandler {
            constructor() {
                this.gui = "";
                _global.op_server.addController();
            }

            convertTime(time) {
                let years = time / (60 * 60 * 24 * 30 * 12) >>> 0;
                let month = time / (60 * 60 * 24 * 30) >>> 0;
                let day = time / (60 * 60 * 24) >>> 0;
                let hour = time / (60 * 60) % 24 >>> 0;
                let min = time / 60 % 60 >>> 0;
                let sec = time % 60 >>> 0;
                //return `${day} : ${hour} : ${min} : ${sec}`;
                if (years > 0) {
                    return `${years} Year(s)`
                } else if (month > 0) {
                    return `${month} Month(s)`
                } else if (day > 0) {
                    return `${day} Day(s)`
                } else if (hour > 0) {
                    return `${hour} Hour(s)`
                } else if (min > 0) {
                    return `${min} Min(s)`
                } else {
                    return `${sec} Sec(s)`
                }
            }

            changeDateState(time) {
                document.getElementById("op_botsTime").innerHTML = this.convertTime(time);
            }

            changeBotsState(bots, maxbots) {
                document.getElementById("op_botsAmount").innerHTML = `${bots} / ${maxbots}`;
            }

            changeSessionID(id) {
                document.getElementById("op_sessionID").innerHTML = id;
            }

            changeServerStatus(s) {
                document.getElementById("op_serverStatus").innerHTML = s;
            }

        }

        _global.op_server = new serverManager();

        _global.op_inject = new inject();

        setTimeout(() => {
            _global.op_gui = new guiHandler();
            _global.op_keyboard = new keyboardHandler();
        }, 2000);

        console.log("[OP-Bots] SERVER STARTED")
    }
}