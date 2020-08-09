const VERSION = "v4.2a";

// sai hi
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    const args = [
        `\n %c %c %c HSLO Endymion ${VERSION}  %c  %c  https://dc.sigr.io/  %c %c ♥%c♥%c♥ \n\n`,
        'background: #ff66a5; padding:5px 0;',
        'background: #ff66a5; padding:5px 0;',
        'color: #ff66a5; background: #030307; padding:5px 0;',
        'background: #ff66a5; padding:5px 0;',
        'background: #ffc3dc; padding:5px 0;',
        'background: #ff66a5; padding:5px 0;',
        'color: #ff2424; background: #fff; padding:5px 0;',
        'color: #ff2424; background: #fff; padding:5px 0;',
        'color: #ff2424; background: #fff; padding:5px 0;',
    ];

    window.console.log.apply(console, args);
}
else if (window.console) {
    console.log("[test114514] HSLO Endymion", VERSION);
}

window.masterURL = "https://hslo.sigr.io/";

window.WebSocketDayo = WebSocket;
window.WebSocketDayo._send = window.WebSocketDayo.send;

/* WebSocket = function(wsServer, honoka) {
    if (wsServer.match(/connect\.hslo/)) return new FakeAuth(wsServer, honoka);
    else return new WebSocketDayo(wsServer, honoka);
} */
/* CanvasRenderingContext2D.prototype._arc = CanvasRenderingContext2D.prototype.arc
CanvasRenderingContext2D.prototype.arc = function() {
    //this._arc.apply(this, arguments)
} */

/* const CRC2D_Prototype = CanvasRenderingContext2D.prototype;
CRC2D_Prototype._drawImage = CRC2D_Prototype.drawImage;
CRC2D_Prototype.drawImage = function() {
    let c = arguments[0];
    if (c.width == 128 && c.height == 128 && !!c.getContext) {
        this._drawImage.apply(this, arguments);
        if (Date.now() - (this.lasttime || 0) > 1000) {
            this.lasttime = Date.now();
            console.log(c.getContext("2d"))
            this.ikemen();
        }
        
    }
} */

console.lazy = function () {
    this.lastTime = this.lastTime || Date.now();
    if (Date.now() - this.lastTime > 1000) {
        this.log.apply(null, arguments);
        this.lastTime = Date.now();
    }
}