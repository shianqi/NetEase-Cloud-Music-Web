export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const PHONENUMBER_CHANGED = 'PHONENUMBER_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'
export const CLOSE_LOGIN = 'CLOSE_LOGIN'
export const OPEN_LOGIN = 'OPEN_LOGIN'

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

export const fetchPosts = (username, password) => dispatch => {
    dispatch(requestPosts())
    return fetch(`http://localhost:3000/login/cellphone?phone=${username}&password=${password} `)
        .then(response => response.json())
        .then(json => {
            dispatch(receivePosts(json))
        })
}

