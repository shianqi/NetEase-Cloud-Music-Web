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
            if(action.posts.code === '200'){
                return {
                    ...state,
                    userInfo: {
                        ...action.posts
                    }
                }
            }else{
                return {
                    ...state,
                    userInput: {
                        ...state.userInput,
                        err_message : action.posts.msg
                    }
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
        automaticLogin: true,
        err_message: ''
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
                    err_message: '',
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
                    err_message: '',
                    login_window: false
                }
            }
        default:
            return state
    }
}

export default user
