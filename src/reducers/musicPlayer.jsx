import {
  MUSICPLAYER_PLAY,
  MUSICPLAYER_PAUSE,
  MUSICPLAYER_CHANGE,
} from '../actions/musicPlayer.jsx'

const _state = {
  playing: false,
  picUrl: '',
  name: '',
  src: '',
}

const musicPlayer = (state = _state, action) => {
  switch (action.type) {
    case MUSICPLAYER_PLAY:
      return {
        ...state,
        playing: true,
      }
    case MUSICPLAYER_PAUSE:
      return {
        ...state,
        playing: false,
      }
    case MUSICPLAYER_CHANGE:
      return {
        ...state,
        playing: true,
        src: action.data.url,
        name: action.data.name,
        singer: action.data.singer,
        picUrl: action.data.picUrl,
      }
    default:
      return state
  }
}

export default musicPlayer
