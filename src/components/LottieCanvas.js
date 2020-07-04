window.masterURL = "https://ex-script.com/fstyle/hslo/"
const vuiElement = document.createElement("div");
vuiElement.id = "heybi"
/* vuiElement.style.display = "none"; */
document.body.appendChild(vuiElement);

const vuiAnim = lottie.loadAnimation({
    container: vuiElement, // the dom element
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: masterURL + "assets/json.php?name=voice.json",
    rendererSettings: {
        clearCanvas: true,
        className: 'some-css-class-name',
        id: 'vuiCanvas',
    }
});


let vuiCanvasLoad = setInterval(() => {
    let vui = document.getElementById("vuiCanvas");
    if (vui) {
        window.vuiCanvas = vui;
        vuiElement.style.display = "none";
        clearInterval(vuiCanvasLoad);
    }
}, 50);