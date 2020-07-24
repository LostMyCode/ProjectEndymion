import Endy from "../settings/Endy";

// images
import MaouCircle1 from "../assets/maoucircle1.png";
import MaouCircle2 from "../assets/maoucircle2.png";
import MaouCircle3 from "../assets/maoucircle3.png";

export default (function () {

    const animation = new class Animation {
        constructor() {
            this.imageUrls = [MaouCircle1, MaouCircle2, MaouCircle3];
            this.images = [new Image(), new Image(), new Image()];
            this.colorFilter = null;

            for (let i = 0; i < 3; i++) {
                // this.images[i].src = `${masterURL}resources/maoucircle${i + 1}.png`;
                this.images[i].src = this.imageUrls[i];
                this.images[i].onload = () => {}
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

            this.colorFilter = this.createColoredImage(this.canvas, "rgb(0, 255, 0)");
            this.draw();
        }

        update() {
            if (this.rot < 360)
                this.rot += 1;
            else
                this.rot = 0;

            this.rad = this.rot * Math.PI / 180;
        }

        draw() {
            if (!Endy.enableEatEffects) return setTimeout(this.draw.bind(this), 500);

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

            this.ctx.save();
            this.ctx.globalCompositeOperation = 'source-in';
            this.ctx.drawImage(this.colorFilter, -this.halfSize, -this.halfSize);
            this.ctx.restore();
            requestAnimationFrame(this.draw.bind(this));
        }

        createColoredImage(img, color) { // chcolor.js by conifer.jp
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
               
            ctx.save();
            ctx.fillStyle = color;
            ctx.globalCompositeOperation = 'darker';
            ctx.fillRect(0, 0, img.width, img.height);
            ctx.restore();
        
            return canvas;
        }
    }

    class Commander {
        constructor(x, y, s) {
            this.x = x;
            this.y = y;
            this.s = s;

            this.opacity = 1;
            this.size = s / 10;
            this.complete = false;

            this.createdAt = new Date();
        }

        update(ctx) {
            if (Date.now() - this.createdAt > 5000) return this.complete = true;
            if (this.size > this.s * 0.5) this.opacity *= 0.95, this.size *= 1.01;
            else this.size *= 1.02;

            this.draw(ctx);

            if (/* this.size > this.s */this.opacity < 0.03) this.complete = true;
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

        static changeColor(color) {
            const a = animation;
            a.colorFilter = a.createColoredImage(a.canvas, color);
        }
    }

    return Commander;
})();