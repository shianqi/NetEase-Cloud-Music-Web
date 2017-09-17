import { playlistDetailURL } from './host'

export const RECEIVE_LIST_DETAIL = 'RECEIVE_LIST_DETAIL'
export const REQUEST_LIST_DETAIL = 'REQUEST_LIST_DETAIL'

const receiveSonglistDetail = (json, id) => ({
    type: RECEIVE_LIST_DETAIL,
    data: json,
    id
})

const requestSonglistDetail = (id) => ({
    type: REQUEST_LIST_DETAIL,
    id
})

const fetchListDetail = (id) => (dispatch) => {
    dispatch(requestSonglistDetail(id))
    return fetch(`${playlistDetailURL}?id=${id}`, {
        credentials: 'include',
        mode: 'cors'
    })
        .then((response) => response.json())
        .then((json) => {
            dispatch(receiveSonglistDetail(json, id))
        })
}

const shouldFetchListDetail = (state, id) => {
    const listDetail = state[id]
    if(!listDetail) {
        return true
    }
    if(listDetail.isFetching) {
        return false
    }
    return true
}

export const fetchListDetailIfNeeded = (id) => (dispatch, getState) => {
    if (shouldFetchListDetail(getState(), id)) {
        return dispatch(fetchListDetail(id))
    }
}
