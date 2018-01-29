import {
  RECEIVE_LIST_DETAIL,
  REQUEST_LIST_DETAIL,
} from '../actions/songList'

const songList = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LIST_DETAIL:
      return {
        ...state,
        [action.id]: {
          ...action.data,
          isFetching: false,
        },
      }
    case REQUEST_LIST_DETAIL:
      return {
        ...state,
        [action.id]: {
          isFetching: true,
        },
        id: action.id,
      }
    default:
      return state
  }
}

export default songList
