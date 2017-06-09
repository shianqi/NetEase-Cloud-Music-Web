export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const selectReddit = reddit => ({
    type: SELECT_REDDIT,
    reddit
})

export const invalidateReddit = reddit => ({
    type: INVALIDATE_REDDIT,
    reddit
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
            console.log(JSON.stringify(json))
            dispatch(receivePosts(json))
        })
}

