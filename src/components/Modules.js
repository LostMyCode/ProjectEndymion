
// exports
function _slicedToArray(d,e){return _arrayWithHoles(d)||_iterableToArrayLimit(d,e)||_nonIterableRest();}
function _getPrototypeOf(s){_getPrototypeOf=Object['setPrototypeOf']?Object['getPrototypeOf']:function _getPrototypeOf(s){return s['__proto__']||Object['getPrototypeOf'](s);};return _getPrototypeOf(s);}
function _inherits(u,v){if(typeof v!=='function'&&v!==null){throw new TypeError('Super\x20expression\x20must\x20either\x20be\x20null\x20or\x20a\x20function');}u['prototype']=Object['create'](v&&v['prototype'],{'constructor':{'value':u,'writable':!![],'configurable':!![]}});if(v)_setPrototypeOf(u,v);}
function _classCallCheck(F,G){if(!(F instanceof G)){throw new TypeError('Cannot\x20call\x20a\x20class\x20as\x20a\x20function');}}
function _createClass(L,M,N){if(M)_defineProperties(L['prototype'],M);if(N)_defineProperties(L,N);return L;}
function _typeof(O){if(typeof Symbol==='function'&&typeof Symbol['iterator']==='symbol'){_typeof=function _typeof(O){return typeof O;};}else{_typeof=function _typeof(O){return O&&typeof Symbol==='function'&&O['constructor']===Symbol&&O!==Symbol['prototype']?'symbol':typeof O;};}return _typeof(O);}


// non
function _nonIterableRest(){throw new TypeError('Invalid\x20attempt\x20to\x20destructure\x20non-iterable\x20instance');}
function _iterableToArrayLimit(f,g){var h=[];var i=!![];var j=![];var k=undefined;try{for(var l=f[Symbol['iterator']](),m;!(i=(m=l['next']())['done']);i=!![]){h['push'](m['value']);if(g&&h['length']===g)break;}}catch(n){j=!![];k=n;}finally{try{if(!i&&l['return']!=null)l['return']();}finally{if(j)throw k;}}return h;}
function _arrayWithHoles(o){if(Array['isArray'](o))return o;}
function _possibleConstructorReturn(p,q){if(q&&(_typeof(q)==='object'||typeof q==='function')){return q;}return _assertThisInitialized(p);}
function _assertThisInitialized(r){if(r===void 0x0){throw new ReferenceError('this\x20hasn\x27t\x20been\x20initialised\x20-\x20super()\x20hasn\x27t\x20been\x20called');}return r;}
function _setPrototypeOf(w,x){_setPrototypeOf=Object['setPrototypeOf']||function _setPrototypeOf(w,x){w['__proto__']=x;return w;};return _setPrototypeOf(w,x);}
function _toConsumableArray(A){return _arrayWithoutHoles(A)||_iterableToArray(A)||_nonIterableSpread();}
function _nonIterableSpread(){throw new TypeError('Invalid\x20attempt\x20to\x20spread\x20non-iterable\x20instance');}
function _iterableToArray(B){if(Symbol['iterator']in Object(B)||Object['prototype']['toString']['call'](B)==='[object\x20Arguments]')return Array['from'](B);}
function _arrayWithoutHoles(C){if(Array['isArray'](C)){for(var D=0x0,E=new Array(C['length']);D<C['length'];D++){E[D]=C[D];}return E;}}
function _defineProperties(H,I){for(var J=0x0;J<I['length'];J++){var K=I[J];K['enumerable']=K['enumerable']||![];K['configurable']=!![];if('value'in K)K['writable']=!![];Object['defineProperty'](H,K['key'],K);}}


export { _typeof, _slicedToArray, _possibleConstructorReturn, _getPrototypeOf, _inherits, _toConsumableArray, _classCallCheck, _createClass };