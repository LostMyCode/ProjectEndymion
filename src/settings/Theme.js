import Endy from "./Endy";
import makeRbbFrame from "./../components/RainbowBorder";
import Commander from "./../components/Commander";

export default {
    '_2CLfadf136230ced339': {
        '_2CL1e22c6e0e181ac56': 'Cell coloring mode',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'normal': 'Normal',
            'darken': 'Darken',
            'wash': 'Wash'
        },
        '_2CL7d0596c36891967f': 'normal'
    },
    '_2CLae61034f8911da90': {
        '_2CL1e22c6e0e181ac56': 'Cell color darken amount',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x0,
        '_2CL111f1b5b84b5c819': 0.9,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0.1
    },
    '_2CL1dbe9b64dbfca434': {
        '_2CL1e22c6e0e181ac56': 'Cell color wash amount',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x0,
        '_2CL111f1b5b84b5c819': 0.9,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0.35
    },
    '_2CLa631f8ba0062c4a2': {
        '_2CL1e22c6e0e181ac56': 'Cell opacity',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.1,
        '_2CL111f1b5b84b5c819': 0x1,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1
    },
    'CellParticles': {
        '_2CL1e22c6e0e181ac56': 'Cell particles',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            Endy.enableParticles = isEnabled;
        }
    },
    'CellEatEffects': {
        '_2CL1e22c6e0e181ac56': 'Cell eat effects',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            Endy.enableEatEffects = isEnabled;
        }
    },
    'CellEatEffectsColor': {
        '_2CL1e22c6e0e181ac56': 'Cell eat effect color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff',
        '_2CL850f236ecda2e139': function (color) {
            Commander.changeColor(color);
        }
    },
    '_2CL0dc5bfdd8ae1fa9f': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLa313e28e36c779d9': {
        '_2CL1e22c6e0e181ac56': 'Cell nick color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff'
    },
    '_2CL6ffd216ace16bc18': {
        '_2CL1e22c6e0e181ac56': 'Cell nick shadow',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CL036449ab30a42cfa': {
        '_2CL1e22c6e0e181ac56': 'Cell nick shadow color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#000000'
    },
    '_2CL809c5f5d430daaf7': {
        '_2CL1e22c6e0e181ac56': 'Cell nick font',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'Ubuntu': 'Ubuntu',
            'Noto Sans': 'Noto Sans',
            'Oswald': 'Oswald',
            'Times New Roman': 'Times New Roman',
            'Courier New': 'Courier New'
        },
        '_2CL7d0596c36891967f': 'Ubuntu'
    },
    '_2CLc218af2d960f8976': {
        '_2CL1e22c6e0e181ac56': 'Cell nick thickness',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            400: 'Medium',
            700: 'Bold'
        },
        '_2CL7d0596c36891967f': '700'
    },
    '_2CL0262df83159efe2b': {
        '_2CL1e22c6e0e181ac56': 'Cell nick scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x3,
        '_2CLe3712e4c0c1f2dfe': 0.1,
        '_2CL7d0596c36891967f': 1.2
    },
    '_2CL0bc66b676ba4ac30': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL78439528ae7f402d': {
        '_2CL1e22c6e0e181ac56': 'Cell mass color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff'
    },
    '_2CL552e1524f47f939f': {
        '_2CL1e22c6e0e181ac56': 'Cell mass shadow',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLa68a8aa19cafb2c7': {
        '_2CL1e22c6e0e181ac56': 'Cell mass shadow color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#000000'
    },
    '_2CL0d63bbbae2f1dd0c': {
        '_2CL1e22c6e0e181ac56': 'Cell mass font',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'Ubuntu': 'Ubuntu',
            'Noto Sans': 'Noto Sans',
            'Oswald': 'Oswald',
            'Times New Roman': 'Times New Roman',
            'Courier New': 'Courier New'
        },
        '_2CL7d0596c36891967f': 'Ubuntu'
    },
    '_2CL3e0ca3daad1c7c38': {
        '_2CL1e22c6e0e181ac56': 'Cell mass thickness',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            400: 'Medium',
            700: 'Bold'
        },
        '_2CL7d0596c36891967f': '700'
    },
    '_2CL1ca5cc16837c2c2a': {
        '_2CL1e22c6e0e181ac56': 'Cell mass scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x3,
        '_2CLe3712e4c0c1f2dfe': 0.1,
        '_2CL7d0596c36891967f': 1.2
    },
    '_2CLa5b266185598c126': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLb3ac7c3b6c1b2a7d': {
        '_2CL1e22c6e0e181ac56': 'Background image URL',
        '_2CL65dfacb39960c223': 'input',
        '_2CL7d0596c36891967f': Endy.setBackground
    },
    '_2CLecab002b7ebf4d7e': {
        '_2CL1e22c6e0e181ac56': 'Background image color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff'
    },
    '_2CL7d20afa5edf60813': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLb91b871befafb409': {
        '_2CL1e22c6e0e181ac56': 'Sector grid color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#111111'
    },
    '_2CL71fd426c3b41aeea': {
        '_2CL1e22c6e0e181ac56': 'Sector grid width',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x5,
        '_2CL111f1b5b84b5c819': 0xfa,
        '_2CLe3712e4c0c1f2dfe': 0x5,
        '_2CL7d0596c36891967f': 0xa
    },
    '_2CLed3a332288178970': {
        '_2CL1e22c6e0e181ac56': 'Sector fill style',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'sector-name': 'Sector name',
            'snowflakes': 'Snowflakes'
        },
        '_2CL7d0596c36891967f': 'snowflakes'
    },
    '_2CL0eb855e82e4fbbb9': {
        '_2CL1e22c6e0e181ac56': 'Sector text color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#111111'
    },
    '_2CL190dd121204ee0e0': {
        '_2CL1e22c6e0e181ac56': 'Sector text scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.2,
        '_2CL111f1b5b84b5c819': 0.9,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0.6
    },
    '_2CLf188529622ede2b4': {
        '_2CL1e22c6e0e181ac56': 'Sector text font',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'Ubuntu': 'Ubuntu',
            'Noto Sans': 'Noto Sans',
            'Oswald': 'Oswald',
            'Times New Roman': 'Times New Roman',
            'Courier New': 'Courier New'
        },
        '_2CL7d0596c36891967f': 'Ubuntu'
    },
    '_2CLc7d236944e7faf6f': {
        '_2CL1e22c6e0e181ac56': 'Sector text thickness',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            400: 'Medium',
            700: 'Bold'
        },
        '_2CL7d0596c36891967f': '700'
    },
    '_2CLdc16af6033186efa': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLb1e2e9f32fc11173': {
        '_2CL1e22c6e0e181ac56': 'Border color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff'
    },
    '_2CLb846d894676621a3': {
        '_2CL1e22c6e0e181ac56': 'Border width',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x5,
        '_2CL111f1b5b84b5c819': 0xfa,
        '_2CLe3712e4c0c1f2dfe': 0x5,
        '_2CL7d0596c36891967f': 0x3c
    },
    '_2CLb2498f5ee07ff5b3': {
        '_2CL1e22c6e0e181ac56': 'Border glow',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLec31e0e6b26c3739': {
        '_2CL1e22c6e0e181ac56': 'Border glow color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#00bcff'
    },
    'BorderRainbow': {
        '_2CL1e22c6e0e181ac56': 'Enable rainbow border',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL850f236ecda2e139': function (isEnabled) {
            enableRainbowBorder = isEnabled;
            if (isEnabled && !completeFrame) makeRbbFrame(), nyna('HSLO', 'RenderRainbowBorder', Date.now(), 1);
        }
    },
    '_2CL63a253787a089be6': {
        '_2CL1e22c6e0e181ac56': 'Border glow distance',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x5,
        '_2CL111f1b5b84b5c819': 0xfa,
        '_2CLe3712e4c0c1f2dfe': 0x5,
        '_2CL7d0596c36891967f': 0xfa
    },
    '_2CL63dedfd6c8d34fd1': {
        '_2CL1e22c6e0e181ac56': 'Border glow strength',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1,
        '_2CL111f1b5b84b5c819': 0xa,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0x5
    },
    '_2CL8caeb1ba0f26d5de': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLd15f7a92ef5ed747': {
        '_2CL1e22c6e0e181ac56': 'Virus color 1',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#a4a4a4'
    },
    '_2CLde6cdb3439aa4ece': {
        '_2CL1e22c6e0e181ac56': 'Virus color 2',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#d9d9d9'
    },
    '_2CL71e2f181f0bdaf07': {
        '_2CL1e22c6e0e181ac56': 'Virus border width',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1,
        '_2CL111f1b5b84b5c819': 0x19,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0x8
    },
    '_2CL3e090f2a1e71b624': {
        '_2CL1e22c6e0e181ac56': 'Virus glow',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLc60751a2977e3cd2': {
        '_2CL1e22c6e0e181ac56': 'Virus glow distance',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x5,
        '_2CL111f1b5b84b5c819': 0x64,
        '_2CLe3712e4c0c1f2dfe': 0x5,
        '_2CL7d0596c36891967f': 0x64
    },
    '_2CLc0e438def894cb25': {
        '_2CL1e22c6e0e181ac56': 'Virus glow color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#00bcff'
    },
    '_2CL9e637dde815f68ad': {
        '_2CL1e22c6e0e181ac56': 'Virus glow strength',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1,
        '_2CL111f1b5b84b5c819': 0xa,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0x4
    },
    '_2CLec30d2ff92978f97': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL1db05798018ba778': {
        '_2CL1e22c6e0e181ac56': 'Food color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#611fff'
    },
    '_2CLe15deec8df50ac0c': {
        '_2CL1e22c6e0e181ac56': 'Food size',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x0,
        '_2CL111f1b5b84b5c819': 0xf,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0x4
    },
    'FoodDrawLimit': {
        '_2CL1e22c6e0e181ac56': 'Food draw limit',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function (isEnabled) {
            Endy.enableFoodDrawLimit = isEnabled;
        }
    },
    '_2CLfc3c7e30ace78744': {
        '_2CL1e22c6e0e181ac56': 'Food glow',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x1
    },
    '_2CLb18c002fd29a3fcb': {
        '_2CL1e22c6e0e181ac56': 'Food glow color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#212121'
    },
    '_2CLb5e4ccad6bc0974c': {
        '_2CL1e22c6e0e181ac56': 'Food glow distance',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x5,
        '_2CL111f1b5b84b5c819': 0x64,
        '_2CLe3712e4c0c1f2dfe': 0x5,
        '_2CL7d0596c36891967f': 0x64
    },
    '_2CLf7cf0ff97db7cf1b': {
        '_2CL1e22c6e0e181ac56': 'Food glow strength',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x1,
        '_2CL111f1b5b84b5c819': 0xa,
        '_2CLe3712e4c0c1f2dfe': 0x1,
        '_2CL7d0596c36891967f': 0x4
    },
    '_2CL091cee1bb05cbf6a': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL3530c62dbc212dfb': {
        '_2CL1e22c6e0e181ac56': 'Active multibox ring color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ff00aa'
    },
    '_2CLa069ae70980a8099': {
        '_2CL1e22c6e0e181ac56': 'Inactive multibox ring color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff'
    },
    '_2CLc8392ad7363a07a2': {
        '_2CL1e22c6e0e181ac56': 'Multibox ring width',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0x2,
        '_2CL111f1b5b84b5c819': 0x64,
        '_2CLe3712e4c0c1f2dfe': 0x2,
        '_2CL7d0596c36891967f': 0xa
    },
    '_2CLe6dba597654e29bd': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLdf3bd07a45b766b4': {
        '_2CL1e22c6e0e181ac56': 'Own shield color',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'cellColor': 'Cell color',
            'multiboxRingColor': 'Multibox colors',
            'customColor': 'Custom color'
        },
        '_2CL7d0596c36891967f': 'multiboxRingColor'
    },
    '_2CL678b38b0693c33fc': {
        '_2CL1e22c6e0e181ac56': 'Own shield custom color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#00bcff'
    },
    '_2CLceb6f4acd88ddd3f': {
        '_2CL1e22c6e0e181ac56': 'Team shield color',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'cellColor': 'Cell color',
            'customColor': 'Custom color'
        },
        '_2CL7d0596c36891967f': 'cellColor'
    },
    '_2CL55b030d36e6b38d3': {
        '_2CL1e22c6e0e181ac56': 'Team shield custom color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#00bcff'
    },
    '_2CLa16fb412058fda26': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CLacf15c779f69243f': {
        '_2CL1e22c6e0e181ac56': 'Top 20 marker color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#555555'
    },
    '_2CL593b91def706943d': {
        '_2CL1e22c6e0e181ac56': 'Self marker color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ffffff'
    },
    '_2CL91518ff4e5d4aa34': {
        '_2CL1e22c6e0e181ac56': 'Teammate marker color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#3d99ff'
    },
    '_2CL92362e8378607f3a': {
        '_2CL65dfacb39960c223': 'seperator'
    },
    '_2CL4ca9516cad8103b6': {
        '_2CL1e22c6e0e181ac56': 'Commander color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#ff00aa'
    },
    '_2CLf53c61e898798a54': {
        '_2CL1e22c6e0e181ac56': 'Background color',
        '_2CL65dfacb39960c223': 'colorpicker',
        '_2CL7d0596c36891967f': '#000000',
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['body']['style']['backgroundColor'] = aNv;
        }
    },
    '_2CL1565ed7eab42589f': {
        '_2CL1e22c6e0e181ac56': 'Cursor URL',
        '_2CL65dfacb39960c223': 'input',
        '_2CL7d0596c36891967f': 'none',
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['body']['style']['cursor'] = 'url(' ['concat'](aNv, '), auto');
        }
    }
}