var Particles = (function () {
    function Particles() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.counter = 0;
    }
    Particles.prototype.init = function () {
        this.createElement();
        this.createOneParticle();
        this.loop();
    };
    Particles.prototype.createElement = function () {
        var scale = 1;
        this.canvas.width = 500;
        this.canvas.height = 500;
        /* this.canvas.style.width = '100%'; */
        this.ctx.transform(scale, 0, 0, -scale, this.canvas.width / 2, this.canvas.height / 2);
        /* document.body.appendChild(this.canvas); */
        for (var i = 0; i < 180; i++) {
            this.createParticle();
        }
    };
    Particles.prototype.createParticle = function () {
        this.particles.push({
            color: Math.random() > 0.5 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
            radius: Math.random() * 20,
            x: (Math.random() - 0.5) * 25,
            y: (Math.random() - 0.5) * 25,
            xVel: Math.random() - 0.5,
            yVel: Math.random() - 0.5,
            random: Math.random(),
            opacity: 1
        });
    };
    Particles.prototype.disappearParticle = function (p) {
        if (p.opacity < 0.2) {
            this.resetParticle(p);
        }
        if (Math.hypot(p.x, p.y) > 220) {
            p.opacity *= 0.9;
        }
        p.radius *= 0.994;
    };
    Particles.prototype.resetParticle = function (p) {
        p.radius = p.random * 20;
        p.opacity = 1;
        p.x = (p.random - 0.5) * 25;
        p.y = (p.random - 0.5) * 25;
    };
    Particles.prototype.moveParticle = function (p) {
        p.x += p.xVel * 0.8;
        p.y += p.yVel * 0.8;
    };
    Particles.prototype.createOneParticle = function () {
        this.oneParticle = document.createElement("canvas");
        this.oneParticle.width = this.oneParticle.height = 30;
        let ctx = this.oneParticle.getContext("2d");
        ctx.beginPath();
        ctx.filter = 'blur(1.5px)';
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.arc(15, 15, 5, 0, Math.PI * 2);
        ctx.fill();
    };
    Particles.prototype.draw = function (p) {
        if (Math.hypot(p.x, p.y) < 140) return;
        this.ctx.beginPath();
        this.ctx.globalAlpha = p.opacity;
        this.ctx.drawImage(this.oneParticle, p.x - 15, p.y - 15);
        /* this.ctx.globalAlpha = p.opacity;
        this.ctx.filter = 'blur(1.5px)';
        this.ctx.fillStyle = p.color;
        this.ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        this.ctx.fill(); */
    };
    Particles.prototype.loop = function () {
        var _this = this;
        this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
        if (this.counter < this.particles.length) {
            this.counter++;
        }
        for (var i = 0; i < this.counter | 0; i = (i + 1) | 0) {
            this.moveParticle(this.particles[i]);
            this.disappearParticle(this.particles[i]);
            this.draw(this.particles[i]);
        }
        requestAnimationFrame(function () { return _this.loop(); });
    };
    return Particles;
})();

var particles = new Particles();
particles.init();

export default particles;