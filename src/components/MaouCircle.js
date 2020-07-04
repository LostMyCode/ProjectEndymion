export default new class MaouCircle {
    constructor() {
        this.outer = new Image();
        this.inner = new Image();
        this.outer.src = masterURL + "private/hslo_ring.png";
        this.inner.src = masterURL + "private/maou_inner.png";
        this.imageSize = 513;
        this.halfSize = this.imageSize / 2;

        this.pi = Math.PI;
        this.rot = 0;
        this.rad = 0;

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.canvas.height = this.imageSize;
        this.ctx.transform(1, 0, 0, -1, this.imageSize / 2, this.imageSize / 2);
        // document.body.appendChild(this.canvas);

        setInterval(() => {
            this.rot < 360 ? (this.rot += 1) : (this.rot = 0);
            this.rad = this.rot * this.pi / 180;
        }, 40);

        this.loop();
    }

    loop() {
        this.ctx.clearRect(-this.halfSize, -this.halfSize, this.imageSize, this.imageSize);
        let rad = this.rad;
        
        this.ctx.rotate(rad);
        this.ctx.drawImage(this.outer, -this.halfSize, -this.halfSize);
        
        this.ctx.rotate(-rad * 2);
        this.ctx.drawImage(this.inner, -this.halfSize, -this.halfSize);

        this.ctx.rotate(rad);
        this.lastRad = this.rad;
        requestAnimationFrame(this.loop.bind(this));
    }
}