import { _createClass, _classCallCheck } from "./Modules";

export default class {
    constructor() {
        var size = arguments.length > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : 0x80;
        this.arrayBuffer = new ArrayBuffer(size);
        this.dataView = new DataView(this.arrayBuffer);
        this.index = 0x0;
        this.maxIndex = size;
    }
    static _2CL14c717e1dbbe1d03(aNv) {
        return unescape(encodeURIComponent(aNv));
    }
    writeUint8(aNv) {
        this.dataView.setUint8(this.index, aNv, !0x0), this.index += 0x1;
    }
    writeInt8(aNv) {
        this.dataView.setInt8(this.index, aNv, !0x0), this.index += 0x1;
    }
    writeUint16(aNv) {
        this.dataView.setUint16(this.index, aNv, !0x0), this.index += 0x2;
    }
    writeInt16(aNv) {
        this.dataView.setInt16(this.index, aNv, !0x0), this.index += 0x2;
    }
    writeUint32(aNv) {
        this.dataView.setUint32(this.index, aNv, !0x0), this.index += 0x4;
    }
    writeInt32(aNv) {
        this.dataView.setInt32(this.index, aNv, !0x0), this.index += 0x4;
    }
    writeFloat32(aNv) {
        this.dataView.setFloat32(this.index, aNv, !0x0), this.index += 0x4;
    }
    writeFloat64(aNv) {
        this.dataView.setFloat64(this.index, aNv, !0x0), this.index += 0x8;
    }
    _2CL0dca1b866e52b58f(aNv) {
        var aNw = [];
        for (; aNv > 0x0;) {
            aNw.push(aNw.length > 0x0 ? 0x7f & aNv | 0x80 : 0x7f & aNv), aNv >>= 0x7;
        }
        for (var aSu = aNw.length; aSu > 0x0; aSu--) {
            var aSv = aNw[aSu - 0x1];
            this.dataView.setUint8(this.index, aSv, !0x0), this.index += 0x1;
        }
    }
    _2CL7b8cf5f8d2d0d80c(aNv) {
        this.writeUint8(aNv.length);
        for (var aSx = 0x0; aSx < aNv.length; aSx++) {
            var aSy = aNv.charCodeAt(aSx);
            this.writeUint8(aSy);
        }
    }
    writeStringUTF8(aNv) {
        for (var aSA = 0x0; aSA < aNv.length; aSA++) {
            var aSB = aNv.charCodeAt(aSA);
            this.writeUint8(aSB);
        }
        this.writeUint8(0x0);
    }
    _2CLfb96650702209fba(aNv) {
        this.writeUint8(aNv.length);
        for (var aSD = 0x0; aSD < aNv.length; aSD++) {
            var aSE = aNv.charCodeAt(aSD);
            this.writeUint16(aSE);
        }
    }
    _2CLdb0d0175a5bc542e(aNv) {
        for (var aSG = 0x0; aSG < aNv.length; aSG++) {
            var aSH = aNv.charCodeAt(aSG);
            this.writeUint16(aSH);
        }
        this.writeUint16(0x0);
    }
    _init_hatena() {
        this.index = 0x0;
    }
    get _2CLe035dc327c1676d8() {
        return this.index === this.maxIndex ? this.arrayBuffer : this.arrayBuffer.slice(0x0, this.index);
    }
}