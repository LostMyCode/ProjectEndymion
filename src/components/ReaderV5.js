export default class {
    constructor(t) {
        this.dataView = t
        this.index = 0
        this.maxIndex = t.byteLength
    }
    readUInt8() {
        const e = this.dataView.getUint8(this.index, !0);
        return this.index++, e
    }
    readInt8() {
        const e = this.dataView.getInt8(this.index, !0);
        return this.index++, e
    }
    readUInt16() {
        const e = this.dataView.getUint16(this.index, !0);
        return this.index += 2, e
    }
    readInt16() {
        const e = this.dataView.getInt16(this.index, !0);
        return this.index += 2, e
    }
    readUInt32() {
        const e = this.dataView.getUint32(this.index, !0);
        return this.index += 4, e
    }
    readInt32() {
        const e = this.dataView.getInt32(this.index, !0);
        return this.index += 4, e
    }
    readFloat32() {
        const e = this.dataView.getFloat32(this.index, !0);
        return this.index += 4, e
    }
    readFloat64() {
        const e = this.dataView.getFloat64(this.index, !0);
        return this.index += 8, e
    }
    readUTF8string() {
        for (var e, t = ""; !this.endOfBuffer && 0 !== (e = this.readUInt8());) t += String.fromCharCode(e);
        return t
    }
    readString8() {
        const e = this.readUInt8();
        for (var t = 0, s = ""; t < e; t++) s += String.fromCharCode(this.readUInt8());
        return s
    }
    readUTF16string() {
        for (var e, t = ""; !this.endOfBuffer && 0 !== (e = this.readUInt16());) t += String.fromCharCode(e);
        return t
    }
    readString16() {
        const e = this.readUInt8();
        for (var t = 0, s = ""; t < e; t++) s += String.fromCharCode(this.readUInt16());
        return s
    }
    readEscapedUTF8string() {
        const e = this.readUTF8string();
        return decodeURIComponent(escape(e))
    }
    /* decompress() {
        const e = new Uint8Array(this.dataView.buffer),
            t = this.readUInt32(),
            s = new Uint8Array(t);
        LZ4.decodeBlock(e.slice(5),
            s),
            this.dataView = new DataView(s.buffer),
            this.index = 0,
            this.maxIndex = this.dataView.byteLength
    } */
    get endOfBuffer() {
        return this.index >= this.maxIndex
    }
}