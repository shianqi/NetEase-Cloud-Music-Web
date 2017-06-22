import { LIST_DETAIL_RECEIVE_POSTS } from '../actions/userSelectSongList.js'

const _userSelectSongList = {
    playlist: {
        creator: {
            nickname: "Loading..."
        }
    }
}

const userSelectSongList = (state = _userSelectSongList, action) => {
    switch (action.type) {
        case LIST_DETAIL_RECEIVE_POSTS:
            return {
                ...action.data,
                playlistId: action.playlistId
            }
        default:
            return state
    }
}

export default userSelectSongList
