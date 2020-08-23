import * as PIXI from "pixi.js";
import RainbowShaderW from "../assets/RainbowW.glsl";
import RainbowShaderH from "../assets/RainbowH.glsl";
import Endy from "../settings/Endy";

console.log("Rainbow Border V2");

const width = 2136;
const height = 2136;
const app = new PIXI.Application({
    width,
    height,
    transparent: true
});

const mainFragment = `
  uniform vec2 iResolution;
  uniform sampler2D iChannel0;
  void main()
  {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      gl_FragColor = texture2D(iChannel0,uv);
  }
`;

const bufferA = PIXI.RenderTexture.create(width, height);

const particleAFilter = new PIXI.Filter("", RainbowShaderW);
particleAFilter.padding = 0;
particleAFilter.uniforms.iResolution = [width, height];
particleAFilter.uniforms.iTime = 0;

const particleBFilter = new PIXI.Filter("", RainbowShaderH);
particleBFilter.padding = 0;
particleBFilter.uniforms.iResolution = [width, height];
particleBFilter.uniforms.iTime = 0;

const blurFilter = new PIXI.filters.BlurFilter(30,20,1);

const bufferAContainer = new PIXI.Container();
/* bufferAContainer.filterArea = new PIXI.Rectangle(25, 24, 2086, 30);
bufferAContainer.filters = [particleAFilter]; */

const sp1 = new PIXI.Sprite(bufferA);
sp1.filterArea = new PIXI.Rectangle(25, 24, 2086, 30);
sp1.filters = [particleAFilter];
bufferAContainer.addChild(sp1);

const sp2 = new PIXI.Sprite(bufferA);
sp2.filterArea = new PIXI.Rectangle(2080, 24, 30, 2086);
sp2.filters = [particleBFilter];
// bufferAContainer.addChild(sp2);
sp2.anchor.x = 0.5;
sp2.anchor.y = 0.5;
sp2.rotation += 120;
bufferAContainer.addChild(sp2);

const mainFilter = new PIXI.Filter("", mainFragment);
app.stage.filters = [mainFilter, blurFilter];
app.stage.filterArea = new PIXI.Rectangle(0, 0, width, height);
mainFilter.uniforms.iResolution = [width, height];
mainFilter.uniforms.iChannel0 = bufferA;

// document.body.appendChild(app.view);
// console.log(app.view)

let lastTime = performance.now();
let time = 0;
let count = 0;
app.ticker.add(() => {
    if (!Endy.enableRainbowBorder) return;
    const current = performance.now();
    const diff = (current - lastTime) / 1000;
    time += diff;
    lastTime = current;
    particleAFilter.uniforms.iTime = time;
    particleBFilter.uniforms.iTime = time;
    app.renderer.render(bufferAContainer, bufferA);
    mainFilter.uniforms.iChannel0 = bufferA;
    count++;
});

export default app.view;