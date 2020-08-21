import * as PIXI from "pixi.js";
import TurbulenceShader from "../assets/ColorRing.glsl";

console.log("Turbulence");


const width = 500;
const height = 500;
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

const particleAFilter = new PIXI.Filter("", TurbulenceShader);
particleAFilter.padding = 0;
particleAFilter.uniforms.iResolution = [width, height];
particleAFilter.uniforms.iTime = 0;

const bufferAContainer = new PIXI.Container();
/* bufferAContainer.filterArea = new PIXI.Rectangle(0, 0, width, height);
bufferAContainer.filters = [particleAFilter]; */

const sp1 = new PIXI.Sprite(bufferA);
// sp1.blendMode = PIXI.BLEND_MODES.OVERLAY;
sp1.filterArea = new PIXI.Rectangle(0, 0, width, height);
sp1.filters = [particleAFilter];
bufferAContainer.addChild(sp1);

const mainFilter = new PIXI.Filter("", TurbulenceShader);
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