import {
    _typeof,
    _slicedToArray,
    _possibleConstructorReturn,
    _getPrototypeOf,
    _inherits,
    _toConsumableArray,
    _classCallCheck,
    _createClass
} from "./components/Modules";
import EmscHardCoded from "./components/Emscripten";
import Start from "./components/LilTouch";
import BufferReader from "./components/BufferReader";
import BufferWriter from "./components/BufferWriter";
import Settings from "./settings";
import ChangeLog from "./components/ChangeLog";
import Loader from "./components/Loader";

// deco
import makeRbbFrame from "./components/RainbowBorder";
import particles from "./components/Particles";
import MaouCircle from "./components/MaouCircle";
import Commander from "./components/Commander";
// import "./components/LottieCanvas";

// analytics
import "./components/Analytics";

// sounds
import ChatSound from "./assets/chat-message.mp3";
import NotifSound from "./assets/notification.mp3";

// images
import ShieldImage from "./assets/shield.png";

// additional
import "./components/Information.js";

'use strict';

/** 
 * @preserve HSLO Endymion
 * (c) 2019-2020, test114514.
 * https://github.com/LostMyCode/ProjectEndymion
 */

var myTurn = false;
const consumes = new Set();
let boxSize = {
    0: {
        ids: [],
        xPosArray: [],
        yPosArray: []
    },
    1: {
        ids: [],
        xPosArray: [],
        yPosArray: []
    }
};
const arrayMax = function (a, b) {
    return Math.max(a, b);
};
const arrayMin = function (a, b) {
    return Math.min(a, b);
};
const inurArea = function (t, x, y) {
    if (!boxSize[0].minX || !boxSize[1].minX)
        return false;
    const tab1area = x > boxSize[0].minX && x < boxSize[0].maxX && y > boxSize[0].minY && y < boxSize[0].maxY;
    const tab2area = x > boxSize[1].minX && x < boxSize[1].maxX && y > boxSize[1].minY && y < boxSize[1].maxY;
    return tab1area || tab2area;
};
const disappearedEntities = new Map();
!Start([
    EmscHardCoded,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (aNv, aNw, aNx) {
        'use strict';
        aNx.r(aNw);
        var aO4 = [
            {
                '_2CL65dfacb39960c223': 'script',
                '_url_kamo': 'https://www.google.com/recaptcha/api.js?render=explicit&onload=recaptchaAsyncInit'
            },
            {
                '_2CL65dfacb39960c223': 'script',
                '_url_kamo': 'https://connect.facebook.net/en_US/sdk.js'
            },
            {
                '_2CL65dfacb39960c223': 'script',
                '_url_kamo': 'https://apis.google.com/js/platform.js?onload=gapiAsyncInit'
            },
            {
                '_2CL65dfacb39960c223': 'image',
                '_url_kamo': ShieldImage
            }
        ];
        var aO5 = new class {
            constructor() {
                this._2CL0b4f1a0e1c928495 = new Set([
                    'window load',
                    'fb sdk load',
                    'gapi load',
                    'recaptcha load',
                    'modules load'
                ]), this._2CL362661de726a1fb0 = aO4, this._2CL45c797b0c319416c = this._2CL0b4f1a0e1c928495.size + this._2CL362661de726a1fb0.length, this._2CL8775a4880612c227 = new Map(), this._2CLbf864ee5d05c5820 = null;
            }
            _2CLbe4c4d037e939226(aNv) {
                var aO8 = this;
                this._2CLbf864ee5d05c5820 = aNv, Loader._2CL5875a5af586e3482(), window.addEventListener('load', function () {
                    aO8._2CL840ca8aba8c06f34('window load');
                }), window.fbAsyncInit = function () {
                    aO8._2CL840ca8aba8c06f34('fb sdk load');
                }, window.gapiAsyncInit = function () {
                    aO8._2CL840ca8aba8c06f34('gapi load');
                }, window.recaptchaAsyncInit = function () {
                    window.recaptchaOnloadCallback();
                    aO8._2CL840ca8aba8c06f34('recaptcha load');
                }, window.modulesLoaded = function () {
                    aO8._2CL840ca8aba8c06f34('modules load');
                }, this._2CLc75564f84e04a634();
            }
            _2CLc75564f84e04a634() {
                var aO9 = !![];
                var aOa = ![];
                var aOb = undefined;
                try {
                    for (var aOc = this._2CL362661de726a1fb0[Symbol.iterator](), aOd; !(aO9 = (aOd = aOc.next())['done']); aO9 = !![]) {
                        var aOe = aOd.value;
                        switch (aOe._2CL65dfacb39960c223) {
                            case 'image':
                                this._2CL90b42a0a84ed04cf(aOe._url_kamo);
                                break;
                            case 'script':
                                this._2CLf1fa64c259d7084f(aOe._url_kamo);
                        }
                    }
                } catch (aOf) {
                    aOa = !![];
                    aOb = aOf;
                } finally {
                    try {
                        if (!aO9 && aOc.return != null) {
                            aOc.return();
                        }
                    } finally {
                        if (aOa) {
                            throw aOb;
                        }
                    }
                }
            }
            _2CL90b42a0a84ed04cf(aNv) {
                var aOh = this;
                var aNw = new Image();
                aNw.onload = function () {
                    aOh._2CLd5faa2c887fcf1ad(aNw, aNv);
                }, aNw.onerror = function () {
                    Loader._2CLb5adde8d7d741225();
                }, aNw.src = aNv;
            }
            _2CLf1fa64c259d7084f(aNv) {
                var aOk = this;
                var aNw = document.createElement('script');
                aNw.onload = function () {
                    aOk._2CLd5faa2c887fcf1ad(aNw, aNv);
                }, aNw.onerror = function () {
                    Loader._2CLb5adde8d7d741225();
                }, aNw.src = aNv, document.head.appendChild(aNw);
            }
            _2CLd5faa2c887fcf1ad(aNv, aNw) {
                this._2CL8775a4880612c227.set(aNw, aNv), this._2CLa914bfdfbd8352ad();
            }
            _2CL840ca8aba8c06f34(aNv) {
                this._2CL0b4f1a0e1c928495.delete(aNv), this._2CLa914bfdfbd8352ad();
            }
            _2CLa914bfdfbd8352ad() {
                var aNv = this._2CL45c797b0c319416c, aNw = (aNv - (this._2CL0b4f1a0e1c928495.size + (this._2CL362661de726a1fb0.length - this._2CL8775a4880612c227.size))) / aNv * 100;
                Loader._2CLafb101ba78a096e7(aNw), 100 === aNw && this._2CLbf864ee5d05c5820();
            }
            _2CL7f3f0cc940c31119() {
                Loader._2CLa2401f3a6e826384();
            }
        }();
        var aOr = new class {
            constructor() {
                this.pf_now_kamo = 0;
            }
            pf_now_upd() {
                this.pf_now_kamo = performance.now();
            }
        }(), aOs = aNx(1);
        var aOu = new class {
            constructor() {
            }
            _2CL52a96de0605b8df2() {
                this._2CLc582181783e5b1b6(), this._2CL70a0c2cb06c81f11(), this._2CL8281a6999e6b2faf();
            }
            _2CLc582181783e5b1b6() {
                var aNv = function aNv(aOy) {
                    var aNw = document.createElement('div'), aNx = 2 * aOy.target.offsetWidth;
                    aNw.classList.add('material-ripple'), aNw.style.width = ''['concat'](aNx << 1, 'px'), aNw.style.height = ''['concat'](aNx << 1, 'px'), aNw.style.top = ''['concat'](aOy.offsetY - aNx, 'px'), aNw.style.left = ''['concat'](aOy.offsetX - aNx, 'px'), aNw.style.transform = 'scale(0) skew(10deg)', requestAnimationFrame(function () {
                        aOy.target.appendChild(aNw), requestAnimationFrame(function () {
                            aNw.style.opacity = '0', aNw.style.transform = 'scale(1) scaleX(0.7) skew(10deg)', setTimeout(function () {
                                aOy.target.removeChild(aNw);
                            }, 1250);
                        });
                    });
                }, aNw = document.querySelectorAll('.control-bar .buttons .button');
                var aOB = !![];
                var aOC = ![];
                var aOD = undefined;
                try {
                    for (var aOE = aNw[Symbol.iterator](), aOF; !(aOB = (aOF = aOE.next())['done']); aOB = !![]) {
                        var aOG = aOF.value;
                        aOG.addEventListener('click', aNv, { 'passive': !0 });
                    }
                } catch (aOH) {
                    aOC = !![];
                    aOD = aOH;
                } finally {
                    try {
                        if (!aOB && aOE.return != null) {
                            aOE.return();
                        }
                    } finally {
                        if (aOC) {
                            throw aOD;
                        }
                    }
                }
            }
            _2CL70a0c2cb06c81f11() {
                var aNv = function aNv(aOK) {
                    var aNw = document.createElement('div'), aNx = 1.5 * aOK.target.offsetWidth;
                    aNw.classList.add('material-ripple'), aNw.style.width = ''['concat'](aNx << 1, 'px'), aNw.style.height = ''['concat'](aNx << 1, 'px'), aNw.style.top = ''['concat'](aOK.offsetY - aNx, 'px'), aNw.style.left = ''['concat'](aOK.offsetX - aNx, 'px'), requestAnimationFrame(function () {
                        aOK.target.appendChild(aNw), requestAnimationFrame(function () {
                            aNw.style.opacity = '0', aNw.style.transform = 'scale(1)', setTimeout(function () {
                                aOK.target.removeChild(aNw);
                            }, 1250);
                        });
                    });
                }, aNw = document.getElementsByClassName('material-button');
                var aON = !![];
                var aOO = ![];
                var aOP = undefined;
                try {
                    for (var aOQ = aNw[Symbol.iterator](), aOR; !(aON = (aOR = aOQ.next())['done']); aON = !![]) {
                        var aOS = aOR.value;
                        aOS.addEventListener('click', aNv, { 'passive': !0 }), aOS.style.position = 'relative', aOS.style.overflow = 'hidden';
                    }
                } catch (aOT) {
                    aOO = !![];
                    aOP = aOT;
                } finally {
                    try {
                        if (!aON && aOQ.return != null) {
                            aOQ.return();
                        }
                    } finally {
                        if (aOO) {
                            throw aOP;
                        }
                    }
                }
            }
            _2CL8281a6999e6b2faf() {
                var aNv = document.querySelectorAll('.dropdown');
                var aOV = !![];
                var aOW = ![];
                var aOX = undefined;
                try {
                    var aOY = function aOY() {
                        var aNw = aPt.value;
                        var aNv = aNw.querySelector('.selected'), aNx = aNw.querySelector('.list'), aNy = aNx.querySelectorAll('.item'), aNz = new Map();
                        var aP4 = !![];
                        var aP5 = ![];
                        var aP6 = undefined;
                        try {
                            for (var aP7 = aNy[Symbol.iterator](), aP8; !(aP4 = (aP8 = aP7.next())['done']); aP4 = !![]) {
                                var aP9 = aP8.value;
                                var aPa = aP9.innerHTML, aPb = aP9.getAttribute('value');
                                aNz.set(aPb, aPa);
                            }
                        } catch (aPc) {
                            aP5 = !![];
                            aP6 = aPc;
                        } finally {
                            try {
                                if (!aP4 && aP7.return != null) {
                                    aP7.return();
                                }
                            } finally {
                                if (aP5) {
                                    throw aP6;
                                }
                            }
                        }
                        var aNA = aNw.getAttribute('value') || aNz.size && aNz.keys()['next']()['value'];
                        Object.defineProperty(aNw, 'value', {
                            'set': function set(aNx) {
                                aNA = aNx;
                                var aNy = aNz.get(aNx);
                                aNv.innerHTML = aNy;
                                var aNJ = new Event('change');
                                aNw.dispatchEvent(aNJ);
                            },
                            'get': function get() {
                                return aNA;
                            }
                        });
                        var aPh = !![];
                        var aPi = ![];
                        var aPj = undefined;
                        try {
                            var aPk = function aPk() {
                                var aNv = aPq.value;
                                var aNx = aNv.getAttribute('value'), aNy = function aNy(aNv) {
                                    aNw.value = aNx;
                                };
                                aNv.addEventListener('click', aNy, { 'passive': !0 });
                            };
                            for (var aPp = aNy[Symbol.iterator](), aPq; !(aPh = (aPq = aPp.next())['done']); aPh = !![]) {
                                aPk();
                            }
                        } catch (aPr) {
                            aPi = !![];
                            aPj = aPr;
                        } finally {
                            try {
                                if (!aPh && aPp.return != null) {
                                    aPp.return();
                                }
                            } finally {
                                if (aPi) {
                                    throw aPj;
                                }
                            }
                        }
                        new aOs.a(aNx, { 'wheelPropagation': !1 });
                    };
                    for (var aPs = aNv[Symbol.iterator](), aPt; !(aOV = (aPt = aPs.next())['done']); aOV = !![]) {
                        aOY();
                    }
                } catch (aPu) {
                    aOW = !![];
                    aOX = aPu;
                } finally {
                    try {
                        if (!aOV && aPs.return != null) {
                            aPs.return();
                        }
                    } finally {
                        if (aOW) {
                            throw aOX;
                        }
                    }
                }
            }
        }();
        var aPv = {
            '_2CL610747fa7dec80b4': document.querySelector('template[name=setting-option-seperator]'),
            '_2CLce3f568a2bd1c875': document.querySelector('template[name=setting-option-toggle]'),
            '_2CL7fda5ccb82aee2aa': document.querySelector('template[name=setting-option-range]'),
            '_2CLa7b9f5dd529aab5f': document.querySelector('template[name=setting-option-drop-down]'),
            '_2CL8fc722d7f11003c4': document.querySelector('template[name=setting-option-drop-down-item]'),
            '_2CL6c6f2ffa347ef138': document.querySelector('template[name=setting-option-input]'),
            '_2CL795e6476e2075f2c': document.querySelector('template[name=setting-option-colorpicker]'),
            '_2CLa2e7954344d9f60e': document.querySelector('template[name=setting-option-hotkey]')
        };
        const spectatePoints = [];
        (function () {
            let initX = -10000 + 5000;
            let initY = -8485.2 + 2828;
            for (let i = 0; i < 15; i++) {
                spectatePoints.push({
                    x: initX,
                    y: initY
                });
                initY += 2828;
                if (i == 4)
                    initX += 5000, initY = -8485.2 + 2828;
                if (i == 9)
                    initX += 5000, initY = -8485.2 + 2828;
            }
        }());
        let currentAssistMode = 'none';
        var aPw = Settings.Game;
        var aPx = Settings.Theme;
        var aPA = Settings.Chat;
        var aPB = {};
        window.SettingsStore = aPB;
        var aPC = {
            'Coordinate_c': class {
                constructor() {
                    var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var aNw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    this.xPos_kamo = aNv, this.yPos_kamo = aNw;
                }
                _2CL7243baea9581cdc8(aNv) {
                    this.xPos_kamo = aNv.xPos_kamo, this.yPos_kamo = aNv.yPos_kamo;
                }
                _init_hatena() {
                    this.xPos_kamo = 0, this.yPos_kamo = 0;
                }
            },
            'Color_c': class {
                constructor() {
                    var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var aNw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var aNx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var aNy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                    this._2CLaa7bb4b05fbd27db = aNv, this._2CLf46271e5c04cf114 = aNw, this._2CLda3e61414e50aee9 = aNx, this._2CLc6d998caee5983f8 = aNy;
                }
                static _2CL366c6661017f23f4(aNv) {
                    return new this((16711680 & aNv) >> 16, (65280 & aNv) >> 8, (255 & aNv) >> 0);
                }
                static _2CLbc5a828aed05a456(aNv) {
                    var aNw = 0 | aNv.replace('#', '0x');
                    return this._2CL366c6661017f23f4(aNw);
                }
                static _2CLf47e279888cb4b6d(aNv) {
                    var aNw = aNv.replace('rgb(', '')['replace'](')', '')['split'](',');
                    return new this(0 | aNw[0], 0 | aNw[1], 0 | aNw[2]);
                }
                static _2CL8e9906eed8f91db3(aNv) {
                    return 0 | aNv.replace('#', '0x');
                }
                _2CL7f4279a1384d12af(aNv) {
                    this._2CLaa7bb4b05fbd27db = aNv._2CLaa7bb4b05fbd27db, this._2CLf46271e5c04cf114 = aNv._2CLf46271e5c04cf114, this._2CLda3e61414e50aee9 = aNv._2CLda3e61414e50aee9, this._2CLc6d998caee5983f8 = aNv._2CLc6d998caee5983f8;
                }
                _2CLcc32da8337a77c45(aNv, aNw, aNx) {
                    var aNy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                    this._2CLaa7bb4b05fbd27db = aNv, this._2CLf46271e5c04cf114 = aNw, this._2CLda3e61414e50aee9 = aNx, this._2CLc6d998caee5983f8 = aNy;
                }
                _2CL465f9ff6577aaa37(aNv) {
                    var aNw = 255 * aNv, aNx = 1 - aNv;
                    this._2CLaa7bb4b05fbd27db = this._2CLaa7bb4b05fbd27db * aNx + aNw | 0, this._2CLf46271e5c04cf114 = this._2CLf46271e5c04cf114 * aNx + aNw | 0, this._2CLda3e61414e50aee9 = this._2CLda3e61414e50aee9 * aNx + aNw | 0;
                }
                _2CL6596cd88c337452e(aNv) {
                    var aNw = 1 - aNv;
                    this._2CLaa7bb4b05fbd27db = this._2CLaa7bb4b05fbd27db * aNw | 0, this._2CLf46271e5c04cf114 = this._2CLf46271e5c04cf114 * aNw | 0, this._2CLda3e61414e50aee9 = this._2CLda3e61414e50aee9 * aNw | 0;
                }
                _2CL4946b0b8bf5e3580() {
                    return (this._2CLaa7bb4b05fbd27db << 16) + (this._2CLf46271e5c04cf114 << 8) + (this._2CLda3e61414e50aee9 << 0);
                }
                _2CL7c7d4a212788caab() {
                    return '#'['concat']((251658240 | this._2CL4946b0b8bf5e3580)['toString'](16)['slice'](1));
                }
                _2CL87bbcd20168b8d4e() {
                    return 'rgb('['concat'](this._2CLaa7bb4b05fbd27db, ',')['concat'](this._2CLf46271e5c04cf114, ',')['concat'](this._2CLda3e61414e50aee9, ')');
                }
                _2CL653b8dc13437ed5e() {
                    return 'rgba('['concat'](this._2CLaa7bb4b05fbd27db, ',')['concat'](this._2CLf46271e5c04cf114, ',')['concat'](this._2CLda3e61414e50aee9, ',')['concat'](this._2CLc6d998caee5983f8, ')');
                }
            },
            '_2CL089d4bc4eb339900': function _2CL089d4bc4eb339900() {
                var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var aNw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var aNx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var aNy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                _classCallCheck(this, _2CL089d4bc4eb339900);
                this._2CLf4308d8c11499f88 = aNv, this._2CL5fab68fb24c1a804 = aNw, this._2CL1d47c61d5ba7a6fd = aNx, this._2CL0a20f9de5d5d3f47 = aNy;
            }
        };
        var aQ6 = class {
            constructor() {
                this._2CL0fc39e6b27ad1ad9 = new Map();
            }
            _2CL385f5d49967fe353(aNv, aNw) {
                (this._2CL0fc39e6b27ad1ad9.get(aNv) || this._2CL0bafcfac392d0c91(aNv))['add'](aNw);
            }
            _2CLc7ee1189203064a1(aNv) {
                var aNw = Array.prototype.slice.call(arguments)['slice'](1), aNx = this._2CL0fc39e6b27ad1ad9.get(aNv);
                if (aNx) {
                    var aQd = !![];
                    var aQe = ![];
                    var aQf = undefined;
                    try {
                        for (var aQg = aNx[Symbol.iterator](), aQh; !(aQd = (aQh = aQg.next())['done']); aQd = !![]) {
                            var aQi = aQh.value;
                            aQi.apply(void 0, _toConsumableArray(aNw));
                        }
                    } catch (aQj) {
                        aQe = !![];
                        aQf = aQj;
                    } finally {
                        try {
                            if (!aQd && aQg.return != null) {
                                aQg.return();
                            }
                        } finally {
                            if (aQe) {
                                throw aQf;
                            }
                        }
                    }
                }
            }
            _2CL0bafcfac392d0c91(aNv) {
                var aNw = new Set();
                return this._2CL0fc39e6b27ad1ad9.set(aNv, aNw), aNw;
            }
        };
        var aQm = new class {
            constructor() {
            }
            _2CL0d88847754015168(aNv) {
                try {
                    return JSON.parse(aNv);
                } catch (aQp) {
                    return;
                }
            }
            _2CL276c2a3967d01281(aNv) {
                return JSON.stringify(aNv);
            }
        }();
        var aQr = new class extends aQ6 {
            constructor() {
                super();
                this._2CL8fa5acbdd0c9d86d = 'https://webbouncer-live-v8-0.agario.miniclippt.com', this._2CL1dd59f574d5db0c8 = '/v4', this._2CLc4b8ab500089b24b = {
                    'clientVersion': 30700,
                    'versionString': '3.7.0'
                }, this._2CL5f88a0b9e93b6787 = {}, this._2CLf92a9c1bcd5d7960 = new Map(), this._2CL740f7cad07395769 = 2293, this._2CL07693fe53557f010(), this.fetchLatestID(), this.fetchGameConfig();
                return this;
            }
            _2CL55ea4320a28f3fa9(aNv) {
                var aNw = {
                    'Accept': 'text/plain,*/*;q=0.01',
                    'Content-Type': 'application/octet-stream',
                    'x-support-proto-version': '15.0.0',
                    'x-client-version': ''['concat'](this._2CLc4b8ab500089b24b.clientVersion)
                }, aNx = Object.keys(aNw);
                for (var aQB = 0, aQC = aNx; aQB < aQC.length; aQB++) {
                    var aQD = aQC[aQB];
                    aNv.setRequestHeader(aQD, aNw[aQD]);
                }
            }
            _2CL20af5bbdc0a3c217() {
                var aQE = this;
                var aNv = new XMLHttpRequest();
                aNv.open('GET', ''['concat'](this._2CL8fa5acbdd0c9d86d, '/info'), !0), this._2CL55ea4320a28f3fa9(aNv), aNv.responseType = 'json', aNv.onload = function () {
                    200 === aNv.status ? aQE._2CLc7ee1189203064a1('regions-info', aNv.response) : aQE._2CLc7ee1189203064a1('error', 'Failed to get regions info.');
                }, aNv.onerror = function () {
                    aQE._2CLc7ee1189203064a1('error', 'Failed to get regions info.');
                }, aNv.send();
            }
            _2CL526f2f3dcb51e5fd(aNv, aNw) {
                var aQI = this;
                var aNx = [];
                aNx.push(10), aNx.push(2 + aNw.length + 2 + aNv.length), aNx.push(10), aNx.push(aNw.length);
                var aQK = !![];
                var aQL = ![];
                var aQM = undefined;
                try {
                    for (var aQN = aNw[Symbol.iterator](), aQO; !(aQK = (aQO = aQN.next())['done']); aQK = !![]) {
                        var aQP = aQO.value;
                        aNx.push(aQP.charCodeAt(0));
                    }
                } catch (aQQ) {
                    aQL = !![];
                    aQM = aQQ;
                } finally {
                    try {
                        if (!aQK && aQN.return != null) {
                            aQN.return();
                        }
                    } finally {
                        if (aQL) {
                            throw aQM;
                        }
                    }
                }
                aNx.push(18), aNx.push(aNv.length);
                var aQR = !![];
                var aQS = ![];
                var aQT = undefined;
                try {
                    for (var aQU = aNv[Symbol.iterator](), aQV; !(aQR = (aQV = aQU.next())['done']); aQR = !![]) {
                        var aQW = aQV.value;
                        aNx.push(aQW.charCodeAt(0));
                    }
                } catch (aQX) {
                    aQS = !![];
                    aQT = aQX;
                } finally {
                    try {
                        if (!aQR && aQU.return != null) {
                            aQU.return();
                        }
                    } finally {
                        if (aQS) {
                            throw aQT;
                        }
                    }
                }
                var aNy = new Uint8Array(aNx), aNz = new XMLHttpRequest();
                aNz.open('POST', ''['concat'](this._2CL8fa5acbdd0c9d86d)['concat'](this._2CL1dd59f574d5db0c8, '/findServer'), !0), this._2CL55ea4320a28f3fa9(aNz), aNz.responseType = 'json', aNz.onload = function () {
                    200 === aNz.status ? aQI._2CLc7ee1189203064a1('new-server', aNz.response, aNv) : aQI._2CLc7ee1189203064a1('error', 'Failed to find a server.');
                }, aNz.onerror = function () {
                    aQI._2CLc7ee1189203064a1('error', 'Failed to find a server.');
                }, aNz.send(aNy);
            }
            _2CL26bb1ea8a949c4c0(aNv, aNw, aNx) {
                var aR3 = this;
                var aNy = [];
                aNy.push(10), aNy.push(2 + aNw.length + 2 + aNv.length), aNy.push(10), aNy.push(aNw.length);
                var aR5 = !![];
                var aR6 = ![];
                var aR7 = undefined;
                try {
                    for (var aR8 = aNw[Symbol.iterator](), aR9; !(aR5 = (aR9 = aR8.next())['done']); aR5 = !![]) {
                        var aRa = aR9.value;
                        aNy.push(aRa.charCodeAt(0));
                    }
                } catch (aRb) {
                    aR6 = !![];
                    aR7 = aRb;
                } finally {
                    try {
                        if (!aR5 && aR8.return != null) {
                            aR8.return();
                        }
                    } finally {
                        if (aR6) {
                            throw aR7;
                        }
                    }
                }
                aNy.push(18), aNy.push(aNv.length);
                var aRc = !![];
                var aRd = ![];
                var aRe = undefined;
                try {
                    for (var aRf = aNv[Symbol.iterator](), aRg; !(aRc = (aRg = aRf.next())['done']); aRc = !![]) {
                        var aRh = aRg.value;
                        aNy.push(aRh.charCodeAt(0));
                    }
                } catch (aRi) {
                    aRd = !![];
                    aRe = aRi;
                } finally {
                    try {
                        if (!aRc && aRf.return != null) {
                            aRf.return();
                        }
                    } finally {
                        if (aRd) {
                            throw aRe;
                        }
                    }
                }
                aNy.push(26), aNy.push(2 + aNx.length), aNy.push(10), aNy.push(aNx.length);
                var aRj = !![];
                var aRk = ![];
                var aRl = undefined;
                try {
                    for (var aRm = aNx[Symbol.iterator](), aRn; !(aRj = (aRn = aRm.next())['done']); aRj = !![]) {
                        var aRo = aRn.value;
                        aNy.push(aRo.charCodeAt(0));
                    }
                } catch (aRp) {
                    aRk = !![];
                    aRl = aRp;
                } finally {
                    try {
                        if (!aRj && aRm.return != null) {
                            aRm.return();
                        }
                    } finally {
                        if (aRk) {
                            throw aRl;
                        }
                    }
                }
                var aNz = new Uint8Array(aNy), aNA = new XMLHttpRequest();
                aNA.open('POST', ''['concat'](this._2CL8fa5acbdd0c9d86d)['concat'](this._2CL1dd59f574d5db0c8, '/getToken'), !0), this._2CL55ea4320a28f3fa9(aNA), aNA.responseType = 'json', aNA.onload = function () {
                    200 === aNA.status ? aR3._2CLc7ee1189203064a1('new-server', aNA.response, aNv) : aR3._2CLc7ee1189203064a1('error', 'Failed to get room IP.');
                }, aNA.onerror = function () {
                    aR3._2CLc7ee1189203064a1('error', 'Failed to get room IP.');
                }, aNA.send(aNz);
            }
            _2CL07693fe53557f010() {
                var aRs = this;
                console.log('[Miniclip] Hard-coded agar.io version: '['concat'](this._2CLc4b8ab500089b24b.versionString));
                var aNv = localStorage.getItem('agario-version');
                if (aNv) {
                    var aRu = aQm._2CL0d88847754015168(aNv) || {};
                    this._2CLc4b8ab500089b24b.clientVersion < aRu.integer && (this._2CLc4b8ab500089b24b.clientVersion = aRu.integer, this._2CLc4b8ab500089b24b.versionString = aRu.string, console.log('[Miniclip] Cached agar.io version: '['concat'](this._2CLc4b8ab500089b24b.versionString)));
                    try {
                        var aRv = JSON.parse(aNv);
                        this._2CLc4b8ab500089b24b.clientVersion < aRv.integer && (this._2CLc4b8ab500089b24b.clientVersion = aRv.integer, this._2CLc4b8ab500089b24b.versionString = aRv.string, console.log('[Miniclip] Cached agar.io version: '['concat'](this._2CLc4b8ab500089b24b.versionString)));
                    } catch (aRw) {
                        console.warn('[Miniclip] Version cache was found corrupt.'), localStorage.removeItem('agario-version');
                    }
                }
                var aNw = new XMLHttpRequest(), aNx = 'https://agar.io/mc/agario.js?timestamp='['concat'](Date.now());
                aNw.open('GET', aNx, !0), aNw.onload = function () {
                    if (200 === aNw.status) {
                        var aRz = /var versionString="(\d+)\.(\d+)\.(\d+)"/, aRA = aNw.responseText.match(aRz);
                        if (!aRA || 4 !== aRA.length)
                            return void console.warn('[Miniclip] Failed to regex agario version from mc/agario.js');
                        var aRB = 10000 * aRA[1] + 100 * aRA[2] + 1 * aRA[3], aRC = ''['concat'](aRA[1], '.')['concat'](aRA[2], '.')['concat'](aRA[3]);
                        aRs._2CLc4b8ab500089b24b.clientVersion = aRB, aRs._2CLc4b8ab500089b24b.versionString = aRC;
                        var aRD = JSON.stringify({
                            'integer': aRB,
                            'string': aRC
                        });
                        localStorage.setItem('agario-version', aRD), console.log('[Miniclip] Updated agar.io version: '['concat'](aRC));
                    } else
                        console.warn('[Miniclip] Failed to update agario version.');
                }, aNw.onerror = function () {
                    console.error('[Miniclip] Failed to update agario version.');
                }, aNw.send();
            }
            fetchGameConfig() {
                var aRE = this;
                console.log('[Miniclip] Fetching game configuration');
                var aNv = new XMLHttpRequest(), aNw = 'https://configs-web.agario.miniclippt.com/live/v15/'['concat'](this._2CL740f7cad07395769, '/GameConfiguration.json');
                aNv.open('GET', aNw, !0), aNv.responseType = 'json', aNv.onload = function () {
                    if (200 === aNv.status) {
                        var aRH = aNv.response;
                        aRE._2CL5f88a0b9e93b6787 = aRH.gameConfig, aRE._2CL5bc7e42b4dff69c9(), console.log('[Miniclip] Successfully fetched game configuration');
                    } else
                        console.warn('[Miniclip] Failed to fetch game configuration.');
                }, aNv.onerror = function () {
                    console.error('[Miniclip] Failed to fetch game configuration.');
                }, aNv.send();
            }
            fetchLatestID() {
                var aRI = this;
                console.log('[Miniclip] Fetching latest ID');
                var aNv = new XMLHttpRequest();
                aNv.open('GET', 'https://webbouncer-live-v8-0.agario.miniclippt.com/getLatestID', !0), aNv.onload = function () {
                    200 === aNv.status ? (aRI._2CL740f7cad07395769 = 0 | aNv.responseText, console.log('[Miniclip] Successfully fetched latest ID')) : console.warn('[Miniclip] Failed to fetch latest ID.');
                }, aNv.onerror = function () {
                    console.error('[Miniclip] Failed to fetch latest ID.');
                }, aNv.send();
            }
            _2CL5bc7e42b4dff69c9() {
                var aNv = this._2CL5f88a0b9e93b6787['Gameplay - Equippable Skins'];
                var aRL = !![];
                var aRM = ![];
                var aRN = undefined;
                try {
                    for (var aRO = aNv[Symbol.iterator](), aRP; !(aRL = (aRP = aRO.next())['done']); aRL = !![]) {
                        var aRQ = aRP.value;
                        if ('uses_spine' === aRQ.image)
                            continue;
                        var aRR = aRQ.productId.startsWith('skin_') ? '%'['concat'](aRQ.productId.substring(5)) : aRQ.productId, aRS = '#'['concat'](aRQ.cellColor.substring(2, 8)), aRT = aRQ.image;
                        this._2CLf92a9c1bcd5d7960.set(aRR, {
                            '_2CL90b42a0a84ed04cf': aRT,
                            '_2CL1849df6af84c6815': aRS
                        });
                    }
                } catch (aRU) {
                    aRM = !![];
                    aRN = aRU;
                } finally {
                    try {
                        if (!aRL && aRO.return != null) {
                            aRO.return();
                        }
                    } finally {
                        if (aRM) {
                            throw aRN;
                        }
                    }
                }
            }
        }(), aQs = aNx(0), aQt = aNx.n(aQs), aQu = aQt.a.Keygen;
        var aRV = new class {
            constructor() {
                this.decryptionKey_obj = [
                    0,
                    0
                ], this.encryptionKey_obj = [
                    0,
                    0
                ];
            }
            _2CL0a0dbaaacf7f9729(aNv) {
                this.decryptionKey_obj[aNv] = 0, this.encryptionKey_obj[aNv] = 0;
            }
            _2CLd1ab6ff0f5ac94d9(aNv, aNw) {
                var aNx = this.encryptionKey_obj[aNv];
                this.xorBuffer_fn(aNw, aNx);
            }
            _2CLbaf10d0df76c4140(aNv, aNw) {
                var aNx = this.decryptionKey_obj[aNv];
                if (0 === aNx)
                    return;
                var aNy = aNx ^ aQr._2CLc4b8ab500089b24b.clientVersion;
                this.xorBuffer_fn(aNw, aNy);
            }
            xorBuffer_fn(aNv, aNw) {
                var aNx = new Uint8Array(aNv);
                var aNy = aNx.byteLength;
                for (; aNy--;) {
                    aNx[aNy] = aNx[aNy] ^ aNw >>> aNy % 4 * 8 & 255;
                }
            }
            shiftEncryptionKey(aNv) {
                this.encryptionKey_obj[aNv] = this.shiftKey_fn(this.encryptionKey_obj[aNv]);
            }
            shiftDecryptionKey(aNv) {
                this.decryptionKey_obj[aNv] = this.shiftKey_fn(this.decryptionKey_obj[aNv]);
            }
            shiftKey_fn(aNv) {
                if (!window.encKey)
                    console.log('enckey', aNv), window.encKey = aNv;
                return aNv = Math.imul(aNv, 1540483477) >> 0, aNv = Math.imul(aNv >>> 24 ^ aNv, 1540483477) >> 0 ^ 114296087, (aNv = Math.imul(aNv >>> 13 ^ aNv, 1540483477) >> 0) >>> 15 ^ aNv;
            }
            serverToken_fn(tabId, aNw, aNx) {
                var aNy = aNw.match(/[\w\d\.-]+\.agar\.io/)[0];
                this.encryptionKey_obj[tabId] = aQu(aNy, aNx);
            }
        }();
        var aSg = BufferWriter, aSh = aQt.a.Protobuf;
        var aSJ = 1, aSK = 0.04;
        var aSL = new class {
            constructor() {
                this.xPos_kamo = 0, this.yPos_kamo = 0, this._2CL74924ab1e2aa8c48 = 0.5, this._2CL755029166bd8a108 = 1, this._2CL7f272a4f358d5b70 = 0.5, this._2CL25a00385b9699f80 = new aPC._2CL089d4bc4eb339900(), this._2CLe21f084957807b9b = new aPC.Coordinate_c(), this._2CL19f0ed04fc294bbf = !1, this._2CLfd80e2ec4d525791 = !1, this._2CL3f69227a8cb484a1 = !1;
            }
            _2CL9c84c7f925c14a54() {
                var aNv = (this.xPos_kamo + 7071) / 2828 | 0, aNw = (this.yPos_kamo + 7071) / 2828 | 0;
                return aNv = aNv < 0 ? 0 : aNv > 4 ? 4 : aNv, aNw = aNw < 0 ? 0 : aNw > 4 ? 4 : aNw, ''['concat'](String.fromCharCode(65 + aNw))['concat'](aNv + 1);
            }
            _2CLc1076a31e6a64e81() {
                this._2CL4b362f28fd6ff0f8 = !1, this.switchSpectateMode = !1;
            }
            _2CLcc32da8337a77c45() {
                this._2CL2da07b15da77a1a1(), this._2CLcdec3b523e4eacc9(), this._2CLd669f3acbca1b15b();
            }
            _2CL2da07b15da77a1a1() {
                var aNv = 32 - 2 * aPB._2CLed608a71c590761b;
                b3Y._2CL32137922dbdb3ee5() > 0 ? (this.xPos_kamo += (b3Y._2CL8d80b815364a0488.xPos_kamo - this.xPos_kamo) / aNv, this.yPos_kamo += (b3Y._2CL8d80b815364a0488.yPos_kamo - this.yPos_kamo) / aNv) : this._2CL4b362f28fd6ff0f8 && (this.xPos_kamo = (this._2CLe21f084957807b9b.xPos_kamo + 29 * this.xPos_kamo) / 30, this.yPos_kamo = (this._2CLe21f084957807b9b.yPos_kamo + 29 * this.yPos_kamo) / 30);
            }
            _2CLcdec3b523e4eacc9() {
                var aNv = aPB._2CL755029166bd8a108 ? this._2CL755029166bd8a108 : 1, aNw = this._2CL74924ab1e2aa8c48 * aNv;
                this._2CL7f272a4f358d5b70 += (aNw - this._2CL7f272a4f358d5b70) / 8;
            }
            _2CLd669f3acbca1b15b() {
                var aNv = window.innerWidth / 2 / this._2CL7f272a4f358d5b70, aNw = window.innerHeight / 2 / this._2CL7f272a4f358d5b70;
                this._2CL25a00385b9699f80._2CLf4308d8c11499f88 = -aNv + this.xPos_kamo, this._2CL25a00385b9699f80._2CL1d47c61d5ba7a6fd = aNv + this.xPos_kamo, this._2CL25a00385b9699f80._2CL5fab68fb24c1a804 = -aNw + this.yPos_kamo, this._2CL25a00385b9699f80._2CL0a20f9de5d5d3f47 = aNw + this.yPos_kamo;
            }
            _2CL287eee025b176e7d() {
                var aNv = 1 - 2 * aPB._2CLf0303ecc871fa1cf / 100;
                var aNw = this._2CL74924ab1e2aa8c48 * aNv;
                aNw = aNw > aSJ ? aSJ : aNw < aSK ? aSK : aNw, this._2CL74924ab1e2aa8c48 = aNw;
            }
            _2CLa06030cf37a205de() {
                var aNv = 1 - 2 * aPB._2CLf0303ecc871fa1cf / 100;
                var aNw = this._2CL74924ab1e2aa8c48 / aNv;
                aNw = aNw > aSJ ? aSJ : aNw < aSK ? aSK : aNw, this._2CL74924ab1e2aa8c48 = aNw;
            }
            _2CL4b362f28fd6ff0f8() {
                return this._2CL19f0ed04fc294bbf;
            }
            _2CL4b362f28fd6ff0f8(aNv) {
                this._2CL19f0ed04fc294bbf = aNv;
            }
            switchSpectateMode() {
                return this._2CLfd80e2ec4d525791;
            }
            switchSpectateMode(aNv) {
                this._2CLfd80e2ec4d525791 = aNv;
            }
        }();
        var aT0 = {
            '_2CL9c15c849ca06e0f7': new aSg(5),
            'sendMovePacket': new aSg(13),
            '_2CLd35a39212fd75e83': new aSg(1),
            'ping_ayoGG': new aSg(3)
        };
        var aT1 = new class {
            constructor() {
                this._2CL9f2ef7144b608121 = [
                    !1,
                    !1
                ], this._2CL5d8e95289bf25691 = [
                    !1,
                    !1
                ], this._2CL87d175543f0e136f = [
                    0,
                    0
                ];
            }
            _2CL0210d1c1c1cef041(aNv, aNw, aNx) {
                this._2CL5d8e95289bf25691[aNv] = aNx, this._2CL87d175543f0e136f[aNv] = aNw, this._2CL9f2ef7144b608121[aNv] || this._2CL2d2649677c494e95(aNv);
            }
            _2CL5875a5af586e3482(aNv) {
                this._2CL9f2ef7144b608121[aNv] = !1, this.sendHandshake254(aNv), this.sendHandshake255(aNv);
            }
            _2CL0ace867fb8fdbdd5(aNv) {
                b18._2CL785ba0dfc4e6d9fc[aNv] = !0, this._2CL2d2649677c494e95(aNv), this.getFreeCoin_fn(aNv);
            }
            sendPacket_fn(aNv, aNw) {
                var aNx = aNw._2CLe035dc327c1676d8;
                aRV._2CLd1ab6ff0f5ac94d9(aNv, aNx), b18.wsSend_fn(aNv, aNx), aRV.shiftEncryptionKey(aNv);
            }
            sendHandshake254(aNv) {
                var aNw = aT0._2CL9c15c849ca06e0f7;
                aNw._init_hatena();
                aNw.writeUint8(254);
                aNw.writeUint32(22);
                b18.wsSend_fn(aNv, aNw._2CLe035dc327c1676d8);
            }
            sendHandshake255(aNv) {
                var aNw = aT0._2CL9c15c849ca06e0f7;
                aNw._init_hatena(), aNw.writeUint8(255), aNw.writeUint32(aQr._2CLc4b8ab500089b24b.clientVersion), b18.wsSend_fn(aNv, aNw._2CLe035dc327c1676d8);
            }
            sendSpawnPacket(aNv) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv] || b3Y._2CL1d2b5efaee01be40(aNv))
                    return;
                if (true) {
                    myTurn = true;
                    var dis = this;
                    var sendSpawn = function () {
                        var aNw = b3Y._2CL42b7a092ff6d6463(aNv), aNx = aSg._2CL14c717e1dbbe1d03(aNw), aNy = new aSg(aNx.length + 2 + 1 + grecaptcha.getResponse().length);
                        aNy.writeUint8(0), aNy.writeStringUTF8(aNx), aNy.writeStringUTF8(grecaptcha.getResponse()), dis.sendPacket_fn(aNv, aNy), aSL._2CL4b362f28fd6ff0f8 = !1;
                        myTurn = false;
                        recaptchaExecuteLoop();
                        nyna('HSLO', 'spawn', document.getElementById('nick2').value, 1);
                    };
                    if (!grecaptcha.onceLoad || grecaptcha.v2mode) {
                        requestCaptchaV3();
                        grecaptcha.onceLoad = true;
                        grecaptcha.reset();
                        grecaptcha.execute(0, { 'action': 'play' }).then(function () {
                            sendSpawn();
                        });
                    } else {
                        grecaptcha.reset();
                        grecaptcha.execute(0, { 'action': 'play' }).then(function () {
                            sendSpawn();
                        });
                    }
                } else {
                    var aNw = b3Y._2CL42b7a092ff6d6463(aNv), aNx = aSg._2CL14c717e1dbbe1d03(aNw), aNy = new aSg(aNx.length + 2);
                    aNy.writeUint8(0), aNy.writeStringUTF8(aNx), this.sendPacket_fn(aNv, aNy), aSL._2CL4b362f28fd6ff0f8 = !1;
                }
            }
            sendSpectatePacket(aNv) {
                var aNw = aT0._2CLd35a39212fd75e83;
                aNw._init_hatena();
                aNw.writeUint8(1);
                this.sendPacket_fn(aNv, aNw);
                aSL._2CL4b362f28fd6ff0f8 = !0;
            }
            sendMovePacket(aNv, aNw, aNx) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNx])
                    return;
                var aNy = aRV.decryptionKey_obj[aNx], aNz = b2u.posOffset_kamo[aNx], aNA = aT0.sendMovePacket;
                aNA._init_hatena();
                aNA.writeUint8(16);
                aNA.writeInt32(aNv + aNz.xPos_kamo);
                aNA.writeInt32(aNw + aNz.yPos_kamo);
                aNA.writeInt32(aNy);
                this.sendPacket_fn(aNx, aNA);
            }
            _2CLace8b3d8ee5db2c1(aNv) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv])
                    return;
                var aNw = aT0._2CLd35a39212fd75e83;
                aNw._init_hatena();
                aNw.writeUint8(17);
                this.sendPacket_fn(aNv, aNw);
            }
            switchSpectateMode(aNv) {
                aSL.switchSpectateMode = !aSL.switchSpectateMode;
                var aNw = aT0._2CLd35a39212fd75e83;
                aNw._init_hatena();
                aNw.writeUint8(18);
                this.sendPacket_fn(aNv, aNw);
            }
            _2CL90e8863db5939803(aNv) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv])
                    return;
                var aNw = aT0._2CLd35a39212fd75e83;
                aNw._init_hatena(), aNw.writeUint8(21), this.sendPacket_fn(aNv, aNw);
            }
            sendRecaptchaToken(aNv, aNw) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv])
                    return;
                var aNx = new aSg(aNw.length + 2);
                aNx.writeUint8(86), aNx.writeStringUTF8(aNw), this.sendPacket_fn(aNv, aNx);
            }
            _2CL2d2649677c494e95(aNv) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv] || !this._2CL5d8e95289bf25691[aNv] || this._2CL9f2ef7144b608121[aNv])
                    return;
                var aNw = aQr._2CLc4b8ab500089b24b.versionString, aNx = this._2CL5d8e95289bf25691[aNv], aNy = this._2CL87d175543f0e136f[aNv], aNz = new aSh();
                aNz.reset(), aNz.writeField(1, 2), aNz.writeVarInt(aNx.length), aNz.writeString(aNx);
                var aNA = aNz.buffer;
                aNz.reset(), aNz.writeField(1, 0), aNz.writeVarInt(5), aNz.writeField(2, 2), aNz.writeVarInt(aNw.length), aNz.writeString(aNw), aNz.writeField(3, 0), aNz.writeVarInt(0), aNz.writeField(4, 0), aNz.writeVarInt(0);
                var aNJ = aNz.buffer;
                aNz.reset(), aNz.writeField(1, 0), aNz.writeVarInt(aNy), aNz.writeField(2, 2), aNz.writeVarInt(aNJ.length), aNz.writeSubMessage(aNJ), aNz.writeField(3, 2), aNz.writeVarInt(aNA.length), aNz.writeSubMessage(aNA);
                var aNK = aNz.buffer;
                aNz.reset(), aNz.writeField(1, 0), aNz.writeVarInt(10), aNz.writeField(10, 2), aNz.writeVarInt(aNK.length), aNz.writeSubMessage(aNK);
                var aNL = aNz.buffer;
                aNz.reset(), aNz.writeField(1, 0), aNz.writeVarInt(1), aNz.writeField(2, 2), aNz.writeVarInt(aNL.length), aNz.writeSubMessage(aNL);
                var aNM = aNz.buffer, aNN = new aSg(1 + aNM.length);
                aNN.writeUint8(102);
                var aTL = !![];
                var aTM = ![];
                var aTN = undefined;
                try {
                    for (var aTO = aNM[Symbol.iterator](), aTP; !(aTL = (aTP = aTO.next())['done']); aTL = !![]) {
                        var aTQ = aTP.value;
                        aNN.writeUint8(aTQ);
                    }
                } catch (aTR) {
                    aTM = !![];
                    aTN = aTR;
                } finally {
                    try {
                        if (!aTL && aTO.return != null) {
                            aTO.return();
                        }
                    } finally {
                        if (aTM) {
                            throw aTN;
                        }
                    }
                }
                this.sendPacket_fn(aNv, aNN), this._2CL9f2ef7144b608121[aNv] = !0;
            }
            getFreeCoin_fn(aNv) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv] || !this._2CL9f2ef7144b608121[aNv])
                    return;
                var aNw = new aSh();
                aNw.reset(), aNw.writeField(1, 2), aNw.writeVarInt('hourlyBonus'['length']), aNw.writeString('hourlyBonus');
                var aNx = aNw.buffer;
                aNw.reset(), aNw.writeField(1, 0), aNw.writeVarInt(110), aNw.writeField(110, 2), aNw.writeVarInt(aNx.length), aNw.writeSubMessage(aNx);
                var aNy = aNw.buffer;
                aNw.reset(), aNw.writeField(1, 0), aNw.writeVarInt(1), aNw.writeField(2, 2), aNw.writeVarInt(aNy.length), aNw.writeSubMessage(aNy);
                var aNz = aNw.buffer, aNA = new aSg(1 + aNz.length);
                aNA.writeUint8(102);
                var aTY = !![];
                var aTZ = ![];
                var aU0 = undefined;
                try {
                    for (var aU1 = aNz[Symbol.iterator](), aU2; !(aTY = (aU2 = aU1.next())['done']); aTY = !![]) {
                        var aU3 = aU2.value;
                        aNA.writeUint8(aU3);
                    }
                } catch (aU4) {
                    aTZ = !![];
                    aU0 = aU4;
                } finally {
                    try {
                        if (!aTY && aU1.return != null) {
                            aU1.return();
                        }
                    } finally {
                        if (aTZ) {
                            throw aU0;
                        }
                    }
                }
                this.sendPacket_fn(aNv, aNA);
            }
            ping_ayoGG(aNv, aNw) {
                if (!b18._2CL785ba0dfc4e6d9fc[aNv])
                    return;
                var aNx = aT0.ping_ayoGG;
                aNx._init_hatena();
                aNx.writeUint8(227);
                aNx.writeUint16(aNw);
                this.sendPacket_fn(aNv, aNx);
            }
        }();
        var aU8 = BufferReader;
        var aUQ = new class {
            constructor() {
                this.v2sitekey = '6LfjUBcUAAAAAF6y2yIZHgHIOO5Y3cU5osS2gbMl';
                this._2CL6fe1f736b5887665 = !0;
                this.gr_renders = [
                    -1,
                    -1
                ];
                this.captchaScreen_elm = document.getElementById('recaptcha-screen');
                this.captchaScreen_elms = [
                    document.getElementById('recaptcha-a'),
                    document.getElementById('recaptcha-b')
                ];
                this._2CLa6f1d546f5ae2d9d = 0;
            }
            handleRecaptchaRequest(aNv) {
                var aUT = this;
                if (aNv < 2)
                    this.captchaScreen_elms[aNv]['style']['display'] = 'block', this._2CLa6f1d546f5ae2d9d++, this._2CLa5f961f14f197d01();
                var aNw = this.gr_renders[aNv];
                if (aNw < 0) {
                    var aUV = {
                        'sitekey': this.v2sitekey,
                        'callback': function callback(aNw) {
                            aUT._2CL5d245f3c3f20196f(aNv, aNw);
                        },
                        'theme': 'dark',
                        'tabindex': -1
                    };
                    this.gr_renders[aNv] = grecaptcha.render(this.captchaScreen_elms[aNv], aUV);
                } else
                    grecaptcha.reset(aNw);
            }
            _2CL5d245f3c3f20196f(aNv, aNw) {
                aT1.sendRecaptchaToken(aNv, aNw);
                this.captchaScreen_elms[aNv]['style']['display'] = 'none';
                this._2CLa6f1d546f5ae2d9d--;
                this._2CL87563560028c947f(), document.body.focus();
            }
            _2CLa5f961f14f197d01() {
                var aUZ = this;
                this._2CL6fe1f736b5887665 = !0, requestAnimationFrame(function () {
                    aUZ._2CL6fe1f736b5887665 && (aUZ.captchaScreen_elm.style.display = 'flex'), requestAnimationFrame(function () {
                        aUZ._2CL6fe1f736b5887665 && (aUZ.captchaScreen_elm.style.opacity = '1');
                    });
                });
            }
            _2CL87563560028c947f() {
                var aV0 = this;
                this._2CLa6f1d546f5ae2d9d || (this._2CL6fe1f736b5887665 = !1, requestAnimationFrame(function () {
                    aV0._2CL6fe1f736b5887665 || (aV0.captchaScreen_elm.style.opacity = '0'), setTimeout(function () {
                        aV0._2CL6fe1f736b5887665 || (aV0.captchaScreen_elm.style.display = 'none');
                    }, 500);
                }));
            }
        }();
        var aV1 = class {
            constructor(aNv) {
                this.some_elment = aNv;
                this._2CL40f1effde591032b = aNv.querySelector('.name');
                this._2CLb227c42c3785f254 = aNv.querySelector('.position');
                this._2CLb54037bcc957df7d = !1;
            }
            _2CLa5f961f14f197d01() {
                this._2CLb54037bcc957df7d || (this.some_elment.style.display = 'flex', this._2CLb54037bcc957df7d = !0);
            }
            _2CL87563560028c947f() {
                this._2CLb54037bcc957df7d && (this.some_elment.style.display = 'none', this._2CLb54037bcc957df7d = !1);
            }
            _2CL9b395079675c6a66(aNv) {
                this._2CL40f1effde591032b.innerText = aNv;
            }
            _2CL9b395079675c6a66() {
                return this._2CL40f1effde591032b.innerText;
            }
            _2CL0ab787605ed5ed16(aNv) {
                this._2CLb227c42c3785f254.innerText = aNv;
            }
            _2CL0ab787605ed5ed16() {
                return this._2CLb227c42c3785f254.innerText;
            }
        };
        const playerCounter = new class {
            constructor() {
                this.playerCount = 0;
                this.element = document.getElementById('player-count');
                this.hud = document.getElementById('player-count-hud');
            }
            set count(c) {
                if (c < 10) {
                    this.hud.style.opacity = 0;
                } else {
                    this.hud.style.opacity = 1;
                }
                this.playerCount = c;
                this.element.innerText = c;
            }
        }();
        var aV6 = new class {
            constructor() {
                this.some_elment = document.getElementById('leaderboard');
                this._2CL7792df4672c48c6b = [];
                this._2CL534bdaddf4709161 = [];
            }
            _2CL52a96de0605b8df2() {
                var aNv = this.some_elment.children;
                var aV9 = !![];
                var aVa = ![];
                var aVb = undefined;
                try {
                    for (var aVc = aNv[Symbol.iterator](), aVd; !(aV9 = (aVd = aVc.next())['done']); aV9 = !![]) {
                        var aVe = aVd.value;
                        var aVf = new aV1(aVe);
                        this._2CL7792df4672c48c6b.push(aVf);
                    }
                } catch (aVg) {
                    aVa = !![];
                    aVb = aVg;
                } finally {
                    try {
                        if (!aV9 && aVc.return != null) {
                            aVc.return();
                        }
                    } finally {
                        if (aVa) {
                            throw aVb;
                        }
                    }
                }
            }
            _init_hatena() {
                this._2CL534bdaddf4709161 = [];
            }
            _2CLe43c1387b0e5691a(aNv) {
                this._2CL534bdaddf4709161.push(aNv);
            }
            _2CLcc32da8337a77c45() {
                var aNv = aPB._2CL96f6ff1c5aa799eb;
                for (var aVj = 0; aVj < this._2CL7792df4672c48c6b.length; aVj++) {
                    var aVk = this._2CL7792df4672c48c6b[aVj], aVl = this._2CL534bdaddf4709161[aVj], aVm = b4H._2CL0c41771ea37dff55[aVj];
                    aVl ? (aVk._2CLa5f961f14f197d01(), aVk._2CL9b395079675c6a66 = aVm._2CLc4ec52a346e0cbd2 && aNv ? ''['concat'](aVl, ' [')['concat'](aVm._2CL30c87194157e4b27, ']') : aVl, aVk._2CL0ab787605ed5ed16 = (aVj + 101)['toString']()['slice'](-2)) : aVk._2CL87563560028c947f();
                }
            }
        }();
        var aVn = document.getElementById('notification-html'), aVo = function aVo(aNv, aNw, aNx, aNy) {
            var aNz = aVn.content.children[0]['cloneNode'](!0);
            return aNz.classList.add(aNv), aNz.querySelector('.icon > i')['innerText'] = aNw, aNz.querySelector('.main > .title')['innerText'] = aNx, aNz.querySelector('.main > .content')['innerText'] = aNy, aNz;
        };
        var aVu = class {
            constructor(aNv, aNw, aNx, aNy) {
                this._2CLeea645c0840743f7 = aVo(aNv, aNw, aNx, aNy), this._2CL901a6b96dbc8033f = '';
            }
            _2CL87563560028c947f() {
                var aVA = this;
                'hiding' !== this._2CL901a6b96dbc8033f && 'hidden' !== this._2CL901a6b96dbc8033f && (this._2CL901a6b96dbc8033f = 'hiding', requestAnimationFrame(function () {
                    'hiding' === aVA._2CL901a6b96dbc8033f && (aVA._2CLeea645c0840743f7.style.opacity = '0', setTimeout(function () {
                        'hiding' === aVA._2CL901a6b96dbc8033f && (aVA._2CLeea645c0840743f7.style.display = 'none', aVA._2CL901a6b96dbc8033f = 'hidden');
                    }, 500));
                }));
            }
            _2CLe3ccf39294a33320() {
                var aVB = this;
                this._2CLeea645c0840743f7.style.transition = 'all 0.5s, transform 0s', this._2CLeea645c0840743f7.style.transform = 'translateX(-'['concat'](this._2CLeea645c0840743f7.clientWidth + 5, 'px)'), requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        aVB._2CLeea645c0840743f7.style.transition = 'all 0.5s', aVB._2CLeea645c0840743f7.style.transform = 'translateX(0px)';
                    });
                });
            }
            _2CLf822adaa0b5213cc(aNv) {
                var aVD = this;
                setTimeout(function () {
                    aVD._2CL87563560028c947f();
                }, aNv);
            }
        };
        var aVE = new class {
            constructor() {
                this._2CLc1bfadcfb8498cd0 = document.getElementById('chatroom'), this._2CL4180b2d55d213155 = document.getElementById('chatroom-message-html');
            }
            _2CL52a96de0605b8df2() {
                new aOs.a(this._2CLc1bfadcfb8498cd0, { 'wheelPropagation': !1 });
            }
            _2CL8d112e732fb46d91(aNv, aNw, aNx, aNy) {
                var aNz = this._2CL4180b2d55d213155.content.children[0]['cloneNode'](!0);
                return aNz.classList.add(aNv), aNz.querySelector('i')['innerText'] = aNw, aNz.querySelector('.time')['innerText'] = this._2CL8786201a5c093134(), aNz.querySelector('.title')['innerText'] = aNx, aNz.querySelector('.content')['innerText'] = aNy, aNz;
            }
            _2CLe6a39bb1bb506a37(aNv, aNw, aNx, aNy) {
                var aNz = this._2CL8d112e732fb46d91(aNv, aNw, aNx, aNy);
                this._2CLc1bfadcfb8498cd0.appendChild(aNz), this._2CLc1bfadcfb8498cd0.scrollTop = this._2CLc1bfadcfb8498cd0.scrollHeight;
            }
            _2CL8786201a5c093134() {
                var aNv = new Date();
                return ''['concat']('0'['concat'](aNv.getHours())['slice'](-2), ':')['concat']('0'['concat'](aNv.getMinutes())['slice'](-2));
            }
        }();
        var Toast = Settings.Endy.Toast = new class {
            constructor() {
                this._2CLc1bfadcfb8498cd0 = document.getElementById('notifications'), this._2CLbaf021a7fd7734ae = {
                    '_2CL2c6daad6dc0e911b': 10,
                    '_2CL553987ac9eee434e': 7000
                }, this._2CL0c2516bdbb4e19ba = [];
            }
            _2CL6b490a3787fbcaf1(aNv, aNw, aNx) {
                this._2CL372f5bcb71056a4d('normal', aNv, aNw, aNx);
            }
            showToast(aNv, aNw, aNx) {
                this._2CL372f5bcb71056a4d('alert', aNv, aNw, aNx);
            }
            _2CLd2948436a49d2833(aNv, aNw, aNx) {
                this._2CL372f5bcb71056a4d('system', aNv, aNw, aNx);
            }
            chat_fn(aNv, aNw) {
                this._2CL372f5bcb71056a4d('normal', 'question_answer', aNv, aNw);
            }
            _2CLefc550a8476f0d48(aNv, aNw) {
                this._2CL372f5bcb71056a4d('alert', 'info', aNv, aNw);
            }
            _2CL141566c09bc61f6f(aNv) {
                this._2CL372f5bcb71056a4d('system', 'trip_origin', 'HSLO', aNv);
            }
            _2CL372f5bcb71056a4d(aNv, aNw, aNx, aNy) {
                if ('popup' === aPB._2CL25fc81b383ec3bd4) {
                    var aWb = new aVu(aNv, aNw, aNx, aNy);
                    this._2CLe43c1387b0e5691a(aWb);
                }
                aVE._2CLe6a39bb1bb506a37(aNv, aNw, aNx, aNy);
            }
            _2CLe43c1387b0e5691a(aNv) {
                if (this._2CL0c2516bdbb4e19ba.push(aNv), this._2CLc1bfadcfb8498cd0.appendChild(aNv._2CLeea645c0840743f7), aNv._2CLe3ccf39294a33320(), aNv._2CLf822adaa0b5213cc(this._2CLbaf021a7fd7734ae._2CL553987ac9eee434e), this._2CL0c2516bdbb4e19ba.length > this._2CLbaf021a7fd7734ae._2CL2c6daad6dc0e911b + 1) {
                    var aWd = this._2CL0c2516bdbb4e19ba.shift();
                    this._2CLc1bfadcfb8498cd0.removeChild(aWd._2CLeea645c0840743f7);
                }
                this._2CL0c2516bdbb4e19ba.length > this._2CLbaf021a7fd7734ae._2CL2c6daad6dc0e911b && this._2CL0c2516bdbb4e19ba[this._2CL0c2516bdbb4e19ba.length - 1 - this._2CLbaf021a7fd7734ae._2CL2c6daad6dc0e911b]['_2CL87563560028c947f']();
            }
        }();
        var aWe = new class {
            constructor() {
            }
            _2CL062a4846d759f87d(aNv, aNw) {
                aRV._2CLbaf10d0df76c4140(aNv, aNw), this._2CL0d88847754015168(aNv, aNw);
            }
            _2CL0d88847754015168(aNv, aNw) {
                var aNx = new aU8(aNw);
                switch (aNx.getUint8()) {
                    case 17:
                        this.handleMessage17(aNv, aNx);
                        break;
                    case 18:
                        this.handleWorldReset(aNv);
                        break;
                    case 32:
                        this.handleMessage32(aNv, aNx);
                        break;
                    case 53:
                        this.getLeaderboardFFA(aNv, aNx);
                        break;
                    case 54:
                        this.getLeaderboard(aNv, aNx);
                        break;
                    case 85:
                        aUQ.handleRecaptchaRequest(aNv);
                        break;
                    case 114:
                        Toast.showToast('info', 'Game server', 'Spectate mode slots are full.');
                        break;
                    case 226:
                        this.handlePing(aNv, aNx);
                        break;
                    case 241:
                        this.handleKeySeed(aNv, aNx);
                        break;
                    case 255:
                        this.handleCompressedMessage(aNv, aNx);
                        break;
                    case 69:
                        this.handleMinimapData(aNv, aNx);
                }
            }
            handleMessage17(aNv, aNw) {
                if (aNv >= 2)
                    return;
                var aNx = b2u.posOffset_kamo[aNv];
                aSL._2CLe21f084957807b9b.xPos_kamo = aNw.getFloat32() - aNx.xPos_kamo, aSL._2CLe21f084957807b9b.yPos_kamo = aNw.getFloat32() - aNx.yPos_kamo, aSL._2CL755029166bd8a108 = aNw.getFloat32();
            }
            handleWorldReset(aNv) {
                aRV.shiftDecryptionKey(aNv), b2u._init_hatena(aNv);
            }
            handleMessage32(aNv, aNw) {
                var aNx = aNw.getUint32();
                b2u._2CL73b849d5e2ea1020[aNv]['add'](aNx);
            }
            getLeaderboardFFA(aNv, aNw) {
                if (1 === aNv && b18.getReadyState_fn(0))
                    return;
                aV6._init_hatena();
                var aNx = 0;
                let total = 0;
                for (; !aNw.endOfBuffer;) {
                    total++;
                    var aWw = aNw.getUint8();
                    aNx = 1 & aWw ? aNw.getUint16() : aNx + 1;
                    var aWx = 'unnamed cell';
                    2 & aWw && (aWx = aNw.readUTF8string(), aWx = aU8._2CLcf339f95dc981425(aWx)), 4 & aWw && aNw.getUint32(), 8 & aWw && (aWx = b3Y._2CL42b7a092ff6d6463(aNv)), aV6._2CLe43c1387b0e5691a(aWx);
                }
                playerCounter.count = total;
            }
            getLeaderboard(aNv, aNw) {
                if (1 === aNv && b18.getReadyState_fn(0))
                    return;
                aV6._init_hatena();
                var aNx = 0;
                let total = 0;
                for (aNw.getUint16(); !aNw.endOfBuffer;) {
                    total++;
                    var aWB = aNw.getUint8();
                    aNx = 1 & aWB ? aNw.getUint16() : aNx + 1;
                    var aWC = 'unnamed cell';
                    2 & aWB && (aWC = aNw.readUTF8string(), aWC = aU8._2CLcf339f95dc981425(aWC)), 4 & aWB && aNw.getUint32(), 8 & aWB && (aWC = b3Y._2CL42b7a092ff6d6463(aNv)), aV6._2CLe43c1387b0e5691a(aWC);
                }
                playerCounter.count = total;
            }
            handleKeySeed(tabId, aNw) {
                var key = aNw.getUint32();
                aRV.decryptionKey_obj[tabId] = key;
                var aNy = aNw.readUTF8string();
                aRV.serverToken_fn(tabId, b18.gameServer_url, aNy), aT1._2CL0ace867fb8fdbdd5(tabId);
                if (Settings.Endy.specAssistType != 'none' && tabId > 1 && document.getElementById('gamemode').value == ':party') {
                    if (Settings.Endy.specAssistType == 'fullmap') {
                        setTimeout(() => {
                            aT1.sendSpectatePacket(tabId);
                            aT1.switchSpectateMode(tabId);
                            aT1.sendMovePacket(spectatePoints[tabId - 2].x, spectatePoints[tabId - 2].y, tabId);
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            aT1.sendSpectatePacket(2);
                        }, 1000);
                    }
                }
            }
            handleCompressedMessage(aNv, aNw) {
                switch (aNw.decompressMessage(), aNw.getUint8()) {
                    case 16:
                        this.handleViewportData(aNv, aNw);
                        break;
                    case 64:
                        this.handleBorderData(aNv, aNw);
                }
            }
            handleMinimapData(aNv, aNw) {
                var aNx = aNw.getUint16(), aNy = b2u.posOffset_kamo[aNv];
                for (var aWN = 0; aWN < aNx; aWN++) {
                    var aWO = aNw.getInt32() - aNy.xPos_kamo, aWP = aNw.getInt32() - aNy.yPos_kamo, aWQ = aNw.getUint32();
                    aNw.getUint8(), b4H._2CL9b1a842a3938b70d(aWN)['_2CLcc32da8337a77c45'](aWO, aWP, aWQ);
                }
            }
            handleViewportData(aNv, aNw) {
                aOr.pf_now_upd();
                const HSE = Settings.Endy;
                const USE_SPEC_ASSIST = currentAssistMode != 'none';
                var aNx = aNw.getUint16();
                for (var aWU = 0; aWU < aNx | 0; aWU = aWU + 1 | 0) {
                    var aWV = aNw.getUint32(), aWW = aNw.getUint32();
                    b2u._2CL6b81dcda3856c9e4(aNv, aWV, aWW);
                    if (USE_SPEC_ASSIST && aNv < 2) {
                        let index = boxSize[aNv].ids.indexOf(aWW);
                        if (index !== -1) {
                            boxSize[aNv].ids.splice(index, 1);
                            boxSize[aNv].xPosArray.splice(index, 1);
                            boxSize[aNv].yPosArray.splice(index, 1);
                        }
                    }
                }
                for (; !aNw.endOfBuffer;) {
                    var aWX = aNw.getUint32();
                    if (0 === aWX)
                        break;
                    var aWY = aNw.getInt32(), aWZ = aNw.getInt32(), aX0 = aNw.getUint16();
                    if (HSE.enableDisappearFade && disappearedEntities.has(aWX))
                        disappearedEntities.delete(aWX);
                    if (USE_SPEC_ASSIST) {
                        if (aNv < 2) {
                            let hasId = boxSize[aNv].ids.indexOf(aWX);
                            if (hasId !== -1) {
                                boxSize[aNv].xPosArray[hasId] = aWY;
                                boxSize[aNv].yPosArray[hasId] = aWZ;
                            } else {
                                boxSize[aNv].xPosArray.push(aWY);
                                boxSize[aNv].yPosArray.push(aWZ);
                                boxSize[aNv].ids.push(aWX);
                            }
                        }
                    }
                    var aX1 = b2u.getNode_fn(aNv, aWX) || b2u._2CL6381b1091a381875(aNv, aWX, aWY, aWZ, aX0);
                    aX1._2CLcc32da8337a77c45(aWY, aWZ, aX0);
                    var flags = aNw.getUint8(), extendedFlags = 128 & flags ? aNw.getUint8() : 0;
                    if (aX1._2CL22c774a2efca930d = 1 & flags, 2 & flags) {
                        var aX4 = aNw.getUint8(), aX5 = aNw.getUint8(), aX6 = aNw.getUint8();
                        aX1._2CL1849df6af84c6815._2CLcc32da8337a77c45(aX4, aX5, aX6);
                    }
                    4 & flags && (aX1.vanillaSkinName = aNw.readUTF8string()), 8 & flags && (aX1._2CL8ac401cc9f1e8785 = aU8._2CLcf339f95dc981425(aNw.readUTF8string())), aX1.isEjected = 32 & flags, aX1.isFood = 1 & extendedFlags, aX1.isFriend = 2 & extendedFlags, 4 & extendedFlags && (aX1._2CLca1d851200c68582 = aNw.getUint32());
                }
                var aNy = aNw.getUint16();
                for (var aX8 = 0; aX8 < aNy | 0; aX8 = aX8 + 1 | 0) {
                    var aX9 = aNw.getUint32();
                    if (HSE.enableDisappearFade) {
                        const entityInfo = b2u.getNode_fn(aNv, aX9);
                        if (entityInfo && (entityInfo.isFood || entityInfo._2CL22c774a2efca930d || entityInfo.isEjected))
                            b2u.removeDisappearedEntity(aNv, aX9);
                        else if (entityInfo)
                            disappearedEntities.set(aX9, {
                                opacity: 1,
                                createdAt: Date.now()
                            });
                    } else {
                        b2u.removeDisappearedEntity(aNv, aX9);
                    }
                    if (USE_SPEC_ASSIST && aNv < 2) {
                        let index = boxSize[aNv].ids.indexOf(aX9);
                        if (index !== -1) {
                            boxSize[aNv].ids.splice(index, 1);
                            boxSize[aNv].xPosArray.splice(index, 1);
                            boxSize[aNv].yPosArray.splice(index, 1);
                        }
                    }
                }
                if (USE_SPEC_ASSIST && aNv < 2 && boxSize[aNv].xPosArray.length > 0) {
                    let offset = b2u.posOffset_kamo[aNv];
                    boxSize[aNv].maxX = boxSize[aNv].xPosArray.reduce(arrayMax) - offset.xPos_kamo;
                    boxSize[aNv].maxY = boxSize[aNv].yPosArray.reduce(arrayMax) - offset.yPos_kamo;
                    boxSize[aNv].minX = boxSize[aNv].xPosArray.reduce(arrayMin) - offset.xPos_kamo;
                    boxSize[aNv].minY = boxSize[aNv].yPosArray.reduce(arrayMin) - offset.yPos_kamo;
                }
            }
            handleBorderData(aNv, aNw) {
                var aNx = 0 | aNw.getFloat64(), aNy = 0 | aNw.getFloat64(), aNz = 0 | aNw.getFloat64(), aNA = 0 | aNw.getFloat64();
                b2u.handleBorder(aNv, aNx, aNy, aNz, aNA);
            }
            handlePing(aNv, aNw) {
                var aNx = aNw.getUint16();
                aT1.ping_ayoGG(aNv, aNx);
            }
        }(), aWf = new aQt.a.Store();
        var aXj = new class extends aQ6 {
            constructor() {
                super();
                this._2CL9f2ef7144b608121 = !1, this._2CLf13bbd1f51712f3e = {
                    'appId': 677505792353827,
                    'cookie': !0,
                    'xfbml': !0,
                    'status': !0,
                    'version': 'v3.2'
                };
                return this;
            }
            _2CL52a96de0605b8df2() {
                var aXn = this;
                FB.init(this._2CLf13bbd1f51712f3e), setTimeout(function () {
                    FB.getLoginStatus(function (aNv) {
                        aXn._2CL57be23b4f2903f3f(aNv);
                    });
                }, 0);
            }
            _2CL2d2649677c494e95() {
                var aXp = this;
                this._2CL9f2ef7144b608121 ? this._2CLc7ee1189203064a1('error', 'User is already logged in.') : FB.login(function (aNv) {
                    aXp._2CL57be23b4f2903f3f(aNv);
                }, { 'scope': 'public_profile, email' });
            }
            _2CL57be23b4f2903f3f(aNv) {
                aNv.authResponse ? (this._2CL9f2ef7144b608121 = !0, this._2CLc7ee1189203064a1('login-status', !0), this._2CLc7ee1189203064a1('token', aNv.authResponse.accessToken)) : this._2CLc7ee1189203064a1('error', 'Failed to login.');
            }
            _2CL4129178313584d3d() {
                var aXs = this;
                this._2CL9f2ef7144b608121 || this._2CLc7ee1189203064a1('error', 'User is not logged in.'), FB.logout(function (aNv) {
                    aXs._2CLd57274af65177f6e(aNv);
                });
            }
            _2CLd57274af65177f6e(aNv) {
                aNv.authResponse ? (this._2CL9f2ef7144b608121 = !1, this._2CLc7ee1189203064a1('login-status', !1), this._2CLc7ee1189203064a1('token', !1)) : this._2CLc7ee1189203064a1('error', 'Failed to logout.');
            }
        }();
        var aXv = new class extends aQ6 {
            constructor() {
                super();
                this._2CL9f2ef7144b608121 = !1, this._2CLf13bbd1f51712f3e = {
                    'client_id': '686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com',
                    'cookiepolicy': 'single_host_origin',
                    'scope': 'https://www.googleapis.com/auth/plus.login email',
                    'app_package_name': 'com.miniclip.agar.io'
                };
                return this;
            }
            _2CL52a96de0605b8df2() {
                var aXz = this;
                gapi.load('auth2', function () {
                    aXz._2CLe6ffb660924e12cd();
                });
            }
            _2CLe6ffb660924e12cd() {
                var aXA = this;
                var aNv = gapi.auth2.init(this._2CLf13bbd1f51712f3e);
                aNv.isSignedIn.listen(function (aNv) {
                    aXA._2CLb806bfbd077a34ea(aNv);
                }), aNv.currentUser.listen(function (aNv) {
                    aXA._2CLc8cdab7c9be060ba(aNv);
                }), aNv.isSignedIn.get() && aNv.signIn();
            }
            _2CLb806bfbd077a34ea(aNv) {
                this._2CL9f2ef7144b608121 = aNv, this._2CLc7ee1189203064a1('login-status', aNv);
            }
            _2CLc8cdab7c9be060ba(aNv) {
                var aNw = aNv.getAuthResponse(!0), aNx = aNw && aNw.id_token;
                aNx ? this._2CLc7ee1189203064a1('token', aNx) : this._2CLc7ee1189203064a1('error', 'Failed to login.');
            }
            _2CL2d2649677c494e95() {
                this._2CL9f2ef7144b608121 ? this._2CLc7ee1189203064a1('error', 'User is already logged in.') : gapi.auth2.getAuthInstance()['signIn']();
            }
            _2CL4129178313584d3d() {
                this._2CL9f2ef7144b608121 || this._2CLc7ee1189203064a1('error', 'User is not logged in.'), gapi.auth2.getAuthInstance()['signOut'](), this._2CLc7ee1189203064a1('token', !1);
            }
        }();
        var aXI = new class {
            constructor() {
                this.some_elment = document.getElementById('accounts-menu'), this._2CL1fee7164919d6e90 = document.getElementById('login-facebook'), this._2CL6a6e9614b2117aa6 = document.getElementById('login-google-plus'), this._2CL6fe1f736b5887665 = !1, this._2CL2540eafa0eaa62cf = '';
            }
            _2CL52a96de0605b8df2() {
                aXj._2CL52a96de0605b8df2(), aXv._2CL52a96de0605b8df2(), this._2CLc25816f86f13db82();
            }
            _2CLc25816f86f13db82() {
                var aXK = this;
                document.getElementById('open-accounts-menu')['addEventListener']('click', function () {
                    aXK._2CLa5f961f14f197d01();
                }, { 'passive': !0 }), document.getElementById('close-accounts-menu')['addEventListener']('click', function () {
                    aXK._2CL87563560028c947f();
                }, { 'passive': !0 });
                var aNv = document.getElementById('primary-account'), aNw = aWf.get('misc', 'primary-account');
                aNw && (aNv.value = aNw), this._2CL5954cb4625bfa43c = aNv.value, aNv.addEventListener('change', function () {
                    aXK._2CL5954cb4625bfa43c = aNv.value, aWf.set('misc', 'primary-account', aXK._2CL5954cb4625bfa43c), (b18.getReadyState_fn(0) || b18.getReadyState_fn(1)) && Toast.showToast('info', 'HSLO', 'Please rejoin the lobby!');
                }, { 'passive': !0 }), this._2CL1fee7164919d6e90.addEventListener('click', function () {
                    aXj._2CL9f2ef7144b608121 ? aXj._2CL4129178313584d3d() : aXj._2CL2d2649677c494e95();
                }, { 'passive': !0 }), this._2CL6a6e9614b2117aa6.addEventListener('click', function () {
                    aXv._2CL9f2ef7144b608121 ? aXv._2CL4129178313584d3d() : aXv._2CL2d2649677c494e95();
                }, { 'passive': !0 }), aXj._2CL385f5d49967fe353('login-status', function (aNv) {
                    aXK._2CLc4d0425fbc577b01(aNv);
                }), aXj._2CL385f5d49967fe353('token', function (aNv) {
                    aT1._2CL0210d1c1c1cef041(0, 2, aNv);
                }), aXv._2CL385f5d49967fe353('login-status', function (aNv) {
                    aXK._2CL9805dff2db657b18(aNv);
                }), aXv._2CL385f5d49967fe353('token', function (aNv) {
                    aT1._2CL0210d1c1c1cef041(1, 4, aNv);
                });
            }
            _2CLc4d0425fbc577b01(aNv) {
                var aNw = this._2CL1fee7164919d6e90.querySelector('span');
                aNv ? (aNw.innerText = 'Logout from Facebook', Toast._2CLd2948436a49d2833('person', 'Facebook', 'Logged in.')) : (aNw.innerText = 'Login with Facebook', Toast._2CLd2948436a49d2833('person', 'Facebook', 'Logged out.'));
            }
            _2CL9805dff2db657b18(aNv) {
                var aNw = this._2CL6a6e9614b2117aa6.querySelector('span');
                aNv ? (aNw.innerText = 'Logout from Google+', Toast._2CLd2948436a49d2833('person', 'Google+', 'Logged in.')) : (aNw.innerText = 'Login with Google+', Toast._2CLd2948436a49d2833('person', 'Google+', 'Logged out.'));
            }
            _2CLa5f961f14f197d01() {
                var aXV = this;
                this._2CL6fe1f736b5887665 = !0, requestAnimationFrame(function () {
                    aXV._2CL6fe1f736b5887665 && (aXV.some_elment.style.display = 'flex'), requestAnimationFrame(function () {
                        aXV._2CL6fe1f736b5887665 && (aXV.some_elment.style.opacity = '1');
                    });
                });
            }
            _2CL87563560028c947f() {
                var aXW = this;
                this._2CL6fe1f736b5887665 = !1, requestAnimationFrame(function () {
                    aXW._2CL6fe1f736b5887665 || (aXW.some_elment.style.opacity = '0'), setTimeout(function () {
                        aXW._2CL6fe1f736b5887665 || (aXW.some_elment.style.display = 'none');
                    }, 500);
                });
            }
            _2CL46e2b32c63641c78() {
                return 'facebook' === this._2CL5954cb4625bfa43c ? 0 : 1;
            }
            _2CL5954cb4625bfa43c() {
                return this._2CL2540eafa0eaa62cf;
            }
            _2CL5954cb4625bfa43c(aNv) {
                this._2CL2540eafa0eaa62cf = aNv;
                var aNw = document.getElementById('profiles-catalogue'), aNx = document.querySelector('.player-data-box');
                aNw.setAttribute('primary', aNv), aNx.setAttribute('primary', aNv);
            }
        }();
        var aY0 = new class {
            constructor() {
                this._2CL06ecdacc5326d193 = document.getElementById('toggle-multibox'), this.multibox_bool = !1, this._2CLe05c5ba9ef263da8 = !1;
            }
            _2CL52a96de0605b8df2() {
                var aY2 = this;
                var aNv = aWf.get('misc', 'multibox');
                void 0 !== aNv && (this._2CLeb21482a8346145a = aNv), this._2CL06ecdacc5326d193.addEventListener('click', function () {
                    aY2._2CLf4b9553a318e4862();
                }, { 'passive': !0 });
            }
            _2CLf4b9553a318e4862() {
                var aY4 = this;
                if (':party' !== b1F._2CL1b376b18827dbb14)
                    return void Toast._2CLd2948436a49d2833('trip_origin', 'HSLO', 'Multibox mode is only supported in Party mode.');
                if (this._2CLe05c5ba9ef263da8)
                    return;
                this._2CLe05c5ba9ef263da8 = !0, Toast.showToast('info', 'Warning', 'You will be reconnected to any currently connected lobby. Click again to continue.');
                var aNv = function aNv() {
                    aY4._2CLeb21482a8346145a = !aY4._2CLeb21482a8346145a, aY4._2CLe05c5ba9ef263da8 = !1;
                };
                this._2CL06ecdacc5326d193.addEventListener('click', aNv, {
                    'passive': !0,
                    'once': !0
                }), setTimeout(function () {
                    aY4._2CL06ecdacc5326d193.removeEventListener('click', aNv), aY4._2CLe05c5ba9ef263da8 = !1;
                }, Toast._2CLbaf021a7fd7734ae._2CL553987ac9eee434e);
            }
            _2CL7985cc4be4e238f9() {
                var aNv = document.querySelectorAll('[multibox]');
                for (var aY7 = 0; aY7 < aNv.length; aY7++) {
                    aNv[aY7]['setAttribute']('multibox', 'off');
                }
                Toast._2CLd2948436a49d2833('hdr_weak', 'HSLO', 'Multibox mode is off.');
            }
            _2CL71ff08eabacd9a2c() {
                var aNv = document.querySelectorAll('[multibox]');
                for (var aY9 = 0; aY9 < aNv.length; aY9++) {
                    aNv[aY9]['setAttribute']('multibox', 'on');
                }
                Toast._2CLd2948436a49d2833('hdr_weak', 'HSLO', 'Multibox mode is on.');
            }
            _2CLeb21482a8346145a(aNv) {
                this.multibox_bool = aNv, aWf.set('misc', 'multibox', aNv), aNv ? this._2CL71ff08eabacd9a2c() : this._2CL7985cc4be4e238f9(), b18.gameServer_url && b18._2CLe43e55a05f37528c(b18.gameServer_url);
            }
            _2CLeb21482a8346145a() {
                return this.multibox_bool;
            }
        }();
        var aYb = class {
            constructor(aNv, aNw, aNx) {
                this.cellId_kamo = aNv, this._2CLe58b4b753f473597 = aNw, this._2CL7b047b1f72f109f9 = aNx, this._2CL8ac401cc9f1e8785 = [
                    '',
                    ''
                ], this._2CLac9df252d711bd1c = [
                    '',
                    ''
                ], this._2CL1849df6af84c6815 = [
                    new aPC.Color_c(),
                    new aPC.Color_c()
                ], this._2CLa8da637215ed8fdd = [
                    !1,
                    !1
                ], this._2CL30c87194157e4b27 = [
                    0,
                    0
                ], this._2CLb1c42d66c16f86da = [
                    0,
                    0
                ], this._2CLd05d044fd22f995b = [
                    0,
                    0
                ], this._2CLb004b0674dcd79f3 = [
                    0,
                    0
                ], this._2CLda74a55e5331ea56 = [
                    0,
                    0
                ], this._2CLba1475f59fd170cd = [
                    0,
                    0
                ], this._2CL714c70296f8e5724 = [
                    0,
                    0
                ], this._2CLde1a13e8cb17e51d = [
                    0,
                    0
                ];
            }
            _2CL44e8323f018543e3(aNv) {
                return b1F._2CL0ad31caf5e3d7f73 ? this._2CL8ac401cc9f1e8785[aNv] + this._2CL1849df6af84c6815[aNv]['_2CL4946b0b8bf5e3580'] : this._2CL8ac401cc9f1e8785[aNv];
            }
            _2CLba02dd97aca1c8d3(aNv, aNw, aNx) {
                switch (aNw) {
                    case 0:
                        this._2CLac9df252d711bd1c[aNv] = '';
                        break;
                    case 1:
                        this._2CLac9df252d711bd1c[aNv] = 'https://i.imgur.com/'['concat'](aNx, '.png');
                }
            }
            _2CLcc32da8337a77c45(aNv, aNw, aNx, aNy) {
                this._2CLb732806230c52119(aNv), this._2CLba1475f59fd170cd[aNv] = this._2CLb004b0674dcd79f3[aNv], this._2CL714c70296f8e5724[aNv] = this._2CLda74a55e5331ea56[aNv], this._2CLb1c42d66c16f86da[aNv] = aNw, this._2CLd05d044fd22f995b[aNv] = aNx, this._2CL30c87194157e4b27[aNv] = aNy, this._2CLde1a13e8cb17e51d[aNv] = aOr.pf_now_kamo;
            }
            _2CLb732806230c52119(aNv) {
                var aNw = (aOr.pf_now_kamo - this._2CLde1a13e8cb17e51d[aNv]) / 1000;
                aNw = aNw > 1 ? 1 : aNw < 0 ? 0 : aNw, this._2CLb004b0674dcd79f3[aNv] = this._2CLba1475f59fd170cd[aNv] + (this._2CLb1c42d66c16f86da[aNv] - this._2CLba1475f59fd170cd[aNv]) * aNw, this._2CLda74a55e5331ea56[aNv] = this._2CL714c70296f8e5724[aNv] + (this._2CLd05d044fd22f995b[aNv] - this._2CL714c70296f8e5724[aNv]) * aNw;
            }
        };
        var aYq = class {
            constructor(aNv) {
                this._2CL4fdf6e63affbf9ed = new Audio(aNv);
            }
            _2CLee6c3b3f6f747fd6() {
                aPB._2CLf35f0ef6d3090119 && (this._2CL4fdf6e63affbf9ed.currentTime = 0, this._2CL4fdf6e63affbf9ed.play());
            }
            _2CL1d43b173e8f95745() {
                this._2CL4fdf6e63affbf9ed.pause();
            }
        };
        var aYt = new (function () {
            function aYu() {
                _classCallCheck(this, aYu);
                this._2CLbe66e34185726a39 = new aYq(NotifSound), this._2CL9b17a7e001fc9274 = new aYq(ChatSound);
            }
            return aYu;
        }())();
        var aYv = new class {
            constructor() {
                this._2CL1627e8a692645e68 = new Map(), this._2CL59e76edc8173405f = new Map(), this.selfID_kamo = -1, this._2CL01cdc4c56f3c16bc = new aYb(-1, '');
            }
            _2CL52a96de0605b8df2() {
                b0e._2CLe43e55a05f37528c(), setInterval(function () {
                    b0l._2CL244fe1e06ace6919();
                }, 1000);
            }
            _init_hatena() {
                this._2CL1627e8a692645e68.clear(), this._2CL59e76edc8173405f.clear(), this.selfID_kamo = -1;
            }
            _2CLa2401f3a6e826384(aNv) {
                if (aNv === this.selfID_kamo)
                    for (var aYy = 0; aYy < 2; aYy++) {
                        this._2CL01cdc4c56f3c16bc._2CLa8da637215ed8fdd[aYy] = !1;
                    }
                else
                    this._2CL1627e8a692645e68.delete(aNv);
            }
            _2CL771f42f2e56ba112(aNv) {
                return aNv === this.selfID_kamo ? this._2CL01cdc4c56f3c16bc : this._2CL1627e8a692645e68.get(aNv) || this._2CL590987bd6e227033(aNv);
            }
            _2CL590987bd6e227033(aNv, aNw) {
                var aNx = this._2CL59e76edc8173405f.get(aNw);
                if (aNv === this.selfID_kamo) {
                    for (var aYD = 0; aYD < 2; aYD++) {
                        this._2CL01cdc4c56f3c16bc._2CLa8da637215ed8fdd[aYD] = !1;
                    }
                    return this._2CL01cdc4c56f3c16bc._2CLe58b4b753f473597 = aNw, this._2CL01cdc4c56f3c16bc._2CL7b047b1f72f109f9 = aNx, this._2CL01cdc4c56f3c16bc;
                }
                {
                    var aYE = new aYb(aNv, aNw, aNx);
                    return this._2CL1627e8a692645e68.set(aNv, aYE), aYE;
                }
            }
            _2CLd23b80a83838ebeb(aNv, aNw) {
                this._2CL59e76edc8173405f.set(aNv, aNw);
            }
            _2CL747ad4c6110d5907(aNv) {
                this._2CL59e76edc8173405f.delete(aNv);
                var aYI = !![];
                var aYJ = ![];
                var aYK = undefined;
                try {
                    for (var aYL = this._2CL1627e8a692645e68[Symbol.iterator](), aYM; !(aYI = (aYM = aYL.next())['done']); aYI = !![]) {
                        var aYN = _slicedToArray(aYM.value, 2), aYO = aYN[0], aYP = aYN[1];
                        aYP._2CLe58b4b753f473597 === aNv && this._2CL1627e8a692645e68.delete(aYO);
                    }
                } catch (aYQ) {
                    aYJ = !![];
                    aYK = aYQ;
                } finally {
                    try {
                        if (!aYI && aYL.return != null) {
                            aYL.return();
                        }
                    } finally {
                        if (aYJ) {
                            throw aYK;
                        }
                    }
                }
                if (this._2CL01cdc4c56f3c16bc._2CLe58b4b753f473597 === aNv)
                    for (var aYR = 0; aYR < 2; aYR++) {
                        this._2CL01cdc4c56f3c16bc._2CLa8da637215ed8fdd[aYR] = !1;
                    }
            }
            chat_fn(aNv, aNw, aNx, aNy) {
                var aNz = 'Anonymous';
                if (aNv === this.selfID_kamo)
                    aNz = b3Y._2CL42b7a092ff6d6463(aNw);
                else {
                    var aYX = this._2CL1627e8a692645e68.get(aNv);
                    void 0 !== aYX && (aNz = aYX._2CL8ac401cc9f1e8785[aNw]);
                }
                switch (aNx) {
                    case 1:
                        Toast.chat_fn(aNz, aNy), aYt._2CL9b17a7e001fc9274._2CLee6c3b3f6f747fd6();
                        break;
                    case 2:
                        Toast._2CLefc550a8476f0d48(aNz, aNy), aYt._2CLbe66e34185726a39._2CLee6c3b3f6f747fd6();
                }
            }
        }();
        var aYY = 1500, aYZ = 0.75;
        var aZ0 = class {
            constructor() {
                var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var aNw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var aNx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;
                this.xPos_kamo = aNv, this.yPos_kamo = aNw, this._2CL813d15064792496f = aNx, this._2CL1ef101f9a0c03f9d = aOr.pf_now_kamo, this._2CL12298acfaf2e57e9 = 0, this._2CL659907fefaeeb24a = 0, this._2CL81ce1eaddff677a7 = 0;
            }
            _2CLb732806230c52119() {
                var aNv = aOr.pf_now_kamo - this._2CL1ef101f9a0c03f9d;
                this._2CL81ce1eaddff677a7 = aNv / aYY, this._2CL12298acfaf2e57e9 = this._2CL813d15064792496f * this._2CL81ce1eaddff677a7 | 0;
                var aNw = this._2CL813d15064792496f * aYZ;
                this._2CL12298acfaf2e57e9 < aNw ? this._2CL659907fefaeeb24a = 1 : this._2CL659907fefaeeb24a = 1 - (this._2CL12298acfaf2e57e9 - aNw) / (this._2CL813d15064792496f - aNw);
            }
            _2CL4505cff4c340ea26() {
                return this._2CL81ce1eaddff677a7 >= 1;
            }
        };
        var aZ7 = new class {
            constructor() {
            }
            _2CL0d88847754015168(aNv) {
                var aNw = new aU8(aNv);
                switch (aNw.getUint8()) {
                    case 1:
                        this.selfID_kamo(aNw);
                        break;
                    case 2:
                        this.roomJoin_kamo(aNw);
                        break;
                    case 3:
                        this.roomUpdate_kamo(aNw);
                        break;
                    case 4:
                        this.roomLeave_kamo(aNw);
                        break;
                    case 5:
                        this.chat_fn(aNw);
                        break;
                    case 6:
                        this._2CLe50ece9570a295f9(aNw);
                }
            }
            selfID_kamo(aNv) {
                var aNw = aNv.getUint16();
                aYv._init_hatena(), aYv.selfID_kamo = aNw;
            }
            roomJoin_kamo(aNv) {
                var aNw = aNv.getUint16(), aNx = aNv._2CL9f86d97a7bdf1abb();
                aYv._2CLd23b80a83838ebeb(aNw, aNx);
                var aNy = aNv.getUint8();
                for (var aZh = 0; aZh < aNy; aZh++) {
                    var aZi = aNv.getUint16(), aZj = aYv._2CL590987bd6e227033(aZi, aNw);
                    aZj._2CL8ac401cc9f1e8785[0] = aNv._2CL9f86d97a7bdf1abb(), aZj._2CL8ac401cc9f1e8785[1] = aNv._2CL9f86d97a7bdf1abb();
                    for (var aZk = 0; aZk < 2; aZk++) {
                        var aZl = aNv.getUint8(), aZm = aNv._2CL74a03352fa125990();
                        aZj._2CLba02dd97aca1c8d3(aZk, aZl, aZm);
                    }
                    for (var aZn = 0; aZn < 2; aZn++) {
                        var aZo = aNv.getUint8(), aZp = aNv.getUint8(), aZq = aNv.getUint8();
                        aZj._2CL1849df6af84c6815[aZn]['_2CLcc32da8337a77c45'](aZo, aZp, aZq);
                    }
                    for (var aZr = 0; aZr < 2; aZr++) {
                        var aZs = aNv.getUint8();
                        aZj._2CLa8da637215ed8fdd[aZr] = !!aZs;
                    }
                }
            }
            roomUpdate_kamo(aNv) {
                var aNw = aNv.getUint16(), aNx = aNv.getUint8();
                for (var aZw = 0; aZw < aNx; aZw++) {
                    var aZx = aNv.getUint16(), aZy = aYv._2CL590987bd6e227033(aZx, aNw);
                    aZy._2CL8ac401cc9f1e8785[0] = aNv._2CL9f86d97a7bdf1abb(), aZy._2CL8ac401cc9f1e8785[1] = aNv._2CL9f86d97a7bdf1abb();
                    for (var aZz = 0; aZz < 2; aZz++) {
                        var aZA = aNv.getUint8(), aZB = aNv._2CL74a03352fa125990();
                        aZy._2CLba02dd97aca1c8d3(aZz, aZA, aZB);
                    }
                    for (var aZC = 0; aZC < 2; aZC++) {
                        var aZD = aNv.getUint8(), aZE = aNv.getUint8(), aZF = aNv.getUint8();
                        aZy._2CL1849df6af84c6815[aZC]['_2CLcc32da8337a77c45'](aZD, aZE, aZF);
                    }
                    for (var aZG = 0; aZG < 2; aZG++) {
                        var aZH = aNv.getUint8();
                        aZy._2CLa8da637215ed8fdd[aZG] = !!aZH;
                    }
                }
                var aNy = aNv.getUint8();
                for (var aZJ = 0; aZJ < aNy; aZJ++) {
                    var aZK = aNv.getUint16(), aZL = aYv._2CL771f42f2e56ba112(aZK), aZM = aNv.getUint8();
                    if (1 & aZM && (aZL._2CL8ac401cc9f1e8785[0] = aNv._2CL9f86d97a7bdf1abb(), aZL._2CL8ac401cc9f1e8785[1] = aNv._2CL9f86d97a7bdf1abb()), 2 & aZM)
                        for (var aZN = 0; aZN < 2; aZN++) {
                            var aZO = aNv.getUint8(), aZP = aNv._2CL74a03352fa125990();
                            aZL._2CLba02dd97aca1c8d3(aZN, aZO, aZP);
                        }
                    if (4 & aZM)
                        for (var aZQ = 0; aZQ < 2; aZQ++) {
                            var aZR = aNv.getUint8(), aZS = aNv.getUint8(), aZT = aNv.getUint8();
                            aZL._2CL1849df6af84c6815[aZQ]['_2CLcc32da8337a77c45'](aZR, aZS, aZT);
                        }
                    if (8 & aZM)
                        for (var aZU = 0; aZU < 2; aZU++) {
                            var aZV = 0 !== aNv.getUint8();
                            aZL._2CLa8da637215ed8fdd[aZU] = aZV;
                        }
                    for (var aZW = 0; aZW < 2; aZW++) {
                        if (aZL._2CLa8da637215ed8fdd[aZW]) {
                            var aZX = aNv.getInt16(), aZY = aNv.getInt16(), aZZ = aNv.getUint32();
                            aZL._2CLcc32da8337a77c45(aZW, aZX, aZY, aZZ);
                        }
                    }
                }
                var aNz = aNv.getUint8();
                for (var b01 = 0; b01 < aNz; b01++) {
                    var b02 = aNv.getUint16();
                    aYv._2CLa2401f3a6e826384(b02);
                }
            }
            roomLeave_kamo(aNv) {
                var aNw = aNv.getUint16();
                aYv._2CL747ad4c6110d5907(aNw);
            }
            chat_fn(aNv) {
                var playerId = aNv.getUint16(), tabId = aNv.getUint8(), msgType = aNv.getUint8(), message = aNv._2CL9f86d97a7bdf1abb();
                let splited = message.split('');
                let fixed = '';
                for (let i = 0; i < splited.length; i++) {
                    if (splited[i].charCodeAt() > 255)
                        continue;
                    fixed += splited[i];
                }
                if (fixed.includes('ryuten.io')) {
                    return;
                }
                aYv.chat_fn(playerId, tabId, msgType, message);
            }
            _2CLe50ece9570a295f9(aNv) {
                var aNw = aNv.getInt16(), aNx = aNv.getInt16(), aNy = new aZ0(aNw, aNx);
                b2u._2CLedf2cf1e1c8c3141.add(aNy);
            }
        }();
        var b0e = new class {
            constructor() {
                this._url_kamo = 'wss://ddraig.hslo.io', this._ws_inst = null, this._2CL166d9df08441011f = 500;
            }
            _2CLe43e55a05f37528c() {
                var b0g = this;
                this._ws_inst = new WebSocket(this._url_kamo, 'main'), this._ws_inst.binaryType = 'arraybuffer', this._ws_inst.onopen = function () {
                    return b0g.onopen_fn();
                }, this._ws_inst.onmessage = function (aNv) {
                    return b0g.onmessage_fn(aNv);
                }, this._ws_inst.onclose = function () {
                    return b0g.onclose_fn();
                }, this._ws_inst.onerror = function () {
                    return b0g.onerror_fn();
                };
            }
            wsSend_fn(aNv) {
                this._ws_inst.send(aNv);
            }
            onopen_fn() {
                this._2CL166d9df08441011f = 500;
                aYv._init_hatena();
                b0l._2CL377d9e6cac8abf48();
                Toast._2CLd2948436a49d2833('wifi', 'HSLO Network', 'Connected');
            }
            onmessage_fn(aNv) {
                aZ7._2CL0d88847754015168(aNv.data);
            }
            onclose_fn() {
                var b0k = this;
                this._2CL166d9df08441011f *= 2, setTimeout(function () {
                    b0k._2CLe43e55a05f37528c();
                }, this._2CL166d9df08441011f), Toast._2CLd2948436a49d2833('wifi_off', 'HSLO Network', 'Disconnected');
            }
            onerror_fn() {
            }
            getReadyState_fn() {
                return this._ws_inst && this._ws_inst.readyState === this._ws_inst.OPEN;
            }
        }();
        var b0l = new class {
            constructor() {
            }
            _2CL377d9e6cac8abf48() {
                this._2CL8ac401cc9f1e8785(), this._2CLac9df252d711bd1c(), this._2CL1849df6af84c6815(), this._2CLa8da637215ed8fdd(), this._2CL7b047b1f72f109f9(), this._2CLada370f97d905f76();
            }
            _2CL8ac401cc9f1e8785() {
                if (!b0e.getReadyState_fn)
                    return;
                var aNv = b3Y._2CL42b7a092ff6d6463(0), aNw = b3Y._2CL42b7a092ff6d6463(1), aNx = new aSg(2 * (aNv.length + aNw.length + 2) + 1);
                aNx.writeUint8(1), aNx._2CLfb96650702209fba(aNv), aNx._2CLfb96650702209fba(aNw), b0e.wsSend_fn(aNx._2CLe035dc327c1676d8);
            }
            _2CLac9df252d711bd1c() {
                if (!b0e.getReadyState_fn)
                    return;
                var aNv = {
                    '_2CL65dfacb39960c223': 0,
                    '_2CL7318a606a3118d46': ''
                }, aNw = {
                    '_2CL65dfacb39960c223': 0,
                    '_2CL7318a606a3118d46': ''
                };
                var aNx = b3Y._2CL1062e50bcd80df39(0), aNy = b3Y._2CL1062e50bcd80df39(1), aNz = /https?:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg|gif)/i;
                if (aNz.test(aNx)) {
                    var b0v = aNx.match(aNz);
                    aNv._2CL65dfacb39960c223 = 1, aNv._2CL7318a606a3118d46 = b0v[1];
                }
                if (aNz.test(aNy)) {
                    var b0w = aNy.match(aNz);
                    aNw._2CL65dfacb39960c223 = 1, aNw._2CL7318a606a3118d46 = b0w[1];
                }
                var aNA = aNv._2CL7318a606a3118d46.length + aNw._2CL7318a606a3118d46.length + 5, aNJ = new aSg(aNA);
                aNJ.writeUint8(2), aNJ.writeUint8(aNv._2CL65dfacb39960c223), aNJ._2CL7b8cf5f8d2d0d80c(aNv._2CL7318a606a3118d46), aNJ.writeUint8(aNw._2CL65dfacb39960c223), aNJ._2CL7b8cf5f8d2d0d80c(aNw._2CL7318a606a3118d46), b0e.wsSend_fn(aNJ._2CLe035dc327c1676d8);
            }
            _2CL1849df6af84c6815() {
                if (!b0e.getReadyState_fn)
                    return;
                var aNv = new aSg(7);
                aNv.writeUint8(3);
                for (var b0A = 0; b0A < 2; b0A++) {
                    var b0B = b3Y._2CL09732bf8381cf6a7(b0A);
                    aNv.writeUint8(b0B._2CLaa7bb4b05fbd27db);
                    aNv.writeUint8(b0B._2CLf46271e5c04cf114);
                    aNv.writeUint8(b0B._2CLda3e61414e50aee9);
                }
                b0e.wsSend_fn(aNv._2CLe035dc327c1676d8);
            }
            _2CLa8da637215ed8fdd() {
                if (!b0e.getReadyState_fn)
                    return;
                var aNv = new aSg(3), aNw = b3Y._2CL1d2b5efaee01be40(0) ? 1 : 0, aNx = b3Y._2CL1d2b5efaee01be40(1) ? 1 : 0;
                aNv.writeUint8(4);
                aNv.writeUint8(aNw);
                aNv.writeUint8(aNx);
                b0e.wsSend_fn(aNv._2CLe035dc327c1676d8);
            }
            _2CL244fe1e06ace6919() {
                if (!b0e.getReadyState_fn || !b3Y._2CL32137922dbdb3ee5())
                    return;
                var aNv = b3Y._2CL1d2b5efaee01be40(0), aNw = b3Y._2CL1d2b5efaee01be40(1);
                var aNx = 0, aNy = 2;
                aNv && (aNx |= 1, aNy += 8), aNw && (aNx |= 2, aNy += 8);
                var aNz = new aSg(aNy);
                if (aNz.writeUint8(5), aNz.writeUint8(aNx), aNv) {
                    var b0K = b3Y._2CL6d34b6d49ffda54c[0];
                    aNz.writeInt16(b0K.xPos_kamo), aNz.writeInt16(b0K.yPos_kamo), aNz.writeUint32(b3Y._2CL30c87194157e4b27[0]);
                }
                if (aNw) {
                    var b0L = b3Y._2CL6d34b6d49ffda54c[1];
                    aNz.writeInt16(b0L.xPos_kamo), aNz.writeInt16(b0L.yPos_kamo), aNz.writeUint32(b3Y._2CL30c87194157e4b27[1]);
                }
                b0e.wsSend_fn(aNz._2CLe035dc327c1676d8);
            }
            _2CL7b047b1f72f109f9() {
                if (!b0e.getReadyState_fn)
                    return;
                var aNv = b3Y._2CL38c49d2ea0d01c9d(), aNw = new aSg(4 + 2 * aNv.length);
                aNw.writeUint8(6);
                aNw.writeUint8(1);
                aNw._2CLfb96650702209fba(aNv);
                b0e.wsSend_fn(aNw._2CLe035dc327c1676d8);
            }
            _2CLada370f97d905f76() {
                if (!b0e.getReadyState_fn || 'string' != typeof b18.gameServer_url)
                    return;
                var aNv = new aSg(2 + b18.gameServer_url.length);
                aNv.writeUint8(7);
                aNv._2CL7b8cf5f8d2d0d80c(b18.gameServer_url);
                b0e.wsSend_fn(aNv._2CLe035dc327c1676d8);
            }
            _2CLe50ece9570a295f9(aNv, aNw) {
                if (!b0e.getReadyState_fn)
                    return;
                var aNx = new aSg(5);
                aNx.writeUint8(8);
                aNx.writeInt16(aNv);
                aNx.writeInt16(aNw);
                b0e.wsSend_fn(aNx._2CLe035dc327c1676d8);
            }
            chat_fn(aNv, aNw, aNx) {
                if (!b0e.getReadyState_fn)
                    return;
                var aNy = new aSg(5 + 2 * aNx.length);
                aNy.writeUint8(9), aNy.writeUint8(aNv), aNy.writeUint8(aNw), aNy._2CLfb96650702209fba(aNx), b0e.wsSend_fn(aNy._2CLe035dc327c1676d8);
            }
        }();
        var b0W = new class {
            constructor() {
                this._2CL9559afadd4b3407c = document.querySelectorAll('.top-bar > .reconnect'), this._2CL433e19ade48fcfb3 = document.getElementById('socket-ip');
            }
            _2CLaac750bcfb5d1603(aNv) {
                this._2CL433e19ade48fcfb3.innerHTML = '<i class="material-icons">wifi</i>'['concat'](aNv);
            }
            _2CL52a96de0605b8df2() {
                var b0Z = this;
                var b10 = function b10(b11) {
                    var aNw = b0Z._2CL9559afadd4b3407c[b11], aNx = +aNw.getAttribute('owner');
                    aNw.addEventListener('click', function () {
                        b18._2CL91cf1e039f1b751e(aNx);
                    });
                };
                for (var b14 = 0; b14 < 2; b14++) {
                    b10(b14);
                }
            }
            _2CLe345212b4d947278(aNv, aNw) {
                if (!aNx)
                    return;
                var aNx = this._2CL9559afadd4b3407c[aNv];
                aNw ? aNx.classList.add('disconnected') : aNx.classList.remove('disconnected');
            }
        }();
        var b18 = new class {
            constructor() {
                this.gameServer_url = '', this._2CL5d8e95289bf25691 = '', this._ws_inst = [
                    null,
                    null
                ], this._2CL785ba0dfc4e6d9fc = [
                    !1,
                    !1
                ];
                for (let i = 0; i < 15; i++) {
                    this._ws_inst.push(null);
                    this._2CL785ba0dfc4e6d9fc.push(!1);
                }
            }
            _2CLe43e55a05f37528c(aNv) {
                var aNw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                aSL._2CL3f69227a8cb484a1 = !1, this.gameServer_url = aNv, this._2CL5d8e95289bf25691 = aNw, b0W._2CLaac750bcfb5d1603(aNv), this._2CL91cf1e039f1b751e(0), this._2CL91cf1e039f1b751e(1);
                for (let i = 0; i < 15; i++) {
                    this._2CL91cf1e039f1b751e(i + 2);
                }
                b0l._2CLada370f97d905f76();
            }
            _2CL91cf1e039f1b751e(aNv) {
                var b1d = this;
                if (this.wsReset_fn(aNv), aRV._2CL0a0dbaaacf7f9729(aNv), !aY0._2CLeb21482a8346145a && aNv !== aXI._2CL46e2b32c63641c78())
                    return;
                window.encKey = 0;
                if (Settings.Endy.specAssistType != 'fullmap' && aNv > 2)
                    return;
                if (Settings.Endy.specAssistType == 'none' && aNv == 2)
                    return;
                if (currentAssistMode != Settings.Endy.specAssistType)
                    currentAssistMode = Settings.Endy.specAssistType;
                if ([
                    0,
                    1
                ].includes(aNv) && boxSize[aNv].ids.length > 0) {
                    boxSize[aNv].ids = [];
                    boxSize[aNv].xPosArray = [];
                    boxSize[aNv].yPosArray = [];
                    delete boxSize[aNv].minX;
                    delete boxSize[aNv].minY;
                    delete boxSize[aNv].maxX;
                    delete boxSize[aNv].maxY;
                }
                var aNw = new WebSocket(window.target = 'wss://'['concat'](this.gameServer_url, '/')['concat'](this._2CL5d8e95289bf25691 ? '?party_id='['concat'](this._2CL5d8e95289bf25691) : ''));
                aNw.binaryType = 'arraybuffer', aNw.onopen = function () {
                    b1d.onopen_fn(aNv);
                }, aNw.onmessage = function (aNw) {
                    b1d.onmessage_fn(aNv, aNw);
                }, aNw.onclose = function () {
                    b1d.onclose_fn(aNv);
                }, aNw.onerror = function () {
                    b1d.onerror_fn(aNv);
                }, this._ws_inst[aNv] = aNw;
            }
            wsReset_fn(aNv) {
                var aNw = this._ws_inst[aNv];
                aNw && (aNw.onopen = null, aNw.onmessage = null, aNw.onclose = null, aNw.onerror = null, this.getReadyState_fn(aNv) && (aNw.close(), this.onclose_fn(aNv))), this._ws_inst[aNv] = null, this._2CL785ba0dfc4e6d9fc[aNv] = !1;
            }
            wsSend_fn(aNv, aNw) {
                this.getReadyState_fn(aNv) && this._ws_inst[aNv]['send'](aNw);
            }
            onopen_fn(aNv) {
                aT1._2CL5875a5af586e3482(aNv);
                b0W._2CLe345212b4d947278(aNv, !1);
                aY0._2CLeb21482a8346145a ? Toast._2CLd2948436a49d2833('trip_origin', 'Game server', 'Tab '['concat'](aNv + 1, ' connected.')) : Toast._2CLd2948436a49d2833('trip_origin', 'Game server', 'connected.');
                document.getElementById('player-count-hud').style.display = 'flex';
            }
            onmessage_fn(aNv, aNw) {
                aWe._2CL062a4846d759f87d(aNv, aNw.data);
            }
            onclose_fn(aNv) {
                b2u._init_hatena(aNv), aV6._init_hatena(aNv), this.getReadyState_fn(0) || this.getReadyState_fn(1) || aSL._2CLc1076a31e6a64e81(), b0W._2CLe345212b4d947278(aNv, !0), Toast._2CLd2948436a49d2833('trip_origin', 'Game server', 'disconnected.');
                document.getElementById('player-count-hud').style.display = 'none';
            }
            onerror_fn() {
            }
            getReadyState_fn(aNv) {
                var aNw = this._ws_inst[aNv];
                return aNw && aNw.readyState === aNw.OPEN;
            }
        }();
        var b1q = new class {
            constructor() {
                this._2CL06ecdacc5326d193 = document.getElementById('toggle-streammode');
                this._2CLa2b5325b25fe36f2 = this._2CL06ecdacc5326d193.querySelector('i');
                this._2CLceefebf769973bc1 = [
                    document.getElementById('tag'),
                    document.getElementById('room-id')
                ];
                this.multibox_bool = !1;
            }
            _2CL52a96de0605b8df2() {
                var b1s = this;
                this._2CL06ecdacc5326d193.addEventListener('click', function () {
                    b1s._2CLeb21482a8346145a = !b1s._2CLeb21482a8346145a;
                });
                var aNv = aWf.get('misc', 'stream-mode');
                aNv && (this._2CLeb21482a8346145a = aNv);
            }
            _2CLe345212b4d947278(aNv, aNw) {
                var aNx = this._2CL9559afadd4b3407c[aNv];
                aNw ? aNx.classList.add('disconnected') : aNx.classList.remove('disconnected');
            }
            _2CLeb21482a8346145a() {
                return this.multibox_bool;
            }
            _2CLeb21482a8346145a(aNv) {
                this.multibox_bool = aNv, this._2CLa2b5325b25fe36f2.innerText = aNv ? 'visibility_off' : 'visibility';
                var b1y = !![];
                var b1z = ![];
                var b1A = undefined;
                try {
                    for (var b1B = this._2CLceefebf769973bc1[Symbol.iterator](), b1C; !(b1y = (b1C = b1B.next())['done']); b1y = !![]) {
                        var b1D = b1C.value;
                        aNv ? b1D.classList.add('stream-mode') : b1D.classList.remove('stream-mode');
                    }
                } catch (b1E) {
                    b1z = !![];
                    b1A = b1E;
                } finally {
                    try {
                        if (!b1y && b1B.return != null) {
                            b1B.return();
                        }
                    } finally {
                        if (b1z) {
                            throw b1A;
                        }
                    }
                }
                aWf.set('misc', 'stream-mode', aNv);
            }
        }();
        var b1F = new class {
            constructor() {
                this._2CL1b376b18827dbb14 = '', this._2CL21181c13a833ee56 = '', this.roomId_elm = document.getElementById('room-id'), this._2CL0ad31caf5e3d7f73 = !0;
            }
            _2CL52a96de0605b8df2() {
                var b1H = this;
                aQr._2CL385f5d49967fe353('regions-info', function (aNv) {
                    b1H._2CLd102e73264279ae6(aNv);
                }), aQr._2CL385f5d49967fe353('new-server', function (aNv, aNw) {
                    b1H._2CL5e5f8210783ea8a5(aNv, aNw);
                }), aQr._2CL385f5d49967fe353('error', function (aNv) {
                    b1H.onerror_fn(aNv);
                });
                var aNv = document.getElementById('gamemode'), aNw = aWf.get('misc', 'gamemode');
                aNw && (aNv.value = aNw), this._2CL1b376b18827dbb14 = aNv.value, this._2CL0ad31caf5e3d7f73 = ':party' === this._2CL1b376b18827dbb14, aNv.addEventListener('change', function () {
                    b1H._2CL1b376b18827dbb14 = aNv.value, b1H._2CL0ad31caf5e3d7f73 = ':party' === b1H._2CL1b376b18827dbb14, aWf.set('misc', 'gamemode', b1H._2CL1b376b18827dbb14), ':party' !== b1H._2CL1b376b18827dbb14 && aY0._2CLeb21482a8346145a && (aY0._2CLeb21482a8346145a = !1);
                }, { 'passive': !0 });
                var aNx = document.getElementById('region'), aNy = aWf.get('misc', 'region');
                aNy && (aNx.value = aNy), this._2CL21181c13a833ee56 = aNx.value, aNx.addEventListener('change', function () {
                    b1H._2CL21181c13a833ee56 = aNx.value, aWf.set('misc', 'region', b1H._2CL21181c13a833ee56);
                }, { 'passive': !0 }), document.getElementById('create-room')['addEventListener']('click', function () {
                    b1H._2CL9635dd3e0754fe77();
                }, { 'passive': !0 }), document.getElementById('join-room')['addEventListener']('click', function () {
                    b1H._2CLeaf361c48a5efd14();
                }, { 'passive': !0 });
            }
            _2CLd102e73264279ae6(aNv) {
            }
            _2CL5e5f8210783ea8a5(aNv, aNw) {
                if ('ok' === aNv.status || 'party_full' === aNv.status) {
                    if (aNv.token && (Toast._2CLd2948436a49d2833('info', 'HSLO', 'Joining lobby '['concat'](b1q._2CLeb21482a8346145a ? '*****' : aNv.token)), this._2CLe58b4b753f473597 = aNv.token), ':party' === aNw)
                        b18._2CLe43e55a05f37528c(aNv.endpoints.https, this._2CLe58b4b753f473597);
                    else {
                        var b1T = aNw.replace(':', '') + ':' + this._2CL71128195627080f0(aNv.endpoints.https);
                        Toast._2CLd2948436a49d2833('info', 'HSLO', 'Joining lobby '['concat'](b1q._2CLeb21482a8346145a ? '*****' : b1T)), this._2CLe58b4b753f473597 = b1T, b18._2CLe43e55a05f37528c(aNv.endpoints.https);
                    }
                } else
                    Toast._2CLd2948436a49d2833('info', 'Miniclip', 'Bouncer returned no room.');
            }
            onerror_fn(aNv) {
                Toast._2CLd2948436a49d2833('error', 'HSLO', aNv);
            }
            _2CL9635dd3e0754fe77() {
                Toast._2CLd2948436a49d2833('info', 'HSLO', 'Searching for a new lobby...'), aQr._2CL526f2f3dcb51e5fd(this._2CL1b376b18827dbb14, this._2CL21181c13a833ee56);
            }
            _2CLeaf361c48a5efd14() {
                var aNv = document.getElementById('gamemode'), aNw = this._2CLe58b4b753f473597.trim(), aNx = /^([a-z]+):(\w{5,8}):(\d+)$/, aNy = /^([a-z]+):(\d+)\.(\d+)\.(\d+)\.(\d+):(\d+)$/;
                if (/^[A-Z0-9]{5,7}$/['test'](aNw)) {
                    this._2CLe58b4b753f473597 = aNw;
                    var b1Z = ':party';
                    Toast._2CLd2948436a49d2833('info', 'HSLO', 'Joining lobby '['concat'](b1q._2CLeb21482a8346145a ? '******' : aNw)), aQr._2CL26bb1ea8a949c4c0(b1Z, this._2CL21181c13a833ee56, aNw), aNv.value = b1Z;
                } else if (aNx.test(aNw)) {
                    this._2CLe58b4b753f473597 = aNw;
                    var b20 = aNw.match(aNx), b21 = ':' + b20[1], b22 = 'live-arena-'['concat'](b20[2], '.agar.io:')['concat'](b20[3]);
                    aNv.value = b21, b18._2CLe43e55a05f37528c(b22), Toast._2CLd2948436a49d2833('info', 'HSLO', 'Joining lobby '['concat'](b1q._2CLeb21482a8346145a ? '******' : aNw));
                } else if (aNy.test(aNw)) {
                    this._2CLe58b4b753f473597 = aNw;
                    var b23 = aNw.match(aNy), b24 = ':' + b23[1], b25 = 'ip-'['concat'](b23[2], '-')['concat'](b23[3], '-')['concat'](b23[4], '-')['concat'](b23[5], '.tech.agar.io:')['concat'](b23[6]);
                    aNv.value = b24, b18._2CLe43e55a05f37528c(b25), Toast._2CLd2948436a49d2833('info', 'HSLO', 'Joining lobby '['concat'](b1q._2CLeb21482a8346145a ? '******' : aNw));
                } else
                    Toast._2CLd2948436a49d2833('info', 'HSLO', 'Invalid room code.');
            }
            _2CL71128195627080f0(aNv) {
                var aNw = /live-arena-(\w+)\.agar\.io:(\d+)/, aNx = /ip-(\d+)-(\d+)-(\d+)-(\d+)\.tech\.agar\.io:(\d+)/;
                if (aNw.test(aNv)) {
                    var b29 = aNv.match(aNw);
                    return ''['concat'](b29[1], ':')['concat'](b29[2]);
                }
                if (aNx.test(aNv)) {
                    var b2a = aNv.match(aNx);
                    return ''['concat'](b2a[1], '.')['concat'](b2a[2], '.')['concat'](b2a[3], '.')['concat'](b2a[4], ':')['concat'](b2a[5]);
                }
                return aNv;
            }
            _2CL66c34243f2ad4812(aNv) {
                var aNw = /(\w{5,8}):(\d+)/, aNx = /(\d+)\.(\d+)\.(\d+)\.(\d+):(\d+)/;
                if (aNw.test(aNv)) {
                    var b2e = aNv.match(aNw);
                    return 'live-arena-'['concat'](b2e[1], '.agar.io:')['concat'](b2e[2]);
                }
                if (aNx.test(aNv)) {
                    var b2f = aNv.match(aNx);
                    return 'ip-'['concat'](b2f[1], '-')['concat'](b2f[2], '-')['concat'](b2f[3], '-')['concat'](b2f[4], '.tech.agar.io:')['concat'](b2f[5]);
                }
                return aNv;
            }
            _2CLe58b4b753f473597() {
                return this.roomId_elm.value;
            }
            _2CLe58b4b753f473597(aNv) {
                this.roomId_elm.value = aNv;
            }
        }();
        var b2h = class {
            constructor(aNv, aNw, aNx, aNy, aNz, aNA) {
                this._tabId_dayo = aNv, this.cellId_kamo = aNw, this._2CL21d2ff6532680118 = aNA, this._2CL3a92ba109ae14af4 = aNx, this._2CLfbca5b2c63d57894 = aNy, this._2CL9d81fdf50372ed13 = aNz, this._2CLb004b0674dcd79f3 = aNx, this._2CLda74a55e5331ea56 = aNy, this._2CL22a713a5c998ef44 = aNz, this._2CL056f487a0c65dc87 = aNx, this._2CLf61adf68aaf72d1c = aNy, this._2CL3a4f6c580285f9d1 = aNz, this._2CL8ac401cc9f1e8785 = '', this._2CL1849df6af84c6815 = new aPC.Color_c(), this.vanillaSkinName = '', this._2CLca1d851200c68582 = 0, this.isFood = !1, this.isEjected = !1, this._2CL22c774a2efca930d = !1, this.isMe = !1, this.isFriend = !1, this._2CL5b4f938bcb93ee23 = !1, this._2CL1ef101f9a0c03f9d = aOr.pf_now_kamo, this._2CLde1a13e8cb17e51d = 0, this._2CLcbf95c93fd1f39b2 = 0, this._2CLecfd700cc3b53c04 = 0;
            }
            _2CLcc32da8337a77c45(aNv, aNw, aNx) {
                this._2CLb732806230c52119(), this._2CL056f487a0c65dc87 = this._2CLb004b0674dcd79f3, this._2CLf61adf68aaf72d1c = this._2CLda74a55e5331ea56, this._2CL3a4f6c580285f9d1 = this._2CL22a713a5c998ef44, this._2CL3a92ba109ae14af4 = aNv, this._2CLfbca5b2c63d57894 = aNw, this._2CL9d81fdf50372ed13 = aNx, this._2CLde1a13e8cb17e51d = aOr.pf_now_kamo;
            }
            _2CLb732806230c52119() {
                var aNv = 260 - 10 * aPB._2CL7831870038520f30;
                var aNw = (aOr.pf_now_kamo - this._2CLde1a13e8cb17e51d) / aNv;
                aNw = aNw > 1 ? 1 : aNw < 0 ? 0 : aNw, this._2CLb004b0674dcd79f3 = this._2CL056f487a0c65dc87 + (this._2CL3a92ba109ae14af4 - this._2CL056f487a0c65dc87) * aNw, this._2CLda74a55e5331ea56 = this._2CLf61adf68aaf72d1c + (this._2CLfbca5b2c63d57894 - this._2CLf61adf68aaf72d1c) * aNw, this._2CL22a713a5c998ef44 = this._2CL3a4f6c580285f9d1 + (this._2CL9d81fdf50372ed13 - this._2CL3a4f6c580285f9d1) * aNw, this._2CLecfd700cc3b53c04 = aNw;
            }
            xPos_kamo() {
                return this._2CLb004b0674dcd79f3 - this._2CL21d2ff6532680118.xPos_kamo;
            }
            yPos_kamo() {
                return this._2CLda74a55e5331ea56 - this._2CL21d2ff6532680118.yPos_kamo;
            }
            radius_kamo() {
                return this._2CL22a713a5c998ef44 + 2;
            }
            _2CLde07dd3ec55256df() {
                return this._2CL22a713a5c998ef44 * this._2CL22a713a5c998ef44 / 100 | 0;
            }
            _2CLe15ba5dd0fdb5206() {
                return this._2CL9d81fdf50372ed13 * this._2CL9d81fdf50372ed13 / 100 | 0;
            }
            urlSkinName() {
                return b1F._2CL0ad31caf5e3d7f73 ? this._2CL8ac401cc9f1e8785 + this._2CL1849df6af84c6815._2CL4946b0b8bf5e3580 : this._2CL8ac401cc9f1e8785;
            }
            _2CL32c55e1459ac583f() {
                return !this.isFood && !this.isEjected && !this._2CL22c774a2efca930d;
            }
        };
        var b2u = new class {
            constructor() {
                this._2CLbeee5e2d7e8e9083 = [
                    new Map(),
                    new Map()
                ], this._2CL9661498b4088206f = [
                    new Map(),
                    new Map()
                ], this._2CL73b849d5e2ea1020 = [
                    new Set(),
                    new Set()
                ], this._2CL1003b530a782de85 = [], this._2CL986d79226a8f4718 = [], this._2CLc17454321e4188a4 = new aPC._2CL089d4bc4eb339900(), this.posOffset_kamo = [
                    new aPC.Coordinate_c(),
                    new aPC.Coordinate_c()
                ];
                for (let i = 0; i < 15; i++) {
                    this._2CLbeee5e2d7e8e9083.push(new Map());
                    this._2CL9661498b4088206f.push(new Map());
                    this._2CL73b849d5e2ea1020.push(new Map());
                    this.posOffset_kamo.push(new aPC.Coordinate_c());
                }
                this._2CL901757144a6dfbca = new aPC._2CL089d4bc4eb339900(-7071, -7071, 7071, 7071), this._2CLedf2cf1e1c8c3141 = new Set();
            }
            _init_hatena(aNv) {
                this._2CLbeee5e2d7e8e9083[aNv]['clear'](), this._2CL9661498b4088206f[aNv]['clear'](), this._2CL73b849d5e2ea1020[aNv]['clear']();
            }
            _2CLcc32da8337a77c45() {
                this._2CL1003b530a782de85 = [], this._2CL986d79226a8f4718 = [], this._2CLbdda17ab07e94f6f();
                var aNv = aPB._2CL986d79226a8f4718, aNw = this._2CLbeee5e2d7e8e9083[0], aNx = this._2CLbeee5e2d7e8e9083[1], aNy = b3Y._2CL44e8323f018543e3(1);
                for (let i = 0; i < this.posOffset_kamo.length - 2; i++) {
                    var Mimimi = !![];
                    var _dafak = ![];
                    var partyppl = undefined;
                    var sTab = this._2CLbeee5e2d7e8e9083[i + 2];
                    try {
                        for (var b2E = sTab[Symbol.iterator](), b2F; !(Mimimi = (b2F = b2E.next())['done']); Mimimi = !![]) {
                            var b2G = _slicedToArray(b2F.value, 2), b2H = b2G[0], b2I = b2G[1];
                            b2I._2CLb732806230c52119(), b2I._2CL5b4f938bcb93ee23 && 1 === b2I._2CLecfd700cc3b53c04 ? sTab.delete(b2H) : this._2CLd482757142ae6fef(b2I) || b2I.urlSkinName !== aNy && (b2I.isFood ? aNv && this._2CL986d79226a8f4718.push(b2I) : this._2CL1003b530a782de85.push(b2I));
                        }
                    } catch (b2J) {
                        _dafak = !![];
                        partyppl = b2J;
                    } finally {
                        try {
                            if (!Mimimi && b2E.return != null) {
                                b2E.return();
                            }
                        } finally {
                            if (_dafak) {
                                throw partyppl;
                            }
                        }
                    }
                }
                var b2B = !![];
                var b2C = ![];
                var b2D = undefined;
                try {
                    for (var b2E = aNw[Symbol.iterator](), b2F; !(b2B = (b2F = b2E.next())['done']); b2B = !![]) {
                        var b2G = _slicedToArray(b2F.value, 2), b2H = b2G[0], b2I = b2G[1];
                        b2I._2CLb732806230c52119(), b2I._2CL5b4f938bcb93ee23 && 1 === b2I._2CLecfd700cc3b53c04 ? aNw.delete(b2H) : this._2CLd482757142ae6fef(b2I) || b2I.urlSkinName !== aNy && (b2I.isFood ? aNv && this._2CL986d79226a8f4718.push(b2I) : this._2CL1003b530a782de85.push(b2I));
                    }
                } catch (b2J) {
                    b2C = !![];
                    b2D = b2J;
                } finally {
                    try {
                        if (!b2B && b2E.return != null) {
                            b2E.return();
                        }
                    } finally {
                        if (b2C) {
                            throw b2D;
                        }
                    }
                }
                var b2K = !![];
                var b2L = ![];
                var b2M = undefined;
                try {
                    for (var b2N = aNx[Symbol.iterator](), b2O; !(b2K = (b2O = b2N.next())['done']); b2K = !![]) {
                        var b2P = _slicedToArray(b2O.value, 2), b2Q = b2P[0], b2R = b2P[1];
                        b2R._2CLb732806230c52119(), b2R._2CL5b4f938bcb93ee23 && 1 === b2R._2CLecfd700cc3b53c04 ? aNx.delete(b2Q) : this._2CLd482757142ae6fef(b2R) || !b2R.isMe && this._2CL088090676c7463df(b2R) || (b2R.isFood ? aNv && this._2CL986d79226a8f4718.push(b2R) : this._2CL1003b530a782de85.push(b2R));
                    }
                } catch (b2S) {
                    b2L = !![];
                    b2M = b2S;
                } finally {
                    try {
                        if (!b2K && b2N.return != null) {
                            b2N.return();
                        }
                    } finally {
                        if (b2L) {
                            throw b2M;
                        }
                    }
                }
                this._2CL1003b530a782de85.sort(this._2CLc6a30cc21afac19c), this._2CL986d79226a8f4718.sort(this._2CL060afa7c7719434d);
                var b2T = !![];
                var b2U = ![];
                var b2V = undefined;
                try {
                    for (var b2W = this._2CLedf2cf1e1c8c3141[Symbol.iterator](), b2X; !(b2T = (b2X = b2W.next())['done']); b2T = !![]) {
                        var b2Y = b2X.value;
                        b2Y._2CLb732806230c52119(), b2Y._2CL4505cff4c340ea26 && this._2CLedf2cf1e1c8c3141.delete(b2Y);
                    }
                } catch (b2Z) {
                    b2U = !![];
                    b2V = b2Z;
                } finally {
                    try {
                        if (!b2T && b2W.return != null) {
                            b2W.return();
                        }
                    } finally {
                        if (b2U) {
                            throw b2V;
                        }
                    }
                }
            }
            _2CLc6a30cc21afac19c(aNv, aNw) {
                return aNv.radius_kamo === aNw.radius_kamo ? aNw.cellId_kamo - aNv.cellId_kamo : aNv.radius_kamo - aNw.radius_kamo;
            }
            _2CL060afa7c7719434d(aNv, aNw) {
                return aNv._2CL1ef101f9a0c03f9d === aNw._2CL1ef101f9a0c03f9d ? aNv.cellId_kamo - aNw.cellId_kamo : aNv._2CL1ef101f9a0c03f9d - aNw._2CL1ef101f9a0c03f9d;
            }
            getNode_fn(aNv, aNw) {
                return this._2CLbeee5e2d7e8e9083[aNv]['get'](aNw);
            }
            _2CL6381b1091a381875(aNv, aNw, aNx, aNy, aNz) {
                var aNA = new b2h(aNv, aNw, aNx, aNy, aNz, this.posOffset_kamo[aNv]);
                return this._2CLbeee5e2d7e8e9083[aNv]['set'](aNw, aNA), this._2CLb790ee81dd0b9536(aNw, aNA, aNv), aNA;
            }
            _2CLb790ee81dd0b9536(aNv, aNw, aNx) {
                this._2CL73b849d5e2ea1020[aNx]['delete'](aNv) && (this._2CL9661498b4088206f[aNx]['set'](aNv, aNw), aNw.isMe = !0, aNw._2CL8ac401cc9f1e8785 = b3Y._2CL42b7a092ff6d6463(aNx));
            }
            _2CL6b81dcda3856c9e4(aNv, aNw, aNx) {
                var aNy = this._2CLbeee5e2d7e8e9083[aNv], aNz = this._2CL9661498b4088206f[aNv], aNA = aNy.get(aNx), aNJ = aNy.get(aNw);
                if (Settings.Endy.enableEatEffects && !aNA.isFood && aNA.radius_kamo > 120) {
                    consumes.add(new Commander(aNA.xPos_kamo, aNA.yPos_kamo, aNA.radius_kamo * 2));
                }
                aNA && aNJ && (aNA._2CLcc32da8337a77c45(aNJ._2CLb004b0674dcd79f3, aNJ._2CLda74a55e5331ea56, aNA._2CL22a713a5c998ef44), aNA._2CL5b4f938bcb93ee23 = !0, aNA._2CLcbf95c93fd1f39b2 = aOr.pf_now_kamo, aNA.isMe && aNz.delete(aNx), aNy.delete(aNx), aPB._2CL551774a986394bd9 && aNy.set(''['concat'](aNx, ':removed'), aNA));
            }
            removeDisappearedEntity(aNv, aNw) {
                var aNx = this._2CLbeee5e2d7e8e9083[aNv], aNy = this._2CL9661498b4088206f[aNv], aNz = aNx.get(aNw);
                aNz && (aNz._2CL5b4f938bcb93ee23 = !0, aNz._2CLcbf95c93fd1f39b2 = aOr.pf_now_kamo, aNz.isMe && aNy.delete(aNw), aNx.delete(aNw), aNx.set(''['concat'](aNw, ':removed'), aNz));
            }
            _2CLd482757142ae6fef(aNv) {
                var aNw = aSL._2CL25a00385b9699f80;
                return aNv.xPos_kamo + aNv.radius_kamo < aNw._2CLf4308d8c11499f88 || aNv.xPos_kamo - aNv.radius_kamo > aNw._2CL1d47c61d5ba7a6fd || aNv.yPos_kamo + aNv.radius_kamo < aNw._2CL5fab68fb24c1a804 || aNv.yPos_kamo - aNv.radius_kamo > aNw._2CL0a20f9de5d5d3f47;
            }
            _2CLbdda17ab07e94f6f() {
                var aNv = this._2CLc17454321e4188a4, aNw = this._2CLbeee5e2d7e8e9083[0];
                var b3v = !![];
                var b3w = ![];
                var b3x = undefined;
                try {
                    for (var b3y = aNw.values()[Symbol.iterator](), b3z; !(b3v = (b3z = b3y.next())['done']); b3v = !![]) {
                        var b3A = b3z.value;
                        aNv._2CLf4308d8c11499f88 = b3A._2CL3a92ba109ae14af4 + b3A._2CL9d81fdf50372ed13 - b3A._2CL21d2ff6532680118.xPos_kamo, aNv._2CL1d47c61d5ba7a6fd = b3A._2CL3a92ba109ae14af4 - b3A._2CL9d81fdf50372ed13 - b3A._2CL21d2ff6532680118.xPos_kamo, aNv._2CL5fab68fb24c1a804 = b3A._2CLfbca5b2c63d57894 + b3A._2CL9d81fdf50372ed13 - b3A._2CL21d2ff6532680118.yPos_kamo, aNv._2CL0a20f9de5d5d3f47 = b3A._2CLfbca5b2c63d57894 - b3A._2CL9d81fdf50372ed13 - b3A._2CL21d2ff6532680118.yPos_kamo;
                        break;
                    }
                } catch (b3B) {
                    b3w = !![];
                    b3x = b3B;
                } finally {
                    try {
                        if (!b3v && b3y.return != null) {
                            b3y.return();
                        }
                    } finally {
                        if (b3w) {
                            throw b3x;
                        }
                    }
                }
                var b3C = !![];
                var b3D = ![];
                var b3E = undefined;
                try {
                    for (var b3F = aNw.values()[Symbol.iterator](), b3G; !(b3C = (b3G = b3F.next())['done']); b3C = !![]) {
                        var b3H = b3G.value;
                        var b3I = b3H._2CL3a92ba109ae14af4 + b3H._2CL9d81fdf50372ed13 - b3H._2CL21d2ff6532680118.xPos_kamo;
                        aNv._2CLf4308d8c11499f88 > b3I && (aNv._2CLf4308d8c11499f88 = b3I);
                        var b3J = b3H._2CL3a92ba109ae14af4 - b3H._2CL9d81fdf50372ed13 - b3H._2CL21d2ff6532680118.xPos_kamo;
                        aNv._2CL1d47c61d5ba7a6fd < b3J && (aNv._2CL1d47c61d5ba7a6fd = b3J);
                        var b3K = b3H._2CLfbca5b2c63d57894 + b3H._2CL9d81fdf50372ed13 - b3H._2CL21d2ff6532680118.yPos_kamo;
                        aNv._2CL5fab68fb24c1a804 > b3K && (aNv._2CL5fab68fb24c1a804 = b3K);
                        var b3L = b3H._2CLfbca5b2c63d57894 - b3H._2CL9d81fdf50372ed13 - b3H._2CL21d2ff6532680118.yPos_kamo;
                        aNv._2CL0a20f9de5d5d3f47 < b3L && (aNv._2CL0a20f9de5d5d3f47 = b3L);
                    }
                } catch (b3M) {
                    b3D = !![];
                    b3E = b3M;
                } finally {
                    try {
                        if (!b3C && b3F.return != null) {
                            b3F.return();
                        }
                    } finally {
                        if (b3D) {
                            throw b3E;
                        }
                    }
                }
            }
            _2CL088090676c7463df(aNv) {
                if (this._2CLbeee5e2d7e8e9083[0]['size'] < 1)
                    return !1;
                var aNw = aNv._2CL3a92ba109ae14af4 - aNv._2CL21d2ff6532680118.xPos_kamo, aNx = aNv._2CLfbca5b2c63d57894 - aNv._2CL21d2ff6532680118.yPos_kamo, aNy = this._2CLc17454321e4188a4;
                return !(aNw + aNv._2CL9d81fdf50372ed13 < aNy._2CLf4308d8c11499f88 || aNw - aNv._2CL9d81fdf50372ed13 > aNy._2CL1d47c61d5ba7a6fd || aNx + aNv._2CL9d81fdf50372ed13 < aNy._2CL5fab68fb24c1a804 || aNx - aNv._2CL9d81fdf50372ed13 > aNy._2CL0a20f9de5d5d3f47);
            }
            handleBorder(aNv, aNw, aNx, aNy, aNz) {
                var aNA = b1F._2CL0ad31caf5e3d7f73 ? 14141 : 14000;
                if (aNy - aNw < aNA || aNz - aNx < aNA)
                    return;
                var aNJ = this.posOffset_kamo[aNv];
                aNJ.xPos_kamo = 7071 + aNw, aNJ.yPos_kamo = 7071 + aNx, aSL._2CL3f69227a8cb484a1 || (aSL.xPos_kamo = 0, aSL.yPos_kamo = 0, aSL._2CL3f69227a8cb484a1 = !0);
            }
        }();
        var b3Y = new class {
            constructor() {
                this._2CL7a2bb1f5b827fd5e = '', this._2CL1cb5e3f7faa78694 = [
                    '',
                    ''
                ], this._2CL9fcf160f7e33445c = [
                    String.fromCharCode(8203),
                    String.fromCharCode(65279)
                ], this._2CL5a8da07f3dccd5f9 = [
                    '',
                    ''
                ], this._2CLf6e5846f1b211fe6 = [
                    new aPC.Color_c(),
                    new aPC.Color_c()
                ], this._2CLe740420e2ba0fb90 = [
                    !1,
                    !1
                ], this._2CL2e516d88212068fa = !1, this._2CL6d34b6d49ffda54c = [
                    new aPC.Coordinate_c(),
                    new aPC.Coordinate_c()
                ], this._2CL8d80b815364a0488 = new aPC.Coordinate_c(), this._2CL480c6f515fd5fca5 = new aPC.Coordinate_c(), this._2CL30c87194157e4b27 = [
                    0,
                    0
                ], this._2CLd94c2157798bcce3 = 0, this._2CL3067dea24cc298e4 = !1, this._2CL158c6b3b1c965555 = 0;
            }
            _2CL3635db805c9a31ef(aNv) {
                tag !== this._2CL7a2bb1f5b827fd5e && (this._2CL7a2bb1f5b827fd5e = aNv, b0l._2CL7b047b1f72f109f9());
            }
            _2CL38c49d2ea0d01c9d() {
                return this._2CL7a2bb1f5b827fd5e;
            }
            _2CL2d7b98b40e8df554(aNv, aNw) {
                this._2CL1cb5e3f7faa78694[aNv] = aNw, b0l._2CL8ac401cc9f1e8785();
            }
            _2CL42b7a092ff6d6463(aNv) {
                return this._2CL9fcf160f7e33445c[aNv] + this._2CL1cb5e3f7faa78694[aNv];
            }
            _2CLba02dd97aca1c8d3(aNv, aNw) {
                this._2CL5a8da07f3dccd5f9[aNv] = aNw, b0l._2CLac9df252d711bd1c();
            }
            _2CL1062e50bcd80df39(aNv) {
                return this._2CL5a8da07f3dccd5f9[aNv];
            }
            _2CL4dfc699b0e124758(aNv, aNw) {
                this._2CLf6e5846f1b211fe6[aNv]['_2CLcc32da8337a77c45'](aNw._2CLaa7bb4b05fbd27db, aNw._2CLf46271e5c04cf114, aNw._2CLda3e61414e50aee9), b0l._2CL1849df6af84c6815();
            }
            _2CL09732bf8381cf6a7(aNv) {
                return this._2CLf6e5846f1b211fe6[aNv];
            }
            _2CLacd507116c7822c9(aNv, aNw) {
                this._2CLe740420e2ba0fb90[aNv] = aNw, this._2CL9d0ce31dbbbf50d8(aNw), b0l._2CLa8da637215ed8fdd();
            }
            _2CL1d2b5efaee01be40(aNv) {
                return this._2CLe740420e2ba0fb90[aNv];
            }
            _2CL9d0ce31dbbbf50d8(aNv) {
                var aNw = this._2CL2e516d88212068fa + (aNv ? 1 : -1);
                aNw && !this._2CL2e516d88212068fa ? (bf1._2CL87563560028c947f(), this._2CL3067dea24cc298e4 = !1) : !aNw && this._2CL2e516d88212068fa && (bf1._2CLa5f961f14f197d01(), this._2CLd94c2157798bcce3 = 0, this._2CL480c6f515fd5fca5._2CL7243baea9581cdc8(this._2CL8d80b815364a0488)), this._2CL2e516d88212068fa = aNw;
            }
            _2CL32137922dbdb3ee5() {
                return this._2CL2e516d88212068fa;
            }
            _2CL44e8323f018543e3(aNv) {
                return b1F._2CL0ad31caf5e3d7f73 ? this._2CL42b7a092ff6d6463(aNv) + this._2CL09732bf8381cf6a7(aNv)['_2CL4946b0b8bf5e3580'] : this._2CL42b7a092ff6d6463(aNv);
            }
            _2CLcc32da8337a77c45() {
                var aNv = 0, aNw = 0, aNx = 0, aNy = 0;
                for (var b4k = 0; b4k < 2; b4k++) {
                    var b4l = b2u._2CL9661498b4088206f[b4k], b4m = b4l.size, b4n = this._2CL1d2b5efaee01be40(b4k);
                    if (b4m && !b4n) {
                        this._2CLacd507116c7822c9(b4k, !0);
                        var b4o = b4l.values()['next']()['value'];
                        this._2CL4dfc699b0e124758(b4k, b4o._2CL1849df6af84c6815);
                        var b4p = new aZ0(b4o.xPos_kamo, b4o.yPos_kamo, 3600);
                        b2u._2CLedf2cf1e1c8c3141.add(b4p);
                    } else if (!b4m && b4n) {
                        this._2CLacd507116c7822c9(b4k, !1);
                        var b4q = 0 === b4k ? 1 : 0;
                        this._2CL1d2b5efaee01be40(b4q) && (this._2CL158c6b3b1c965555 = b4q);
                    }
                    var b4r = this._2CL6d34b6d49ffda54c[b4k];
                    if (b4r._init_hatena(), this._2CL30c87194157e4b27[b4k] = 0, b4m) {
                        var b4s = !![];
                        var b4t = ![];
                        var b4u = undefined;
                        try {
                            for (var b4v = b4l.values()[Symbol.iterator](), b4w; !(b4s = (b4w = b4v.next())['done']); b4s = !![]) {
                                var b4x = b4w.value;
                                b4x._2CLb732806230c52119(), aNv += b4x.xPos_kamo, aNw += b4x.yPos_kamo, aNx += b4x._2CL22a713a5c998ef44, b4r.xPos_kamo += b4x.xPos_kamo, b4r.yPos_kamo += b4x.yPos_kamo, this._2CL30c87194157e4b27[b4k] += b4x._2CLe15ba5dd0fdb5206;
                            }
                        } catch (b4y) {
                            b4t = !![];
                            b4u = b4y;
                        } finally {
                            try {
                                if (!b4s && b4v.return != null) {
                                    b4v.return();
                                }
                            } finally {
                                if (b4t) {
                                    throw b4u;
                                }
                            }
                        }
                        b4r.xPos_kamo /= b4m, b4r.yPos_kamo /= b4m, aNy += b4m;
                    }
                }
                if (!aNy)
                    return;
                this._2CL8d80b815364a0488.xPos_kamo = aNv / aNy, this._2CL8d80b815364a0488.yPos_kamo = aNw / aNy;
                var aNz = this._2CL30c87194157e4b27[0] + this._2CL30c87194157e4b27[1];
                this._2CLd94c2157798bcce3 < aNz && (this._2CLd94c2157798bcce3 = aNz);
                var aNA = Math.pow(Math.min(64 / aNx, 1), 0.4) * Math.max(window.innerWidth / 1920, window.innerHeight / 1080);
                aSL._2CL755029166bd8a108 = aNA;
            }
        }();
        var b4B = class {
            constructor() {
                this.xPos_kamo = 0, this.yPos_kamo = 0, this._2CL30c87194157e4b27 = 0, this.radius_kamo = 0, this._2CLde1a13e8cb17e51d = 0;
            }
            _2CLcc32da8337a77c45(aNv, aNw, aNx) {
                this.xPos_kamo = aNv, this.yPos_kamo = aNw, this._2CL30c87194157e4b27 = aNx, this.radius_kamo = Math.sqrt(100 * aNx), this._2CLde1a13e8cb17e51d = aOr.pf_now_kamo;
            }
            _2CLc4ec52a346e0cbd2() {
                var aNv = b3Y._2CL30c87194157e4b27[0] + b3Y._2CL30c87194157e4b27[1];
                return aOr.pf_now_kamo - this._2CLde1a13e8cb17e51d < 1000 && aNv < this._2CL30c87194157e4b27;
            }
        };
        var b4H = Settings.Endy.minimapClass = new class {
            constructor() {
                this.canvas_kana = document.getElementById('minimap-nodes'), this._2CL30a25e13cd0ba4fe = this.canvas_kana.getContext('2d'), this._2CL0c41771ea37dff55 = [], this._2CL12298acfaf2e57e9 = 180, this.PI_2_kamo = 2 * Math.PI;
            }
            _2CL52a96de0605b8df2() {
            }
            _2CLcc32da8337a77c45() {
                this._2CL8a0aa3e9abe764a9(), this._2CL978addd869b74b1a(), this._2CL0377f8eb214ce88e(), this._2CLefab176c58940e78();
            }
            _2CLbb3162f3d7cffd48(aNv) {
                this._2CL12298acfaf2e57e9 = aNv, this.canvas_kana.width = aNv, this.canvas_kana.height = aNv;
            }
            _2CL8a0aa3e9abe764a9() {
                this._2CL30a25e13cd0ba4fe.clearRect(0, 0, this._2CL12298acfaf2e57e9, this._2CL12298acfaf2e57e9);
            }
            _2CL9b1a842a3938b70d(aNv) {
                return this._2CL0c41771ea37dff55[aNv] || this._2CL7525868534aad48f();
            }
            _2CL7525868534aad48f() {
                var aNv = new b4B();
                return this._2CL0c41771ea37dff55.push(aNv), aNv;
            }
            _2CL978addd869b74b1a() {
                if (!aPB._2CLe9c44aef606fb557)
                    return;
                var aNv = this._2CL30a25e13cd0ba4fe, aNw = this._2CL12298acfaf2e57e9 / 14142;
                aNv.beginPath();
                var b4O = !![];
                var b4P = ![];
                var b4Q = undefined;
                try {
                    for (var b4R = this._2CL0c41771ea37dff55[Symbol.iterator](), b4S; !(b4O = (b4S = b4R.next())['done']); b4O = !![]) {
                        var b4T = b4S.value;
                        if (!b4T._2CLc4ec52a346e0cbd2)
                            continue;
                        var b4U = (b4T.xPos_kamo + 7071) * aNw | 0, b4V = (b4T.yPos_kamo + 7071) * aNw | 0, b4W = b4T.radius_kamo * aNw | 0;
                        aNv.moveTo(b4U + b4W, b4V), aNv.arc(b4U, b4V, b4W, 0, this.PI_2_kamo, !0);
                    }
                } catch (b4X) {
                    b4P = !![];
                    b4Q = b4X;
                } finally {
                    try {
                        if (!b4O && b4R.return != null) {
                            b4R.return();
                        }
                    } finally {
                        if (b4P) {
                            throw b4Q;
                        }
                    }
                }
                aNv.closePath(), aNv.fillStyle = aPB._2CLacf15c779f69243f, aNv.strokeStyle = '#000000', aNv.lineWidth = 0.5, aNv.fill(), aNv.stroke();
            }
            _2CL0377f8eb214ce88e() {
                var aNv = this._2CL30a25e13cd0ba4fe, aNw = this._2CL12298acfaf2e57e9 / 180, aNx = 12 * aNw | 0;
                aNv.textAlign = 'center', aNv.textBaseline = 'bottom', aNv.font = '600 '['concat'](aNx, 'px Noto Sans'), aNv.fillStyle = '#ffffff', aNv.strokeStyle = '#000000', aNv.lineWidth = 2, aNv.beginPath();
                var b51 = !![];
                var b52 = ![];
                var b53 = undefined;
                try {
                    for (var b54 = aYv._2CL1627e8a692645e68[Symbol.iterator](), b55; !(b51 = (b55 = b54.next())['done']); b51 = !![]) {
                        var b56 = _slicedToArray(b55.value, 2), b57 = b56[0], b58 = b56[1];
                        for (var b59 = 0; b59 < 2; b59++) {
                            if (!b58._2CLa8da637215ed8fdd[b59])
                                continue;
                            b58._2CLb732806230c52119(b59);
                            var b5a = (b58._2CLb004b0674dcd79f3[b59] + 7071) * (this._2CL12298acfaf2e57e9 / 14142) | 0, b5b = (b58._2CLda74a55e5331ea56[b59] + 7071) * (this._2CL12298acfaf2e57e9 / 14142) | 0, b5c = 4 * aNw | 0, b5d = b58._2CL8ac401cc9f1e8785[b59];
                            aNv.moveTo(b5a + b5c, b5b), aNv.arc(b5a, b5b, b5c, 0, this.PI_2_kamo, !0), b5d.length && (aNv.strokeText(b5d, b5a, b5b - 4), aNv.fillText(b5d, b5a, b5b - 4));
                        }
                    }
                } catch (b5e) {
                    b52 = !![];
                    b53 = b5e;
                } finally {
                    try {
                        if (!b51 && b54.return != null) {
                            b54.return();
                        }
                    } finally {
                        if (b52) {
                            throw b53;
                        }
                    }
                }
                aNv.closePath(), aNv.fillStyle = aPB._2CL91518ff4e5d4aa34, aNv.strokeStyle = '#000000', aNv.lineWidth = 1, aNv.fill(), aNv.stroke();
            }
            _2CLefab176c58940e78() {
                var aNv = this._2CL30a25e13cd0ba4fe, aNw = this._2CL12298acfaf2e57e9 / 180;
                aNv.beginPath();
                for (var b5h = 0; b5h < 2; b5h++) {
                    if (b3Y._2CL1d2b5efaee01be40(b5h)) {
                        var b5i = 4 * aNw | 0, b5j = b3Y._2CL6d34b6d49ffda54c[b5h], b5k = (b5j.xPos_kamo + 7071) * (this._2CL12298acfaf2e57e9 / 14142) | 0, b5l = (b5j.yPos_kamo + 7071) * (this._2CL12298acfaf2e57e9 / 14142) | 0;
                        aNv.moveTo(b5k + b5i, b5l), aNv.arc(b5k, b5l, b5i, 0, this.PI_2_kamo, !0);
                    }
                }
                if (aSL._2CL4b362f28fd6ff0f8) {
                    var b5m = 6 * aNw | 0, b5n = (aSL.xPos_kamo + 7071) * (this._2CL12298acfaf2e57e9 / 14142) | 0, b5o = (aSL.yPos_kamo + 7071) * (this._2CL12298acfaf2e57e9 / 14142) | 0;
                    aNv.moveTo(b5n + b5m, b5o), aNv.arc(b5n, b5o, b5m, 0, this.PI_2_kamo, !0);
                }
                aNv.closePath(), aNv.fillStyle = aPB._2CL593b91def706943d, aNv.strokeStyle = '#000000', aNv.lineWidth = 1, aNv.fill(), aNv.stroke();
            }
        }();
        var b5p = {
            'game': aPw,
            'theme': aPx,
            'chat': aPA,
            'huds': Settings.Huds,
            'controls': Settings.Controls,
            'userdata': Settings.Userdata,
            'bots': Settings.Bots
        };
        var b5R = class {
            constructor(aNv) {
                var aNw = document.getElementById('profile-select-'['concat'](aNv));
                this._2CL9ac222f1b0d42907 = aNw.querySelector('.nicks > .one'), this._2CLc223620a8f0cf4dd = aNw.querySelector('.nicks > .two'), this._2CL40bbf482b7bd9dfd = aNw.querySelector('.skins > .one'), this._2CLfec83bc71dcab043 = aNw.querySelector('.skins > .two');
            }
            _2CL0c7b03711b7c65a6(aNv) {
                this._2CL9ac222f1b0d42907.innerText = aNv;
            }
            _2CL0c7b03711b7c65a6() {
                return this._2CL9ac222f1b0d42907.innerText;
            }
            _2CL7d7b517089b3d3de(aNv) {
                this._2CLc223620a8f0cf4dd.innerText = aNv;
            }
            _2CL7d7b517089b3d3de() {
                return this._2CLc223620a8f0cf4dd.innerText;
            }
            _2CLfe5274e1d9b2881b(aNv) {
                this._2CL40bbf482b7bd9dfd.setAttribute('skin-url', aNv), this._2CL40bbf482b7bd9dfd.style.backgroundImage = 'url('['concat'](aNv, ')');
            }
            _2CLfe5274e1d9b2881b() {
                return this._2CL40bbf482b7bd9dfd.getAttribute('skin-url');
            }
            _2CLda9983913f87d9ff(aNv) {
                this._2CLfec83bc71dcab043.setAttribute('skin-url', aNv), this._2CLfec83bc71dcab043.style.backgroundImage = 'url('['concat'](aNv, ')');
            }
            _2CLda9983913f87d9ff() {
                return this._2CLfec83bc71dcab043.getAttribute('skin-url');
            }
        };
        var b5Z = new class {
            constructor() {
                this.some_elment = document.getElementById('profiles-catalogue'), this._2CL6fe1f736b5887665 = !1, this._2CL362661de726a1fb0 = {}, this._2CL00be0de3052127f3 = 'profiles', this._2CLd0493f13735d1f17 = 0;
            }
            _2CL52a96de0605b8df2() {
                this._2CL6aecf2805644ec8e(), this._2CLf98d554c9fce6953(), this._2CL22087ec0ec996a97(), this._2CL7c9b93058856d2b4(), this._2CL000b965f5d792de9();
            }
            _2CL6aecf2805644ec8e() {
                var b61 = this;
                document.getElementById('open-profiles-catalogue')['addEventListener']('click', function () {
                    b61._2CLa5f961f14f197d01();
                }, { 'passive': !0 }), document.getElementById('close-profiles-catalogue')['addEventListener']('click', function () {
                    b61._2CL87563560028c947f();
                }, { 'passive': !0 });
            }
            _2CLf98d554c9fce6953() {
                var b62 = this;
                var b63 = function b63(b64) {
                    document.getElementById('profile-select-'['concat'](b64))['addEventListener']('click', function () {
                        b62._2CLf6b227831c1b8ffa = b64, aWf.set(b62._2CL00be0de3052127f3, 'selected', b64), b62._2CL87563560028c947f();
                    }, { 'passive': !0 });
                };
                for (var b65 = 1; b65 <= 9; b65++) {
                    b63(b65);
                }
            }
            _2CL22087ec0ec996a97() {
                var b66 = this;
                var aNv = document.getElementById('tag');
                aNv.addEventListener('blur', function () {
                    b3Y._2CL3635db805c9a31ef(aNv.value), aWf.set(b66._2CL00be0de3052127f3, 'tag', aNv.value);
                });
                var aNw = document.getElementById('nick1');
                aNw.addEventListener('blur', function () {
                    b66._2CL362661de726a1fb0[b66._2CLf6b227831c1b8ffa]['_2CL0c7b03711b7c65a6'] = aNw.value, b3Y._2CL2d7b98b40e8df554(0, aNw.value), b66._2CL6150aac2399e836c(b66._2CLf6b227831c1b8ffa);
                });
                var aNx = document.getElementById('nick2');
                aNx.addEventListener('blur', function () {
                    b66._2CL362661de726a1fb0[b66._2CLf6b227831c1b8ffa]['_2CL7d7b517089b3d3de'] = aNx.value, b3Y._2CL2d7b98b40e8df554(1, aNx.value), b66._2CL6150aac2399e836c(b66._2CLf6b227831c1b8ffa);
                });
                var aNy = document.getElementById('skin1');
                aNy.addEventListener('blur', function () {
                    b66._2CL362661de726a1fb0[b66._2CLf6b227831c1b8ffa]['_2CLfe5274e1d9b2881b'] = aNy.value, b3Y._2CLba02dd97aca1c8d3(0, aNy.value), b66._2CL6150aac2399e836c(b66._2CLf6b227831c1b8ffa), b66._2CL602775871a73c8bb();
                });
                var aNz = document.getElementById('skin2');
                aNz.addEventListener('blur', function () {
                    b66._2CL362661de726a1fb0[b66._2CLf6b227831c1b8ffa]['_2CLda9983913f87d9ff'] = aNz.value, b3Y._2CLba02dd97aca1c8d3(1, aNz.value), b66._2CL6150aac2399e836c(b66._2CLf6b227831c1b8ffa), b66._2CL602775871a73c8bb();
                });
            }
            _2CLa5f961f14f197d01() {
                var b6c = this;
                this._2CL6fe1f736b5887665 = !0, requestAnimationFrame(function () {
                    b6c._2CL6fe1f736b5887665 && (b6c.some_elment.style.display = 'flex'), requestAnimationFrame(function () {
                        b6c._2CL6fe1f736b5887665 && (b6c.some_elment.style.opacity = '1');
                    });
                });
            }
            _2CL87563560028c947f() {
                var b6d = this;
                this._2CL6fe1f736b5887665 = !1, requestAnimationFrame(function () {
                    b6d._2CL6fe1f736b5887665 || (b6d.some_elment.style.opacity = '0'), setTimeout(function () {
                        b6d._2CL6fe1f736b5887665 || (b6d.some_elment.style.display = 'none');
                    }, 500);
                });
            }
            _2CL7c9b93058856d2b4() {
                for (var b6e = 1; b6e <= 9; b6e++) {
                    var b6f = new b5R(b6e);
                    this._2CL362661de726a1fb0[b6e] = b6f, b6f._2CL0c7b03711b7c65a6 = 'Profile '['concat'](b6e), b6f._2CL7d7b517089b3d3de = 'Profile '['concat'](b6e), b6f._2CLfe5274e1d9b2881b = 'https://i.imgur.com/kv7jA88.png', b6f._2CLda9983913f87d9ff = 'https://i.imgur.com/kv7jA88.png';
                }
                this._2CLf6b227831c1b8ffa = 1;
            }
            _2CL000b965f5d792de9() {
                'undefined' === localStorage.getItem(aWf.prefix + this._2CL00be0de3052127f3) && localStorage.removeItem(aWf.prefix + this._2CL00be0de3052127f3);
                for (var b6g = 1; b6g <= 9; b6g++) {
                    var b6h = aWf.get(this._2CL00be0de3052127f3, ''['concat'](b6g)), b6i = aQm._2CL0d88847754015168(b6h);
                    if ('object' == _typeof(b6i)) {
                        var b6j = this._2CL362661de726a1fb0[b6g];
                        b6j._2CL0c7b03711b7c65a6 = b6i.n1, b6j._2CL7d7b517089b3d3de = b6i.n2, b6j._2CLfe5274e1d9b2881b = b6i.s1, b6j._2CLda9983913f87d9ff = b6i.s2;
                    }
                }
                var aNv = +aWf.get(this._2CL00be0de3052127f3, 'selected');
                aNv && (this._2CLf6b227831c1b8ffa = aNv);
                var aNw = aWf.get(this._2CL00be0de3052127f3, 'tag');
                aNw && (b3Y._2CL3635db805c9a31ef(aNw), document.getElementById('tag')['value'] = aNw);
            }
            _2CL6150aac2399e836c(aNv) {
                var aNw = this._2CL362661de726a1fb0[aNv], aNx = {
                    'n1': aNw._2CL0c7b03711b7c65a6,
                    'n2': aNw._2CL7d7b517089b3d3de,
                    's1': aNw._2CLfe5274e1d9b2881b,
                    's2': aNw._2CLda9983913f87d9ff
                }, aNy = aQm._2CL276c2a3967d01281(aNx);
                aWf.set(this._2CL00be0de3052127f3, ''['concat'](aNv), aNy);
            }
            _2CL602775871a73c8bb() {
                var aNv = this._2CL362661de726a1fb0[this._2CLf6b227831c1b8ffa], aNw = document.getElementById('skin-preview-1'), aNx = document.getElementById('skin-preview-2');
                aNw.style.backgroundImage = 'url('['concat'](aNv._2CLfe5274e1d9b2881b, ')'), aNx.style.backgroundImage = 'url('['concat'](aNv._2CLda9983913f87d9ff, ')');
            }
            _2CLf6b227831c1b8ffa(aNv) {
                this._2CLd0493f13735d1f17 = aNv;
                var aNw = this._2CL362661de726a1fb0[aNv];
                document.getElementById('nick1')['value'] = aNw._2CL0c7b03711b7c65a6, document.getElementById('nick2')['value'] = aNw._2CL7d7b517089b3d3de, document.getElementById('skin1')['value'] = aNw._2CLfe5274e1d9b2881b, document.getElementById('skin2')['value'] = aNw._2CLda9983913f87d9ff, b3Y._2CL2d7b98b40e8df554(0, aNw._2CL0c7b03711b7c65a6), b3Y._2CL2d7b98b40e8df554(1, aNw._2CL7d7b517089b3d3de), b3Y._2CLba02dd97aca1c8d3(0, aNw._2CLfe5274e1d9b2881b), b3Y._2CLba02dd97aca1c8d3(1, aNw._2CLda9983913f87d9ff), this._2CL602775871a73c8bb();
            }
            _2CLf6b227831c1b8ffa() {
                return this._2CLd0493f13735d1f17;
            }
        }();
        var b6v = new class {
            constructor() {
                this._2CL2f70cd41a2cf1237 = {
                    '_2CL3da1cf9de121f39b': document.getElementById('userdata-save'),
                    '_2CL4b659781ea3d765d': document.getElementById('userdata-load'),
                    '_init_hatena': document.getElementById('userdata-reset'),
                    '_2CL8d68a946a0377f8e': document.getElementById('userdata-file-input')
                };
            }
            _2CL52a96de0605b8df2() {
                var b6y = this;
                this._2CL2f70cd41a2cf1237._2CL3da1cf9de121f39b.addEventListener('click', function () {
                    b6y.settingsSaver();
                }, { 'passive': !0 }), this._2CL2f70cd41a2cf1237._2CL4b659781ea3d765d.addEventListener('click', function () {
                    b6y._2CL2f70cd41a2cf1237._2CL8d68a946a0377f8e.click();
                }, { 'passive': !0 }), this._2CL2f70cd41a2cf1237._init_hatena.addEventListener('click', function () {
                    b6y.settingsResetter();
                }, { 'passive': !0 }), this._2CL2f70cd41a2cf1237._2CL8d68a946a0377f8e.addEventListener('change', function () {
                    b6y._2CL024f1e26624c70fc(), b6y._2CL2f70cd41a2cf1237._2CL8d68a946a0377f8e.value = '';
                }, { 'passive': !0 });
            }
            settingsSaver() {
                var aNv = {};
                if (aPB._2CL0c7dc4c5bb8a28f9) {
                    var b6A = Object.keys(b5p.game);
                    for (var b6B = 0, b6C = b6A; b6B < b6C.length; b6B++) {
                        var b6D = b6C[b6B];
                        'seperator' !== b5p.game[b6D]['_2CL65dfacb39960c223'] && (aNv[b6D] = aPB[b6D]);
                    }
                }
                if (aPB._2CLb62cbae966c412c2) {
                    var b6E = Object.keys(b5p.theme);
                    for (var b6F = 0, b6G = b6E; b6F < b6G.length; b6F++) {
                        var b6H = b6G[b6F];
                        'seperator' !== b5p.theme[b6H]['_2CL65dfacb39960c223'] && (aNv[b6H] = aPB[b6H]);
                    }
                }
                if (aPB._2CLdfe70a9ceaa585bb) {
                    var b6I = Object.keys(b5p.chat);
                    for (var b6J = 0, b6K = b6I; b6J < b6K.length; b6J++) {
                        var b6L = b6K[b6J];
                        'seperator' !== b5p.chat[b6L]['_2CL65dfacb39960c223'] && (aNv[b6L] = aPB[b6L]);
                    }
                }
                if (aPB._2CLc4c8889954509c65) {
                    var b6M = Object.keys(b5p.huds);
                    for (var b6N = 0, b6O = b6M; b6N < b6O.length; b6N++) {
                        var b6P = b6O[b6N];
                        'seperator' !== b5p.huds[b6P]['_2CL65dfacb39960c223'] && (aNv[b6P] = aPB[b6P]);
                    }
                }
                if (aPB._2CL9b72979b32077e88) {
                    var b6Q = Object.keys(b5p.controls);
                    for (var b6R = 0, b6S = b6Q; b6R < b6S.length; b6R++) {
                        var b6T = b6S[b6R];
                        'seperator' !== b5p.controls[b6T]['_2CL65dfacb39960c223'] && (aNv[b6T] = aPB[b6T]);
                    }
                }
                if (aPB._2CL3288568f40df5c39) {
                    var b6U = localStorage.getItem(''['concat'](aWf.prefix)['concat'](b5Z._2CL00be0de3052127f3));
                    b6U && (aNv['user-profiles'] = b6U);
                }
                var aNw = JSON.stringify(aNv, null, '  '), aNx = new Blob([aNw], { 'type': 'plain/text' }), aNy = URL.createObjectURL(aNx), aNz = document.createElement('a');
                aNz.href = aNy, aNz.download = 'user-data.hsf', document.body.appendChild(aNz), aNz.click(), setTimeout(function () {
                    document.body.removeChild(aNz), URL.revokeObjectURL(aNy), Toast._2CLd2948436a49d2833('cloud_done', 'HSLO', 'User data was saved.');
                }, 0);
            }
            _2CL024f1e26624c70fc() {
                var b6Z = this;
                var aNv = this._2CL2f70cd41a2cf1237._2CL8d68a946a0377f8e;
                if (!aNv.files || !aNv.files[0])
                    return void Toast._2CLd2948436a49d2833('error', 'HSLO', 'Please select a user data file.');
                var aNw = aNv.files[0], aNx = new FileReader();
                aNx.addEventListener('load', function (aNv) {
                    var aNw = aNv.target.result;
                    var aNx = null;
                    try {
                        aNx = JSON.parse(aNw);
                    } catch (b76) {
                        Toast._2CLd2948436a49d2833('error', 'HSLO', 'Corrupt user data.');
                    }
                    aNx && (b6Z.settingsLoader(aNx), Toast._2CLd2948436a49d2833('cloud_done', 'HSLO', 'User data was loaded.'));
                }), aNx.readAsBinaryString(aNw);
            }
            settingsResetter() {
                if (aPB._2CL0c7dc4c5bb8a28f9) {
                    var b77 = Object.keys(b5p.game);
                    for (var b78 = 0, b79 = b77; b78 < b79.length; b78++) {
                        var b7a = b79[b78];
                        var b7b = b5p.game[b7a];
                        'seperator' !== b7b._2CL65dfacb39960c223 && (aPB[b7a] = b7b._2CL7d0596c36891967f);
                    }
                }
                if (aPB._2CLb62cbae966c412c2) {
                    var b7c = Object.keys(b5p.theme);
                    for (var b7d = 0, b7e = b7c; b7d < b7e.length; b7d++) {
                        var b7f = b7e[b7d];
                        var b7g = b5p.theme[b7f];
                        'seperator' !== b7g._2CL65dfacb39960c223 && (aPB[b7f] = b7g._2CL7d0596c36891967f);
                    }
                }
                if (aPB._2CLdfe70a9ceaa585bb) {
                    var b7h = Object.keys(b5p.chat);
                    for (var b7i = 0, b7j = b7h; b7i < b7j.length; b7i++) {
                        var b7k = b7j[b7i];
                        var b7l = b5p.chat[b7k];
                        'seperator' !== b7l._2CL65dfacb39960c223 && (aPB[b7k] = b7l._2CL7d0596c36891967f);
                    }
                }
                if (aPB._2CLc4c8889954509c65) {
                    var b7m = Object.keys(b5p.huds);
                    for (var b7n = 0, b7o = b7m; b7n < b7o.length; b7n++) {
                        var b7p = b7o[b7n];
                        var b7q = b5p.huds[b7p];
                        'seperator' !== b7q._2CL65dfacb39960c223 && (aPB[b7p] = b7q._2CL7d0596c36891967f);
                    }
                }
                if (aPB._2CL9b72979b32077e88) {
                    var b7r = Object.keys(b5p.controls);
                    for (var b7s = 0, b7t = b7r; b7s < b7t.length; b7s++) {
                        var b7u = b7t[b7s];
                        var b7v = b5p.controls[b7u];
                        'seperator' !== b7v._2CL65dfacb39960c223 && (aPB[b7u] = b7v._2CL7d0596c36891967f);
                    }
                }
                try {
                    var b7r = Object.keys(b5p.bots);
                    for (var b7s = 0, b7t = b7r; b7s < b7t.length; b7s++) {
                        var b7u = b7t[b7s];
                        var b7v = b5p.bots[b7u];
                        'seperator' !== b7v._2CL65dfacb39960c223 && (aPB[b7u] = b7v._2CL7d0596c36891967f);
                    }
                } catch (e) {
                    console.error('[Error] Failed to reset bots settings');
                }
                if (aPB._2CL3288568f40df5c39)
                    for (var b7w = 1; b7w <= 9; b7w++) {
                        b5Z._2CL7c9b93058856d2b4(), b3Y.tag = '', document.getElementById('tag')['value'] = '';
                    }
                Toast._2CLd2948436a49d2833('cloud_done', 'HSLO', 'User data was reset.');
            }
            settingsLoader(aNv) {
                if (aPB._2CL0c7dc4c5bb8a28f9) {
                    var b7y = Object.keys(b5p.game);
                    for (var b7z = 0, b7A = b7y; b7z < b7A.length; b7z++) {
                        var b7B = b7A[b7z];
                        void 0 !== aNv[b7B] && (aPB[b7B] = aNv[b7B]);
                    }
                }
                if (aPB._2CLb62cbae966c412c2) {
                    var b7C = Object.keys(b5p.theme);
                    for (var b7D = 0, b7E = b7C; b7D < b7E.length; b7D++) {
                        var b7F = b7E[b7D];
                        void 0 !== aNv[b7F] && (aPB[b7F] = aNv[b7F]);
                    }
                }
                if (aPB._2CLdfe70a9ceaa585bb) {
                    var b7G = Object.keys(b5p.chat);
                    for (var b7H = 0, b7I = b7G; b7H < b7I.length; b7H++) {
                        var b7J = b7I[b7H];
                        void 0 !== aNv[b7J] && (aPB[b7J] = aNv[b7J]);
                    }
                }
                if (aPB._2CLc4c8889954509c65) {
                    var b7K = Object.keys(b5p.huds);
                    for (var b7L = 0, b7M = b7K; b7L < b7M.length; b7L++) {
                        var b7N = b7M[b7L];
                        void 0 !== aNv[b7N] && (aPB[b7N] = aNv[b7N]);
                    }
                }
                if (aPB._2CL9b72979b32077e88) {
                    var b7O = Object.keys(b5p.controls);
                    for (var b7P = 0, b7Q = b7O; b7P < b7Q.length; b7P++) {
                        var b7R = b7Q[b7P];
                        void 0 !== aNv[b7R] && (aPB[b7R] = aNv[b7R]);
                    }
                }
                if (aPB._2CL3288568f40df5c39) {
                    var b7S = aNv['user-profiles'];
                    b7S && (localStorage.setItem(''['concat'](aWf.prefix)['concat'](b5Z._2CL00be0de3052127f3), b7S), b5Z._2CL000b965f5d792de9());
                }
            }
        }(), b6w = null;
        !function (aNv, aNw) {
            var aNx = 'firstChild', aNy = setTimeout;
            function aNz(aNv) {
                return void 0 !== aNv;
            }
            function aNA(aNv) {
                return 'object' == _typeof(aNv);
            }
            function aNJ(aNv) {
                return Object.keys(aNv)['length'];
            }
            function aNK(aNv, aNw, aNx) {
                return aNv < aNw ? aNw : aNv > aNx ? aNx : aNv;
            }
            function aNL(aNv, aNw) {
                return parseInt(aNv, aNw || 10);
            }
            function aNM(aNv) {
                return Math.round(aNv);
            }
            function aNN(aNv) {
                var aNw, aNx, aNy, aNz, aNA, aNJ, aNK, aNL, aNN = +aNv[0], aO4 = +aNv[1], aO5 = +aNv[2];
                switch (aNJ = aO5 * (1 - aO4), aNK = (aNK = aO5 * (1 - (aNA = 6 * aNN - (aNz = Math.floor(6 * aNN))) * aO4)) || 0, aNL = (aNL = aO5 * (1 - (1 - aNA) * aO4)) || 0, (aNz = aNz || 0) % 6) {
                    case 0:
                        aNw = aO5, aNx = aNL, aNy = aNJ;
                        break;
                    case 1:
                        aNw = aNK, aNx = aO5, aNy = aNJ;
                        break;
                    case 2:
                        aNw = aNJ, aNx = aO5, aNy = aNL;
                        break;
                    case 3:
                        aNw = aNJ, aNx = aNK, aNy = aO5;
                        break;
                    case 4:
                        aNw = aNL, aNx = aNJ, aNy = aO5;
                        break;
                    case 5:
                        aNw = aO5, aNx = aNJ, aNy = aNK;
                }
                return [
                    aNM(255 * aNw),
                    aNM(255 * aNx),
                    aNM(255 * aNy)
                ];
            }
            function aO4(aNv) {
                return aOr(aNN(aNv));
            }
            function aO5(aNv) {
                var aNw, aNx = +aNv[0], aNy = +aNv[1], aNz = +aNv[2], aNA = Math.max(aNx, aNy, aNz), aNJ = Math.min(aNx, aNy, aNz), aNK = aNA - aNJ, aNL = 0 === aNA ? 0 : aNK / aNA, aNM = aNA / 255;
                switch (aNA) {
                    case aNJ:
                        aNw = 0;
                        break;
                    case aNx:
                        aNw = aNy - aNz + aNK * (aNy < aNz ? 6 : 0), aNw /= 6 * aNK;
                        break;
                    case aNy:
                        aNw = aNz - aNx + 2 * aNK, aNw /= 6 * aNK;
                        break;
                    case aNz:
                        aNw = aNx - aNy + 4 * aNK, aNw /= 6 * aNK;
                }
                return [
                    aNw,
                    aNL,
                    aNM
                ];
            }
            function aOr(aNv) {
                var aNw = +aNv[2] | +aNv[1] << 8 | +aNv[0] << 16;
                return (aNw = '000000' + aNw.toString(16))['slice'](-6);
            }
            function aOs(aNv) {
                return aO5(aOu(aNv));
            }
            function aOu(aNv) {
                return 3 === aNv.length && (aNv = aNv.replace(/./g, '$&$&')), [
                    aNL(aNv[0] + aNv[1], 16),
                    aNL(aNv[2] + aNv[3], 16),
                    aNL(aNv[4] + aNv[5], 16)
                ];
            }
            function aPv(aNv) {
                return [
                    +aNv[0] / 360,
                    +aNv[1] / 100,
                    +aNv[2] / 100
                ];
            }
            function aPw(aNv) {
                return [
                    aNM(360 * +aNv[0]),
                    aNM(100 * +aNv[1]),
                    aNM(100 * +aNv[2])
                ];
            }
            function aPx(aNv) {
                if (aNA(aNv))
                    return aNv;
                var aNw = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(aNv), aNx = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(aNv);
                return '#' === aNv[0] && aNv.match(/^#([\da-f]{3}|[\da-f]{6})$/i) ? aOs(aNv.slice(1)) : aNx ? aPv([
                    +aNx[1],
                    +aNx[2],
                    +aNx[3]
                ]) : aNw ? aO5([
                    +aNw[1],
                    +aNw[2],
                    +aNw[3]
                ]) : [
                            0,
                            1,
                            1
                        ];
            }
            !function (aNv) {
                aNv.version = '1.4.1', aNv.__instance__ = {}, aNv.each = function (aNw, aNx) {
                    return aNy(function () {
                        var aNx, aNy = aNv.__instance__;
                        for (aNx in aNy) {
                            aNw.call(aNy[aNx], aNx, aNy);
                        }
                    }, 0 === aNx ? 0 : aNx || 1), aNv;
                }, aNv.parse = aPx, aNv._HSV2RGB = aNN, aNv._HSV2HEX = aO4, aNv._RGB2HSV = aO5, aNv._HEX2HSV = aOs, aNv._HEX2RGB = function (aNv) {
                    return function (aNv) {
                        return [
                            +aNv[0] / 255,
                            +aNv[1] / 255,
                            +aNv[2] / 255
                        ];
                    }(aOu(aNv));
                }, aNv.HSV2RGB = function (aNv) {
                    return aNN(aPv(aNv));
                }, aNv.HSV2HEX = function (aNv) {
                    return aO4(aPv(aNv));
                }, aNv.RGB2HSV = function (aNv) {
                    return aPw(aO5(aNv));
                }, aNv.RGB2HEX = aOr, aNv.HEX2HSV = function (aNv) {
                    return aPw(aOs(aNv));
                }, aNv.HEX2RGB = aOu;
            }(b6w = function ke(aNL, aNM, aO5) {
                var aOr = aNw.body, aOs = aNw.documentElement, aOu = this, aPv = b6w, aPw = !1, aPx = {}, aPA = aNw.createElement('div'), aPB = 'touchstart mousedown', aPC = 'touchmove mousemove', aQ6 = 'touchend mouseup', aQm = 'orientationchange resize';
                if (!(aOu instanceof aPv))
                    return new aPv(aNL, aNM);
                function aQr(aNv, aNw, aNx) {
                    for (var aNy = 0, aNz = (aNv = aNv.split(/\s+/))['length']; aNy < aNz; ++aNy) {
                        aNw.addEventListener(aNv[aNy], aNx, !1);
                    }
                }
                function aQs(aNv, aNw, aNx) {
                    for (var aNy = 0, aNz = (aNv = aNv.split(/\s+/))['length']; aNy < aNz; ++aNy) {
                        aNw.removeEventListener(aNv[aNy], aNx);
                    }
                }
                function aQt(aNv, aNw) {
                    var aNx = 'touches', aNy = 'clientX', aNz = 'clientY', aNA = aNw[aNx] ? aNw[aNx][0][aNy] : aNw[aNy], aNJ = aNw[aNx] ? aNw[aNx][0][aNz] : aNw[aNz], aNK = aQu(aNv);
                    return {
                        'x': aNA - aNK.l,
                        'y': aNJ - aNK.t
                    };
                }
                function aQu(aNw) {
                    var aNx, aNy, aNz;
                    return aNw === aNv ? (aNx = aNv.pageXOffset || aOs.scrollLeft, aNy = aNv.pageYOffset || aOs.scrollTop) : (aNx = (aNz = aNw.getBoundingClientRect())['left'], aNy = aNz.top), {
                        'l': aNx,
                        't': aNy
                    };
                }
                function aRV(aNv, aNw) {
                    for (; (aNv = aNv.parentElement) && aNv !== aNw;) {
                        ;
                    }
                    return aNv;
                }
                function aSg(aNv) {
                    aNv && aNv.preventDefault();
                }
                function aSh(aNw) {
                    return aNw === aNv ? {
                        'w': aNv.innerWidth,
                        'h': aNv.innerHeight
                    } : {
                            'w': aNw.offsetWidth,
                            'h': aNw.offsetHeight
                        };
                }
                function aSJ(aNv) {
                    return aPw || !!aNz(aNv) && aNv;
                }
                function aSK(aNv) {
                    aPw = aNv;
                }
                function aSL(aNv, aNw, aNx) {
                    if (!aNz(aPx[aNv]))
                        return aOu;
                    if (aNz(aNx))
                        aNz(aPx[aNv][aNx]) && aPx[aNv][aNx]['apply'](aOu, aNw);
                    else
                        for (var aNy in aPx[aNv]) {
                            aPx[aNv][aNy]['apply'](aOu, aNw);
                        }
                    return aOu;
                }
                aPv.__instance__[aNL.id || aNL.name || aNJ(aPv.__instance__)] = aOu, aNz(aNM) && !0 !== aNM || (aNM = aPB), aSK(aPv.parse(aNL.getAttribute('data-color') || aNL.value || [
                    0,
                    1,
                    1
                ])), aPA.className = 'color-picker', aPA.innerHTML = '<div class="color-picker-container"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';
                var aT0, aT1 = aPA[aNx]['children'], aU8 = aSJ([
                    0,
                    1,
                    1
                ]), aUQ = aT1[0], aV1 = aT1[1], aV6 = aUQ[aNx], aVn = aV1[aNx], aVo = 0, aVu = 0, aVE = 0, aVR = 0, aWe = 0, aWf = 0, aXj = 0, aXv = 0, aXI = [aO4(aU8)];
                function aY0(aNv, aNw) {
                    aNv && 'h' !== aNv || aSL('change:h', aNw), aNv && 'sv' !== aNv || aSL('change:sv', aNw), aSL('change', aNw);
                }
                function aYb() {
                    return aPA.parentNode;
                }
                function aYq(aNx, aNy) {
                    aNx || ((aO5 || aNy || aOr)['appendChild'](aPA), aOu.visible = !0), aXj = aSh(aPA)['w'], aXv = aSh(aPA)['h'];
                    var aNz = aSh(aV1), aNA = aSh(aVn), aNJ = aSh(aUQ)['h'], aOs = aNz.w, aPv = aNz.h, aPw = aSh(aV6)['h'], aPx = aNA.w, aQu = aNA.h;
                    if (aNx) {
                        var bar = function bar(aNv) {
                            var aNw = aNv.target;
                            aNw === aNL || aRV(aNw, aNL) === aNL ? (aYq(), aSL('enter')) : aOu.exit();
                        };
                        aPA.style.left = aPA.style.top = '-9999px', !1 !== aNM && aQr(aNM, aNL, bar), aOu.create = function () {
                            return aYq(1), aSL('create'), aOu;
                        }, aOu.destroy = function () {
                            return !1 !== aNM && aQs(aNM, aNL, bar), aOu.exit(), aSK(!1), aSL('destroy'), aOu;
                        };
                    } else
                        aYt();
                    function aWe(aNv) {
                        aNN(aU8);
                        var aNw = aNN([
                            aU8[0],
                            1,
                            1
                        ]);
                        aV1.style.backgroundColor = 'rgb(' + aNw.join(',') + ')', aSK(aU8), aSg(aNv);
                    }
                    function aWf(aNv) {
                        aVE && (function (aNv) {
                            var aNw = aNK(aQt(aUQ, aNv)['y'], 0, aNJ);
                            aU8[0] = (aNJ - aNw) / aNJ, aV6.style.top = aNw - aPw / 2 + 'px', aWe(aNv);
                        }(aNv), aXI = [aO4(aU8)], aVo || (aSL('drag:h', aXI), aSL('drag', aXI), aY0('h', aXI))), aVR && (function (aNv) {
                            var aNw = aQt(aV1, aNv), aNx = aNK(aNw.x, 0, aOs), aNy = aNK(aNw.y, 0, aPv);
                            aU8[1] = 1 - (aOs - aNx) / aOs, aU8[2] = (aPv - aNy) / aPv, aVn.style.right = aOs - aNx - aPx / 2 + 'px', aVn.style.top = aNy - aQu / 2 + 'px', aWe(aNv);
                        }(aNv), aXI = [aO4(aU8)], aVu || (aSL('drag:sv', aXI), aSL('drag', aXI), aY0('sv', aXI))), aVo = 0, aVu = 0;
                    }
                    function aYv(aNv) {
                        var aNw = aNv.target, aNx = aVE ? 'h' : 'sv', aNy = [
                            aO4(aU8),
                            aOu
                        ], aNz = aNw === aNL || aRV(aNw, aNL) === aNL, aNA = aNw === aPA || aRV(aNw, aPA) === aPA;
                        aNz || aNA ? aNA && (aSL('stop:' + aNx, aNy), aSL('stop', aNy), aY0(aNx, aNy)) : aYb() && !1 !== aNM && (aOu.exit(), aY0(0, aNy)), aVE = 0, aVR = 0;
                    }
                    function aYY(aNv) {
                        aVo = 1, aVE = 1, aWf(aNv), aSg(aNv), aSL('start:h', aXI), aSL('start', aXI), aY0('h', aXI);
                    }
                    function aYZ(aNv) {
                        aVu = 1, aVR = 1, aWf(aNv), aSg(aNv), aSL('start:sv', aXI), aSL('start', aXI), aY0('sv', aXI);
                    }
                    aT0 = function aT0() {
                        aU8 = aSJ(aU8), aWe(), aV6.style.top = aNJ - aPw / 2 - aNJ * +aU8[0] + 'px', aVn.style.right = aOs - aPx / 2 - aOs * +aU8[1] + 'px', aVn.style.top = aPv - aQu / 2 - aPv * +aU8[2] + 'px';
                    }, aOu.exit = function (aNx) {
                        return aYb() && (aYb()['removeChild'](aPA), aOu.visible = !1), aQs(aPB, aUQ, aYY), aQs(aPB, aV1, aYZ), aQs(aPC, aNw, aWf), aQs(aQ6, aNw, aYv), aQs(aQm, aNv, aYt), aSL('exit'), aOu;
                    }, aT0(), aNx || (aQr(aPB, aUQ, aYY), aQr(aPB, aV1, aYZ), aQr(aPC, aNw, aWf), aQr(aQ6, aNw, aYv), aQr(aQm, aNv, aYt));
                }
                function aYt() {
                    return aOu.fit();
                }
                return aYq(1), aNy(function () {
                    var aNv = [aO4(aU8)];
                    aSL('create', aNv), aY0(0, aNv);
                }, 0), aOu.fit = function (aNw) {
                    var aNx = aSh(aNv), aNy = aSh(aOs), aNJ = aNx.w - aNy.w, aNM = aNx.h - aOs.clientHeight, aNN = aQu(aNv), aO4 = aQu(aNL);
                    if (aWe = aO4.l + aNN.l, aWf = aO4.t + aNN.t + aSh(aNL)['h'], aNA(aNw))
                        aNz(aNw[0]) && (aWe = aNw[0]), aNz(aNw[1]) && (aWf = aNw[1]);
                    else {
                        var aO5 = aNN.l, aOr = aNN.t, aPv = aNN.l + aNx.w - aXj - aNJ, aPw = aNN.t + aNx.h - aXv - aNM;
                        aWe = aNK(aWe, aO5, aPv) >> 0, aWf = aNK(aWf, aOr, aPw) >> 0;
                    }
                    return aPA.style.left = aWe + 'px', aPA.style.top = aWf + 'px', aSL('fit'), aOu;
                }, aOu.set = function (aNv) {
                    return aNz(aNv) ? ('string' == typeof aNv && (aNv = aPv.parse(aNv)), aSK(aNv), aT0(), aOu) : aSJ();
                }, aOu.get = function (aNv) {
                    return aSJ(aNv);
                }, aOu.source = aNL, aOu.self = aPA, aOu.visible = !1, aOu.on = function (aNv, aNw, aNx) {
                    return aNz(aNv) ? aNz(aNw) ? (aNz(aPx[aNv]) || (aPx[aNv] = {}), aNz(aNx) || (aNx = aNJ(aPx[aNv])), aPx[aNv][aNx] = aNw, aOu) : aPx[aNv] : aPx;
                }, aOu.off = function (aNv, aNw) {
                    return aNz(aNv) ? aNz(aNw) ? (delete aPx[aNv][aNw], aOu) : (aPx[aNv] = {}, aOu) : (aPx = {}, aOu);
                }, aOu.fire = aSL, aOu.hooks = aPx, aOu.enter = function (aNv) {
                    return aYq(0, aNv), aSL('enter'), aOu;
                }, aOu;
            });
        }(window, document);
        var bbc = b6w;
        var bbd = class {
            constructor(aNv, aNw) {
                this.some_elment = aNv, this._2CL453d2cbee6892954 = aNw, this._2CL45b2deead93296e4 = this._2CL1e3b398ba373e444(), this._2CLfc3474a3fc5358bb();
            }
            _2CLfc3474a3fc5358bb() {
                var bbh = this;
                this.some_elment.addEventListener('keydown', function (aNv) {
                    bbh._2CL296255777f507eaf('keydown', aNv);
                }), this.some_elment.addEventListener('keyup', function (aNv) {
                    bbh._2CL296255777f507eaf('keyup', aNv);
                });
            }
            _2CL547af7c595bbb825(aNv) {
                var aNw = aNv.code;
                switch ((aNw = (aNw = (aNw = aNw.replace('Key', ''))['replace']('Digit', ''))['replace']('Arrow', ''))['startsWith']('Shift') ? aNw = 'Shift' : aNw.startsWith('Control') ? aNw = 'Control' : aNw.startsWith('Alt') && (aNw = 'Alt'), aNw = aNw.toUpperCase()) {
                    case 'BACKQUOTE':
                        aNw = 'TILDE';
                }
                return !!this._2CL45b2deead93296e4.has(aNw) && (aNv.ctrlKey ? 'CTRL+'['concat'](aNw) : aNv.altKey ? 'ALT+'['concat'](aNw) : aNw);
            }
            _2CL296255777f507eaf(aNv, aNw) {
                if ('Tab' === aNw.code && aNw.preventDefault(), aNw.repeat)
                    return;
                var aNx = this._2CL547af7c595bbb825(aNw);
                aNx && this._2CL453d2cbee6892954(aNw, aNv, aNx);
            }
            _2CL1e3b398ba373e444() {
                var aNv = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split'](''), aNw = '0123456789'['split'](''), aNx = 'TAB SHIFT ENTER TILDE SPACE UP DOWN LEFT RIGHT ESCAPE'['split'](' ');
                return new Set([]['concat'](_toConsumableArray(aNv), _toConsumableArray(aNw), _toConsumableArray(aNx)));
            }
        };
        var bbs = class {
            constructor(aNv, aNw) {
                this.some_elment = aNv, this._2CL453d2cbee6892954 = aNw, this._2CLfc3474a3fc5358bb(), this.xPos_kamo = 0, this.yPos_kamo = 0;
            }
            _2CLfc3474a3fc5358bb() {
                var bbw = this;
                this.some_elment.addEventListener('mousedown', function (aNv) {
                    bbw._2CL296255777f507eaf('mousedown', aNv);
                }), this.some_elment.addEventListener('mouseup', function (aNv) {
                    bbw._2CL296255777f507eaf('mouseup', aNv);
                }), this.some_elment.addEventListener('contextmenu', function (aNv) {
                    aNv.preventDefault();
                }), this.some_elment.addEventListener('mousemove', function (aNv) {
                    bbw._2CL842b953e8181e574(aNv);
                }), this.some_elment.addEventListener('wheel', function (aNv) {
                    bbw._2CL6e70ecb150d41822(aNv);
                });
            }
            _2CL842b953e8181e574(aNv) {
                this.xPos_kamo = aNv.clientX, this.yPos_kamo = aNv.clientY;
            }
            _2CL6e70ecb150d41822(aNv) {
                this._2CL453d2cbee6892954(aNv, 'scroll', null);
            }
            _2CL48171983c32c23f5(aNv) {
                switch (aNv.button) {
                    case 0:
                        return 'LEFT BUTTON';
                    case 1:
                        return 'MIDDLE BUTTON';
                    case 2:
                        return 'RIGHT BUTTON';
                    default:
                        return 'BUTTON '['concat'](aNv.button + 1);
                }
            }
            _2CL296255777f507eaf(aNv, aNw) {
                var aNx = this._2CL48171983c32c23f5(aNw);
                this._2CL453d2cbee6892954(aNw, aNv, aNx);
            }
        };
        var bbI = new class {
            constructor() {
                this._2CLcf205d9ede1c22d4 = null, this._2CL1eda54ca4f93faf5 = 'normal';
            }
            _2CL9b17c207efdaf4af() {
                if (b3Y._2CL32137922dbdb3ee5())
                    return;
                var aNv = aXI._2CL46e2b32c63641c78();
                b3Y._2CL158c6b3b1c965555 = aNv, aT1.sendSpawnPacket(aNv);
            }
            _2CL9a918cb5ee0f50a4() {
                var aNv = aXI._2CL46e2b32c63641c78();
                b3Y._2CL158c6b3b1c965555 = aNv, aT1.sendSpectatePacket(aNv);
                window.panapp = function () {
                    aT1.switchSpectateMode(aNv);
                };
            }
            sendMovePacket() {
                var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : b3Y._2CL158c6b3b1c965555;
                if (b3Y._2CL3067dea24cc298e4) {
                    if (b3Y._2CL32137922dbdb3ee5()) {
                        var bbN = b3Y._2CL6d34b6d49ffda54c[aNv];
                        aT1.sendMovePacket(bbN.xPos_kamo, bbN.yPos_kamo, aNv);
                    } else
                        aT1.sendMovePacket(aSL.xPos_kamo, aSL.yPos_kamo, 0);
                } else {
                    var bbO = bcc.sendMovePacket.xPos_kamo, bbP = bcc.sendMovePacket.yPos_kamo, bbQ = (bbO - (window.innerWidth >> 1)) / aSL._2CL7f272a4f358d5b70 + aSL.xPos_kamo, bbR = (bbP - (window.innerHeight >> 1)) / aSL._2CL7f272a4f358d5b70 + aSL.yPos_kamo;
                    window.playerPos = {
                        x: bbQ,
                        y: bbR
                    };
                    aT1.sendMovePacket(bbQ, bbR, aNv);
                }
            }
            _2CLace8b3d8ee5db2c1() {
                var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : b3Y._2CL158c6b3b1c965555;
                this.sendMovePacket(aNv), aT1._2CLace8b3d8ee5db2c1(aNv);
            }
            _2CL4313c30988c62fd4() {
                var bbT = this;
                var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : b3Y._2CL158c6b3b1c965555;
                this._2CLace8b3d8ee5db2c1(aNv), setTimeout(function () {
                    bbT._2CLace8b3d8ee5db2c1(aNv);
                }, 40);
            }
            _2CL420a8d320a570999() {
                var bbV = this;
                var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : b3Y._2CL158c6b3b1c965555;
                var aNw = function aNw() {
                    bbV._2CLace8b3d8ee5db2c1(aNv);
                };
                aNw(), setTimeout(aNw, 40), setTimeout(aNw, 80), setTimeout(aNw, 120);
            }
            _2CLf0eac6daf5b3af67() {
                aT1._2CL90e8863db5939803(b3Y._2CL158c6b3b1c965555);
            }
            _2CL91717ae537ffefd1(aNv) {
                this._2CLcf205d9ede1c22d4 && clearInterval(this._2CLcf205d9ede1c22d4), aNv && (aT1._2CL90e8863db5939803(b3Y._2CL158c6b3b1c965555), this._2CLcf205d9ede1c22d4 = setInterval(function () {
                    aT1._2CL90e8863db5939803(b3Y._2CL158c6b3b1c965555);
                }, 42));
            }
            _2CLa37cba3e411bbe53() {
                if (!b3Y._2CL32137922dbdb3ee5() || !aY0._2CLeb21482a8346145a)
                    return;
                var aNv = 0 === b3Y._2CL158c6b3b1c965555 ? 1 : 0;
                b3Y._2CL1d2b5efaee01be40(aNv) || aT1.sendSpawnPacket(aNv), b3Y._2CL158c6b3b1c965555 = aNv;
            }
            _2CLb1e737e03eefb8d8() {
                var aNv = b3Y._2CL158c6b3b1c965555;
                b18._2CL91cf1e039f1b751e(aNv);
                var aNw = function aNw() {
                    b3Y._2CL1d2b5efaee01be40(aNv) || (aT1.sendSpawnPacket(aNv), setTimeout(aNw, 1000));
                };
                setTimeout(aNw, 1000);
            }
            _2CLfc6a706f908989d7() {
                b3Y._2CL3067dea24cc298e4 = !b3Y._2CL3067dea24cc298e4;
            }
            _2CL89c518bdf8370672() {
                aPB._2CL44cd027169234270 = !aPB._2CL44cd027169234270;
            }
            _2CLa278a3adee94cf49() {
                aPB._2CLb225216db45c841a = !aPB._2CLb225216db45c841a;
            }
            _2CL79d150e24215cf78() {
                aPB._2CLcefd1a51f4ad1389 = !aPB._2CLcefd1a51f4ad1389;
            }
            _2CL2be2746131eaa15e() {
                aPB._2CLeacce6e589327eb8 = !aPB._2CLeacce6e589327eb8;
            }
            _2CL04c8d26c9f9fd268() {
                aPB._2CLc0ce4454f320b281 = !aPB._2CLc0ce4454f320b281;
            }
            _2CL7a27b916dfdcfbc6() {
                'off' === aPB._2CL986d79226a8f4718 ? aPB._2CL986d79226a8f4718 = this._2CL1eda54ca4f93faf5 : (this._2CL1eda54ca4f93faf5 = aPB._2CL986d79226a8f4718, aPB._2CL986d79226a8f4718 = 'off');
            }
            _2CL1dcb29d0128884c3() {
                aPB._2CLc6addc8e83ac89cc = !aPB._2CLc6addc8e83ac89cc;
            }
            _2CL23d92a24e842af19() {
                aPB._2CLb76d87007f6550b8 = !aPB._2CLb76d87007f6550b8;
            }
            _2CLc77e94087ecb1c38() {
                aPB._2CL81e1a04dc15ff5cb = !aPB._2CL81e1a04dc15ff5cb;
            }
            _2CL7128f16f6728c4c2() {
                aPB._2CLe9513e68d2eebae6 = !aPB._2CLe9513e68d2eebae6;
            }
            _2CLefc550a8476f0d48(aNv) {
                aNv = (aNv = aNv.substring(0, 100))['replace'](':sector:', aSL._2CL9c84c7f925c14a54()), b0l.chat_fn(b3Y._2CL158c6b3b1c965555, 2, aNv);
            }
            _2CLb8791ef749374f9f(aNv) {
                aSL._2CL74924ab1e2aa8c48 = aNv;
            }
            _2CL258472a7cab75f4d() {
                var aNv = bcc.sendMovePacket.xPos_kamo, aNw = bcc.sendMovePacket.yPos_kamo, aNx = (aNv - (window.innerWidth >> 1)) / aSL._2CL7f272a4f358d5b70 + aSL.xPos_kamo, aNy = (aNw - (window.innerHeight >> 1)) / aSL._2CL7f272a4f358d5b70 + aSL.yPos_kamo;
                b0l._2CLe50ece9570a295f9(aNx, aNy);
            }
            _2CL08386acb7568ffcb() {
                aSL._2CL4b362f28fd6ff0f8 && !b3Y._2CL32137922dbdb3ee5() && aT1.switchSpectateMode(0);
            }
        }();
        var bc8 = new class {
            constructor() {
                this._2CLc1bfadcfb8498cd0 = document.getElementById('chatbox'), this._2CL6c6f2ffa347ef138 = document.getElementById('chat-input'), this._2CL6fe1f736b5887665 = !1, this._2CL1120ff84dec848bf = !1, this._2CL56ac1ff5a49ceb77 = 0, this._2CLe0f175c185ee19e3 = 500;
            }
            _2CL52a96de0605b8df2() {
                var bca = this;
                this._2CL6c6f2ffa347ef138.addEventListener('focus', function () {
                    bca._2CL1120ff84dec848bf = !0;
                }, { 'passive': !0 }), this._2CL6c6f2ffa347ef138.addEventListener('blur', function () {
                    bca._2CL1120ff84dec848bf = !1;
                }, { 'passive': !0 });
            }
            _2CLce3f568a2bd1c875() {
                if (this._2CL6fe1f736b5887665) {
                    if (this._2CL1120ff84dec848bf) {
                        var bcb = this._2CL6c6f2ffa347ef138.value.substring(0, 100);
                        bcb.length ? aOr.pf_now_kamo - this._2CL56ac1ff5a49ceb77 < this._2CLe0f175c185ee19e3 ? Toast.showToast('error', 'HSLO', 'Message was not sent due to spam protection.') : (b0l.chat_fn(b3Y._2CL158c6b3b1c965555, 1, bcb), this._2CL6c6f2ffa347ef138.value = '', this._2CL56ac1ff5a49ceb77 = aOr.pf_now_kamo) : (this._2CL6c6f2ffa347ef138.blur(), this._2CL87563560028c947f());
                    } else
                        this._2CL6c6f2ffa347ef138.focus();
                } else
                    this._2CLa5f961f14f197d01(), this._2CL6c6f2ffa347ef138.focus();
            }
            _2CLa5f961f14f197d01() {
                this._2CL6fe1f736b5887665 || (this._2CL6fe1f736b5887665 = !0, this._2CLc1bfadcfb8498cd0.style.display = 'flex');
            }
            _2CL87563560028c947f() {
                this._2CL6fe1f736b5887665 && (this._2CL6fe1f736b5887665 = !1, this._2CLc1bfadcfb8498cd0.style.display = 'none');
            }
        }();
        var bcc = new class {
            constructor() {
                this._2CL387009f63b809b06 = null, this.sendMovePacket = null;
            }
            _2CL52a96de0605b8df2() {
                var bce = this;
                this._2CL387009f63b809b06 = new bbd(document, function (aNv, aNw, aNx) {
                    bce._2CLd9a93554b5af4613(aNv, aNw, aNx);
                }), this.sendMovePacket = new bbs(document, function (aNv, aNw, aNx) {
                    bce._2CLd9a93554b5af4613(aNv, aNw, aNx);
                }), setInterval(function () {
                    bbI.sendMovePacket();
                }, 42);
            }
            _2CLd9a93554b5af4613(aNv, aNw, aNx) {
                switch (aNw) {
                    case 'keydown':
                        this._2CL0a28a7ba1fc76794(aNv, aNx);
                        break;
                    case 'keyup':
                        this._2CL0364e0969c2db6a8(aNv, aNx);
                        break;
                    case 'mousedown':
                        this._2CLef5e8c10a1975429(aNv, aNx);
                        break;
                    case 'mouseup':
                        this._2CL3a82f6d78f01c018(aNv, aNx);
                        break;
                    case 'scroll':
                        this._2CL8c7a1d628e1d7f42(aNv);
                }
            }
            _2CL0a28a7ba1fc76794(aNv, aNw) {
                if (!(bcz._2CL6fe1f736b5887665 && bcz._2CL1c41154810a2b457 || bc8._2CL1120ff84dec848bf && aNw !== aPB._2CL472944826f93b186))
                    if (aNw !== aPB._2CL472944826f93b186) {
                        if (aNw !== aPB._2CL650271bdecb9452d) {
                            if (!bf1._2CL6fe1f736b5887665) {
                                if (aNv.preventDefault(), b3Y._2CL32137922dbdb3ee5())
                                    switch (aNw) {
                                        case aPB._2CLf814bd3fc542594e:
                                            return void bbI._2CLace8b3d8ee5db2c1();
                                        case aPB._2CL6d4b44887ac0495a:
                                            return void bbI._2CL4313c30988c62fd4();
                                        case aPB._2CL63360c1adff9bcba:
                                            return void bbI._2CL420a8d320a570999();
                                        case aPB._2CL919e83026bea5351:
                                            return void bbI._2CLf0eac6daf5b3af67();
                                        case aPB._2CLa5e24f78b6a83dcb:
                                            return void bbI._2CL91717ae537ffefd1(!0);
                                        case aPB._2CL730c25dfd242f307:
                                            return void bbI._2CLa37cba3e411bbe53();
                                        case aPB._2CLb9313a4eae8ba674:
                                            return void bbI._2CLb1e737e03eefb8d8();
                                    }
                                switch (aNw) {
                                    case aPB._2CL4cb45f4d3a03b567:
                                        return void bbI._2CL08386acb7568ffcb();
                                    case aPB._2CL42456c247e453024:
                                        return void bbI._2CLfc6a706f908989d7();
                                    case aPB._2CL9faff1ddb6b48469:
                                        return void bbI._2CL89c518bdf8370672();
                                    case aPB._2CL3d732e58193bad6e:
                                        return void bbI._2CLa278a3adee94cf49();
                                    case aPB._2CL85635221f8b5785a:
                                        return void bbI._2CL79d150e24215cf78();
                                    case aPB._2CLd2f606adccbd0bf5:
                                        return void bbI._2CL2be2746131eaa15e();
                                    case aPB._2CL5a33d68f7e6fd099:
                                        return void bbI._2CL04c8d26c9f9fd268();
                                    case aPB._2CL28683f1e5a10c914:
                                        return void bbI._2CL7a27b916dfdcfbc6();
                                    case aPB._2CL158ab8fb3c7f8a0b:
                                        return void bbI._2CL1dcb29d0128884c3();
                                    case aPB._2CL7f8d208a430046ab:
                                        return void bbI._2CL23d92a24e842af19();
                                    case aPB._2CL6d36b1823b2184bb:
                                        return void bbI._2CLc77e94087ecb1c38();
                                    case aPB._2CL6613058c072d9216:
                                        return void bbI._2CL7128f16f6728c4c2();
                                    case aPB._2CL389f5af58d15fa97:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CLd4bb86a7aa2e7a7a);
                                    case aPB._2CLaa522acce3e930b9:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CLcdfd942a32a42746);
                                    case aPB._2CL23fa80a53887e8d1:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL98d2b11532383ac5);
                                    case aPB._2CL6c545dd4010a738d:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL5d6ce31aecb8cf58);
                                    case aPB._2CLfab35ac2ac5bf3e9:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CLcbe444f6891437cc);
                                    case aPB._2CL478eac1083bc0335:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL4982b5e46cfc3503);
                                    case aPB._2CL0c225c3d5b557a69:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL6690e4c0b0ed6267);
                                    case aPB._2CLaa7622d2adef12aa:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL89f55668c1243f06);
                                    case aPB._2CL19b7d19ff210534e:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CLcf788e15b92bfb7a);
                                    case aPB._2CL82bba593fe32c772:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CLb1ce6fc856e0d904);
                                    case aPB._2CL937693fb58a46d8e:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL411c6ca20f32f0e1);
                                    case aPB._2CL7af2c780fe75c597:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CLa92ccaea62ddf43e);
                                    case aPB._2CL4e9fdac9775b3527:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL7bfe8383ceba6c72);
                                    case aPB._2CLc1333360eb236a2a:
                                        return void bbI._2CLefc550a8476f0d48(aPB._2CL16c28a38b8803fde);
                                    case aPB._2CLdbf85cf189188a4f:
                                        return void bbI._2CLb8791ef749374f9f(0.5);
                                    case aPB._2CL3b47258e18e0967c:
                                        return void bbI._2CLb8791ef749374f9f(0.32);
                                    case aPB._2CLa875054f95433873:
                                        return void bbI._2CLb8791ef749374f9f(0.16);
                                    case aPB._2CLd5035ee6e4e3e3b3:
                                        return void bbI._2CLb8791ef749374f9f(0.08);
                                    case aPB._2CLe2eca3b169ca580a:
                                        return void bbI._2CLb8791ef749374f9f(0.04);
                                }
                            }
                        } else
                            bf1._2CLce3f568a2bd1c875();
                    } else
                        bc8._2CLce3f568a2bd1c875();
            }
            _2CL0364e0969c2db6a8(aNv, aNw) {
                switch (aNw) {
                    case aPB._2CLa5e24f78b6a83dcb:
                        return void bbI._2CL91717ae537ffefd1(!1);
                }
            }
            _2CLef5e8c10a1975429(aNv, aNw) {
                if (bf1._2CL6fe1f736b5887665)
                    return;
                var aNx = !1;
                switch (aNw) {
                    case 'LEFT BUTTON':
                        aNx = aPB._2CLd13e6df9bd7f9c85;
                        break;
                    case 'MIDDLE BUTTON':
                        aNx = aPB._2CL439f33ddf1b8b6d3;
                        break;
                    case 'RIGHT BUTTON':
                        aNx = aPB._2CL85624cf2efc95018;
                }
                switch (aNx) {
                    case 'off':
                        break;
                    case 'feed':
                        bbI._2CLf0eac6daf5b3af67();
                        break;
                    case 'macro-feed':
                        bbI._2CL91717ae537ffefd1(!0);
                        break;
                    case 'split':
                        bbI._2CLace8b3d8ee5db2c1();
                        break;
                    case 'double-split':
                        bbI._2CL4313c30988c62fd4();
                        break;
                    case 'split-16':
                        bbI._2CL420a8d320a570999();
                        break;
                    case 'commander':
                        bbI._2CL258472a7cab75f4d();
                        break;
                    case 'player-switch':
                        bbI._2CLa37cba3e411bbe53();
                }
            }
            _2CL3a82f6d78f01c018(aNv, aNw) {
                var aNx = !1;
                switch (aNw) {
                    case 'LEFT BUTTON':
                        aNx = aPB._2CLd13e6df9bd7f9c85;
                        break;
                    case 'MIDDLE BUTTON':
                        aNx = aPB._2CL439f33ddf1b8b6d3;
                        break;
                    case 'RIGHT BUTTON':
                        aNx = aPB._2CL85624cf2efc95018;
                }
                switch (aNx) {
                    case 'macro-feed':
                        bbI._2CL91717ae537ffefd1(!1);
                }
            }
            _2CL8c7a1d628e1d7f42(aNv) {
                aNv.wheelDelta > 0 ? aSL._2CLa06030cf37a205de() : aSL._2CL287eee025b176e7d();
            }
        }();
        var bcz = new class {
            constructor() {
                this.some_elment = document.getElementById('settings-menu'), this._2CL79c28ee191e1170e = document.querySelector('#settings-menu .options-list'), this._2CL6fe1f736b5887665 = !1, this._2CL1c41154810a2b457 = !1, this._2CL96bf919706e37412 = null;
            }
            _2CL52a96de0605b8df2() {
                this._2CLa2c8a4c91d1fb05a(), this._2CLc25816f86f13db82(), this._2CLed548adb91622e09(), b6v._2CL52a96de0605b8df2();
            }
            _2CLc25816f86f13db82() {
                var bcB = this;
                this._2CL96bf919706e37412 = new aOs.a(this._2CL79c28ee191e1170e, { 'wheelPropagation': !1 }), document.getElementById('open-settings-menu')['addEventListener']('click', function () {
                    bcB._2CLa5f961f14f197d01();
                }, { 'passive': !0 }), document.getElementById('close-settings-menu')['addEventListener']('click', function () {
                    bcB._2CL87563560028c947f();
                }, { 'passive': !0 }), this._2CLce6855eb137a8358();
            }
            _2CLce6855eb137a8358() {
                var bcC = this;
                var aNv = document.querySelectorAll('#settings-menu > .navigation > .tab'), aNw = this._2CL79c28ee191e1170e.children;
                var bcF = !![];
                var bcG = ![];
                var bcH = undefined;
                try {
                    var bcI = function bcI() {
                        var aNx = bd2.value;
                        var aNy = aNx.getAttribute('category'), aNz = bcC._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNy, ']')), aNA = function aNA() {
                            var bcN = !![];
                            var bcO = ![];
                            var bcP = undefined;
                            try {
                                for (var bcQ = aNv[Symbol.iterator](), bcR; !(bcN = (bcR = bcQ.next())['done']); bcN = !![]) {
                                    var bcS = bcR.value;
                                    bcS.classList.remove('active');
                                }
                            } catch (bcT) {
                                bcO = !![];
                                bcP = bcT;
                            } finally {
                                try {
                                    if (!bcN && bcQ.return != null) {
                                        bcQ.return();
                                    }
                                } finally {
                                    if (bcO) {
                                        throw bcP;
                                    }
                                }
                            }
                            var bcU = !![];
                            var bcV = ![];
                            var bcW = undefined;
                            try {
                                for (var bcX = aNw[Symbol.iterator](), bcY; !(bcU = (bcY = bcX.next())['done']); bcU = !![]) {
                                    var bcZ = bcY.value;
                                    bcZ.classList.remove('active');
                                }
                            } catch (bd0) {
                                bcV = !![];
                                bcW = bd0;
                            } finally {
                                try {
                                    if (!bcU && bcX.return != null) {
                                        bcX.return();
                                    }
                                } finally {
                                    if (bcV) {
                                        throw bcW;
                                    }
                                }
                            }
                            aNx.classList.add('active'), aNz && aNz.classList.add('active'), bcC._2CL1c41154810a2b457 = 'controls' === aNy, bcC._2CL96bf919706e37412.update();
                        };
                        aNx.addEventListener('click', aNA, { 'passive': !0 });
                    };
                    for (var bd1 = aNv[Symbol.iterator](), bd2; !(bcF = (bd2 = bd1.next())['done']); bcF = !![]) {
                        bcI();
                    }
                } catch (bd3) {
                    bcG = !![];
                    bcH = bd3;
                } finally {
                    try {
                        if (!bcF && bd1.return != null) {
                            bd1.return();
                        }
                    } finally {
                        if (bcG) {
                            throw bcH;
                        }
                    }
                }
            }
            _2CLa5f961f14f197d01() {
                var bd4 = this;
                this._2CL6fe1f736b5887665 = !0, requestAnimationFrame(function () {
                    bd4._2CL6fe1f736b5887665 && (bd4.some_elment.style.display = 'flex'), requestAnimationFrame(function () {
                        bd4._2CL6fe1f736b5887665 && (bd4.some_elment.style.opacity = '1');
                    });
                });
            }
            _2CL87563560028c947f() {
                var bd5 = this;
                this._2CL6fe1f736b5887665 = !1, requestAnimationFrame(function () {
                    bd5._2CL6fe1f736b5887665 || (bd5.some_elment.style.opacity = '0'), setTimeout(function () {
                        bd5._2CL6fe1f736b5887665 || (bd5.some_elment.style.display = 'none');
                    }, 500);
                });
            }
            _2CLa2c8a4c91d1fb05a() {
                var aNv = Object.keys(b5p);
                for (var bd7 = 0, bd8 = aNv; bd7 < bd8.length; bd7++) {
                    var bd9 = bd8[bd7];
                    var bda = b5p[bd9], bdb = Object.keys(bda);
                    for (var bdc = 0, bdd = bdb; bdc < bdd.length; bdc++) {
                        var bde = bdd[bdc];
                        var bdf = bda[bde];
                        switch (bdf._2CL65dfacb39960c223) {
                            case 'seperator':
                                this._2CL5ec611482d180882(bd9);
                                break;
                            case 'toggle':
                                this._2CLc5d0838b0bb2442e(bdf, bde, bd9);
                                break;
                            case 'range':
                                this._2CL1d0ec3f8d1bc97fa(bdf, bde, bd9);
                                break;
                            case 'drop-down':
                                this._2CL99d09e349837b437(bdf, bde, bd9);
                                break;
                            case 'input':
                                this._2CL79479a0b15899efa(bdf, bde, bd9);
                                break;
                            case 'colorpicker':
                                this._2CL3f11bafd4a38eb07(bdf, bde, bd9);
                                break;
                            case 'hotkey':
                                this._2CL22be9028f47933cf(bdf, bde, bd9);
                        }
                    }
                }
            }
            _2CL5ec611482d180882(aNv) {
                var aNw = aPv._2CL610747fa7dec80b4.content.children[0]['cloneNode'](!0);
                this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNv, ']'))['appendChild'](aNw);
            }
            _2CLc5d0838b0bb2442e(aNv, aNw, aNx) {
                var aNy = aPv._2CLce3f568a2bd1c875.content.children[0]['cloneNode'](!0);
                aNy.querySelector('div.name')['innerHTML'] = aNv._2CL1e22c6e0e181ac56, aNv._2CL7d0596c36891967f && aNy.classList.add('on');
                var aNz = aNv._2CL7d0596c36891967f;
                Object.defineProperty(aPB, aNw, {
                    'get': function get() {
                        return aNz;
                    },
                    'set': function set(aNx) {
                        aNx ? aNy.classList.add('on') : aNy.classList.remove('on'), aWf.set('settings', aNw, aNx), aNv._2CL850f236ecda2e139 && aNv._2CL850f236ecda2e139(aNx), aNz = aNx;
                    }
                }), aNy.querySelector('.box')['addEventListener']('click', function () {
                    aPB[aNw] = !aPB[aNw];
                }, { 'passive': !0 }), this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNx, ']'))['appendChild'](aNy);
            }
            _2CL1d0ec3f8d1bc97fa(aNv, aNw, aNx) {
                var aNy = aPv._2CL7fda5ccb82aee2aa.content.children[0]['cloneNode'](!0);
                aNy.querySelector('div.name')['innerHTML'] = aNv._2CL1e22c6e0e181ac56;
                var aNz = aNy.querySelector('div.box input');
                aNz.min = aNv._2CLfc460a790c5a0edf, aNz.max = aNv._2CL111f1b5b84b5c819, aNz.step = aNv._2CLe3712e4c0c1f2dfe, aNz.value = aNv._2CL7d0596c36891967f;
                var aNA = aNy.querySelector('div.box .progress-bar .fill');
                aNA.style.width = ''['concat']((aNv._2CL7d0596c36891967f - aNv._2CLfc460a790c5a0edf) / (aNv._2CL111f1b5b84b5c819 - aNv._2CLfc460a790c5a0edf) * 100 | 0, '%');
                var aNJ = aNy.querySelector('div.value');
                aNJ.innerHTML = aNv._2CL7d0596c36891967f;
                var aNK = aNv._2CL7d0596c36891967f;
                Object.defineProperty(aPB, aNw, {
                    'get': function get() {
                        return aNK;
                    },
                    'set': function set(aNx) {
                        aNA.style.width = ''['concat']((aNx - aNv._2CLfc460a790c5a0edf) / (aNv._2CL111f1b5b84b5c819 - aNv._2CLfc460a790c5a0edf) * 100 | 0, '%'), aNJ.innerHTML = aNx, aNz.value = aNx, aWf.set('settings', aNw, aNx), aNv._2CL850f236ecda2e139 && aNv._2CL850f236ecda2e139(aNx), aNK = aNx;
                    }
                }), aNz.addEventListener('input', function () {
                    aPB[aNw] = +aNz.value;
                }, { 'passive': !0 }), this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNx, ']'))['appendChild'](aNy);
            }
            _2CL99d09e349837b437(aNv, aNw, aNx) {
                var aNy = aPv._2CLa7b9f5dd529aab5f.content.children[0]['cloneNode'](!0);
                aNy.querySelector('div.name')['innerHTML'] = aNv._2CL1e22c6e0e181ac56;
                var aNz = aNy.querySelector('div.box .selected');
                aNz.innerHTML = aNv._2CL362661de726a1fb0[aNv._2CL7d0596c36891967f];
                var aNA = aNy.querySelector('div.box .list'), aNJ = Object.keys(aNv._2CL362661de726a1fb0), aNK = [];
                for (var bdF = 0, bdG = aNJ; bdF < bdG.length; bdF++) {
                    var bdH = bdG[bdF];
                    var bdI = aNv._2CL362661de726a1fb0[bdH], bdJ = aPv._2CL8fc722d7f11003c4.content.children[0]['cloneNode'](!0);
                    bdJ.innerHTML = bdI, bdJ.setAttribute('value', bdH), aNK.push(bdJ);
                }
                var aNL = aNv._2CL7d0596c36891967f;
                Object.defineProperty(aPB, aNw, {
                    'get': function get() {
                        return aNL;
                    },
                    'set': function set(aNx) {
                        aNz.innerHTML = aNv._2CL362661de726a1fb0[aNx], aWf.set('settings', aNw, aNx), aNv._2CL850f236ecda2e139 && aNv._2CL850f236ecda2e139(aNx), aNL = aNx;
                    }
                });
                var bdM = function bdM() {
                    var aNv = bdQ[bdP];
                    aNv.addEventListener('click', function (aNx) {
                        aPB[aNw] = aNv.getAttribute('value');
                    }, { 'passive': !0 }), aNA.appendChild(aNv);
                };
                for (var bdP = 0, bdQ = aNK; bdP < bdQ.length; bdP++) {
                    bdM();
                }
                var aNM = function aNM(aNv) {
                    var aNw = document.createElement('div'), aNx = 1.5 * aNv.target.offsetWidth;
                    aNw.classList.add('material-ripple'), aNw.style.width = ''['concat'](aNx << 1, 'px'), aNw.style.height = ''['concat'](aNx << 1, 'px'), aNw.style.top = ''['concat'](aNv.offsetY - aNx, 'px'), aNw.style.left = ''['concat'](aNv.offsetX - aNx, 'px'), requestAnimationFrame(function () {
                        aNv.target.appendChild(aNw), requestAnimationFrame(function () {
                            aNw.style.opacity = '0', aNw.style.transform = 'scale(1)', setTimeout(function () {
                                aNv.target.removeChild(aNw);
                            }, 1250);
                        });
                    });
                };
                for (var bdV = 0, bdW = aNK; bdV < bdW.length; bdV++) {
                    var bdX = bdW[bdV];
                    bdX.addEventListener('click', aNM, { 'passive': !0 }), bdX.style.position = 'relative', bdX.style.overflow = 'hidden';
                }
                this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNx, ']'))['appendChild'](aNy);
            }
            _2CL79479a0b15899efa(aNv, aNw, aNx) {
                var aNy = aPv._2CL6c6f2ffa347ef138.content.children[0]['cloneNode'](!0);
                aNy.querySelector('div.name')['innerHTML'] = aNv._2CL1e22c6e0e181ac56;
                var aNz = aNy.querySelector('input');
                aNz.value = aNv._2CL7d0596c36891967f;
                var aNA = aNv._2CL7d0596c36891967f;
                Object.defineProperty(aPB, aNw, {
                    'get': function get() {
                        return aNA;
                    },
                    'set': function set(aNx) {
                        aNz.value = aNx, aWf.set('settings', aNw, aNx), aNv._2CL850f236ecda2e139 && aNv._2CL850f236ecda2e139(aNx), aNA = aNx;
                    }
                }), aNz.addEventListener('blur', function () {
                    aPB[aNw] = aNz.value;
                }, { 'passive': !0 }), this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNx, ']'))['appendChild'](aNy);
            }
            _2CL3f11bafd4a38eb07(aNv, aNw, aNx) {
                var aNy = aPv._2CL795e6476e2075f2c.content.children[0]['cloneNode'](!0);
                aNy.querySelector('div.name')['innerHTML'] = aNv._2CL1e22c6e0e181ac56;
                var aNz = aNy.querySelector('input');
                aNz.value = aNv._2CL7d0596c36891967f;
                var aNA = aNy.querySelector('div.color-preview');
                aNA.style.backgroundColor = aNv._2CL7d0596c36891967f;
                var aNJ = new bbc(aNz, !1);
                var aNK = aNv._2CL7d0596c36891967f, aNL = !0;
                Object.defineProperty(aPB, aNw, {
                    'get': function get() {
                        return aNK;
                    },
                    'set': function set(aNx) {
                        aNz.value = aNx, aNA.style.backgroundColor = aNx, aNL ? aNL = !1 : aWf.set('settings', aNw, aNx), aNJ.set(aNx), aNv._2CL850f236ecda2e139 && aNv._2CL850f236ecda2e139(aNx), aNK = aNx;
                    }
                }), aNJ.on('change', function (aNv) {
                    aPB[aNw] = '#'['concat'](aNv);
                }), aNz.addEventListener('change', function () {
                    var aNv = [aNz.value.replace('#', '')];
                    aNJ.fire('change', aNv);
                }), aNz.addEventListener('focus', function () {
                    aNJ.enter();
                }), aNz.addEventListener('blur', function () {
                    aNJ.exit();
                }), aNA.addEventListener('click', function () {
                    aNz.focus();
                }, { 'passive': !0 }), this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNx, ']'))['appendChild'](aNy);
            }
            _2CL22be9028f47933cf(aNv, aNw, aNx) {
                var aNy = aPv._2CLa2e7954344d9f60e.content.children[0]['cloneNode'](!0);
                aNy.querySelector('div.name')['innerHTML'] = aNv._2CL1e22c6e0e181ac56;
                var aNz = aNy.querySelector('input');
                aNz.value = aNv._2CL7d0596c36891967f;
                var aNA = aNv._2CL7d0596c36891967f;
                Object.defineProperty(aPB, aNw, {
                    'get': function get() {
                        return aNA;
                    },
                    'set': function set(aNx) {
                        aNz.value = aNx, aWf.set('settings', aNw, aNx), aNv._2CL850f236ecda2e139 && aNv._2CL850f236ecda2e139(aNx), aNA = aNx;
                    }
                });
                var aNJ = Object.keys(b5p.controls), aNK = aNv._2CLf25e006a93c268fc;
                aNz.addEventListener('keydown', function (aNv) {
                    aNv.preventDefault();
                    var aNx = bcc._2CL387009f63b809b06._2CL547af7c595bbb825(aNv);
                    if (aNx) {
                        for (var bes = 0, bet = aNJ; bes < bet.length; bes++) {
                            var beu = bet[bes];
                            if (beu === aNw)
                                continue;
                            var bev = b5p.controls[beu];
                            if ('hotkey' === bev._2CL65dfacb39960c223 && bev._2CLf25e006a93c268fc === aNK && aPB[beu] === aNx) {
                                aPB[beu] = 'EMPTY';
                                var bew = 'Hotkey for "'['concat'](bev._2CL1e22c6e0e181ac56, '" has been cleared because key "')['concat'](aNx, '" was previously bound to it.');
                                Toast._2CL372f5bcb71056a4d('alert', 'keyboard', 'Controls', bew);
                            }
                        }
                        aNz.value = aNx, aPB[aNw] = aNx;
                    }
                }), this._2CL79c28ee191e1170e.querySelector('div[category='['concat'](aNx, ']'))['appendChild'](aNy);
            }
            _2CLed548adb91622e09() {
                var aNv = Object.keys(b5p);
                for (var bey = 0, bez = aNv; bey < bez.length; bey++) {
                    var beA = bez[bey];
                    var beB = b5p[beA], beC = Object.keys(beB);
                    for (var beD = 0, beE = beC; beD < beE.length; beD++) {
                        var beF = beE[beD];
                        if ('seperator' === beB[beF]['_2CL65dfacb39960c223'])
                            continue;
                        var beG = aWf.get('settings', beF);
                        void 0 !== beG && (aPB[beF] = beG);
                    }
                }
            }
        }();
        var beH = ChangeLog;
        var beI = new class {
            constructor() {
                this._2CLc1bfadcfb8498cd0 = document.getElementById('changelog'), this._2CL06ecdacc5326d193 = {
                    '_2CLb043662a7bf3f827': document.getElementById('changelog-open'),
                    '_2CL038779d0e57fd10f': document.getElementById('changelog-close')
                }, this._2CL4180b2d55d213155 = {
                    '_2CL3244a15a51872c74': document.getElementById('changelog-entry'),
                    '_2CL51650c0b494c2e37': document.getElementById('changelog-list-item')
                }, this._2CL6fe1f736b5887665 = !1, this._2CLc4b8ab500089b24b = 619, this._2CL93ceef27dfcce1b0 = 0;
            }
            _2CL52a96de0605b8df2() {
                var beK = this;
                new aOs.a(this._2CLc1bfadcfb8498cd0, { 'wheelPropagation': !1 }), this._2CLed2a14a8a98a2899(), this._2CL09647b328aef4b85(), this._2CL06ecdacc5326d193._2CLb043662a7bf3f827.addEventListener('click', function () {
                    beK._2CLa5f961f14f197d01();
                }, { 'passive': !0 }), this._2CL06ecdacc5326d193._2CL038779d0e57fd10f.addEventListener('click', function () {
                    beK._2CL87563560028c947f();
                }, { 'passive': !0 });
            }
            _2CLed2a14a8a98a2899() {
                for (var beL = 0, beM = beH; beL < beM.length; beL++) {
                    var beN = beM[beL];
                    var beO = this._2CL4180b2d55d213155._2CL3244a15a51872c74.content['children'][0]['cloneNode'](!0);
                    beO.querySelector('.date')['innerText'] = beN._2CL5b08d4f823242b6e;
                    var beP = !![];
                    var beQ = ![];
                    var beR = undefined;
                    try {
                        for (var beS = beN._2CL8c7cbeadc1d969c5[Symbol.iterator](), beT; !(beP = (beT = beS.next())['done']); beP = !![]) {
                            var beU = beT.value;
                            var beV = this._2CL4180b2d55d213155._2CL51650c0b494c2e37.content['children'][0]['cloneNode'](!0), beW = beV.querySelector('i'), beX = beV.querySelector('span');
                            beW.innerText = beU._2CLa2b5325b25fe36f2, beX.innerText = beU._2CL3f243e13444f693a, beO.appendChild(beV);
                        }
                    } catch (beY) {
                        beQ = !![];
                        beR = beY;
                    } finally {
                        try {
                            if (!beP && beS.return != null) {
                                beS.return();
                            }
                        } finally {
                            if (beQ) {
                                throw beR;
                            }
                        }
                    }
                    this._2CLc1bfadcfb8498cd0.appendChild(beO);
                }
            }
            _2CL09647b328aef4b85() {
                this._2CL93ceef27dfcce1b0 = +aWf.get('misc', 'changelog-version'), this._2CL93ceef27dfcce1b0 !== this._2CLc4b8ab500089b24b && this._2CL06ecdacc5326d193._2CLb043662a7bf3f827.classList['add']('active');
            }
            _2CLa5f961f14f197d01() {
                var beZ = this;
                this._2CL6fe1f736b5887665 = !0, requestAnimationFrame(function () {
                    beZ._2CL6fe1f736b5887665 && (beZ._2CLc1bfadcfb8498cd0.style.display = 'flex'), requestAnimationFrame(function () {
                        beZ._2CL6fe1f736b5887665 && (beZ._2CLc1bfadcfb8498cd0.style.opacity = '1');
                    });
                }), this._2CL93ceef27dfcce1b0 !== this._2CLc4b8ab500089b24b && (this._2CL93ceef27dfcce1b0 = this._2CLc4b8ab500089b24b, aWf.set('misc', 'changelog-version', ''['concat'](this._2CLc4b8ab500089b24b)), this._2CL06ecdacc5326d193._2CLb043662a7bf3f827.classList['remove']('active'));
            }
            _2CL87563560028c947f() {
                var bf0 = this;
                this._2CL6fe1f736b5887665 = !1, requestAnimationFrame(function () {
                    bf0._2CL6fe1f736b5887665 || (bf0._2CLc1bfadcfb8498cd0.style.opacity = '0'), setTimeout(function () {
                        bf0._2CL6fe1f736b5887665 || (bf0._2CLc1bfadcfb8498cd0.style.display = 'none');
                    }, 500);
                });
            }
        }();
        var bf1 = new class {
            constructor() {
                this.some_elment = document.getElementById('menu'), this._2CL6fe1f736b5887665 = !0;
            }
            _2CL52a96de0605b8df2() {
                var bf3 = this;
                bcz._2CL52a96de0605b8df2(), b5Z._2CL52a96de0605b8df2(), b1F._2CL52a96de0605b8df2(), aXI._2CL52a96de0605b8df2(), aY0._2CL52a96de0605b8df2(), b0W._2CL52a96de0605b8df2(), b1q._2CL52a96de0605b8df2(), beI._2CL52a96de0605b8df2(), document.getElementById('play')['addEventListener']('click', function () {
                    bf3._2CL9b17c207efdaf4af();
                }), document.getElementById('spectate')['addEventListener']('click', function () {
                    bf3._2CL9a918cb5ee0f50a4();
                });
            }
            _2CLa5f961f14f197d01() {
                var bf4 = this;
                this._2CL6fe1f736b5887665 = !0, requestAnimationFrame(function () {
                    bf4._2CL6fe1f736b5887665 && (bf4.some_elment.style.display = 'block'), requestAnimationFrame(function () {
                        bf4._2CL6fe1f736b5887665 && (bf4.some_elment.style.opacity = '1');
                    });
                });
            }
            _2CL87563560028c947f() {
                var bf5 = this;
                this._2CL6fe1f736b5887665 = !1, requestAnimationFrame(function () {
                    bf5._2CL6fe1f736b5887665 || (bf5.some_elment.style.opacity = '0'), setTimeout(function () {
                        bf5._2CL6fe1f736b5887665 || (bf5.some_elment.style.display = 'none');
                    }, 500);
                });
            }
            _2CLce3f568a2bd1c875() {
                this._2CL6fe1f736b5887665 ? this._2CL87563560028c947f() : this._2CLa5f961f14f197d01();
            }
            _2CL9b17c207efdaf4af() {
                bbI._2CL9b17c207efdaf4af(), this._2CL87563560028c947f();
            }
            _2CL9a918cb5ee0f50a4() {
                bbI._2CL9a918cb5ee0f50a4(), this._2CL87563560028c947f();
            }
        }();
        var bf6 = class {
            constructor(aNv) {
                this.some_elment = aNv, this._2CL9738c64fdc01850b = aNv.querySelector('.mass'), this._2CL40f1effde591032b = aNv.querySelector('.name'), this._2CLb54037bcc957df7d = !1;
            }
            _2CLa5f961f14f197d01() {
                this._2CLb54037bcc957df7d || (this.some_elment.style.display = 'flex', this._2CLb54037bcc957df7d = !0);
            }
            _2CL87563560028c947f() {
                this._2CLb54037bcc957df7d && (this.some_elment.style.display = 'none', this._2CLb54037bcc957df7d = !1);
            }
            _2CL30c87194157e4b27(aNv) {
                this._2CL9738c64fdc01850b.innerText = aNv;
            }
            _2CL30c87194157e4b27() {
                return this._2CL9738c64fdc01850b.innerText;
            }
            _2CL9b395079675c6a66(aNv) {
                this._2CL40f1effde591032b.innerText = aNv;
            }
            _2CL9b395079675c6a66() {
                return this._2CL40f1effde591032b.innerText;
            }
        };
        var bfb = function bfb(aNv, aNw, aNx) {
            _classCallCheck(this, bfb);
            this._2CL9b395079675c6a66 = aNv, this._2CL30c87194157e4b27 = aNw, this._2CL7b047b1f72f109f9 = aNx;
        };
        var bff = new class {
            constructor() {
                this.some_elment = document.querySelector('#teamlist-hud > .list'), this._2CL6702d8941410c104 = {
                    '_2CL4c09d125ca00b5fc': document.getElementById('team-data-playing'),
                    '_2CL3123ed3cbfab55ad': document.getElementById('team-data-idle'),
                    '_2CL30c87194157e4b27': document.getElementById('team-data-mass')
                }, this._2CL7792df4672c48c6b = [];
            }
            _2CL52a96de0605b8df2() {
                var aNv = this.some_elment.children;
                var bfi = !![];
                var bfj = ![];
                var bfk = undefined;
                try {
                    for (var bfl = aNv[Symbol.iterator](), bfm; !(bfi = (bfm = bfl.next())['done']); bfi = !![]) {
                        var bfn = bfm.value;
                        var bfo = new bf6(bfn);
                        this._2CL7792df4672c48c6b.push(bfo);
                    }
                } catch (bfp) {
                    bfj = !![];
                    bfk = bfp;
                } finally {
                    try {
                        if (!bfi && bfl.return != null) {
                            bfl.return();
                        }
                    } finally {
                        if (bfj) {
                            throw bfk;
                        }
                    }
                }
            }
            _2CLcc32da8337a77c45() {
                var aNv = 0, aNw = 0, aNx = 0;
                var aNy = [];
                var bfu = !![];
                var bfv = ![];
                var bfw = undefined;
                try {
                    for (var bfx = aYv._2CL1627e8a692645e68[Symbol.iterator](), bfy; !(bfu = (bfy = bfx.next())['done']); bfu = !![]) {
                        var bfz = _slicedToArray(bfy.value, 2), bfA = bfz[0], bfB = bfz[1];
                        for (var bfC = 0; bfC < 2; bfC++) {
                            if (bfB._2CLa8da637215ed8fdd[bfC]) {
                                var bfD = bfB._2CL8ac401cc9f1e8785[bfC], bfE = bfB._2CL30c87194157e4b27[bfC], bfF = bfB._2CL7b047b1f72f109f9, bfG = new bfb(bfD, bfE, bfF);
                                aNy.push(bfG), aNv++, aNx += bfE;
                            } else
                                aNw++;
                        }
                    }
                } catch (bfH) {
                    bfv = !![];
                    bfw = bfH;
                } finally {
                    try {
                        if (!bfu && bfx.return != null) {
                            bfx.return();
                        }
                    } finally {
                        if (bfv) {
                            throw bfw;
                        }
                    }
                }
                aNy.sort(this._2CL6a7369ae926cd4f4);
                var aNz = aNy.slice(0, 6);
                for (var bfJ = 0; bfJ < this._2CL7792df4672c48c6b.length; bfJ++) {
                    var bfK = this._2CL7792df4672c48c6b[bfJ], bfL = aNz[bfJ];
                    bfL ? (bfK._2CL9b395079675c6a66 = bfL._2CL9b395079675c6a66, bfK._2CL30c87194157e4b27 = bfL._2CL30c87194157e4b27, bfK._2CLa5f961f14f197d01()) : bfK._2CL87563560028c947f();
                }
                for (var bfM = 0; bfM < (aY0._2CLeb21482a8346145a ? 2 : 1); bfM++) {
                    b3Y._2CL1d2b5efaee01be40(bfM) ? (aNv++, aNx += b3Y._2CL30c87194157e4b27[bfM]) : aNw++;
                }
                this._2CL6702d8941410c104._2CL4c09d125ca00b5fc.innerText = aNv, this._2CL6702d8941410c104._2CL3123ed3cbfab55ad.innerText = aNw, this._2CL6702d8941410c104._2CL30c87194157e4b27.innerText = aNx;
            }
            _2CL6a7369ae926cd4f4(aNv, aNw) {
                return aNw._2CL30c87194157e4b27 - aNv._2CL30c87194157e4b27;
            }
        }();
        var bfP = new class {
            constructor() {
                this.some_elment = document.getElementById('stats'), this._2CL0fb75a9e3fa73434 = 0;
            }
            _2CL5cea690f6fea0a54() {
                this._2CL0fb75a9e3fa73434++;
            }
            _2CLcc32da8337a77c45() {
                var aNv = [];
                aNv.push('FPS: '['concat'](this._2CL0fb75a9e3fa73434));
                var aNw = b3Y._2CL32137922dbdb3ee5();
                window.playerCells = b2u._2CL9661498b4088206f;
                aNw && (aNv.push('Mass: '['concat'](b3Y._2CL30c87194157e4b27[0] + b3Y._2CL30c87194157e4b27[1])), aNv.push(''['concat'](b2u._2CL9661498b4088206f[0]['size'] + b2u._2CL9661498b4088206f[1]['size'], '/')['concat'](16 * aNw))), b3Y._2CL3067dea24cc298e4 && aNv.push('<i class="material-icons">pause_circle_filled</i> Paused');
                var aNx = aNv.join('   ');
                this.some_elment.innerHTML = aNx, this._2CL0fb75a9e3fa73434 = 0;
            }
        }();
        var bfU = new class {
            constructor() {
                this.some_elment = document.getElementById('time-hud'), this._2CLe89448b970140527 = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'['split'](' ');
            }
            _2CLcc32da8337a77c45() {
                var aNv = new Date(), aNw = '0'['concat'](aNv.getDate())['slice'](-2), aNx = this._2CLe89448b970140527[aNv.getMonth()], aNy = aNv.getFullYear(), aNz = '0'['concat'](aNv.getHours())['slice'](-2), aNA = '0'['concat'](aNv.getMinutes())['slice'](-2), aNJ = '0'['concat'](aNv.getSeconds())['slice'](-2);
                this.some_elment.innerText = ''['concat'](aNw, ' ')['concat'](aNx, ' ')['concat'](aNy, ' ')['concat'](aNz, ':')['concat'](aNA, ':')['concat'](aNJ);
            }
        }();
        var bg3 = new class {
            constructor() {
                this._2CLdebe179f239f004d = 1000, this._2CL9f54635827a87453 = 0;
            }
            _2CL52a96de0605b8df2() {
                b4H._2CL52a96de0605b8df2(), aV6._2CL52a96de0605b8df2(), bff._2CL52a96de0605b8df2(), bc8._2CL52a96de0605b8df2(), aVE._2CL52a96de0605b8df2();
            }
            _2CLcc32da8337a77c45() {
                aPB._2CL44cd027169234270 && (aPB._2CLc07a66d08504b3f2 && b4H._2CLcc32da8337a77c45(), aPB._2CL37d09b74427e481c && bfP._2CL5cea690f6fea0a54(), aOr.pf_now_kamo - this._2CL9f54635827a87453 < this._2CLdebe179f239f004d || (aPB._2CL63cd5d8147aff3e2 && aV6._2CLcc32da8337a77c45(), aPB._2CL836644ddfa62ab91 && bff._2CLcc32da8337a77c45(), aPB._2CL37d09b74427e481c && bfP._2CLcc32da8337a77c45(), bfU._2CLcc32da8337a77c45(), this._2CL9f54635827a87453 = aOr.pf_now_kamo));
            }
        }();
        var bg5 = new class {
            constructor() {
            }
            _2CL52a96de0605b8df2() {
                aOu._2CL52a96de0605b8df2(), bf1._2CL52a96de0605b8df2(), bg3._2CL52a96de0605b8df2();
            }
        }();
        var bg7 = new class {
            constructor() {
                var bg9 = this;
                this.canvas_kana = document.createElement('canvas');
                this._2CL30a25e13cd0ba4fe = this.canvas_kana.getContext('2d');
                this._2CL90b42a0a84ed04cf = new Image();
                this._2CL90b42a0a84ed04cf.onload = function () {
                    bg9._2CLb7312dcb216ae550();
                }, this._2CL1849df6af84c6815 = '';
            }
            draw_some(aNv) {
                aPB._2CLb76d87007f6550b8 && (this._2CLcc32da8337a77c45(), aNv.drawImage(this.canvas_kana, -7071, -7071, 14142, 14142));
            }
            _2CLcc32da8337a77c45() {
                var aNv = aPB._2CLb3ac7c3b6c1b2a7d, aNw = aPB._2CLecab002b7ebf4d7e;
                this._2CL90b42a0a84ed04cf.src !== aNv && (this._2CL90b42a0a84ed04cf.src = aNv), this._2CL1849df6af84c6815 !== aNw && (this._2CL1849df6af84c6815 = aNw, this._2CLb7312dcb216ae550());
            }
            _2CLb7312dcb216ae550() {
                this._2CL90b42a0a84ed04cf.complete && this._2CL90b42a0a84ed04cf.naturalWidth && this._2CL90b42a0a84ed04cf.naturalHeight && aQt.a.Hage.Tx_BG(this._2CL90b42a0a84ed04cf, this._2CL30a25e13cd0ba4fe, aPB._2CLecab002b7ebf4d7e);
            }
        }();
        var SectorDrawer = new class {
            constructor() {
            }
            draw_some(aNv) {
                if (!aPB._2CLc6addc8e83ac89cc)
                    return;
                var aNw = b2u._2CL901757144a6dfbca._2CLf4308d8c11499f88, aNx = b2u._2CL901757144a6dfbca._2CL5fab68fb24c1a804, aNy = b2u._2CL901757144a6dfbca._2CL1d47c61d5ba7a6fd - b2u._2CL901757144a6dfbca._2CLf4308d8c11499f88, aNz = b2u._2CL901757144a6dfbca._2CL0a20f9de5d5d3f47 - b2u._2CL901757144a6dfbca._2CL5fab68fb24c1a804, aNA = aNy / 5, aNJ = aNz / 5;
                switch (aNv.beginPath(), aNv.rect(aNw + aNA, aNx, aNA, aNz), aNv.rect(aNw + 3 * aNA, aNx, aNA, aNz), aNv.rect(aNw, aNx + aNJ, aNy, aNJ), aNv.rect(aNw, aNx + 3 * aNJ, aNy, aNJ), aNv.rect(aNw, aNx, aNy, aNz), aNv.closePath(), aNv.lineWidth = aPB._2CL71fd426c3b41aeea, aNv.strokeStyle = aPB._2CLb91b871befafb409, aNv.stroke(), aPB._2CLed3a332288178970) {
                    case 'sector-name':
                        this.drawSectorName(aNv, aNx, aNw, aNA, aNJ);
                        break;
                    case 'snowflakes':
                        this.drawSnowFlakes(aNv, aNx, aNw, aNA, aNJ, String.fromCharCode(10052));
                }
            }
            drawSectorName(aNv, aNw, aNx, aNy, aNz) {
                var aNA = aNy / 2, aNJ = aNz / 2, aNK = 'ABCDE'['split']('');
                aNv.font = ''['concat'](aPB._2CLc7d236944e7faf6f, ' ')['concat'](aPB._2CL190dd121204ee0e0 * aNy, 'px ')['concat'](aPB._2CLf188529622ede2b4), aNv.textAlign = 'center', aNv.textBaseline = 'middle', aNv.fillStyle = aPB._2CL0eb855e82e4fbbb9;
                for (var bgu = 0; bgu < 5; bgu++) {
                    var bgv = aNw + aNJ + bgu * aNz;
                    for (var bgw = 0; bgw < 5; bgw++) {
                        var bgx = aNx + aNA + bgw * aNy, bgy = aNK[bgu] + (bgw + 1);
                        aNv.fillText(bgy, bgx, bgv);
                    }
                }
            }
            drawSnowFlakes(aNv, aNw, aNx, aNy, aNz, aNA) {
                var aNJ = aNy / 2, aNK = aNz / 2;
                aNv.font = '500 '['concat'](aPB._2CL190dd121204ee0e0 * aNy, 'px Arial');
                aNv.textAlign = 'center';
                aNv.textBaseline = 'middle';
                aNv.fillStyle = aPB._2CL0eb855e82e4fbbb9;
                for (var bgH = 0; bgH < 5; bgH++) {
                    var bgI = aNw + aNK + bgH * aNz;
                    for (var bgJ = 0; bgJ < 5; bgJ++) {
                        var bgK = aNx + aNJ + bgJ * aNy;
                        aNv.fillText(aNA, bgK, bgI);
                    }
                }
            }
        }();
        var borderDrawer = new class {
            constructor() {
                this.canvas_kamo = document.createElement('canvas');
                this.ctx_kamo = this.canvas_kamo.getContext('2d');
                this.canvasSize_ = 2048;
                this._2CLf6e5846f1b211fe6 = '';
                this.borderWidth = 0;
                this._2CL29139779efc59d37 = !1;
                this.glowDistance = 0;
                this.color_kamo = '';
                this.glowStrength = 0;
                this.needReDraw_bool = !1;
            }
            _2CL1ff235ee6a538d5a() {
                this._2CL1849df6af84c6815 = aPB._2CLb1e2e9f32fc11173;
                this.setLineWidth_fn = aPB._2CLb846d894676621a3;
                this._2CL47e32ba4a20e2fb2 = aPB._2CLb2498f5ee07ff5b3;
                this.glowDistance_setter = aPB._2CL63a253787a089be6;
                this.setColor_fn = aPB._2CLec31e0e6b26c3739;
                this.setGlowStrength = aPB._2CL63dedfd6c8d34fd1;
                this.needReDraw_bool && this.drawByCtx_Hage();
            }
            drawByCtx_Hage() {
                aQt.a.Hage.Tx_GB(this.ctx_kamo, this.canvasSize_, this.borderWidth, this.glowDistance, this.color_kamo, this.glowStrength);
                this.needReDraw_bool = !1;
                if (Settings.Endy.enableRainbowBorder)
                    makeRbbFrame();
            }
            draw_some(aNv) {
                if (this._2CL1ff235ee6a538d5a(), this._2CL29139779efc59d37) {
                    var bgP = 14142 + 2 * (this.glowDistance + this.borderWidth), bgQ = bgP >> 1;
                    if (!Settings.Endy.enableRainbowBorder)
                        aNv.drawImage(this.canvas_kamo, -bgQ, -bgQ, bgP, bgP);
                    else if (completeFrame)
                        aNv.drawImage(rbbFrames[currentFrame], -bgQ, -bgQ, bgP, bgP);
                }
                aNv.strokeStyle = this._2CLf6e5846f1b211fe6;
                aNv.lineWidth = this.borderWidth;
                aNv.strokeRect(-7071, -7071, 14142, 14142);
                if (Settings.Endy.enableEatEffects)
                    for (let p of consumes) {
                        p.update(aNv);
                        if (p.complete)
                            consumes.delete(p);
                    }
            }
            set _2CL1849df6af84c6815(aNv) {
                this._2CLf6e5846f1b211fe6 !== aNv && (this._2CLf6e5846f1b211fe6 = aNv, this.needReDraw_bool = !0);
            }
            set setLineWidth_fn(aNv) {
                this.borderWidth !== aNv && (this.borderWidth = aNv, this.needReDraw_bool = !0);
            }
            set _2CL47e32ba4a20e2fb2(aNv) {
                this._2CL29139779efc59d37 !== aNv && (this._2CL29139779efc59d37 = aNv, this.needReDraw_bool = !0);
            }
            set glowDistance_setter(aNv) {
                this.glowDistance !== aNv && (this.glowDistance = aNv, this.needReDraw_bool = !0);
            }
            set setColor_fn(aNv) {
                this.color_kamo !== aNv && (this.color_kamo = aNv, this.needReDraw_bool = !0);
            }
            set setGlowStrength(aNv) {
                this.glowStrength !== aNv && (this.glowStrength = aNv, this.needReDraw_bool = !0);
            }
        }();
        var bgM = new aQt.a.Mipmaps();
        var foodDrawer = new class {
            constructor() {
                this.canvas_kamo = document.createElement('canvas');
                this.ctx_kamo = this.canvas_kamo.getContext('2d');
                this._2CL25b7f362b415b3de = [];
                this._2CL49ebc19e096f1963 = 256;
                this.radius_var = 0;
                this._2CLf6e5846f1b211fe6 = '#000000';
                this.glowDistance = 0;
                this.color_kamo = '#000000';
                this.glowStrength = 0;
                this.needReDraw_bool = !1;
            }
            _2CLcc32da8337a77c45() {
                this.radius_kamo = 10 + aPB._2CLe15deec8df50ac0c;
                this._2CL1849df6af84c6815 = aPB._2CL1db05798018ba778;
                this.glowDistance_setter = aPB._2CLb5e4ccad6bc0974c;
                this.setColor_fn = aPB._2CLb18c002fd29a3fcb;
                this.setGlowStrength = aPB._2CLf7cf0ff97db7cf1b;
                this.needReDraw_bool && (this.drawByCtx_Hage(), this._2CL240bdaf7fba805e1());
            }
            drawByCtx_Hage() {
                aQt.a.Hage.Tx_GF(this.ctx_kamo, this._2CL49ebc19e096f1963, this.radius_var, this._2CLf6e5846f1b211fe6, this.glowDistance, this.color_kamo, this.glowStrength), this.needReDraw_bool = !1;
            }
            _2CL240bdaf7fba805e1() {
                this._2CL25b7f362b415b3de = bgM.create(this.canvas_kamo, 5);
            }
            _2CLf4ad84629c622f05(aNv) {
                var aNw = this._2CL49ebc19e096f1963 >> 1, aNx = 0;
                for (; aNw >= aNv && aNx < 4;) {
                    aNx++, aNw >>= 1;
                }
                return this._2CL25b7f362b415b3de[aNx];
            }
            set radius_kamo(aNv) {
                this.radius_var !== aNv && (this.radius_var = aNv, this.needReDraw_bool = !0);
            }
            set _2CL1849df6af84c6815(aNv) {
                this._2CLf6e5846f1b211fe6 !== aNv && (this._2CLf6e5846f1b211fe6 = aNv, this.needReDraw_bool = !0);
            }
            set glowDistance_setter(aNv) {
                this.glowDistance !== aNv && (this.glowDistance = aNv, this.needReDraw_bool = !0);
            }
            set setColor_fn(aNv) {
                this.color_kamo !== aNv && (this.color_kamo = aNv, this.needReDraw_bool = !0);
            }
            set setGlowStrength(aNv) {
                this.glowStrength !== aNv && (this.glowStrength = aNv, this.needReDraw_bool = !0);
            }
            get _2CL12298acfaf2e57e9() {
                return this._2CL49ebc19e096f1963;
            }
        }();
        var bh7 = new class {
            constructor() {
                this.PI_2_kamo = 2 * Math.PI;
            }
            draw_some(aNv) {
                switch (aPB._2CL986d79226a8f4718) {
                    case 'off':
                        return;
                    case 'normal':
                        this._2CL6b490a3787fbcaf1(aNv);
                        break;
                    case 'rainbow':
                        this._2CL37a233930a2c24d5(aNv);
                }
            }
            _2CL6b490a3787fbcaf1(aNv) {
                aPB._2CLfc3c7e30ace78744 ? this._2CL47e32ba4a20e2fb2(aNv) : this._2CL9a60abf292242a81(aNv);
            }
            _2CL47e32ba4a20e2fb2(aNv) {
                foodDrawer._2CLcc32da8337a77c45();
                let foodAmount = b2u._2CL986d79226a8f4718.length;
                var aNw = Math.min(300, foodAmount), aNx = foodDrawer._2CL12298acfaf2e57e9, aNy = foodDrawer._2CLf4ad84629c622f05(aNx * aSL._2CL7f272a4f358d5b70 | 0);
                const fullMapMode = Settings.Endy.enableFullmap;
                if (!Settings.Endy.enableFoodDrawLimit)
                    aNw = foodAmount;
                for (var bhf = 0; bhf < aNw | 0; bhf = bhf + 1 | 0) {
                    var bhg = b2u._2CL986d79226a8f4718[bhf];
                    if (aY0.multibox_bool && fullMapMode && bhg._tabId_dayo < 2)
                        continue;
                    let foodX = bhg.xPos_kamo - (aNx >> 1), foodY = bhg.yPos_kamo - (aNx >> 1);
                    bhg._2CLb732806230c52119();
                    aNv.drawImage(aNy, foodX, foodY, aNx, aNx);
                }
            }
            _2CL9a60abf292242a81(ctx) {
                let foodAmount = b2u._2CL986d79226a8f4718.length;
                var aNw = Settings.Endy.enableFoodDrawLimit ? Math.min(300, foodAmount) : foodAmount;
                var aNx = aPB._2CLe15deec8df50ac0c;
                ctx.fillStyle = aPB._2CL1db05798018ba778, ctx.beginPath();
                for (var bhk = 0; bhk < aNw; bhk++) {
                    var bhl = b2u._2CL986d79226a8f4718[bhk];
                    bhl._2CLb732806230c52119();
                    var bhm = 0 | bhl.xPos_kamo, bhn = 0 | bhl.yPos_kamo, bho = bhl._2CL9d81fdf50372ed13 + aNx | 0;
                    ctx.moveTo(bhm + bho, bhn), ctx.arc(bhm, bhn, bho, 0, this.PI_2_kamo, !0);
                }
                ctx.fill();
            }
            _2CL37a233930a2c24d5(aNv) {
                let foodAmount = b2u._2CL986d79226a8f4718.length;
                var aNw = Settings.Endy.enableFoodDrawLimit ? Math.min(300, foodAmount) : foodAmount;
                for (var bhr = 0; bhr < aNw; bhr++) {
                    var bhs = b2u._2CL986d79226a8f4718[bhr];
                    bhs._2CLb732806230c52119(), aNv.beginPath(), aNv.arc(bhs.xPos_kamo, bhs.yPos_kamo, bhs.radius_kamo, 0, this.PI_2_kamo, !0), aNv.closePath(), aNv.fillStyle = bhs._2CL1849df6af84c6815._2CL7c7d4a212788caab, aNv.fill();
                }
            }
        }();
        var bht = new class {
            constructor() {
                this.PI_2_kamo = 2 * Math.PI, this._2CL1849df6af84c6815 = new aPC.Color_c();
            }
            draw_some(aNv, aNw) {
                switch (this._2CL1849df6af84c6815._2CL7f4279a1384d12af(aNw._2CL1849df6af84c6815), this._2CL1849df6af84c6815._2CLc6d998caee5983f8 = aPB._2CLa631f8ba0062c4a2, aPB._2CLfadf136230ced339) {
                    case 'darken':
                        this._2CL1849df6af84c6815._2CL6596cd88c337452e(aPB._2CLae61034f8911da90);
                        break;
                    case 'wash':
                        this._2CL1849df6af84c6815._2CL465f9ff6577aaa37(aPB._2CL1dbe9b64dbfca434);
                }
                aNv.beginPath(), aNv.arc(aNw.xPos_kamo, aNw.yPos_kamo, aNw.radius_kamo, 0, this.PI_2_kamo, !0), aNv.closePath(), aNv.fillStyle = this._2CL1849df6af84c6815._2CL7c7d4a212788caab, aNv.fill();
            }
        }();
        var bhx = new class {
            constructor() {
                this.canvas_kamo = {
                    '_2CLbe8ebfe02639534f': document.createElement('canvas'),
                    '_2CL34ee8e842198b01d': document.createElement('canvas')
                }, this.ctx_kamo = {
                    '_2CLbe8ebfe02639534f': this.canvas_kamo._2CLbe8ebfe02639534f.getContext('2d'),
                    '_2CL34ee8e842198b01d': this.canvas_kamo._2CL34ee8e842198b01d.getContext('2d')
                }, this._2CL25b7f362b415b3de = {
                    '_2CLbe8ebfe02639534f': [],
                    '_2CL34ee8e842198b01d': []
                }, this._2CL49ebc19e096f1963 = 512, this._2CL3c6acd4e76f4cfc8 = '#000000', this._2CLddf714a85f5abb72 = '#000000', this._2CLa153a523493c031c = 0, this._2CL29139779efc59d37 = !1, this.glowDistance = 0, this.color_kamo = '#000000', this.glowStrength = 0, this.needReDraw_bool = !1;
            }
            _2CLcc32da8337a77c45() {
                this._2CL89c5aedc6bea1203 = aPB._2CLd15f7a92ef5ed747, this._2CL58756dcbfd9ac4ae = aPB._2CLde6cdb3439aa4ece, this._2CLb846d894676621a3 = aPB._2CL71e2f181f0bdaf07, this._2CL47e32ba4a20e2fb2 = aPB._2CL3e090f2a1e71b624, this.glowDistance_setter = aPB._2CLc60751a2977e3cd2, this.setColor_fn = aPB._2CLc0e438def894cb25, this.setGlowStrength = aPB._2CL9e637dde815f68ad, this.needReDraw_bool && (this.drawByCtx_Hage(), this._2CL240bdaf7fba805e1());
            }
            drawByCtx_Hage() {
                aQt.a.Hage.Tx_GVB(this.ctx_kamo._2CLbe8ebfe02639534f, this._2CL49ebc19e096f1963, this._2CL3c6acd4e76f4cfc8, this._2CLddf714a85f5abb72, this._2CLa153a523493c031c, this._2CL29139779efc59d37, this.glowDistance, this.color_kamo, this.glowStrength), aQt.a.Hage.Tx_GVF(this.ctx_kamo._2CL34ee8e842198b01d, this._2CL49ebc19e096f1963, this._2CLddf714a85f5abb72, this._2CL29139779efc59d37, this.glowDistance, this.color_kamo, this.glowStrength), this.needReDraw_bool = !1;
            }
            _2CL240bdaf7fba805e1() {
                this._2CL25b7f362b415b3de._2CLbe8ebfe02639534f = bgM.create(this.canvas_kamo._2CLbe8ebfe02639534f, 6), this._2CL25b7f362b415b3de._2CL34ee8e842198b01d = bgM.create(this.canvas_kamo._2CL34ee8e842198b01d, 6);
            }
            _2CL54db6b73cb34c1f4(aNv) {
                var aNw = this._2CL49ebc19e096f1963 >> 1, aNx = 0;
                for (; aNw >= aNv && aNx < 5;) {
                    aNx++, aNw >>= 1;
                }
                return aNx;
            }
            _2CL9f64b71522f20763(aNv) {
                var aNw = this._2CL54db6b73cb34c1f4(aNv);
                return this._2CL25b7f362b415b3de._2CLbe8ebfe02639534f[aNw];
            }
            _2CLf7eb9bb25d5eb5e6(aNv) {
                var aNw = this._2CL54db6b73cb34c1f4(aNv);
                return this._2CL25b7f362b415b3de._2CL34ee8e842198b01d[aNw];
            }
            draw_some(aNv, aNw) {
                var aNx = aNw.radius_kamo / 100, aNy = this._2CL49ebc19e096f1963 * aNx | 0,
                    aNz = this._2CL9f64b71522f20763(aNy * aSL._2CL7f272a4f358d5b70);
                aNv.drawImage(aNz, aNw.xPos_kamo - (aNy >> 1), aNw.yPos_kamo - (aNy >> 1), aNy, aNy);
                var aNA = aNw._2CLde07dd3ec55256df, aNJ = aNw.radius_kamo * (aNA > 200 ? 0.75 : (aNA - 100) / 98);
                if (aNJ < 1)
                    return;
                var aNK = aNJ / 100, aNL = this._2CL49ebc19e096f1963 * aNK | 0, aNM = this._2CLf7eb9bb25d5eb5e6(aNL * aSL._2CL7f272a4f358d5b70);
                aNv.drawImage(aNM, aNw.xPos_kamo - (aNL >> 1), aNw.yPos_kamo - (aNL >> 1), aNL, aNL);
            }
            _2CL89c5aedc6bea1203(aNv) {
                this._2CL3c6acd4e76f4cfc8 !== aNv && (this._2CL3c6acd4e76f4cfc8 = aNv, this.needReDraw_bool = !0);
            }
            _2CL58756dcbfd9ac4ae(aNv) {
                this._2CLddf714a85f5abb72 !== aNv && (this._2CLddf714a85f5abb72 = aNv, this.needReDraw_bool = !0);
            }
            _2CLb846d894676621a3(aNv) {
                this._2CLa153a523493c031c !== aNv && (this._2CLa153a523493c031c = aNv, this.needReDraw_bool = !0);
            }
            _2CL47e32ba4a20e2fb2(aNv) {
                this._2CL29139779efc59d37 !== aNv && (this._2CL29139779efc59d37 = aNv, this.needReDraw_bool = !0);
            }
            glowDistance_setter(aNv) {
                this.glowDistance !== aNv && (this.glowDistance = aNv, this.needReDraw_bool = !0);
            }
            setColor_fn(aNv) {
                this.color_kamo !== aNv && (this.color_kamo = aNv, this.needReDraw_bool = !0);
            }
            setGlowStrength(aNv) {
                this.glowStrength !== aNv && (this.glowStrength = aNv, this.needReDraw_bool = !0);
            }
        }();
        var bhX = function bhX() {
            var aNv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var aNw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            _classCallCheck(this, bhX);
            this.canvas_kana = aNv, this._2CL12298acfaf2e57e9 = aNw;
        };
        var bi0 = 4, bi1 = 128;
        var bi2 = class {
            constructor() {
                this._2CLe6b6c3bc29ad1b26 = new Map();
                this.canvas_kana = new Map();
                this._2CL3156d96ac93bc96c = 0;
                this._2CL3f243e13444f693a = '';
                this.fontFamily_dane = 'Ubuntu';
                this._2CL1a6649cca001327f = '700';
                this._2CL1849df6af84c6815 = '#000000';
                this._2CL63fc5d54ea5805a4 = !1;
                this._2CLf9b500b751c29cb8 = '#000000';
                this._2CL355ef3fa24dcc8bb = new bhX();
                this._2CLae86f6ab97dd59e7();
            }
            _2CLae86f6ab97dd59e7() {
                var aNv = bi0;
                for (; aNv <= bi1;) {
                    var bi5 = document.createElement('canvas');
                    this._2CLe6b6c3bc29ad1b26.set(aNv, bi5), aNv <<= 1;
                }
            }
            _2CL416caeac8fd11070(aNv) {
                this._2CL3f243e13444f693a !== aNv && (this._2CL3f243e13444f693a = aNv, this._2CL95c9188921ef0194());
            }
            _2CL9b9938a2691837ff(aNv) {
                this.fontFamily_dane !== aNv && (this.fontFamily_dane = aNv, this._2CL95c9188921ef0194());
            }
            _2CL8acf4ffefa6278f6(aNv) {
                this._2CL1a6649cca001327f !== aNv && (this._2CL1a6649cca001327f = aNv, this._2CL95c9188921ef0194());
            }
            _2CL4dfc699b0e124758(aNv) {
                this._2CL1849df6af84c6815 !== aNv && (this._2CL1849df6af84c6815 = aNv, this._2CL95c9188921ef0194());
            }
            _2CLfc3d140d5b43aa2d(aNv) {
                this._2CL63fc5d54ea5805a4 !== aNv && (this._2CL63fc5d54ea5805a4 = aNv, this._2CL95c9188921ef0194());
            }
            _2CLfdc1c1ce4450484a(aNv) {
                this._2CLf9b500b751c29cb8 !== aNv && (this._2CLf9b500b751c29cb8 = aNv, this._2CL95c9188921ef0194());
            }
            _2CL95c9188921ef0194() {
                this.canvas_kana.clear();
            }
            _2CL3c4a2f5684b108cf(aNv) {
                this._2CL3156d96ac93bc96c = aOr.pf_now_kamo;
                var aNw = this._2CL39fc080559d5136e(aNv), aNx = this._2CL355ef3fa24dcc8bb;
                return aNx._2CL12298acfaf2e57e9 = aNw, aNx.canvas_kana = this.canvas_kana.get(aNw), aNx;
            }
            draw_some(aNv) {
                var aNw = this._2CL39fc080559d5136e(aNv), aNx = this._2CLe6b6c3bc29ad1b26.get(aNw), aNy = aNx.getContext('2d'), aNz = aNw / 128 * 16;
                aNy.font = ''['concat'](this._2CL1a6649cca001327f, ' ')['concat'](aNw, 'px ')['concat'](this.fontFamily_dane);
                var aNA = 0 | aNy.measureText(this._2CL3f243e13444f693a)['width'];
                aNx.height = aNw + (aNz << 1), aNx.width = aNA + (aNz << 1), aNy.font = ''['concat'](this._2CL1a6649cca001327f, ' ')['concat'](aNw, 'px ')['concat'](this.fontFamily_dane), aNy.textAlign = 'center', aNy.textBaseline = 'middle', aNy.lineJoin = 'round', this._2CL63fc5d54ea5805a4 && (aNy.strokeStyle = this._2CLf9b500b751c29cb8, aNy.lineWidth = aNz, aNy.strokeText(this._2CL3f243e13444f693a, aNx.width >> 1, aNx.height >> 1)), aNy.fillStyle = this._2CL1849df6af84c6815, aNy.fillText(this._2CL3f243e13444f693a, aNx.width >> 1, aNx.height >> 1), this.canvas_kana.set(aNw, aNx), this._2CL3156d96ac93bc96c = aOr.pf_now_kamo, this._2CL355ef3fa24dcc8bb._2CL12298acfaf2e57e9 = aNw, this._2CL355ef3fa24dcc8bb.canvas_kana = aNx;
            }
            _2CL39fc080559d5136e(aNv) {
                return aNv -= 1, aNv |= aNv >> 1, aNv |= aNv >> 2, aNv |= aNv >> 4, (aNv += 1) < bi0 ? bi0 : aNv > bi1 ? bi1 : aNv;
            }
        };
        var bim = 4, bin = 128;
        var bio = class {
            constructor() {
                this._2CL3156d96ac93bc96c = 0, this._2CL63ea2cf13ee6a2d6 = 0, this.canvas_kana = document.createElement('canvas'), this._2CL30a25e13cd0ba4fe = this.canvas_kana.getContext('2d'), this._2CL12298acfaf2e57e9 = 2, this._2CL3f243e13444f693a = '', this.fontFamily_dane = 'Ubuntu', this._2CL1a6649cca001327f = '700', this._2CL63fc5d54ea5805a4 = !1, this._2CL1849df6af84c6815 = '#000000', this._2CLf9b500b751c29cb8 = '#000000', this._2CLdebe179f239f004d = 200, this._2CL5c26e812eabe6ba2 = !1, this._2CL355ef3fa24dcc8bb = new bhX(this.canvas_kana, this._2CL12298acfaf2e57e9);
            }
            _2CLbb3162f3d7cffd48(aNv) {
                var aNw = this._2CL39fc080559d5136e(aNv);
                this._2CL12298acfaf2e57e9 !== aNw && (this._2CL12298acfaf2e57e9 = aNw, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CL416caeac8fd11070(aNv) {
                var aNw = aOr.pf_now_kamo, aNx = aNw - this._2CL63ea2cf13ee6a2d6 > this._2CLdebe179f239f004d;
                (this._2CL3f243e13444f693a !== aNv && aNx || this._2CL5c26e812eabe6ba2) && (this._2CL3f243e13444f693a = aNv, this._2CL63ea2cf13ee6a2d6 = aNw, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CL9b9938a2691837ff(aNv) {
                this.fontFamily_dane !== aNv && (this.fontFamily_dane = aNv, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CL8acf4ffefa6278f6(aNv) {
                this._2CL1a6649cca001327f !== aNv && (this._2CL1a6649cca001327f = aNv, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CLfc3d140d5b43aa2d(aNv) {
                this._2CL63fc5d54ea5805a4 !== aNv && (this._2CL63fc5d54ea5805a4 = aNv, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CL4dfc699b0e124758(aNv) {
                this._2CL1849df6af84c6815 !== aNv && (this._2CL1849df6af84c6815 = aNv, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CLfdc1c1ce4450484a(aNv) {
                this._2CLf9b500b751c29cb8 !== aNv && (this._2CLf9b500b751c29cb8 = aNv, this._2CL5c26e812eabe6ba2 = !0);
            }
            _2CLd3ec6ab5a7866660() {
                return this._2CL3156d96ac93bc96c = aOr.pf_now_kamo, this._2CL355ef3fa24dcc8bb;
            }
            draw_some() {
                var aNv = this.canvas_kana, aNw = this._2CL30a25e13cd0ba4fe, aNx = this._2CL12298acfaf2e57e9 / 128 * 16, aNy = this._2CL12298acfaf2e57e9, aNz = Math.min(aNy, 32);
                aNw.font = ''['concat'](this._2CL1a6649cca001327f, ' ')['concat'](0 | aNz, 'px ')['concat'](this.fontFamily_dane);
                var aNA = aNw.measureText(this._2CL3f243e13444f693a)['width'];
                aNv.height = aNy + (aNx << 1), aNv.width = (aNA * (aNy / aNz) | 0) + (aNx << 1), aNw.font = ''['concat'](this._2CL1a6649cca001327f, ' ')['concat'](0 | aNy, 'px ')['concat'](this.fontFamily_dane), aNw.textAlign = 'center', aNw.textBaseline = 'middle', aNw.lineJoin = 'round', this._2CL63fc5d54ea5805a4 && (aNw.strokeStyle = this._2CLf9b500b751c29cb8, aNw.lineWidth = aNx, aNw.strokeText(this._2CL3f243e13444f693a, aNv.width >> 1, aNv.height >> 1)), aNw.fillStyle = this._2CL1849df6af84c6815, aNw.fillText(this._2CL3f243e13444f693a, aNv.width >> 1, aNv.height >> 1), this._2CL5c26e812eabe6ba2 = !1, this._2CL355ef3fa24dcc8bb._2CL12298acfaf2e57e9 = this._2CL12298acfaf2e57e9;
            }
            _2CL39fc080559d5136e(aNv) {
                return aNv -= 1, aNv |= aNv >> 1, aNv |= aNv >> 2, aNv |= aNv >> 4, (aNv += 1) < bim ? bim : aNv > bin ? bin : aNv;
            }
        };
        var biH = new class {
            constructor() {
                this._2CLcba6fd7a2e29aa59 = new Map();
                this._2CL1fab15ae6c5ffb2e = new Map();
                this._2CLae05b14dc2696520 = 2000;
                this._2CLa8ee7d04dba9a424 = {
                    '_2CL8ac401cc9f1e8785': {
                        'pf_now_kamo': 0,
                        '_2CL111f1b5b84b5c819': 1
                    },
                    '_2CL30c87194157e4b27': {
                        'pf_now_kamo': 0,
                        '_2CL111f1b5b84b5c819': 4
                    }
                }, this._2CL0266bb79353fcf1b = [], this._2CL5faefba63380ed03 = [];
            }
            _2CL8ac401cc9f1e8785(aNv, aNw) {
                if (!aNv)
                    return !1;
                if (aNw < 8 && aPB._2CLbee33c1722387f60)
                    return !1;
                if (aNw < 4)
                    return !1;
                var aNx = this._2CLcba6fd7a2e29aa59.get(aNv) || this._2CL3d440f962d064a41(aNv);
                aNx._2CL9b9938a2691837ff(aPB._2CL809c5f5d430daaf7), aNx._2CL8acf4ffefa6278f6(aPB._2CLc218af2d960f8976), aNx._2CL4dfc699b0e124758(aPB._2CLa313e28e36c779d9), aNx._2CLfc3d140d5b43aa2d(aPB._2CL6ffd216ace16bc18), aNx._2CLfdc1c1ce4450484a(aPB._2CL036449ab30a42cfa), aNx._2CL416caeac8fd11070(aNv);
                var aNy = aNx._2CL3c4a2f5684b108cf(aNw), aNz = this._2CLa8ee7d04dba9a424._2CL8ac401cc9f1e8785;
                return !aNy.canvas_kana && aNz.pf_now_kamo < aNz._2CL111f1b5b84b5c819 && (aNz.pf_now_kamo++, aNx.draw_some(aNw)), aNy;
            }
            _2CL3d440f962d064a41(aNv) {
                var aNw = this._2CL0266bb79353fcf1b.shift() || new bi2();
                return this._2CLcba6fd7a2e29aa59.set(aNv, aNw), aNw;
            }
            _2CL30c87194157e4b27(aNv, aNw, aNx) {
                if (aNx < 8 && aPB._2CLbee33c1722387f60)
                    return !1;
                if (aNx < 4)
                    return !1;
                var aNy = this._2CL1fab15ae6c5ffb2e.get(aNv) || this._2CL643c0a9e2696dc9b(aNv);
                aNy._2CL9b9938a2691837ff(aPB._2CL0d63bbbae2f1dd0c), aNy._2CL8acf4ffefa6278f6(aPB._2CL3e0ca3daad1c7c38), aNy._2CL4dfc699b0e124758(aPB._2CL78439528ae7f402d), aNy._2CLfc3d140d5b43aa2d(aPB._2CL552e1524f47f939f), aNy._2CLfdc1c1ce4450484a(aPB._2CLa68a8aa19cafb2c7), aNy._2CLbb3162f3d7cffd48(aNx), aNy._2CL416caeac8fd11070(aNw), aNy._2CLdebe179f239f004d = aPB._2CL4413da4b308c248c;
                var aNz = aNy._2CLd3ec6ab5a7866660(), aNA = this._2CLa8ee7d04dba9a424._2CL30c87194157e4b27;
                return aNy._2CL5c26e812eabe6ba2 && aNA.pf_now_kamo < aNA._2CL111f1b5b84b5c819 && (aNA.pf_now_kamo++, aNy.draw_some()), aNz;
            }
            _2CL643c0a9e2696dc9b(aNv) {
                var aNw = this._2CL5faefba63380ed03.shift() || new bio();
                return this._2CL1fab15ae6c5ffb2e.set(aNv, aNw), aNw;
            }
            _2CLf17986767ee19043() {
                var aNv = aOr.pf_now_kamo;
                var biZ = !![];
                var bj0 = ![];
                var bj1 = undefined;
                try {
                    for (var bj2 = this._2CLcba6fd7a2e29aa59[Symbol.iterator](), bj3; !(biZ = (bj3 = bj2.next())['done']); biZ = !![]) {
                        var bj4 = _slicedToArray(bj3.value, 2), bj5 = bj4[0], bj6 = bj4[1];
                        aNv - bj6._2CL3156d96ac93bc96c < this._2CLae05b14dc2696520 || (this._2CLcba6fd7a2e29aa59.delete(bj5), this._2CL0266bb79353fcf1b.push(bj6));
                    }
                } catch (bj7) {
                    bj0 = !![];
                    bj1 = bj7;
                } finally {
                    try {
                        if (!biZ && bj2.return != null) {
                            bj2.return();
                        }
                    } finally {
                        if (bj0) {
                            throw bj1;
                        }
                    }
                }
                var bj8 = !![];
                var bj9 = ![];
                var bja = undefined;
                try {
                    for (var bjb = this._2CL1fab15ae6c5ffb2e[Symbol.iterator](), bjc; !(bj8 = (bjc = bjb.next())['done']); bj8 = !![]) {
                        var bjd = _slicedToArray(bjc.value, 2), bje = bjd[0], bjf = bjd[1];
                        aNv - bjf._2CL3156d96ac93bc96c < this._2CLae05b14dc2696520 || (this._2CL1fab15ae6c5ffb2e.delete(bje), this._2CL5faefba63380ed03.push(bjf));
                    }
                } catch (bjg) {
                    bj9 = !![];
                    bja = bjg;
                } finally {
                    try {
                        if (!bj8 && bjb.return != null) {
                            bjb.return();
                        }
                    } finally {
                        if (bj9) {
                            throw bja;
                        }
                    }
                }
                this._2CLa8ee7d04dba9a424._2CL8ac401cc9f1e8785.pf_now_kamo = 0;
                this._2CLa8ee7d04dba9a424._2CL30c87194157e4b27.pf_now_kamo = 0;
            }
            _2CLe0cf21aa524e9946(aNv) {
                return aNv -= 1, aNv |= aNv >> 1, aNv |= aNv >> 2, 1 + (aNv |= aNv >> 4);
            }
        }();
        var bji = new class {
            constructor() {
                this._2CL5d8a1b5488fbe86f = new Map(), this._2CL3074c32ea033a6a6 = new Map(), this._2CL306edf3f383686d1 = new Map();
            }
            _2CL6b5a152596bbbd39() {
                this._2CL5d8a1b5488fbe86f.clear();
                for (var bjk = 0; bjk < 2; bjk++) {
                    if (!b3Y._2CL1d2b5efaee01be40(bjk))
                        continue;
                    var bjl = b3Y._2CL44e8323f018543e3(bjk), bjm = b3Y._2CL1062e50bcd80df39(bjk);
                    this._2CL5d8a1b5488fbe86f.set(bjl, bjm);
                }
                var bjn = !![];
                var bjo = ![];
                var bjp = undefined;
                try {
                    for (var bjq = aYv._2CL1627e8a692645e68[Symbol.iterator](), bjr; !(bjn = (bjr = bjq.next())['done']); bjn = !![]) {
                        var bjs = _slicedToArray(bjr.value, 2), bjt = bjs[0], bju = bjs[1];
                        for (var bjv = 0; bjv < 2; bjv++) {
                            if (!bju._2CLa8da637215ed8fdd[bjv])
                                continue;
                            var bjw = bju._2CL44e8323f018543e3(bjv), bjx = bju._2CLac9df252d711bd1c[bjv];
                            this._2CL5d8a1b5488fbe86f.set(bjw, bjx);
                        }
                    }
                } catch (bjy) {
                    bjo = !![];
                    bjp = bjy;
                } finally {
                    try {
                        if (!bjn && bjq.return != null) {
                            bjq.return();
                        }
                    } finally {
                        if (bjo) {
                            throw bjp;
                        }
                    }
                }
            }
            _url_kamo(aNv) {
                var aNw = this._2CL5d8a1b5488fbe86f.get(aNv);
                if (!aNw)
                    return !1;
                var aNx = this._2CL306edf3f383686d1.get(aNw);
                return aNx || (this._2CL3074c32ea033a6a6.has(aNw) || this._2CL14daeed9b046a327(aNw), !1);
            }
            getVanillaSkin(aNv) {
                var aNw = aQr._2CLf92a9c1bcd5d7960.get(aNv);
                if (!aNw)
                    return !1;
                var aNx = 'https://configs-web.agario.miniclippt.com/live/v15/'['concat'](aQr._2CL740f7cad07395769, '/')['concat'](aNw._2CL90b42a0a84ed04cf), aNy = this._2CL306edf3f383686d1.get(aNx);
                return aNy || (this._2CL3074c32ea033a6a6.has(aNx) || this._2CL14daeed9b046a327(aNx), !1);
            }
            _2CL14daeed9b046a327(aNv) {
                var bjH = this;
                var image = new Image();
                image.crossOrigin = 'anonymous', image.addEventListener('load', function () {
                    var aNx = document.createElement('canvas'), aNy = aNx.getContext('2d'), aNz = Math.max(image.width, image.height), aNA = Math.min(512, aNz);
                    aNx.width = aNA, aNx.height = aNA, aNy.imageSmoothingQuality = 'high', aNy.beginPath(), aNy.arc(aNA >> 1, aNA >> 1, aNA >> 1, 0, 2 * Math.PI, !0), aNy.closePath(), aNy.clip(), aNy.drawImage(image, 0, 0, aNA, aNA);
                    var aNJ = new Image();
                    aNJ.crossOrigin = 'anonymous', aNJ.src = aNx.toDataURL(), bjH._2CL306edf3f383686d1.set(aNv, aNJ), bjH._2CL3074c32ea033a6a6.delete(aNv);
                }, { 'passive': !0 }), this._2CL3074c32ea033a6a6.set(aNv, image), image.src = aNv;
            }
        }();
        var bjO = ShieldImage;
        var bjP = function bjP(aNv) {
            _classCallCheck(this, bjP);
            this.canvas_kana = aQt.a.Hage.Tx_SH(aNv, aO5._2CL8775a4880612c227.get(bjO)), this._2CL3d4fbdd4bfa84346 = aOr.pf_now_kamo;
        };
        var bjR = new class {
            constructor() {
                this._2CLe2d75a6464d53e00 = new Map();
            }
            _2CL8a0aa3e9abe764a9() {
                var bjT = !![];
                var bjU = ![];
                var bjV = undefined;
                try {
                    for (var bjW = this._2CLe2d75a6464d53e00[Symbol.iterator](), bjX; !(bjT = (bjX = bjW.next())['done']); bjT = !![]) {
                        var bjY = _slicedToArray(bjX.value, 2), bjZ = bjY[0], bk0 = bjY[1];
                        aOr.pf_now_kamo - bk0._2CL3d4fbdd4bfa84346 < 2000 || this._2CLe2d75a6464d53e00.delete(bjZ);
                    }
                } catch (bk1) {
                    bjU = !![];
                    bjV = bk1;
                } finally {
                    try {
                        if (!bjT && bjW.return != null) {
                            bjW.return();
                        }
                    } finally {
                        if (bjU) {
                            throw bjV;
                        }
                    }
                }
            }
            _2CL933feeac6ed968aa(aNv) {
                var aNw = this._2CLe2d75a6464d53e00.get(aNv) || this._2CLb429000ef120f1ce(aNv);
                return aNw._2CL3d4fbdd4bfa84346 = aOr.pf_now_kamo, aNw.canvas_kana;
            }
            _2CLb429000ef120f1ce(aNv) {
                var aNw = new bjP(aNv);
                return this._2CLe2d75a6464d53e00.set(aNv, aNw), aNw;
            }
        }();
        var bk6 = new class {
            constructor() {
                this.canvas_kana = document.createElement('canvas'), this._2CL126759d21555b314();
            }
            _2CL126759d21555b314() {
                var aNv = this.canvas_kana.getContext('2d');
                this.canvas_kana.width = 136, this.canvas_kana.height = 76, aNv.beginPath(), aNv.moveTo(8, 8), aNv.lineTo(128, 8), aNv.lineTo(68, 68), aNv.closePath(), aNv.fillStyle = '#ffffff', aNv.lineWidth = 8, aNv.strokeStyle = '#ffffff', aNv.lineCap = 'round', aNv.lineJoin = 'round', aNv.fill(), aNv.stroke();
            }
        }();
        var bk9 = new class {
            constructor() {
                this.PI_2_kamo = 2 * Math.PI, this._2CL1849df6af84c6815 = new aPC.Color_c();
            }
            cellShadow(mode, ctx, size) {
                switch (mode) {
                    case 'begin':
                        ctx.save();
                        ctx.shadowColor = 'black';
                        ctx.shadowBlur = 15;
                        break;
                    case 'close':
                        ctx.restore();
                        break;
                }
            }
            draw_some(aNv, aNw) {
                var aNx = aNw._2CL32c55e1459ac583f && bji._2CL5d8a1b5488fbe86f.has(aNw.urlSkinName);
                const x = 0 | aNw.xPos_kamo;
                const y = 0 | aNw.yPos_kamo;
                const s = 0 | aNw.radius_kamo;
                const id = aNw.cellId_kamo;
                const tabId = aNw['_tabId_dayo'];
                const isMe = aNw.isMe;
                const HSE = Settings.Endy;
                const faded = HSE.enableDisappearFade && disappearedEntities.has(id);
                const USE_SPEC_ASSIST = currentAssistMode != 'none';
                if (faded) {
                    let entity = disappearedEntities.get(id);
                    aNv.globalAlpha = entity.opacity;
                    if (aNv.globalAlpha < 0.1) {
                        b2u.removeDisappearedEntity(aNw['_tabId_dayo'], id);
                        disappearedEntities.delete(id);
                    } else {
                        entity.opacity = aNv.globalAlpha * 0.9;
                        disappearedEntities.set(id, entity);
                    }
                }
                if (USE_SPEC_ASSIST && tabId > 1 && inurArea(tabId, x, y)) {
                    return;
                }
                let drawMaou = HSE.enableMaouCircle && (!HSE.HSLOCircleForOnlyMe || HSE.HSLOCircleForOnlyMe && isMe);
                let fixedSize = drawMaou ? 0 | s * 0.9 : s;
                !HSE.enableMaouCircle && HSE.enableCellShadow && this.cellShadow('begin', aNv, s);
                let ff = 1.5;
                if (HSE.enableParticles && s > 300)
                    aNv.drawImage(particles.canvas, x - s * ff, y - s * ff, s * 2 * ff, s * 2 * ff);
                switch (aNv.beginPath(), aNv.arc(x, y, fixedSize, 0, this.PI_2_kamo, !0), aNv.closePath(), this._2CL1849df6af84c6815._2CL7f4279a1384d12af(aNw._2CL1849df6af84c6815), this._2CL1849df6af84c6815._2CLc6d998caee5983f8 = aPB._2CLa631f8ba0062c4a2, aPB._2CLfadf136230ced339) {
                    case 'darken':
                        this._2CL1849df6af84c6815._2CL6596cd88c337452e(aPB._2CLae61034f8911da90);
                        break;
                    case 'wash':
                        this._2CL1849df6af84c6815._2CL465f9ff6577aaa37(aPB._2CL1dbe9b64dbfca434);
                }
                aNv.fillStyle = this._2CL1849df6af84c6815._2CL653b8dc13437ed5e, aNv.fill();
                !HSE.enableMaouCircle && HSE.enableCellShadow && this.cellShadow('close', aNv);
                var aNy = aPB._2CL72cbdb098f5c0db6 && aNx;
                if (aNy) {
                    var bkf = this._2CL1849df6af84c6815._2CL7c7d4a212788caab;
                    if (aNw.isMe)
                        switch (aPB._2CLdf3bd07a45b766b4) {
                            case 'multiboxRingColor':
                                bkf = aNw._tabId_dayo === b3Y._2CL158c6b3b1c965555 ? aPB._2CL3530c62dbc212dfb : aPB._2CLa069ae70980a8099;
                                break;
                            case 'customColor':
                                bkf = aPB._2CL678b38b0693c33fc;
                        }
                    else
                        switch (aPB._2CLceb6f4acd88ddd3f) {
                            case 'customColor':
                                bkf = aPB._2CL55b030d36e6b38d3;
                        }
                    var bkg = bjR._2CL933feeac6ed968aa(bkf), bkh = 1.2 * aNw.radius_kamo;
                    aNv.drawImage(bkg, aNw.xPos_kamo - bkh, aNw.yPos_kamo - bkh, 2 * bkh, 2 * bkh);
                }
                var aNz = aNx && aPB._2CL81e1a04dc15ff5cb && bji._url_kamo(aNw.urlSkinName);
                if (aNz) {
                    var bkj = fixedSize * (aNy ? 0.65 : 1);
                    aNv.drawImage(aNz, x - bkj, y - bkj, 2 * bkj, 2 * bkj);
                }
                var aNA = !aNz && aPB._2CLe9513e68d2eebae6 && bji.getVanillaSkin(aNw.vanillaSkinName);
                if (aNA) {
                    var bkl = fixedSize * (aNy ? 0.65 : 1);
                    aNv.drawImage(aNA, x - bkl, y - bkl, 2 * bkl, 2 * bkl);
                }
                Settings.Endy.enableMaouCircle && Settings.Endy.enableCellShadow && this.cellShadow('begin', aNv, s);
                if (drawMaou) {
                    const circleSize = 1.1;
                    aNv.drawImage(MaouCircle.canvas, x - s * circleSize, y - s * circleSize, s * circleSize * 2, s * circleSize * 2);
                }
                Settings.Endy.enableMaouCircle && Settings.Endy.enableCellShadow && this.cellShadow('close', aNv);
                if (aNw.isMe && aPB._2CL3a4362a0c4f2b64e && aY0._2CLeb21482a8346145a) {
                    var bkm = aNw.radius_kamo * (aPB._2CLc8392ad7363a07a2 / 100), bkn = aNw.radius_kamo * (aNy ? 0.65 : 1);
                    aNv.beginPath(), aNv.arc(aNw.xPos_kamo, aNw.yPos_kamo, bkn - (bkm >> 1), 0, this.PI_2_kamo, !0), aNv.closePath(), aNv.lineWidth = bkm, aNv.strokeStyle = aNw._tabId_dayo === b3Y._2CL158c6b3b1c965555 ? aPB._2CL3530c62dbc212dfb : aPB._2CLa069ae70980a8099, aNv.stroke();
                }
                var aNJ = 0, aNK = aNw._2CL9d81fdf50372ed13 * aSL._2CL7f272a4f358d5b70;
                switch (aPB._2CLcecf8636a73f807b) {
                    case 'stepped':
                        aNK = 50 * (1 + (aNw._2CL9d81fdf50372ed13 / 50 | 0)) * aSL._2CL7f272a4f358d5b70;
                        break;
                    case 'linear':
                        aNK = aNw.radius_kamo * aSL._2CL7f272a4f358d5b70;
                }
                var aNL = aNw.isMe && aPB._2CLcefd1a51f4ad1389 || !aNw.isMe && aPB._2CLb225216db45c841a;
                if (aNw._2CL8ac401cc9f1e8785 && aNL) {
                    var bkr = 0.3 * aNK * aPB._2CL0262df83159efe2b, bks = biH._2CL8ac401cc9f1e8785(aNw._2CL8ac401cc9f1e8785, bkr), bkt = bks.canvas_kana, bku = bks._2CL12298acfaf2e57e9;
                    if (bkt && bkt.width && bkt.height) {
                        var bkv = bkr / bku / aSL._2CL7f272a4f358d5b70, bkw = bkt.width * bkv, bkx = bkt.height * bkv;
                        aNv.drawImage(bkt, aNw.xPos_kamo - (bkw >> 1), aNw.yPos_kamo - (bkx >> 1), bkw, bkx), aNJ = 0.7 * bkx;
                    }
                }
                if (aNw.isMe && aPB._2CLc0ce4454f320b281 || !aNw.isMe && aPB._2CLeacce6e589327eb8) {
                    var bky = 0.3 * aNK * aPB._2CL1ca5cc16837c2c2a, bkz = this._2CLa5e89841b9e93bfe(aNw._2CLde07dd3ec55256df), bkA = biH._2CL30c87194157e4b27(''['concat'](aNw.cellId_kamo, ':')['concat'](aNw._tabId_dayo), bkz, bky), bkB = bkA.canvas_kana, bkC = bkA._2CL12298acfaf2e57e9;
                    if (bkB && bkB.width && bkB.height) {
                        var bkD = bky / bkC / aSL._2CL7f272a4f358d5b70, bkE = bkB.width * bkD, bkF = bkB.height * bkD;
                        aNv.drawImage(bkB, aNw.xPos_kamo - (bkE >> 1), aNw.yPos_kamo - (bkF >> 1) + aNJ, bkE, bkF);
                    }
                }
                if (aPB._2CL4163be9ead01f30b && aNw.radius_kamo * aSL._2CL7f272a4f358d5b70 < 40 && aNw._2CLe15ba5dd0fdb5206 < 1000 && aNx && !aNw.isMe) {
                    var bkG = bk6.canvas_kana;
                    aNv.drawImage(bkG, aNw.xPos_kamo - bkG.width / 2, aNw.yPos_kamo - aNw.radius_kamo - bkG.height - 20);
                }
            }
            _2CLa5e89841b9e93bfe(aNv) {
                return 'shortened' === aPB._2CL6b239efe5e6757f9 && aNv > 999 ? ''['concat']((aNv / 100 | 0) / 10, 'k') : ''['concat'](aNv);
            }
        }();
        var bkI = new class {
            constructor() {
            }
            draw_some(aNv) {
                bhx._2CLcc32da8337a77c45(), bji._2CL6b5a152596bbbd39(), bjR._2CL8a0aa3e9abe764a9();
                var aNw = b2u._2CL1003b530a782de85, aNx = aNw.length;
                for (var bkN = 0; bkN < aNx; bkN++) {
                    var bkO = aNw[bkN];
                    bkO._2CLb732806230c52119(), aNv.globalAlpha = bkO._2CL5b4f938bcb93ee23 ? 1 - bkO._2CLecfd700cc3b53c04 : 1, bkO.isEjected ? bht.draw_some(aNv, bkO) : bkO._2CL22c774a2efca930d ? bhx.draw_some(aNv, bkO) : bk9.draw_some(aNv, bkO);
                }
                aNv.globalAlpha = 1, biH._2CLf17986767ee19043();
            }
        }();
        var bkP = new class {
            constructor() {
                this.canvas_kamo = document.createElement('canvas'), this.ctx_kamo = this.canvas_kamo.getContext('2d'), this._2CL25b7f362b415b3de = [], this._2CL49ebc19e096f1963 = 1024, this._2CL1849df6af84c6815 = '';
            }
            draw_some(aNv) {
                if (aPB._2CLe50ece9570a295f9) {
                    this._2CL36b9b5a112519dfe();
                    var bkS = !![];
                    var bkT = ![];
                    var bkU = undefined;
                    try {
                        for (var bkV = b2u._2CLedf2cf1e1c8c3141[Symbol.iterator](), bkW; !(bkS = (bkW = bkV.next())['done']); bkS = !![]) {
                            var bkX = bkW.value;
                            var bkY = this._2CLf4ad84629c622f05(bkX._2CL12298acfaf2e57e9 * aSL._2CL7f272a4f358d5b70 | 0);
                            aNv.globalAlpha = bkX._2CL659907fefaeeb24a, aNv.drawImage(bkY, bkX.xPos_kamo - (bkX._2CL12298acfaf2e57e9 >> 1), bkX.yPos_kamo - (bkX._2CL12298acfaf2e57e9 >> 1), bkX._2CL12298acfaf2e57e9, bkX._2CL12298acfaf2e57e9);
                        }
                    } catch (bkZ) {
                        bkT = !![];
                        bkU = bkZ;
                    } finally {
                        try {
                            if (!bkS && bkV.return != null) {
                                bkV.return();
                            }
                        } finally {
                            if (bkT) {
                                throw bkU;
                            }
                        }
                    }
                    aNv.globalAlpha = 1;
                }
            }
            _2CL36b9b5a112519dfe() {
                this._2CL1849df6af84c6815 !== aPB._2CL4ca9516cad8103b6 && (this._2CL1849df6af84c6815 = aPB._2CL4ca9516cad8103b6, aQt.a.Hage.Tx_MC(this.ctx_kamo, this._2CL49ebc19e096f1963, this._2CL1849df6af84c6815), this._2CL25b7f362b415b3de = bgM.create(this.canvas_kamo, 8));
            }
            _2CLf4ad84629c622f05(aNv) {
                var aNw = this._2CL49ebc19e096f1963 >> 1, aNx = 0;
                for (; aNw >= aNv && aNx < 7;) {
                    aNx++, aNw >>= 1;
                }
                return this._2CL25b7f362b415b3de[aNx];
            }
        }();
        var bl3 = new class {
            constructor() {
            }
            draw_some(aNv) {
                if (!aPB._2CL72ba870109bf07ff)
                    return;
                aNv.strokeStyle = '#ffffff', aNv.lineWidth = 4, aNv.lineCap = 'round', aNv.lineJoin = 'round';
                var aNw = bcc.sendMovePacket, aNx = (aNw.xPos_kamo - window.innerWidth / 2) / aSL._2CL7f272a4f358d5b70 + aSL.xPos_kamo, aNy = (aNw.yPos_kamo - window.innerHeight / 2) / aSL._2CL7f272a4f358d5b70 + aSL.yPos_kamo, aNz = b2u._2CL9661498b4088206f[b3Y._2CL158c6b3b1c965555];
                aNv.beginPath();
                var bla = !![];
                var blb = ![];
                var blc = undefined;
                try {
                    for (var bld = aNz[Symbol.iterator](), ble; !(bla = (ble = bld.next())['done']); bla = !![]) {
                        var blf = _slicedToArray(ble.value, 2), blg = blf[0], blh = blf[1];
                        aNv.moveTo(blh.xPos_kamo, blh.yPos_kamo), aNv.lineTo(aNx, aNy);
                    }
                } catch (bli) {
                    blb = !![];
                    blc = bli;
                } finally {
                    try {
                        if (!bla && bld.return != null) {
                            bld.return();
                        }
                    } finally {
                        if (blb) {
                            throw blc;
                        }
                    }
                }
                aNv.stroke();
            }
        }();
        var blj = new class {
            constructor() {
                this.canvas_kana = document.getElementById('screen'), this._2CL30a25e13cd0ba4fe = this.canvas_kana.getContext('2d');
            }
            _2CL52a96de0605b8df2() {
                var bll = this;
                this._2CL54154dfa40a2fc4b(), window.addEventListener('resize', function () {
                    bll._2CL54154dfa40a2fc4b();
                }, { 'passive': !0 });
            }
            _2CL54154dfa40a2fc4b() {
                this.canvas_kana.width = 0 | window.innerWidth, this.canvas_kana.height = 0 | window.innerHeight;
            }
            _2CLcdaf3572ac44f7e5() {
                this._2CL30526a395d9f8ccc(), this._2CLe832d3b37056ad45(), this._2CL30a25e13cd0ba4fe.imageSmoothingQuality = aPB._2CL5774f21642251c8c, bg7.draw_some(this._2CL30a25e13cd0ba4fe), SectorDrawer.draw_some(this._2CL30a25e13cd0ba4fe), borderDrawer.draw_some(this._2CL30a25e13cd0ba4fe), bh7.draw_some(this._2CL30a25e13cd0ba4fe), bl3.draw_some(this._2CL30a25e13cd0ba4fe), bkP.draw_some(this._2CL30a25e13cd0ba4fe), bkI.draw_some(this._2CL30a25e13cd0ba4fe), this._2CLb1a403f1c67ac44f();
            }
            _2CL30526a395d9f8ccc() {
                this._2CL30a25e13cd0ba4fe.clearRect(0, 0, this.canvas_kana.width, this.canvas_kana.height);
            }
            _2CLe832d3b37056ad45() {
                var aNv = (this.canvas_kana.width >> 1) / aSL._2CL7f272a4f358d5b70 - aSL.xPos_kamo, aNw = (this.canvas_kana.height >> 1) / aSL._2CL7f272a4f358d5b70 - aSL.yPos_kamo;
                this._2CL30a25e13cd0ba4fe.scale(aSL._2CL7f272a4f358d5b70, aSL._2CL7f272a4f358d5b70), this._2CL30a25e13cd0ba4fe.translate(aNv, aNw);
            }
            _2CLb1a403f1c67ac44f() {
                this._2CL30a25e13cd0ba4fe.setTransform(1, 0, 0, 1, 0, 0);
            }
        }();
        var blo = new class {
            constructor() {
            }
            _2CL5875a5af586e3482() {
                var blq = this;
                bg5._2CL52a96de0605b8df2(), bcc._2CL52a96de0605b8df2(), blj._2CL52a96de0605b8df2(), aYv._2CL52a96de0605b8df2(), window.setTimeout(function () {
                    aO5._2CL7f3f0cc940c31119();
                }, 2000), window.requestAnimationFrame(function () {
                    blq._2CLcdaf3572ac44f7e5();
                });
            }
            _2CLcdaf3572ac44f7e5() {
                var blr = this;
                aOr.pf_now_upd(), aSL._2CLcc32da8337a77c45(), b2u._2CLcc32da8337a77c45(), b3Y._2CLcc32da8337a77c45(), blj._2CLcdaf3572ac44f7e5(), bg3._2CLcc32da8337a77c45(), window.requestAnimationFrame(function () {
                    blr._2CLcdaf3572ac44f7e5();
                });
            }
        }();
        aO5._2CLbe4c4d037e939226(function () {
            blo._2CL5875a5af586e3482();
        });
    }
]);
var v3window = document.createElement('div');
v3window.id = 'captchaWindowV3';
v3window.style = 'display:none';
document.body.appendChild(v3window);
window.recaptchaExecuteLoop = function () {
    let useNelBots = window.SettingsStore.useBotsToggle && window.SettingsStore.BotTypeSelector == 'nel';
    if (myTurn)
        return;
    if (!useNelBots)
        return setTimeout(recaptchaExecuteLoop, 500);
    grecaptcha.reset();
    grecaptcha.execute(0, { 'action': 'play' }).then(() => {
        let botServerIsOnline = window.connection && window.connection.ws && window.connection.ws.readyState === 1;
        if (botServerIsOnline)
            window.connection.sendToken(grecaptcha.getResponse());
        else
            return;
        recaptchaExecuteLoop();
    });
};
window.SAO = function () {
};
window.requestCaptchaV2 = function () {
    grecaptcha.v2mode = true;
    grecaptcha.render('recaptcha-screen', {
        'sitekey': '6LfjUBcUAAAAAF6y2yIZHgHIOO5Y3cU5osS2gbMl',
        'callback': SAO
    });
};
window.requestCaptchaV3 = function () {
    grecaptcha.v2mode = false;
    grecaptcha.onceLoad = true;
    grecaptcha.render('captchaWindowV3', {
        'sitekey': '6LcEt74UAAAAAIc_T6dWpsRufGCvvau5Fd7_G1tY',
        'badge': 'inline',
        'size': 'invisible',
        'callback': SAO
    });
};
window.recaptchaOnloadCallback = function () {
    requestCaptchaV3();
    recaptchaExecuteLoop();
};