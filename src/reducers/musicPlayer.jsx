import {
    MUSICPLAYER_PLAY
} from '../actions/musicPlayer.jsx'

const _state = {
    playing: false,
    src: 'http://m10.music.126.net/20170928213730/a921719863a66fec83329a5b7f7b4b55/ymusic/f1ae/0bd1/31a9/5d64960d0cbebc0d089bc85a6ef54680.mp3'
}

const musicPlayer = (state = _state, action)=> {
    switch (action.type) {
        case MUSICPLAYER_PLAY:
            return {
                ...state,
                playing: true
            }
        default:
            return state
    }
}

export default musicPlayer
