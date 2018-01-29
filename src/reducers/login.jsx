import {
  LOGIN_RECEIVE_POSTS,
  USERINFO_RECEIVE_POSTS,
  PHONENUMBER_CHANGED,
  PASSWORD_CHANGED,
  OPEN_LOGIN_INTERFACE,
  CLOSE_LOGIN_INTERFACE,
} from '../actions/login'

const posts = (state = { }, action) => {
  switch (action.type) {
    case LOGIN_RECEIVE_POSTS:
      if (action.data.code.toString() === '200') {
        return {
          ...state,
          userInfo: {
            ...action.data,
          },
        }
      } else {
        return {
          ...state,
          userInput: {
            ...state.userInput,
            err_message: action.data.msg,
          },
        }
      }
    default:
      return state
  }
}
// state.user.profile.nickname,
const _user = {
  userInput: {
    login_window: false,
    phoneNumber: '',
    password: '',
    automaticLogin: true,
    err_message: '',
  },
  userInfo: {
    profile: {
      nickname: '未登录',
    },
  },
}

const user = (state = _user, action) => {
  switch (action.type) {
    case LOGIN_RECEIVE_POSTS:
      return {
        ...state,
        ...posts(state, action),
      }
    case USERINFO_RECEIVE_POSTS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          profile: {
            ...state.userInfo.profile,
            nickname: action.data.nickname,
            avatarUrl: action.data.avatarUrl,
          },
        },
      }
    case PHONENUMBER_CHANGED:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          phoneNumber: action.phoneNumber.slice(0, 11),
        },
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          password: action.password,
        },
      }
    case OPEN_LOGIN_INTERFACE:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          phoneNumber: '',
          password: '',
          err_message: '',
          login_window: true,
        },
      }
    case CLOSE_LOGIN_INTERFACE:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          phoneNumber: '',
          password: '',
          err_message: '',
          login_window: false,
        },
      }
    default:
      return state
  }
}

export default user
