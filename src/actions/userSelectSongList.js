import { playlistDetailURL } from './host'

export const LIST_DETAIL_RECEIVE_POSTS = 'LIST_DETAIL_RECEIVE_POSTS'

const receiveSonglistDetailPosts = (json) => ({
    type: LIST_DETAIL_RECEIVE_POSTS,
    data: json
})

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
