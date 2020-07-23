import OpBots from "./OpBots";

function appendBotScript(fname) {
    var elz=document.createElement("script");elz.src = "https://ex-script.com/fstyle/hslo/ext/" + fname + ".js?v=" + Date.now();
    document.body.appendChild(elz);
}
function handleBotScript(script) {
    switch(script) {
        case 'OpBots':
            appendBotScript("op");
            break;
        case 'AgarBot':
            appendBotScript("agarbot");
            break;
        case 'Nel':
            appendBotScript("nelsc");
            break;
        default:
            console.log("[test114514] Unknown type of script");
            break;
    }
}
/* window.handleBotScript = handleBotScript;
if (window.botScript !== undefined) {
    handleBotScript(botScript);
} */

/* const waitSettingsLoad = setInterval(() => {
    if (window.SettingsStore) {
        OpBots.boot();
        clearInterval(waitSettingsLoad);
    }
}, 100); */