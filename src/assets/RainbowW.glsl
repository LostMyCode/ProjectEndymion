precision mediump float;

uniform vec3 iResolution;
uniform float iTime;

void main()
{
	vec2 uv = gl_FragCoord.xy / iResolution.xy;
	
    float frequency = 2.;
    
    float index = uv.x + iTime + uv.x * 2.;
    
    float red = sin(frequency * index + 0.0) * 0.5 + 0.5;
    float green = sin(frequency * index + 2.0) * 0.5 + 0.5;
    float blue = sin(frequency * index + 4.0) * 0.5 + 0.5;
    
    gl_FragColor = vec4(red,green,blue,1.0);
}