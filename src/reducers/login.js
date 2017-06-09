import {
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/login'

const posts = (state = { }, action) => {
    switch (action.type) {
    case REQUEST_POSTS:
        return state
    case RECEIVE_POSTS:
        return {
            ...state,
            ...action.posts
        }
    default:
        return state
    }
}
//state.user.profile.nickname,
const _user = {
    profile:{
        nickname: '未登录',
    }
}

const user = (state = _user, action) => {
    switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
        return {
            ...state,
            ...posts(state, action)
        }
    default:
        return state
    }
}

export default user
