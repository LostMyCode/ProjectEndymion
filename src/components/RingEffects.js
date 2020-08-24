import * as PIXI from "pixi.js";
import RingEffects from "../assets/RingEffects.glsl";

//GLSL from https://www.shadertoy.com/view/4dSfDK

const width = 500;
const height = 500;
const app = new PIXI.Application({
    width,
    height,
    transparent: true
});

const bufferA = PIXI.RenderTexture.create(width, height);

const particleAFilter = new PIXI.Filter("", RingEffects);
particleAFilter.padding = 0;
particleAFilter.uniforms.iResolution = [width, height];
particleAFilter.uniforms.iTime = 0;

const bufferAContainer = new PIXI.Container();

const sp1 = new PIXI.Sprite(bufferA);
// sp1.blendMode = PIXI.BLEND_MODES.OVERLAY;
sp1.filterArea = new PIXI.Rectangle(0, 0, width, height);
sp1.filters = [particleAFilter];
bufferAContainer.addChild(sp1);

const mainFilter = new PIXI.Filter("", RingEffects);
app.stage.filters = [mainFilter];
app.stage.filterArea = new PIXI.Rectangle(0, 0, width, height);
mainFilter.uniforms.iResolution = [width, height];
mainFilter.uniforms.iChannel0 = bufferA;

// document.body.appendChild(app.view);
// console.log(app.view)

let lastTime = performance.now();
let time = 0;
let count = 0;
app.ticker.add(() => {
    const current = performance.now();
    const diff = (current - lastTime) / 1000;
    time += diff;
    lastTime = current;
    particleAFilter.uniforms.iTime = time;
    app.renderer.render(bufferAContainer, bufferA);
    mainFilter.uniforms.iChannel0 = bufferA;
    count++;
});

export default app.view;