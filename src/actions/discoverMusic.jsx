import { dailyRecommendedPlaylist } from './host'
export const RECEIVE_DAILY_RECOMMENDED_PLAYLIST = 'RECEIVE_DAILY_RECOMMENDED_PLAYLIST'
export const REQUIRE_DAILY_RECOMMENDED_PLAYLIST = 'REQUIRE_DAILY_RECOMMENDED_PLAYLIST'

const requireDailyRecommendedPlaylist = (id) => ({
  type: REQUIRE_DAILY_RECOMMENDED_PLAYLIST,
  id,
})

const receiveDailyRecommendedPlaylist = (id, json) => ({
  type: RECEIVE_DAILY_RECOMMENDED_PLAYLIST,
  id,
  date: json,
})

const fetchDailyRecommendedPlaylist = () => (dispatch) => {
  return fetch(`${dailyRecommendedPlaylist}`, {
    credentials: 'include',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((json) => {
      if (json && json.code.toString() === '200') {
        dispatch(receiveDailyRecommendedPlaylist(json))
      }
    })
}

const shouldFetchDailyRecommendedPlaylist = (state) => {

}

export const fetchDailyRecommendedPlaylistIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchDailyRecommendedPlaylist(getState())) {
    return dispatch(fetchDailyRecommendedPlaylist())
  }
}
