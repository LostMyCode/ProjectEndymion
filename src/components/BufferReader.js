var aU8 = class {
    constructor(aNv) {
        this.dataView = new DataView(aNv);
        this.index = 0x0;
        this.maxIndex = aNv.byteLength;
    }
    static _2CLcf339f95dc981425(aNv) {
        return decodeURIComponent(escape(aNv));
    }
    getUint8() {
        var aNv = this.dataView.getUint8(this.index, !0x0);
        return this.index += 0x1, aNv;
    }
    getInt8() {
        var aNv = this.dataView.getInt8(this.index, !0x0);
        return this.index += 0x1, aNv;
    }
    getUint16() {
        var aNv = this.dataView.getUint16(this.index, !0x0);
        return this.index += 0x2, aNv;
    }
    getInt16() {
        var aNv = this.dataView.getInt16(this.index, !0x0);
        return this.index += 0x2, aNv;
    }
    getUint32() {
        var aNv = this.dataView.getUint32(this.index, !0x0);
        return this.index += 0x4, aNv;
    }
    getInt32() {
        var aNv = this.dataView.getInt32(this.index, !0x0);
        return this.index += 0x4, aNv;
    }
    getFloat32() {
        var aNv = this.dataView.getFloat32(this.index, !0x0);
        return this.index += 0x4, aNv;
    }
    getFloat64() {
        var aNv = this.dataView.getFloat64(this.index, !0x0);
        return this.index += 0x8, aNv;
    }
    _2CLeb1055518b4a5161() {
        var aNv = 0x0;
        for (; !this.endOfBuffer;) {
            var aUk = this.getUint8();
            if (aNv = aNv << 0x7 | 0x7f & aUk, !(0x80 & aUk)) break;
        }
    }
    _2CL74a03352fa125990() {
        var aNv = this.getUint8();
        var aNw = '';
        for (var aUn = 0x0; aUn < aNv; aUn++) {
            var aUo = this.getUint8();
            aNw += String.fromCharCode(aUo);
        }
        return aNw;
    }
    readUTF8string() {
        var aNv = '';
        for (; !this.endOfBuffer;) {
            var aUq = this.getUint8();
            if (0x0 === aUq) break;
            aNv += String.fromCharCode(aUq);
        }
        return aNv;
    }
    _2CL9f86d97a7bdf1abb() {
        var aNv = this.getUint8();
        var aNw = '';
        for (var aUt = 0x0; aUt < aNv; aUt++) {
            var aUu = this.getUint16();
            aNw += String.fromCharCode(aUu);
        }
        return aNw;
    }
    _2CL167df624e7ef157b() {
        var aNv = '';
        for (; !this.endOfBuffer;) {
            var aUw = this.getUint16();
            if (0x0 === aUw) break;
            aNv += String.fromCharCode(aUw);
        }
        return aNv;
    }
    decompressMessage() {
        var aNv = this.getUint32(),
            aNw = new Uint8Array(this.dataView.buffer),
            aNx = new Uint8Array(aNv);
        this.decodeBlock(aNw, aNx, 0x5), this.dataView = new DataView(aNx.buffer), this.index = 0x0, this.maxIndex = aNv;
    }
    decodeBlock(aNv, aNw, aNx, aNy) {
        aNx = aNx || 0x0, aNy = aNy || aNv.length - aNx;
        var aNz = aNx,
            aNA = 0x0;
        for (; aNz < aNy;) {
            var aUG = aNv[aNz++];
            var aUH = aUG >> 0x4;
            if (aUH > 0x0) {
                var aUI = aUH + 0xf0;
                for (; 0xff === aUI;) {
                    aUH += aUI = aNv[aNz++];
                }
                var aUJ = aNz + aUH;
                for (; aNz < aUJ;) {
                    aNw[aNA++] = aNv[aNz++];
                }
                if (aNz === aNy) return aNA;
            }
            var aUK = aNv[aNz++] | aNv[aNz++] << 0x8;
            if (0x0 === aUK || aUK > aNA) return -(aNz - 0x2);
            var aUL = 0xf & aUG,
                aUM = aUL + 0xf0;
            for (; 0xff === aUM;) {
                aUL += aUM = aNv[aNz++];
            }
            var aUN = aNA - aUK;
            var aUO = aNA + aUL + 0x4;
            for (; aNA < aUO;) {
                aNw[aNA++] = aNw[aUN++];
            }
        }
        return aNA;
    }
    get endOfBuffer() {
        return this.index >= this.maxIndex;
    }
}

export default aU8;