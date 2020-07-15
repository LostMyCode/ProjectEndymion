import { _createClass, _classCallCheck } from "./Modules";
import Endy from "../settings/Endy";

var aNy = -(Math.PI / 0x2 + Math.PI / 0x10),
    aNz = Math.tan(aNy);
var aNJ = document.createElement('canvas'),
    aNK = aNJ.getContext('2d');
aNJ.width = 0x14, aNJ.height = 0x14;
var aNL = aNK.createRadialGradient(0xa, 0xa, 0x2, 0xa, 0xa, 0xa);
aNL.addColorStop(0x0, 'rgba(255, 255, 255, 1.0)'),
    aNL.addColorStop(0x0, 'rgba(255, 255, 255, 1.0)'),
    aNL.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)'),
    aNL.addColorStop(0x1, 'rgba(255, 255, 255, 0.0)'),
    aNK.fillStyle = aNL, aNK.beginPath(), aNK.arc(0xa, 0xa, 0xa, 0x0, 0x2 * Math.PI, !0x0), aNK.closePath(), aNK.fill();
var aNM = aNJ;

var aNA = function () {
    function aNA() {
        _classCallCheck(this, aNA);
        this._2CL26c6da77d5462ba8 = 0x0, this._2CL516d2a3ba155227c = 0x0, this._2CL8725029ea89712ee = 0x0, this._2CL36a4dc9ccf2bdc09 = 0x0, this._2CL9530bc8f94fc32a9 = 0x0, this._2CLd33d3f60bb918a22 = 0x0, this._2CL659907fefaeeb24a = 0x0, this._2CL1ef101f9a0c03f9d = 0x0, this._2CL99f366efebead96d = 0x0, this._2CL79d47d8ac85b4c42 = 0x0, this._2CLccc113ff0f46e31c(), this._2CL26c6da77d5462ba8 = window.innerWidth * Math.random(), this._2CL516d2a3ba155227c = window.innerHeight * Math.random(), this._2CL1ef101f9a0c03f9d += 0x4e20 * (Math.random() - 0.5);
    }
    _createClass(aNA, [{
        'key': '_2CLb732806230c52119',
        'value': function _2CLb732806230c52119() {
            this._2CL60d7edcba9f2248b() && this._2CLccc113ff0f46e31c();
            var aNv = Date.now(),
                aNw = 0x1e * (0.1 + 0.9 * this._2CL9530bc8f94fc32a9),
                aNx = aNv - this._2CL1ef101f9a0c03f9d;
            this._2CL8725029ea89712ee = this._2CL26c6da77d5462ba8 + Math.cos(aNy) * aNw * aNx / 0x3e8, this._2CL36a4dc9ccf2bdc09 = this._2CL516d2a3ba155227c + Math.sin(aNy) * aNw * aNx / 0x3e8;
            var aNz = 0x2 * Math.PI * (aNx % this._2CL99f366efebead96d) / this._2CL99f366efebead96d,
                aNA = this._2CL79d47d8ac85b4c42 * Math.cos(aNz),
                aNH = this._2CL79d47d8ac85b4c42 * Math.sin(aNz);
            this._2CL8725029ea89712ee += aNA * this._2CL9530bc8f94fc32a9, this._2CL36a4dc9ccf2bdc09 += aNH * this._2CL9530bc8f94fc32a9;
        }
    }, {
        'key': '_2CL60d7edcba9f2248b',
        'value': function _2CL60d7edcba9f2248b() {
            return this._2CL8725029ea89712ee < 0x0 || this._2CL36a4dc9ccf2bdc09 < 0x0;
        }
    }, {
        'key': '_2CLccc113ff0f46e31c',
        'value': function _2CLccc113ff0f46e31c() {
            var aNv = window.innerHeight / aNz;
            this._2CL26c6da77d5462ba8 = (aNv + window.innerWidth) * Math.random(), this._2CL516d2a3ba155227c = window.innerHeight + 0.25 * window.innerHeight * Math.random(), this._2CL9530bc8f94fc32a9 = Math.random(), this._2CLd33d3f60bb918a22 = 2.4 + 0.7 * this._2CL9530bc8f94fc32a9 * 0x8, this._2CL659907fefaeeb24a = 0.2 + 0.8 * this._2CL9530bc8f94fc32a9, this._2CL1ef101f9a0c03f9d = Date.now(), this._2CL99f366efebead96d = 0x1388 + 0x2710 * Math.random(), this._2CL79d47d8ac85b4c42 = 0xa + 0x14 * Math.random();
        }
    }]);
    return aNA;
}();

