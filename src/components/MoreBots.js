export default class {
    static boot() {
        if (this.booted) return;
        this.booted = true;

        new class MoreBots {
            constructor(ip) {
                this.ip = '';
                this.ws = null;
                this.player = {
                    isPremium: false,
                    PremiumType: 0,
                    PureFeeder: false,
                    startTime: Date.now(),
                    decoded: {},
                    initialized: false
                }
                this.GUI = new GUI(this);
                this.Reader = new Reader(this);
                this.Transmitter = new Transmitter(this);
                this.Hotkeys = new MoreBotsHotkeys(this);
                this.connect(ip);
            }
            connect(ip) {
                ip = 'wss://gamesrv.agarbot.ovh:8443';
                this.ip = ip;
                this.ws = new WebSocket(this.ip);
                this.ws.onopen = () => this.onopen();
                this.ws.onmessage = obj => this.Reader.read(obj);
                this.ws.onerror = () => console.log('[MOREBOTS] Error while connecting!');
                this.ws.onclose = () => this.onclose();
            }
            onopen() {
                console.log('[MOREBOTS] Authenticating to the server!');
                this.Transmitter.handshake('220720', 'Morebots_HSLO2');
                document.getElementById("ab_serverStatus").innerText = "Connected";
            }
            onclose() {
                console.log('[MOREBOTS] Closed the connessione!');
                document.getElementById("ab_serverStatus").innerText = "Disconnected";
            }
            send(data) {
                if(!this.ws || !this.ip || this.ws.readyState !== 1) return;
                this.ws.send(JSON.stringify(data));
            }
            reset() {
                this.player = {
                    isPremium: false,
                    PremiumType: 0,
                    PureFeeder: false,
                    startTime: Date.now(),
                    decoded: {
                        currentBots: 0
                    },
                    initialized: false
                }
                this.Transmitter.status = {
                    initialized: false,
                    vshield: 0,
                    botmode: 0
                }
            }
            change() {
                this.ws.close();
                this.reset();
                this.connect();
            }
        }
    }
}

class GUI {
    constructor(socket) {
        this.socket = socket;
        this.player = this.socket.player;
        this.body = document.getElementsByTagName('body')[0];
        this.divs = {
            maindiv: document.createElement('div'),
            img: document.createElement('div'),
            data: document.createElement('div'),
            rows: {
                bots: document.createElement('row'),
                eject: document.createElement('row'),
                split: document.createElement('row'),
                botgamemode: document.createElement('row'),
                vshield: document.createElement('row'),
                endtime: document.createElement('row'),
            }
        }
        this.inputs = {
            eject: document.createElement('input'),
            split: document.createElement('input'),
            botgamemode: document.createElement('input'),
            vShield: document.createElement('input')
        }

        this.initialized = false;
        this.rowsinit = false;
        this.initialize();
    }
    initialize() {
        try {
            this.initialized = true;
            setTimeout(() => {
                this.updateRows();
            }, 1000);
        } catch(err) {
            throw new Error(err);
        }
    }
    updateBar() {
        const initialized = this.socket.Transmitter.status.initialized;
        if(!initialized) {
            document.getElementById('bots').style.width = `0%`;
            document.getElementById('bots').style.visibility = 'hidden';
        } else {
            const Percentage = ((this.player.decoded.currentBots/this.player.decoded.maxBots) * 100) - 1;
            document.getElementById('bots').style.width = `${Percentage}%`;
            document.getElementById('bots').style.visibility = 'visible';
        }
    }
    calculateTime() {
        const ActualTime = new Date();
        const EndTime = new Date(this.player.decoded.expire);
        var distance = EndTime - ActualTime;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var msg;
        if(distance < 0) msg = 'Expired/No Plan!';
        else msg = `${hours}hrs:${minutes}mins:${seconds}secs`;

        return msg;
    }
    getBotMode() {
        const initialized = this.socket.Transmitter.status.initialized;
        const type = this.socket.Transmitter.status.botmode;
        if(!initialized) return "Not connected!";
        if(type === 0) return "Normal";
        if(type === 1) return "Farmer";
        if(type === 2) return "Normal";
        if(type === 10) return "Farmer";
    }
    getvShieldMode() {
        const initialized = this.socket.Transmitter.status.initialized;
        const type = this.socket.Transmitter.status.vshield;
        if(!initialized) return "Not connected!";
        if(!type) return "Disabled";
        return "Actived";
    }
    onChange(evt) {}
    updateRows() {
        if(!this.rowsinit) {
            this.rowsinit = true;
        } else {
            document.getElementById('ab_mode').innerText = this.getBotMode();
            document.getElementById('ab_vShield').innerText = this.getvShieldMode();
        }
    }
    update() {
        if(!this.initialized) return;
        // this.updateBar();
        document.getElementById("ab_botsAmount").innerHTML = `${this.player.decoded.currentBots}/${this.player.decoded.maxBots === 500 ? 0 : this.player.decoded.maxBots}`;
        document.getElementById("ab_botsTime").innerHTML = `${this.calculateTime()}`;
    }
}

