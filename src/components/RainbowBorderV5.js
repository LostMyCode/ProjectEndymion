import * as PIXI from "pixi.js";

const width = 1000;
const height = 1000;
const app = new PIXI.Application({
    width,
    height,
    transparent: false
});

const G = {
    left: 0,
    top: 0,
}

const RBv5 = new class {
    constructor() {
        this.rgbColor1 = "#ffff00"
        this.rgbColor2 = "#ff0000"
        this.edge = 2136;
        this.borderWidth = 18;
        this.container = new PIXI.Container();
        this.main = app;
        this.init();
    }
    init() {
        const e = new Image;
        e.crossOrigin = "anonymous"
        e.src = "https://notsocoolisntit.yueagar.ml/pixi_resources/rainbow.png"
        this.rgbImg = PIXI.Texture.from(e)
        this.filter1 = new PIXI.filters.ColorMatrixFilter()
        this.hueCounter1 = 0
        // this.cacheRGB()
        this.render();
    }
    render() {
        const e = this.container;
        const t = this.borderWidth >> 1;
        this.filter1.hue(this.hueCounter1)
        this.hueCounter1 -= 1
        this.hueCounter1 < 0 && (this.hueCounter1 = 360);

        const s = new PIXI.Sprite(this.rgbImg);
        s.position.set(G.left - 30 * this.edge / 2 / 720 - t, G.top - 30 * this.edge / 2 / 720);
        s.filters = [this.filter1];
        s.width = this.edge + 60 * this.edge / 2 / 720 + 2 * t;
        s.height = this.edge + 60 * this.edge / 2 / 720;
        s.alpha = /* oe.borderAlpha */10 / 10;
        for (let t = 0; t < /* oe.borderGlowStrength */1; t++) {
            e.addChild(s);
        }
        // app.renderer.render(this.container);
    }
    cacheRGB() {
        this.rgbCanvas = document.createElement("canvas");
        this.rgbCtx = this.rgbCanvas.getContext("2d");
        this.rgbCanvas.width = 700;
        this.rgbCanvas.height = 700;
        const e = this.rgbCtx.createLinearGradient(0, 0, 700, 700);
        e.addColorStop(0, this.rgbColor1)
        e.addColorStop(1, this.rgbColor2)
        this.rgbCtx.filter = "blur(4px)"
        this.rgbCtx.lineWidth = 15
        this.rgbCtx.lineCap = "round"
        this.rgbCtx.strokeStyle = e
        this.rgbCtx.strokeRect(35 / 1.3, 35 / 1.3, 645, 645)
        this.rgbTexture = PIXI.Texture.from(this.rgbCanvas)
    }
}

export default RBv5;

/* document.body.appendChild(app.view);

app.ticker.add(() => {
    // RBv5.render();
    app.renderer.render(RBv5.container);
}); */