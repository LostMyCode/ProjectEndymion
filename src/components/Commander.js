export default (function () {

    const animation = new class Animation {
        constructor() {
            this.images = [new Image(), new Image(), new Image()];

            for (let i = 0; i < 3; i++) {
                this.images[i].src = `${masterURL}resources/maoucircle${i + 1}.png`;
            }

            this.rot = 0;
            this.rad = 0;

            this.canvasSize = 512;
            this.halfSize = this.canvasSize / 2;

            this.canvas = document.createElement("canvas");
            this.canvas.width = this.canvas.height = this.canvasSize;
            this.ctx = this.canvas.getContext("2d");

            this.ctx.transform(1, 0, 0, -1, this.halfSize, this.halfSize);
            // document.body.appendChild(this.canvas);
            this.loop();
        }

        update() {
            if (this.rot < 360)
                this.rot += 1;
            else
                this.rot = 0;

            this.rad = this.rot * Math.PI / 180;
        }

        loop() {
            this.update();
            this.ctx.clearRect(-this.halfSize, -this.halfSize, this.canvasSize, this.canvasSize);
            let rad = this.rad;

            this.ctx.rotate(rad);
            this.ctx.drawImage(this.images[0], -this.halfSize, -this.halfSize);

            this.ctx.rotate(-rad * 2);
            this.ctx.drawImage(this.images[1], -this.halfSize, -this.halfSize);

            this.ctx.rotate(rad * 2);
            this.ctx.drawImage(this.images[2], -this.halfSize, -this.halfSize);

            this.ctx.rotate(-rad);
            requestAnimationFrame(this.loop.bind(this));
        }
    }

    class Commander {
        constructor(x, y, s) {
            this.x = x;
            this.y = y;
            this.s = s;

            this.opacity = 1;
            this.size = Math.max(10, s / 10);
            this.complete = false;
        }

        update(ctx) {
            if (this.size > this.s * 0.4) this.opacity *= 0.93;
            this.size *= 1.02;

            this.draw(ctx);

            if (/* this.size > this.s */this.opacity < 0.1) this.complete = true;
        } 

        draw(ctx) {
            ctx.beginPath();
            ctx.globalAlpha = this.opacity;

            ctx.drawImage(
                animation.canvas, 
                this.x - this.size, 
                this.y - this.size, 
                this.size * 2, 
                this.size * 2
            );

            ctx.globalAlpha = 1;
        }
    }

    return Commander;
})();