class Transmitter {
    constructor(socket) {
        this.socket = socket;
        this.status = {
            initialized: false,
            vshield: 0,
            botmode: 0
        }
    }
    handshake(ver, vext) {
        let buffer = {};
        buffer.action = 17;
        buffer.ver = ver;
        buffer.vext = vext;
        this.socket.send(buffer);
        this.start();
        buffer = {};
        buffer.action = 20;
        this.socket.send(buffer);
    }
    start() {
        this.moveInterval = setInterval(() => {
            this.sendPosition();
        }, 50);
    }
    activePlayer() {
        setTimeout(() => {
            let buffer = {};
            buffer.action = 20;
            this.socket.send(buffer);
        }, 2E3);
    }
    activeClient() {
        let buffer = {};
        buffer.action = 4;
        buffer.leaderBoard = {};
        this.socket.send(buffer);
    }
    sendSpawn(nick, ip, clientKey) {
        nick = document.getElementById('nick1').value;
        ip = window.target;
        clientKey = window.encKey;
        let buffer = {};
        buffer.action = 1;
        buffer.clientname = nick;
        buffer.targetIp = `${ip}`;
        buffer.ao = clientKey;
        buffer.targetRoom = "#8LAWM8";
        this.socket.send(buffer);
        buffer = {};
        buffer.action = 3;
        this.socket.send(buffer);
        this.status.initialized = true;
        this.socket.GUI.initialized = true;
        this.socket.GUI.updateRows();
    }
    sendEject() {
        let buffer = {};
        buffer.action = 15;
        console.log('sent eject!');
        this.socket.send(buffer);
    }
    sendSplit() {
        let buffer = {};
        buffer.action = 16;
        console.log('sent split!');
        this.socket.send(buffer);
    }
    sendPosition() {
        if (!window.playerPos) return;
        let buffer = {};
        buffer.action = 2;
        buffer.positionX = window.playerPos.x;
        buffer.positionY = window.playerPos.y;
        this.socket.send(buffer);
    }
    sendFFApos(x, y) {
        if(!(x, y)) return;
        let buffer = {};
        buffer.action = 14;
        buffer.a = x;
        buffer.b = y;
        this.socket.send(buffer);
    }
    setBotMode() {
        let buffer = {};
        buffer.action = 18;
        buffer.botmode = this.setBotModeCode();
        console.log('sent bot mode!');
        this.socket.send(buffer);
    }
    vShield() {
        let buffer = {};
        buffer.action = 19;
        buffer.botmode2 = this.setvShieldCode();
        console.log('sent vshield!');
        this.socket.send(buffer);
    }
    setvShieldCode() {
        if(this.status.vshield === 0) {
            this.status.vshield = 1;
        } else if(this.status.vshield === 1) {
            this.status.vshield = 0;
        }
        return this.status.vshield;
    }
    setBotModeCode() {
        if(this.status.botmode === 0) {
            this.status.botmode = 1;
        } else if(this.status.botmode === 1) {
            this.status.botmode = 2;
        } else if(this.status.botmode === 2) {
            this.status.botmode = 10;
        } else if(this.status.botmode === 10) {
            this.status.botmode = 0;
        }
        return this.status.botmode;
    }
}

