import Endy from "./Endy";

export default {
    '_2CL44cd027169234270': {
        '_2CL1e22c6e0e181ac56': 'Show HUDs',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('huds');
            aNw['style']['display'] = aNv ? 'block' : 'none';
        }
    },
    '_2CL63cd5d8147aff3e2': {
        '_2CL1e22c6e0e181ac56': 'Show leaderboard',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('leaderboard');
            aNw['style']['display'] = aNv ? 'flex' : 'none';

            let counter = document.getElementById("player-count-hud");
            counter.style.top = aNv ? "240px" : "10px";
        }
    },
    '_2CLd0e50c26336e212f': {
        '_2CL1e22c6e0e181ac56': 'Leaderboard scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document.getElementById('leaderboard').style.transform = 'scale(' ['concat'](aNv, ')');

            let isShown = document.getElementById('leaderboard').style.display != "none";
            if (isShown) document.getElementById("player-count-hud").style.top = '' ['concat'](40 + (200 * aNv) | 0x0, 'px');
        }
    },
    'ShowPlayerCounterToggle': {
        '_2CL1e22c6e0e181ac56': 'Show player counter',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': false,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            if (window.target) {
                var aNw = document.getElementById('player-count-hud');
                aNw['style']['display'] = aNv ? 'flex' : 'none';
            }
        }
    },
    '_2CL836644ddfa62ab91': {
        '_2CL1e22c6e0e181ac56': 'Show teamlist',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('teamlist-hud');
            aNw['style']['display'] = aNv ? 'flex' : 'none';
        }
    },
    '_2CLd38e71e67a4a4949': {
        '_2CL1e22c6e0e181ac56': 'Teamlist scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['getElementById']('teamlist-hud')['style']['transform'] = 'scale(' ['concat'](aNv, ')');
        }
    },
    '_2CLc07a66d08504b3f2': {
        '_2CL1e22c6e0e181ac56': 'Show minimap',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('minimap'),
                aNx = document['getElementById']('time-hud');
            aNv ? (aNw['style']['display'] = 'flex', aNx['style']['bottom'] = '' ['concat'](Endy.minimapClass['_2CL12298acfaf2e57e9'] + 0x14, 'px')) : (aNw['style']['display'] = 'none', aNx['style']['bottom'] = '10px');
        }
    },
    '_2CLafc646b5fc1d0589': {
        '_2CL1e22c6e0e181ac56': 'Minimap scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 1.2,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('minimap'),
                aNx = 'none' === aNw['style']['display'];
            aNw['style']['transform'] = 'scale(' ['concat'](aNv, ')'), 
            Endy.minimapClass['_2CLbb3162f3d7cffd48'](0xb4 * aNv | 0x0), 
            document['getElementById']('time-hud')['style']['bottom'] = '' ['concat'](0x14 + (aNx ? -0xa : 0xb4 * aNv) | 0x0, 'px');
        }
    },
    '_2CL37d09b74427e481c': {
        '_2CL1e22c6e0e181ac56': 'Show stats',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('stats');
            aNw['style']['display'] = aNv ? 'flex' : 'none';
        }
    },
    '_2CLc32989207bd0a5b3': {
        '_2CL1e22c6e0e181ac56': 'Stats scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['getElementById']('stats')['style']['transform'] = 'scale(' ['concat'](aNv, ')');
            var aNw = document['getElementById']('notifications'),
                aNx = document['getElementById']('chatroom');
            aNw['style']['bottom'] = '' ['concat'](0x1e * aNv + 0x14 | 0x0, 'px'), aNx['style']['bottom'] = '' ['concat'](0x1e * aNv + 0x14 | 0x0, 'px');
        }
    },
    '_2CL43fc867c4ab8ec12': {
        '_2CL1e22c6e0e181ac56': 'Show time',
        '_2CL65dfacb39960c223': 'toggle',
        '_2CL7d0596c36891967f': !0x0,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('time-hud');
            aNw['style']['display'] = aNv ? 'flex' : 'none';
        }
    },
    '_2CLe6c3dde0d043d59c': {
        '_2CL1e22c6e0e181ac56': 'Time scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['getElementById']('time-hud')['style']['transform'] = 'scale(' ['concat'](aNv, ')');
        }
    },
    '_2CL25fc81b383ec3bd4': {
        '_2CL1e22c6e0e181ac56': 'Notifications display',
        '_2CL65dfacb39960c223': 'drop-down',
        '_2CL362661de726a1fb0': {
            'off': 'Off',
            'popup': 'Pop up',
            'chatroom': 'Chatroom'
        },
        '_2CL7d0596c36891967f': 'popup',
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            var aNw = document['getElementById']('notifications'),
                aNx = document['getElementById']('chatroom');
            switch (aNv) {
            case 'popup':
                aNw['style']['display'] = 'flex', aNx['style']['display'] = 'none';
                break;
            case 'chatroom':
                aNw['style']['display'] = 'none', aNx['style']['display'] = 'flex';
                break;
            case 'off':
                aNw['style']['display'] = 'none', aNx['style']['display'] = 'none';
            }
        }
    },
    '_2CL9d921c2c5318b34d': {
        '_2CL1e22c6e0e181ac56': 'Popup notifications scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['getElementById']('notifications')['style']['transform'] = 'scale(' ['concat'](aNv, ')');
        }
    },
    '_2CL61a4d0ec57f8aa3d': {
        '_2CL1e22c6e0e181ac56': 'Chatroom scale',
        '_2CL65dfacb39960c223': 'range',
        '_2CLfc460a790c5a0edf': 0.5,
        '_2CL111f1b5b84b5c819': 0x2,
        '_2CLe3712e4c0c1f2dfe': 0.05,
        '_2CL7d0596c36891967f': 0x1,
        '_2CL850f236ecda2e139': function _2CL850f236ecda2e139(aNv) {
            document['getElementById']('chatroom')['style']['transform'] = 'scale(' ['concat'](aNv, ')');
        }
    }
}