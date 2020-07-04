export default (function () {
    var Sparkle = {};

    Sparkle.Particle = function (opt) {
        this.radius = 7;
        this.x = opt.x;
        this.y = opt.y;
        this.angle = opt.angle;
        this.speed = opt.speed;
        this.accel = opt.accel;
        this.decay = 0.01;
        this.life = 1;
    };

    Sparkle.Particle.prototype.step = function (i) {
        this.speed += this.accel;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.angle += Sparkle.PI / 64;
        this.accel *= 1.01;
        this.life -= this.decay;

        if (this.life <= 0) {
            Sparkle.particles.splice(i, 1);
        }
    };

    Sparkle.Particle.prototype.draw = function (i) {
        Sparkle.ctx.fillStyle = Sparkle.ctx.strokeStyle = 'hsla(' + (Sparkle.tick + (this.life * 120)) + ', 100%, 60%, ' + this.life + ')';
        Sparkle.ctx.beginPath();
        if (Sparkle.particles[i - 1]) {
            Sparkle.ctx.moveTo(this.x, this.y);
            Sparkle.ctx.lineTo(Sparkle.particles[i - 1].x, Sparkle.particles[i - 1].y);
        }
        Sparkle.ctx.stroke();

        Sparkle.ctx.beginPath();
        Sparkle.ctx.arc(this.x, this.y, Math.max(0.001, this.life * this.radius), 0, Sparkle.TWO_PI);
        Sparkle.ctx.fill();

        var size = Math.random() * 1.25;
        Sparkle.ctx.fillRect(~~(this.x + ((Math.random() - 0.5) * 35) * this.life), ~~(this.y + ((Math.random() - 0.5) * 35) * this.life), size, size);
    }

    Sparkle.step = function () {
        Sparkle.particles.push(new Sparkle.Particle({
            x: Sparkle.width / 2 + Math.cos(Sparkle.tick / 20) * Sparkle.min / 2,
            y: Sparkle.height / 2 + Math.sin(Sparkle.tick / 20) * Sparkle.min / 2,
            angle: Sparkle.globalRotation + Sparkle.globalAngle,
            speed: 0,
            accel: 0.01
        }));

        Sparkle.particles.forEach(function (elem, index) {
            elem.step(index);
        });

        Sparkle.globalRotation += Sparkle.PI / 6;
        Sparkle.globalAngle += Sparkle.PI / 6;
    };

    Sparkle.draw = function () {
        Sparkle.ctx.clearRect(0, 0, Sparkle.width, Sparkle.height);

        Sparkle.particles.forEach(function (elem, index) {
            elem.draw(index);
        });
    };

    Sparkle.init = function () {
        Sparkle.canvas = document.createElement('canvas');
        Sparkle.ctx = Sparkle.canvas.getContext('2d');
        Sparkle.width = 300;
        Sparkle.height = 300;
        Sparkle.canvas.width = Sparkle.width/*  * window.devicePixelRatio */;
        Sparkle.canvas.height = Sparkle.height/*  * window.devicePixelRatio */;
        /* Sparkle.canvas.style.width = Sparkle.width + 'px';
        Sparkle.canvas.style.height = Sparkle.height + 'px'; */
        Sparkle.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        Sparkle.min = Sparkle.width * 0.5;
        Sparkle.particles = [];
        Sparkle.globalAngle = 0;
        Sparkle.globalRotation = 0;
        Sparkle.tick = 0;
        Sparkle.PI = Math.PI;
        Sparkle.TWO_PI = Sparkle.PI * 2;
        Sparkle.ctx.globalCompositeOperation = 'lighter';
        // document.body.appendChild(Sparkle.canvas);
        Sparkle.loop();
    };

    Sparkle.loop = function () {
        requestAnimationFrame(Sparkle.loop);
        Sparkle.step();
        Sparkle.draw();
        Sparkle.tick++;
    };

    Sparkle.init();
    return Sparkle;
})();