import { _classCallCheck, _createClass } from "./Modules";

var aU8 = function () {
    function aU8(aNv) {
        _classCallCheck(this, aU8);
        this['_2CL9b410cc0963f1c6e'] = new DataView(aNv), this['_2CL7bbbf1b0f1d3401d'] = 0x0, this['_2CL9152decf80258bb3'] = aNv['byteLength'];
    }
    _createClass(aU8, [{
        'key': 'getUint8',
        'value': function _2CL5f3b04595c3e2228() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getUint8'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x1, aNv;
        }
    }, {
        'key': '_2CLdb612640e6cc8bc3',
        'value': function _2CLdb612640e6cc8bc3() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getInt8'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x1, aNv;
        }
    }, {
        'key': 'getUint16',
        'value': function _2CL44c05fead3f933b5() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getUint16'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x2, aNv;
        }
    }, {
        'key': 'getInt16',
        'value': function _2CL95b31df061478f0f() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getInt16'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x2, aNv;
        }
    }, {
        'key': 'getUint32',
        'value': function _2CLfc85e78ae9b43e04() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getUint32'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x4, aNv;
        }
    }, {
        'key': 'getInt32',
        'value': function _2CLbae3b9de95f23233() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getInt32'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x4, aNv;
        }
    }, {
        'key': 'getFloat32',
        'value': function _2CLf36378dc8fb355f4() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getFloat32'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x4, aNv;
        }
    }, {
        'key': 'getFloat64',
        'value': function _2CL1c2b6b42eac86208() {
            var aNv = this['_2CL9b410cc0963f1c6e']['getFloat64'](this['_2CL7bbbf1b0f1d3401d'], !0x0);
            return this['_2CL7bbbf1b0f1d3401d'] += 0x8, aNv;
        }
    }, {
        'key': '_2CLeb1055518b4a5161',
        'value': function _2CLeb1055518b4a5161() {
            var aNv = 0x0;
            for (; !this['_2CLb6dd55c2d46c5c9e'];) {
                var aUk = this['getUint8']();
                if (aNv = aNv << 0x7 | 0x7f & aUk, !(0x80 & aUk)) break;
            }
        }
    }, {
        'key': '_2CL74a03352fa125990',
        'value': function _2CL74a03352fa125990() {
            var aNv = this['getUint8']();
            var aNw = '';
            for (var aUn = 0x0; aUn < aNv; aUn++) {
                var aUo = this['getUint8']();
                aNw += String['fromCharCode'](aUo);
            }
            return aNw;
        }
    }, {
        'key': '_2CL34ff01b86073eaba',
        'value': function _2CL34ff01b86073eaba() {
            var aNv = '';
            for (; !this['_2CLb6dd55c2d46c5c9e'];) {
                var aUq = this['getUint8']();
                if (0x0 === aUq) break;
                aNv += String['fromCharCode'](aUq);
            }
            return aNv;
        }
    }, {
        'key': '_2CL9f86d97a7bdf1abb',
        'value': function _2CL9f86d97a7bdf1abb() {
            var aNv = this['getUint8']();
            var aNw = '';
            for (var aUt = 0x0; aUt < aNv; aUt++) {
                var aUu = this['getUint16']();
                aNw += String['fromCharCode'](aUu);
            }
            return aNw;
        }
    }, {
        'key': '_2CL167df624e7ef157b',
        'value': function _2CL167df624e7ef157b() {
            var aNv = '';
            for (; !this['_2CLb6dd55c2d46c5c9e'];) {
                var aUw = this['getUint16']();
                if (0x0 === aUw) break;
                aNv += String['fromCharCode'](aUw);
            }
            return aNv;
        }
    }, {
        'key': '_2CLa558945aac881300',
        'value': function _2CLa558945aac881300() {
            var aNv = this['getUint32'](),
                aNw = new Uint8Array(this['_2CL9b410cc0963f1c6e']['buffer']),
                aNx = new Uint8Array(aNv);
            this['_2CLd5e8e1e5db552484'](aNw, aNx, 0x5), this['_2CL9b410cc0963f1c6e'] = new DataView(aNx['buffer']), this['_2CL7bbbf1b0f1d3401d'] = 0x0, this['_2CL9152decf80258bb3'] = aNv;
        }
    }, {
        'key': '_2CLd5e8e1e5db552484',
        'value': function _2CLd5e8e1e5db552484(aNv, aNw, aNx, aNy) {
            aNx = aNx || 0x0, aNy = aNy || aNv['length'] - aNx;
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
    }, {
        'key': '_2CLb6dd55c2d46c5c9e',
        'get': function get() {
            return this['_2CL7bbbf1b0f1d3401d'] >= this['_2CL9152decf80258bb3'];
        }
    }], [{
        'key': '_2CLcf339f95dc981425',
        'value': function _2CLcf339f95dc981425(aNv) {
            return decodeURIComponent(escape(aNv));
        }
    }]);
    return aU8;
}();

export default aU8;