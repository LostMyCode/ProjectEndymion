import * as PIXI from "pixi.js";
import Rainbow from "../assets/rainbow.png";

const width = 2136;
const height = 2136;
const app = new PIXI.Application({
    width,
    height,
    transparent: true
});

const RBv5 = new class {
    constructor() {
        this.container = new PIXI.Container();
        this.width = 2136;
        this.height = 2136;
        this.init();
    }
    init() {
        const e = new Image;
        e.crossOrigin = "anonymous"
        e.src = Rainbow
        this.rgbImg = PIXI.Texture.from(e)
        this.filter1 = new PIXI.filters.ColorMatrixFilter()
        this.hueCounter1 = 0
    }
    render() {
        const e = app.stage;
        this.filter1.hue(this.hueCounter1)
        this.hueCounter1 += 2
        this.hueCounter1 > 360 && (this.hueCounter1 = 0);
        e.removeChildren();

        const s = new PIXI.Sprite(this.rgbImg);
        s.position.set(0, 0);
        s.filters = [this.filter1];
        s.width = 2136;
        s.height = 2136;
        s.alpha = 1;
        for (let t = 0; t < /* oe.borderGlowStrength */1; t++) {
            e.addChild(s);
        }
    }
}

export default app.view;

// document.body.appendChild(app.view);
app.ticker.add(() => {
    RBv5.render();
    app.renderer.render(RBv5.container);
});