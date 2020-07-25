import Endy from "./Endy";
import OpBots from "../components/OpBots";
import NelBots from "../components/NelBots";

function bootBots(label) {
    switch (label) {
        case "nel":
            NelBots.boot();
            break;

        case "opbots":
            OpBots.boot();
            break;
    }
}

export default {
    'useBotsToggle': {
        '_2CL1e22c6e0e181ac56': 'Enable bots',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            if (isEnabled)
                document.getElementById("Endymion_BotsInfo").style.display = "block";
            else
                document.getElementById("Endymion_BotsInfo").style.display = "none";

            isEnabled && bootBots(window.SettingsStore.BotTypeSelector);
        }
    },
    'BotTypeSelector': {
        '_2CL1e22c6e0e181ac56': 'Bots label select',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'nel': 'Nel (freebots)',
            'opbots': 'OP-BOTS.COM',
            'agarbot': 'AGARBOT.OVH'
        },
        '_2CL7d0596c36891967f': 'nel',
        '_2CL850f236ecda2e139': function (label) {
            const panel = document.getElementById("Endymion_BotsInfo");
            if (panel) {
                document.getElementById("endy_nel").style.display = "none";
                document.getElementById("endy_opbots").style.display = "none";
                document.getElementById("endy_agarbot").style.display = "none";

                document.getElementById("endy_" + label).style.display = "block";
            }

            if (window.SettingsStore.useBotsToggle) bootBots(label);
        }
    },

    'Seperate_BotHotkey': {
        '_2CL65dfacb39960c223': 'seperator'
    },

    'BotSplitHotkey': {
        '_2CL1e22c6e0e181ac56': 'Bot split key',
        '_2CL65dfacb39960c223': 'hotkey',
        '_2CLf25e006a93c268fc': 0x1,
        '_2CL7d0596c36891967f': 'E',
    },
    'BotFeedHotkey': {
        '_2CL1e22c6e0e181ac56': 'Bot feed key',
        '_2CL65dfacb39960c223': 'hotkey',
        '_2CLf25e006a93c268fc': 0x1,
        '_2CL7d0596c36891967f': 'R',
    },
    'BotAiHotkey': {
        '_2CL1e22c6e0e181ac56': 'Bot ai key',
        '_2CL65dfacb39960c223': 'hotkey',
        '_2CLf25e006a93c268fc': 0x1,
        '_2CL7d0596c36891967f': 'Z',
    },

    'Seperate_NelBotsDetail': {
        '_2CL65dfacb39960c223': 'seperator'
    },

    'NelBotsName': {
        '_2CL1e22c6e0e181ac56': 'Bots name (nel bots)',
        '_2CL65dfacb39960c223': 'input',
        '_2CL7d0596c36891967f': "freebots"
    },
    'NelBotsAmount': {
        '_2CL1e22c6e0e181ac56': 'Amount of nel bots',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 1, // min amount
        '_2CL111f1b5b84b5c819': 199, // max amount
        '_2CLe3712e4c0c1f2dfe': 1, // change amount
        '_2CL7d0596c36891967f': 1 // default
    },
    'NelBotsServer': {
        '_2CL1e22c6e0e181ac56': 'Nel bots server url',
        '_2CL65dfacb39960c223': 'input',
        '_2CL7d0596c36891967f': "ws://127.0.0.1:8083"
    },

    'Seperate_OpBotsDetail': {
        '_2CL65dfacb39960c223': 'seperator'
    },

    'OpBotsApiKey': {
        '_2CL1e22c6e0e181ac56': 'API key (op-bots.com)',
        '_2CL65dfacb39960c223': 'input',
        '_2CL7d0596c36891967f': "",
        '_2CL850f236ecda2e139': function (key) {
            OpBots.setConfig("APIKey", key);
        }
    },
}