export default new(function () {
    function aNO() {
        var aNP = this;
        _classCallCheck(this, aNO);
        this._2CLc1bfadcfb8498cd0 = document.getElementById('loading-screen'), 
        this._2CL3485bddd5e0fcf26 = document.querySelector('#loading-screen > .bg'), 
        this._2CLe39fd0c56ba9a176 = document.querySelector('#loading-screen > .progress-bar > .fill'), 
        this.loaderImageUrl = Endy.defaultLoaderImage, 
        this._2CLc455ed7258a869d1 = document.getElementById('ls-orbs'), 
        this._2CL30a25e13cd0ba4fe = this._2CLc455ed7258a869d1.getContext('2d'), this._2CLfbf4003ef262b269 = [];
        for (var aNQ = 0x0; aNQ < 0x64; aNQ++) {
            this._2CLfbf4003ef262b269.push(new aNA());
        }
        this._2CL4397139e1aa87000 = !0x1, this._2CL87bea31a06a0fd10 = function () {
            aNP._2CL54154dfa40a2fc4b();
        }, this._2CL54154dfa40a2fc4b(), window.addEventListener('resize', this._2CL87bea31a06a0fd10, {
            'passive': !0x0
        }), window.requestAnimationFrame(function () {
            aNP._2CL46c293447ba980a2();
        });
    }
    _createClass(aNO, [{
        'key': '_2CL54154dfa40a2fc4b',
        'value': function _2CL54154dfa40a2fc4b() {
            this._2CLc455ed7258a869d1.width = 0x0 | window.innerWidth, 
            this._2CLc455ed7258a869d1.height = 0x0 | window.innerHeight;
        }
    }, {
        'key': '_2CL5875a5af586e3482',
        'value': function _2CL5875a5af586e3482() {
            var aNR = this;
            var aNv = new Image(); // load screen bg image
            aNv.onload = function () {
                aNR._2CL130adf4bc9200d19();
            }, 
            aNv.src = this.loaderImageUrl;
        }
    }, {
        'key': '_2CL130adf4bc9200d19',
        'value': function _2CL130adf4bc9200d19() {
            document.querySelector('#loading-screen > .title')['style']['text-shadow'] = 'rgb(34, 36, 68) 0px 0px 6px', 
            this._2CL3485bddd5e0fcf26.style.opacity = '1', 
            this._2CL3485bddd5e0fcf26.style.transition = 'opacity 1s', 
            this._2CLe39fd0c56ba9a176.style['box-shadow'] = '#af7ee8 0px 0px 20px, #08c7ff 0px 0px 20px';
        }
    }, {
        'key': '_2CLafb101ba78a096e7',
        'value': function _2CLafb101ba78a096e7(aNv) {
            this._2CLe39fd0c56ba9a176.style.width = '' ['concat'](0x0 | aNv, '%');
        }
    }, {
        'key': '_2CLa2401f3a6e826384',
        'value': function _2CLa2401f3a6e826384() {
            var aNU = this;
            this._2CLc1bfadcfb8498cd0.style.opacity = 0x0, setTimeout(function () {
                window.removeEventListener('resize', aNU._2CL87bea31a06a0fd10, {
                    'passive': !0x0
                }), aNU._2CLc1bfadcfb8498cd0.parentNode.removeChild(aNU._2CLc1bfadcfb8498cd0), aNU._2CLc1bfadcfb8498cd0 = null, aNU._2CL3485bddd5e0fcf26 = null, aNU._2CLe39fd0c56ba9a176 = null, aNU._2CLc455ed7258a869d1 = null, aNU._2CL30a25e13cd0ba4fe = null, aNU._2CLfbf4003ef262b269 = null, aNU._2CL4397139e1aa87000 = !0x0;
            }, 0x3e8);
        }
    }, {
        'key': '_2CLb5adde8d7d741225',
        'value': function _2CLb5adde8d7d741225() {
            this._2CL3485bddd5e0fcf26.style['background-color'] = '#ff0000', this._2CL3485bddd5e0fcf26.style['background-blend-mode'] = 'multiply';
        }
    }, {
        'key': '_2CL46c293447ba980a2',
        'value': function _2CL46c293447ba980a2() {
            var aNV = this;
            if (this._2CL4397139e1aa87000) return;
            var aNv = this._2CL30a25e13cd0ba4fe;
            aNv.clearRect(0x0, 0x0, this._2CLc455ed7258a869d1.width, this._2CLc455ed7258a869d1.height);
            var aNX = !![];
            var aNY = ![];
            var aNZ = undefined;
            try {
                for (var aO0 = this._2CLfbf4003ef262b269[Symbol.iterator](), aO1; !(aNX = (aO1 = aO0.next())['done']); aNX = !![]) {
                    var aO2 = aO1.value;
                    aO2._2CLb732806230c52119(), aNv.globalAlpha = aO2._2CL659907fefaeeb24a, aNv.drawImage(aNM, aO2._2CL8725029ea89712ee - aO2._2CLd33d3f60bb918a22, aO2._2CL36a4dc9ccf2bdc09 - aO2._2CLd33d3f60bb918a22, 0x2 * aO2._2CLd33d3f60bb918a22, 0x2 * aO2._2CLd33d3f60bb918a22);
                }
            } catch (aO3) {
                aNY = !![];
                aNZ = aO3;
            } finally {
                try {
                    if (!aNX && aO0.return != null) {
                        aO0.return();
                    }
                } finally {
                    if (aNY) {
                        throw aNZ;
                    }
                }
            }
            this._2CL4397139e1aa87000 || window.requestAnimationFrame(function () {
                aNV._2CL46c293447ba980a2();
            });
        }
    }]);
    return aNO;
}())();