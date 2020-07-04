export default function (R) {
    var c = function () {
        var c = !![];
        return function (d, e) {
            var f = c ? function () {
                if (e) {
                    var g = e['apply'](d, arguments);
                    e = null;
                    return g;
                }
            } : function () {};
            c = ![];
            return f;
        };
    }();

    function S(S) {
        var bls = c(this, function () {
            var c = function () {
                    return 'dev';
                },
                d = function () {
                    return 'window';
                };
            var e = function () {
                var f = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
                return !f['test'](c['toString']());
            };
            var g = function () {
                var h = new RegExp('(\\\\[x|u](\\w){2,4})+');
                return h['test'](d['toString']());
            };
            var i = function (j) {
                /* var k=~-0x1>>0x1+0xff%0x0;if(j['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===k)){l(j);} */ };
            var l = function (m) {
                /* var n=~-0x4>>0x1+0xff%0x0;if(m['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==n){i(m);} */ };
            /* if (!e()) {
                if (!g()) {
                    i('indеxOf');
                } else {
                    i('indexOf');
                }
            } else {
                i('indеxOf');
            } */
        });
        bls();
        for (var U, V, W = S[0x0], X = S[0x1], Y = S[0x2], Z = 0x0, a0 = []; Z < W['length']; Z++) {
            V = W[Z], a9[V] && a0['push'](a9[V][0x0]), a9[V] = 0x0;
        }
        for (U in X) {
            Object['prototype']['hasOwnProperty']['call'](X, U) && (R[U] = X[U]);
        }
        for (au && au(S); a0['length'];) {
            a0['shift']()();
        }
        return aa['push']['apply'](aa, Y || []), a1();
    }

    function a1() {
        for (var R, S = 0x0; S < aa['length']; S++) {
            for (var a1 = aa[S], a5 = !0x0, a6 = 0x1; a6 < a1['length']; a6++) {
                var a7 = a1[a6];
                0x0 !== a9[a7] && (a5 = !0x1);
            }
            a5 && (aa['splice'](S--, 0x1),
                R = ab(ab['s'] = a1[0x0]));
        }
        return R;
    }
    var a8 = {},
        a9 = {
            0: 0x0
        },
        aa = [];

    function ab(S) {
        if (a8[S]) return a8[S]['exports'];
        var a1 = a8[S] = {
            'i': S,
            'l': !0x1,
            'exports': {}
        };
        return R[S]['call'](a1['exports'], a1, a1['exports'], ab), a1['l'] = !0x0, a1['exports'];
    }
    ab['m'] = R, ab['c'] = a8, ab['d'] = function (R, S, a1) {
        ab['o'](R, S) || Object['defineProperty'](R, S, {
            'enumerable': !0x0,
            'get': a1
        });
    }, ab['r'] = function (R) {
        'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](R, Symbol['toStringTag'], {
            'value': 'Module'
        }), Object['defineProperty'](R, '__esModule', {
            'value': !0x0
        });
    }, ab['t'] = function (R, S) {
        if (0x1 & S && (R = ab(R)), 0x8 & S) return R;
        if (0x4 & S && 'object' == _typeof(R) && R && R['__esModule']) return R;
        var a1 = Object['create'](null);
        if (ab['r'](a1), Object['defineProperty'](a1, 'default', {
                'enumerable': !0x0,
                'value': R
            }), 0x2 & S && 'string' != typeof R)
            for (var a8 in R) {
                ab['d'](a1, a8, function (S) {
                    return R[S];
                } ['bind'](null, a8));
            }
        return a1;
    }, ab['n'] = function (R) {
        var S = R && R['__esModule'] ? function () {
            return R['default'];
        } : function () {
            return R;
        };
        return ab['d'](S, 'a', S), S;
    }, ab['o'] = function (R, S) {
        return Object['prototype']['hasOwnProperty']['call'](R, S);
    }, ab['p'] = 'https://saigo.hslo.io';
    var ar = window['webpackJsonp'] = window['webpackJsonp'] || [],
        as = ar['push']['bind'](ar);
    ar['push'] = S, ar = ar['slice']();
    for (var at = 0x0; at < ar['length']; at++) {
        S(ar[at]);
    }
    var au = as;
    aa['push']([0x10, 0x1]), a1();
}