class Reader {
    constructor(socket) {
        this.socket = socket;
        this.player = socket.player;
    }
    read(buffer) {
        const opcode = buffer.data;
        if(opcode === 1339) (this.player.isPremium = true,this.player.PremiumType = 2);
        if(opcode === 1338) (this.player.isPremium = true, this.player.PremiumType = 1);
        if(opcode === 1337) this.player.PureFeeder = true;
        if(opcode === 21) {
            if(!this.player.initialized) this.player.initialized = true;
            if(this.player.initialized) this.socket.Transmitter.activePlayer();
        } else {
            this.player.decoded = JSON.parse(opcode);
            this.socket.Transmitter.activeClient();
            this.socket.GUI.update();
        }
    }
}

class MoreBotsHotkeys {
    constructor(socket) {
        this.socket = socket;
        this.Transmitter = socket.Transmitter;
        this.active = new Set();
        this.macro = null;
        this.keydown();
        this.keyup();
    }
    keydown() {
        const HS = window.SettingsStore;
        document.body.addEventListener('keydown', evt => {
            // const key = evt.keyCode;
            const key = evt.key.toLocaleUpperCase();
            if(!(key === 8 || evt.ctrlKey || evt.shiftKey || evt.altKey)) {
                if(key === HS.BotFeedHotkey) {
                    if(this.isActive(HS.BotFeedHotkey)) return;
                    this.active.add(HS.BotFeedHotkey);
                    this.macro = setInterval(() => {
                        this.socket.Transmitter.sendEject();
                    }, 75);
                }
                if(key === HS.BotSplitHotkey) {
                    if(this.isActive(HS.BotSplitHotkey)) return;
                    this.active.add(HS.BotSplitHotkey);
                    this.socket.Transmitter.sendSplit();
                }
                if(key === HS.BotAiHotkey) {
                    if(this.isActive(HS.BotAiHotkey)) return;
                    this.active.add(HS.BotAiHotkey);
                    this.socket.Transmitter.setBotMode();
                }
                /* if(key === this.getKey(this.keys.vShield)) {
                    if(this.isActive(this.keys.vShield)) return;
                    this.active.add(this.keys.vShield);
                    this.socket.Transmitter.vShield();
                }    */
            }
        });

        document.getElementById('play').addEventListener('click', () => this.Transmitter.sendSpawn());
        document.getElementById('create-room').addEventListener('click', () => this.socket.change());
        document.getElementById('join-room').addEventListener('click', () => this.socket.change());
    }
    keyup() {
        const HS = window.SettingsStore;
        document.body.addEventListener('keyup', evt => {
            // const key = evt.keyCode;
            const key = evt.key.toLocaleUpperCase();
            if(!(key === 8 || evt.ctrlKey || evt.shiftKey || evt.altKey)) {
                if(key === HS.BotFeedHotkey) (this.active.delete(HS.BotFeedHotkey), clearInterval(this.macro));
                if(key === HS.BotSplitHotkey) this.active.delete(HS.BotSplitHotkey);
                if(key === HS.BotAiHotkey) this.active.delete(HS.BotAiHotkey);
                // if(key === this.getKey(this.keys.vShield)) this.active.delete(this.keys.vShield);
                this.socket.GUI.updateRows();
            }
        })
    }
    setStorage(type, key) {
        const storage = JSON.parse(localStorage.getItem(this.storagekey));
        storage[type] = key;
        localStorage.setItem(this.storagekey, JSON.stringify(storage));
        this.keys[type] = key.toUpperCase();
        this.socket.GUI.updateRows();
    }
    isActive(key) {
        return this.active.has(key);
    }
    getKey(key) {
        return key.toUpperCase().charCodeAt();
    }
}