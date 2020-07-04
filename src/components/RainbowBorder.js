let showRbbLoader = false;
let changeAmount = 17;
let borderColor = [
    { r: 0, g: 0, b: 255 },
    { r: 0, g: 255, b: 0 },
    { r: 255, g: 255, b: 0 },
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 0, b: 255 }
]

window.enableRainbowBorder = false;
window.currentFrame = 0;
window.completeFrame = false;
window.rbbFrames = [];

function setGrad(ctx, grad, c) {
    grad.addColorStop(0.0 , `rgb(${c[0].r}, ${c[0].g}, ${c[0].b})`);
    grad.addColorStop(0.25 , `rgb(${c[1].r}, ${c[1].g}, ${c[1].b})`);
    grad.addColorStop(0.5 , `rgb(${c[2].r}, ${c[2].g}, ${c[2].b})`);
    grad.addColorStop(0.75 , `rgb(${c[3].r}, ${c[3].g}, ${c[3].b})`);
    grad.addColorStop(1.0 , `rgb(${c[4].r}, ${c[4].g}, ${c[4].b})`);
    ctx.fillStyle = grad;
}

export default function makeRbbFrame() {
    if (!!enableRainbowBorder && !completeFrame) {
        if (!showRbbLoader) {
            $("#backOverlay").fadeIn(700),
            $("#rbbLoader").fadeIn(700),
            showRbbLoader = true;
            console.log(completeFrame)
        }
        $("#rbbLoader").text(`Rendering rainbow border: ${rbbFrames.length} / ${59}`);
        for (let c of borderColor) {
            switch (true) {
                case c.r == 0 && c.g == 0 && c.b == 255:
                    c.up = "r";
                    c.down = "b";
                    break;

                case c.r == 255 && c.g == 0 && c.b == 0:
                    c.up = "g";
                    c.down = null;
                    break;

                case c.r == 255 && c.g == 255 && c.b == 0:
                    c.up = null;
                    c.down = "r";
                    break;

                case c.r == 0 && c.g == 255 && c.b == 0:
                    c.up = "b";
                    c.down = "g";
                    break;
            }
            if (c.up) c[c.up] += changeAmount;
            if (c.down) c[c.down] -= changeAmount;
        }
        
        if (!borderColor[0].r && !borderColor[0].g && !!borderColor[0].b) {
            //console.log("frame complete!", rbbFrames);
            completeFrame = true;
            showRbbLoader = false;
            $("#backOverlay").fadeOut("fast");
            $("#rbbLoader").fadeOut("fast");
            return;
        }

        let canvas = document.createElement("canvas");
        canvas.width = canvas.height = 2136;
        let ctx = canvas.getContext("2d");
        let c = borderColor;
        ctx.filter = 'blur(10px)';

        ctx.beginPath(); // left border grad
        let grad = ctx.createLinearGradient(45, 45, 45, 2046);
        setGrad(ctx, grad, c);
        ctx.rect(22, 25, 40, 2080);
        ctx.fill();

        ctx.beginPath(); // bottom border grad
        grad = ctx.createLinearGradient(45, 2046, 2046, 2046);
        setGrad(ctx, grad, c);
        ctx.rect(45, 2075, 2057, 40);
        ctx.fill();

        ctx.beginPath(); // right border grad
        grad = ctx.createLinearGradient(2046, 2046, 2046, 45);
        setGrad(ctx, grad, c);
        ctx.rect(2075, 27, 40, 2077);
        ctx.fill();

        ctx.beginPath(); // top border grad
        grad = ctx.createLinearGradient(2046, 45, 45, 45);
        setGrad(ctx, grad, c);
        ctx.rect(45, 20, 2057, 40);
        ctx.fill();

        rbbFrames.push(canvas);
        setTimeout(makeRbbFrame, 30);
    }
}

setInterval(() => {
    if (currentFrame + 1 >= rbbFrames.length) currentFrame = 0;
    else currentFrame++;
}, 60);