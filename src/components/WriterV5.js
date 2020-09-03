export default class {
    constructor() {
        this.arrayBuffer = []
    }
    writeUint8(e) {
        return 0 > (e |= 0) || 255 < e ? void console.error("value out of range [Min: 0, Max: 255, Value: " + e + "]") : void this.arrayBuffer.push(e)
    }
    writeInt8(e) {
        return -128 > (e |= 0) || 127 < e ? void console.error("value out of range [Min: -128, Max: 127, Value: " + e + "]") : void this.arrayBuffer.push(e)
    }
    writeUint16(e) {
        return 0 > (e |= 0) || 65535 < e ? void console.error("value out of range [Min: 0, Max: 65535, Value: " + e + "]") : void this.arrayBuffer.push(e, e >> 8)
    }
    writeInt16(e) {
        return -32768 > (e |= 0) || 32767 < e ? void console.error("value out of range [Min: -32768, Max: 32767, Value: " + e + "]") : void this.arrayBuffer.push(e, e >> 8)
    }
    writeUint32(e) {
        return 0 > (e |= 0) || 4294967295 < e ? void console.error("value out of range [Min: 0, Max: 4294967295, Value: " + e + "]") : void this.arrayBuffer.push(e, e >> 8, e >> 16, e >> 24)
    }
    writeInt32(e) {
        return -2147483648 > (e |= 0) || 2147483647 < e ? void console.error("value out of range [Min: -2147483648, Max: 2147483647, Value: " + e + "]") : void this.arrayBuffer.push(e, e >> 8, e >> 16, e >> 24)
    }
    writeString(e) {
        for (let t, s = 0; s < e.length; s++) t = e.charCodeAt(s),
            this.writeUint8(t);
        this.writeUint8(0)
    }
    writeString8(e) {
        this.writeUint8(e.length);
        for (let t, s = 0; s < e.length; s++) t = e.charCodeAt(s),
            this.writeUint8(t)
    }
    writeEncodedString(e) {
        const t = unescape(encodeURIComponent(e));
        this.writeString(t)
    }
    writeUTF16String(e) {
        for (let t, s = 0; s < e.length; s++) t = e.charCodeAt(s),
            this.writeUint16(t);
        this.writeUint16(0)
    }
    writeUTF16StringNonZero(e) {
        for (let t, s = 0; s < e.length; s++) t = e.charCodeAt(s),
            this.writeUint16(t)
    }
    writeString16(e) {
        this.writeUint8(e.length);
        for (let t, s = 0; s < e.length; s++) t = e.charCodeAt(s),
            this.writeUint16(t)
    }
    reset() {
        this.arrayBuffer = []
    }
    get buffer() {
        return new Uint8Array(this.arrayBuffer).buffer
    }
}