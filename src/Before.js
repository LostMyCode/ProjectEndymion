console.info("[test114514] HSLO Endymion v4.1a");

window.masterURL = "https://ex-script.com/fstyle/hslo/";
window.GithubPagesURL = "https://lostmycode.github.io/ProjectEndymion/";

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

console.lazy = function() {
    this.lastTime = this.lastTime || Date.now();
    if (Date.now() - this.lastTime > 1000) {
        this.log.apply(null, arguments);
        this.lastTime = Date.now();
    }
}