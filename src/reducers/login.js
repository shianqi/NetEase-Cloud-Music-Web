import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    PHONENUMBER_CHANGED,
    PASSWORD_CHANGED,
    OPEN_LOGIN,
    CLOSE_LOGIN
} from '../actions/login'

const posts = (state = { }, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return state
        case RECEIVE_POSTS:
            return {
                ...state,
                userInfo: {
                    ...action.posts
                }
            }
        default:
            return state
    }
}
//state.user.profile.nickname,
const _user = {
    userInput: {
        login_window: false,
        phoneNumber: '',
        password: '',
        automaticLogin: true
    },
    userInfo: {
        profile:{
            nickname: '未登录',
        }
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
        case PHONENUMBER_CHANGED:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    phoneNumber: action.phoneNumber.slice(0,11)
                }
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    password: action.password
                }
            }
        case OPEN_LOGIN:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    phoneNumber: '',
                    password: '',
                    login_window: true
                }
            }
        case CLOSE_LOGIN:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    phoneNumber: '',
                    password: '',
                    login_window: false
                }
            }
        default:
            return state
    }
}

export default user
