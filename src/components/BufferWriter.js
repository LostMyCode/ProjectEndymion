import { _createClass, _classCallCheck } from "./Modules";

export default (function () {
    function aSg() {
        var size = arguments.length > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : 0x80;
        _classCallCheck(this, aSg);
        this.arrayBuffer = new ArrayBuffer(size);
        this.dataView = new DataView(this.arrayBuffer);
        this.index = 0x0;
        this.maxIndex = size;
    }
    _createClass(aSg, [{
        'key': 'writeUint8',
        'value': function writeUint8(aNv) {
            this.dataView.setUint8(this.index, aNv, !0x0), this.index += 0x1;
        }
    }, {
        'key': 'writeInt8',
        'value': function writeInt8(aNv) {
            this.dataView.setInt8(this.index, aNv, !0x0), this.index += 0x1;
        }
    }, {
        'key': 'writeUint16',
        'value': function writeUint16(aNv) {
            this.dataView.setUint16(this.index, aNv, !0x0), this.index += 0x2;
        }
    }, {
        'key': 'writeInt16',
        'value': function writeInt16(aNv) {
            this.dataView.setInt16(this.index, aNv, !0x0), this.index += 0x2;
        }
    }, {
        'key': 'writeUint32',
        'value': function writeUint32(aNv) {
            this.dataView.setUint32(this.index, aNv, !0x0), this.index += 0x4;
        }
    }, {
        'key': 'writeInt32',
        'value': function writeInt32(aNv) {
            this.dataView.setInt32(this.index, aNv, !0x0), this.index += 0x4;
        }
    }, {
        'key': 'writeFloat32',
        'value': function writeFloat32(aNv) {
            this.dataView.setFloat32(this.index, aNv, !0x0), this.index += 0x4;
        }
    }, {
        'key': 'writeFloat64',
        'value': function writeFloat64(aNv) {
            this.dataView.setFloat64(this.index, aNv, !0x0), this.index += 0x8;
        }
    }, {
        'key': '_2CL0dca1b866e52b58f',
        'value': function _2CL0dca1b866e52b58f(aNv) {
            var aNw = [];
            for (; aNv > 0x0;) {
                aNw.push(aNw.length > 0x0 ? 0x7f & aNv | 0x80 : 0x7f & aNv), aNv >>= 0x7;
            }
            for (var aSu = aNw.length; aSu > 0x0; aSu--) {
                var aSv = aNw[aSu - 0x1];
                this.dataView.setUint8(this.index, aSv, !0x0), this.index += 0x1;
            }
        }
    }, {
        'key': '_2CL7b8cf5f8d2d0d80c',
        'value': function _2CL7b8cf5f8d2d0d80c(aNv) {
            this.writeUint8(aNv.length);
            for (var aSx = 0x0; aSx < aNv.length; aSx++) {
                var aSy = aNv.charCodeAt(aSx);
                this.writeUint8(aSy);
            }
        }
    }, {
        'key': 'writeStringUTF8',
        'value': function writeStringUTF8(aNv) {
            for (var aSA = 0x0; aSA < aNv.length; aSA++) {
                var aSB = aNv.charCodeAt(aSA);
                this.writeUint8(aSB);
            }
            this.writeUint8(0x0);
        }
    }, {
        'key': '_2CLfb96650702209fba',
        'value': function _2CLfb96650702209fba(aNv) {
            this.writeUint8(aNv.length);
            for (var aSD = 0x0; aSD < aNv.length; aSD++) {
                var aSE = aNv.charCodeAt(aSD);
                this.writeUint16(aSE);
            }
        }
    }, {
        'key': '_2CLdb0d0175a5bc542e',
        'value': function _2CLdb0d0175a5bc542e(aNv) {
            for (var aSG = 0x0; aSG < aNv.length; aSG++) {
                var aSH = aNv.charCodeAt(aSG);
                this.writeUint16(aSH);
            }
            this.writeUint16(0x0);
        }
    }, {
        'key': '_init_hatena',
        'value': function _init_hatena() {
            this.index = 0x0;
        }
    }, {
        'key': '_2CLe035dc327c1676d8',
        'get': function get() {
            return this.index === this.maxIndex ? this.arrayBuffer : this.arrayBuffer.slice(0x0, this.index);
        }
    }], [{
        'key': '_2CL14c717e1dbbe1d03',
        'value': function _2CL14c717e1dbbe1d03(aNv) {
            return unescape(encodeURIComponent(aNv));
        }
    }]);
    return aSg;
})()