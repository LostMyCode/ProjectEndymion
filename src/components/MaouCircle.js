window.enablePrivateHSLO = false;
window.HSLOCircleForOnlyMe = false;
window.circleSize = 1.1;
window.magicCircleImage = new Image();
magicCircleImage.src = "https://ex-script.com/fstyle/hslo/private/hslo_ring.png";
window.circlePlus = new Image();
circlePlus.src = "https://ex-script.com/fstyle/hslo/private/maou_inner.png";
var magicCircleRotation = 0;
window.magicCircleRad = 0;
setInterval(function() {
    if (magicCircleRotation < 360) magicCircleRotation += 1;
    else magicCircleRotation = 0;
    magicCircleRad = magicCircleRotation * Math.PI / 180;
}, 40);