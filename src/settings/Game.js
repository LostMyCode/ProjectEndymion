import Endy from "./Endy";

export default {
    '_2CL755029166bd8a108': {
        '_2CL1e22c6e0e181ac56': 'Auto zoom',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    'MaouCircleSelect': {
        '_2CL1e22c6e0e181ac56': 'Maou circle',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'none': 'None',
            'everyone': 'Everyone',
            'onlyme': 'Only Me'
        },
        '_2CL7d0596c36891967f': 'none',
        '_2CL850f236ecda2e139': function (type) {
            switch (type) {
                case "none":
                    Endy.enableMaouCircle = false;
                    break;

                case "everyone":
                    Endy.enableMaouCircle = true;
                    Endy.HSLOCircleForOnlyMe = false;
                    break;

                case "onlyme":
                    Endy.enableMaouCircle = true;
                    Endy.HSLOCircleForOnlyMe = true;
                    break;
            }
        }
    },
    /* 'HSLOCircleToggle': {
        '_2CL1e22c6e0e181ac56': 'HSLO Maou Circle',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            Endy.enableMaouCircle = isEnabled;
        }
    }, */
    'SpectatorAssist': {
        '_2CL1e22c6e0e181ac56': 'Spectator assist',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'none': 'None',
            'tab3': 'Tab3 (Top1 View)',
            'fullmap': 'Fullmap View'
        },
        '_2CL7d0596c36891967f': 'tab3',
        '_2CL850f236ecda2e139': function (type) {
            switch (type) {
                case "none":
                    Endy.enableFullmap = false;
                    Endy.enableTab3 = false;
                    break;
                    
                case "tab3":
                    if (Endy.enableTab3 !== null) {
                        Endy.Toast['showToast']('info', 'Tab3', 'You need to reconnect to reflect tab3 settings!');
                        Endy.Toast['showToast']('info', 'Tab3', 'Tab3 is available only in multibox mode')
                    }
                    Endy.enableTab3 = true;
                    Endy.enableFullmap = false;
                    break;

                case "fullmap":
                    if (Endy.enableFullmap !== null) {
                        Endy.Toast['showToast']('info', 'Fullmap', 'You need to reconnect to reflect fullmap settings!')
                        Endy.Toast['showToast']('info', 'Fullmap', 'Fullmap is available only in multibox mode')
                    }
                    Endy.enableFullmap = true;
                    Endy.enableTab3 = false;
                    break;
            }
            Endy.specAssistType = type;
        }
    },
    /* 'Tab3Toggle': {
        '_2CL1e22c6e0e181ac56': 'Enable Tab3',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            if (Endy.enableTab3 !== null) {
                Endy.Toast['showToast']('info', 'Tab3', 'You need to reconnect to reflect tab3 settings!');
                if (isEnabled) Endy.Toast['showToast']('info', 'Tab3', 'Tab3 is available only in multibox mode')
            }
            Endy.enableTab3 = isEnabled;
            if (isEnabled && Endy.exTabCount == 0) Endy.exTabCount = 1;
            if (!isEnabled && Endy.exTabCount == 1) Endy.exTabCount = 0;
        }
    },
    'FullMapToggle': {
        '_2CL1e22c6e0e181ac56': 'Enable Fullmap',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            if (Endy.enableFullmap !== null) {
                Endy.Toast['showToast']('info', 'Fullmap', 'You need to reconnect to reflect fullmap settings!')
                if (isEnabled) Endy.Toast['showToast']('info', 'Fullmap', 'Fullmap is available only in multibox mode')
            }
            Endy.enableFullmap = isEnabled;
            if (isEnabled) Endy.exTabCount = 15;
            else if (Endy.exTabCount == 15 && Endy.enableTab3) Endy.exTabCount = 1;
            else if (Endy.exTabCount == 15 && !Endy.enableTab3) Endy.exTabCount = 0;
        }
    }, */
    /* 'HSLOCircleOnlyMeToggle': {
        '_2CL1e22c6e0e181ac56': 'HSLO Circle for own cells only',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            Endy.HSLOCircleForOnlyMe = isEnabled;
        }
    }, */
    '_2CLf0303ecc871fa1cf': {
        '_2CL1e22c6e0e181ac56': 'Zoom speed',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1,
        '_2CL111f1b5b84b5c819': 0xf,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0x4
    },
    '_2CLed608a71c590761b': {
        '_2CL1e22c6e0e181ac56': 'Camera speed',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1,
        '_2CL111f1b5b84b5c819': 0xf,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0xf
    },
    '_2CL0dc5bfdd8ae1fa9f': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL7831870038520f30': {
        '_2CL1e22c6e0e181ac56': 'Animation speed',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1, // min
        '_2CL111f1b5b84b5c819': 20, // max
        '_2CLe3712e4c0c1f2dfe': 0x1, // change amount
        '_2CL7d0596c36891967f': 0xa // default
    },
    '_2CL551774a986394bd9': {
        '_2CL1e22c6e0e181ac56': 'Cell eat animation',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CLcecf8636a73f807b': {
        '_2CL1e22c6e0e181ac56': 'Text scale animation',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'off': 'Off',
            'stepped': 'Stepped',
            'linear': 'Linear'
        },
        '_2CL7d0596c36891967f': 'stepped'
    },
    '_2CL0bc66b676ba4ac30': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL5774f21642251c8c': {
        '_2CL1e22c6e0e181ac56': 'Anti aliasing',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'low': 'Low',
            'medium': 'Medium',
            'high': 'High'
        },
        '_2CL7d0596c36891967f': 'low'
    },
    '_2CLa5b266185598c126': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLbee33c1722387f60': {
        '_2CL1e22c6e0e181ac56': 'Auto hide small text',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CLb225216db45c841a': {
        '_2CL1e22c6e0e181ac56': 'Cell nick',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CLcefd1a51f4ad1389': {
        '_2CL1e22c6e0e181ac56': 'Own cell nick',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLeacce6e589327eb8': {
        '_2CL1e22c6e0e181ac56': 'Cell mass',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CLc0ce4454f320b281': {
        '_2CL1e22c6e0e181ac56': 'Own cell mass',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CL6b239efe5e6757f9': {
        '_2CL1e22c6e0e181ac56': 'Cell mass format',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'shortened': 'Shortened',
            'full': 'Full'
        },
        '_2CL7d0596c36891967f': 'full'
    },
    '_2CL4413da4b308c248c': {
        '_2CL1e22c6e0e181ac56': 'Cell mass update interval (ms)',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x64,
        '_2CL111f1b5b84b5c819': 0x3e8,
        '_2CLe3712e4c0c1f2dfe': 0x32,
        '_2CL7d0596c36891967f': 0x64
    },
    '_2CL7d20afa5edf60813': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL986d79226a8f4718': {
        '_2CL1e22c6e0e181ac56': 'Food',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'off': 'Off',
            'normal': 'Normal',
            'rainbow': 'Rainbow'
        },
        '_2CL7d0596c36891967f': 'normal'
    },
    '_2CLc6addc8e83ac89cc': {
        '_2CL1e22c6e0e181ac56': 'Sectors',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLb76d87007f6550b8': {
        '_2CL1e22c6e0e181ac56': 'Background image',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLdc16af6033186efa': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL81e1a04dc15ff5cb': {
        '_2CL1e22c6e0e181ac56': 'URL skins',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CLe9513e68d2eebae6': {
        '_2CL1e22c6e0e181ac56': 'Vanilla skins',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CL8caeb1ba0f26d5de': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL72ba870109bf07ff': {
        '_2CL1e22c6e0e181ac56': 'Cursor tracker',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLe50ece9570a295f9': {
        '_2CL1e22c6e0e181ac56': 'Commander',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CL4163be9ead01f30b': {
        '_2CL1e22c6e0e181ac56': 'Teammate indicator',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CL3a4362a0c4f2b64e': {
        '_2CL1e22c6e0e181ac56': 'Multibox cell rings',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CL96f6ff1c5aa799eb': {
        '_2CL1e22c6e0e181ac56': 'Show mass on leaderboard',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CLe9c44aef606fb557': {
        '_2CL1e22c6e0e181ac56': 'Show enemy markers on minimap',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    },
    '_2CL72cbdb098f5c0db6': {
        '_2CL1e22c6e0e181ac56': 'Cell shield',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLec30d2ff92978f97': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLf35f0ef6d3090119': {
        '_2CL1e22c6e0e181ac56': 'Sounds',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0
    }
};