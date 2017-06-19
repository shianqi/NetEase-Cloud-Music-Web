import { listFetchPosts } from './index'
import { loginURL } from './host'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const PHONENUMBER_CHANGED = 'PHONENUMBER_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'
export const CLOSE_LOGIN = 'CLOSE_LOGIN'
export const OPEN_LOGIN = 'OPEN_LOGIN'
export const NETWORK_ERROR = 'NETWORK_ERROR'

export const closeLogin = () => ({
    type: CLOSE_LOGIN
})

export const openLogin = () => ({
    type: OPEN_LOGIN
})

export const phoneNumberChanged = (phoneNumber) =>({
    type: PHONENUMBER_CHANGED,
    phoneNumber
})

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    password
})

export const requestPosts = () => ({
    type: REQUEST_POSTS
})

export const receivePosts = (json) => ({
    type: RECEIVE_POSTS,
    posts: json
})

export const networkError = (error) => ({
    type: NETWORK_ERROR,
    error
})

export const fetchPosts = (username, password) => dispatch => {
    dispatch(requestPosts())
    return fetch(`${loginURL}?phone=${username}&password=${password}`, {
        credentials: 'include',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
        if(json && json.code && json.code.toString() === "200"){
            dispatch(listFetchPosts(json))
            dispatch(receivePosts(json))
            dispatch(closeLogin())
        }else{
            dispatch(receivePosts(json))
        }
    })
    .catch((error)=>{
        dispatch(networkError(error))
    })
}
