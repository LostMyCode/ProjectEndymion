import Reader from "./BufferReader";
import Writer from "./BufferWriter";

export default new class {
    constructor() {
        this.address = "snez.org:8080/ws";
        this.ogarWS1 = null;
    }
    init() {
        const e = this;
        this.ogarWS1 = new WebSocket("wss://" + this.address);
        this.ogarWS1.binaryType = "arraybuffer";
        this.ogarWS1.onopen = (() => e.onOpen(1));
        this.ogarWS1.onmessage = (t => e.onMessage(t, 1));
        this.ogarWS1.onclose = (() => e.onClose(1));
        this.ogarWS1.onerror = (() => e.onError(1));
        console.log("Connecting to Ogario Networks.")
    }
    reconnect(tab) {
        const e = this;
        this.ogarWS1.close()
        this.ogarWS1 = null
        this.ogarWS1 = new WebSocket("wss://" + this.address)
        this.ogarWS1.binaryType = "arraybuffer"
        this.ogarWS1.onopen = (() => e.onOpen(1))
        this.ogarWS1.onmessage = (t => e.onMessage(t, 1))
        this.ogarWS1.onclose = (() => e.onClose(1))
        this.ogarWS1.onerror = (() => e.onError(1))
    }
    send(e, t) {
        this.ogarWS1.send(e)
    }
    onOpen(e) {
        console.log(`Connected to Ogario Networks. (${e})`);

        // handshake
        let w = new Writer(5);
        w.writeUint8(0);
        w.writeUint32(401);
        this.send(w.dataView, 1);

        // tag

    }
    onMessage(e, t) {
        // t = tab
        messageHandler.parse(e, t)
    }
    onClose(e) {
        // e = tab
        console.log(`Disconnected from Ogario server. (${e})`)
    }
    onError(e) {
        console.log(`Connection to Ogario server errored out! (${e})`)
    }
    isConnected(e) {
        return this.ogarWS1 && this.ogarWS1.readyState === this.ogarWS1.OPEN
    }
}

const messageHandler = new class {
    constructor() {
        this.connectedIndex = 0
        this.coronaNote = !1
    }
    parse(e, tab) {
        e = new DataView(e.data);
        const t = new D(e);
        switch (t.readUInt8()) {
            /* case 0:
                this.selfID(t, tab);
                break;
            case 1:
                this.requestPlayerUpdate(tab);
                break;
            case 20:
                this.updateTeamPlayer(t, tab);
                break;
            case 30:
                this.updateTeamPlayerPosition(t, tab);
                break; */
            case 100:
                this.chat(t, tab)
        }
    }
    selfID(e, tab) {
        ({}).playerID = e.readUInt32()
    }
    requestPlayerUpdate(tab) {
        _e.playerData(tab || 1)
    }
    updateTeamPlayer(e, tab) {
        const t = e.readUInt32()
        o = se.getPlayer(t)
        o.nick = e.readUTF16string()
        o.skin = e.readUTF16string()
        e.readUTF16string()
        o.colorHex = e.readUTF16string()
    }
    updateTeamPlayerPosition(e, tab) {
        const t = e.readUInt32()
        o = se.getPlayer(t);
        o.x = e.readInt32()
        o.y = e.readInt32()
        o.mass = e.readUInt32()
        o.isAlive = 1
        o.lastUpdateAt = le.time
    }
    chat(e, tab) {
        const   type = e.readUInt8(),
                message = (e.readUInt32(),
                e.readUInt32(),
                e.readUTF16string().split(": ")),
                prefix = message[0],
                s = message[1];
        // {"type":"cmder","x":1505,"y":2304,"date":1230151252}
        if (s.includes("cmder")) {
            let obj = JSON.parse(s);
            //console.log(obj);
            /* re.commanderPoints.add({
                x: obj.x + G.offset.x,
                y: obj.y + G.offset.y,
                time: obj.date,
                scale: 5
            }) */
        } else if (prefix === "[SERVER]" && (s.includes("connected") || s.includes("Delta"))) {
            ++this.connectedIndex
        } else if (prefix === "[SERVER]" && s.includes("#")) {
            !this.coronaNote && m.alert("Coronavirus", "Stay home or I'll kill you!")
            this.coronaNote = !0
        } else {
            101 === type ? m.normal(prefix, s) : 102 === type && m.command(prefix, s)
        };
    }
}