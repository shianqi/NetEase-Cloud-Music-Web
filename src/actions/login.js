import { listFetchPosts } from './index'
import { loginURL, refreshURL, playlistURL } from './host'

export const LOGIN_RECEIVE_POSTS = 'LOGIN_RECEIVE_POSTS'
export const USERINFO_RECEIVE_POSTS = 'USERINFO_RECEIVE_POSTS'

export const PHONENUMBER_CHANGED = 'PHONENUMBER_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'

export const CLOSE_LOGIN_INTERFACE = 'CLOSE_LOGIN_INTERFACE'
export const OPEN_LOGIN_INTERFACE = 'OPEN_LOGIN_INTERFACE'

export const NETWORK_ERROR = 'NETWORK_ERROR'

export const closeLoginInterface = () => ({
    type: CLOSE_LOGIN_INTERFACE
})

export const openLoginInterface = () => ({
    type: OPEN_LOGIN_INTERFACE
})

export const phoneNumberChanged = (phoneNumber) =>({
    type: PHONENUMBER_CHANGED,
    phoneNumber
})

export const passwordChanged = (password) => ({
    type: PASSWORD_CHANGED,
    password
})

export const loginReceivePosts = (json) => ({
    type: LOGIN_RECEIVE_POSTS,
    data: json
})

export const userInfoReceivePost = (json) => ({
    type: USERINFO_RECEIVE_POSTS,
    data: json
})

export const networkError = (error) => ({
    type: NETWORK_ERROR,
    error
})

export const fetchUserInfoPosts = (uid) => dispatch => {
    return fetch(`${playlistURL}?uid=${uid}`, {
        credentials: 'include',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
        if(json && json.code.toString() === "200" && json.playlist){
            dispatch(userInfoReceivePost(json.playlist[0].creator))
            dispatch(listFetchPosts(uid))
        }
    })
}

const setUserIdByCookie = (uid)=>{
    const all = document.cookie
    if(all===''){
        document.cookie = `_uid=${uid}`
    }else{
        document.cookie = `${all};_uid=${uid}`
    }
}

const getUserIdByCookie = ()=>{
    const all = document.cookie
    const list = all.split(';')
    for(let i=0;i<list.length;i++){
        let cookie = list[i]
        let p = cookie.indexOf('=')
        let name = cookie.substring(0, p)
        if(name === "_uid") return decodeURIComponent(cookie.substring(p+1))
    }
    return
}

export const fetchRefreshPosts = () => dispatch => {
    return fetch(`${refreshURL}`, {
        credentials: 'include',
        mode: 'cors',
        withCredentials: true
    })
    .then(response => response.json())
    .then(json => {
        const uid = getUserIdByCookie()
        if(json && json.code.toString() === "200" && uid!=null){
            dispatch(fetchUserInfoPosts(uid))
        }
    })
    .catch((error)=>{
        dispatch(networkError(error))
    })
}

export const fetchLoginPosts = (username, password) => dispatch => {
    return fetch(`${loginURL}?phone=${username}&password=${password}`, {
        credentials: 'include',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
        if(json && json.code && json.code.toString() === "200"){
            const uid = json.account.id
            setUserIdByCookie(uid)
            dispatch(listFetchPosts(uid))
            dispatch(loginReceivePosts(json))
            dispatch(closeLoginInterface())
        }else{
            dispatch(loginReceivePosts(json))
        }
    })
    .catch((error)=>{
        dispatch(networkError(error))
    })
}
