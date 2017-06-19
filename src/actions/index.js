import { playlistURL, playlistDetailURL } from './host'

export const SELECT_ITEM = 'SELECT_ITEM'
export const LIST_REQUEST_POSTS = 'LIST_REQUEST_POSTS'
export const LIST_RECEIVE_POSTS = 'LIST_RECEIVE_POSTS'
export const LIST_DETAIL_RECEIVE_POSTS = 'LIST_DETAIL_RECEIVE_POSTS'

export const selectItem = (listIndex, itemIndex) => ({
    type: SELECT_ITEM,
    listIndex,
    itemIndex
})

export const requestPosts = () => ({
    type: LIST_REQUEST_POSTS
})

export const receivePosts = (json) => ({
    type: LIST_RECEIVE_POSTS,
    posts: json
})

export const receiveSonglistDetailPosts = (json) => ({
    type: LIST_DETAIL_RECEIVE_POSTS,
    posts: json
})

export const listFetchPosts = (userId) => dispatch => {
    dispatch(requestPosts())
    return fetch(`${playlistURL}?uid=${userId}`, {
        credentials: 'include',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
        dispatch(receivePosts(json))
    })
}

export const listDetailFetchPosts = (playlistId) => dispatch => {
    return fetch(`${playlistDetailURL}?id=${playlistId}`, {
        credentials: 'include',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
        dispatch(receiveSonglistDetailPosts(json))
    })
}
