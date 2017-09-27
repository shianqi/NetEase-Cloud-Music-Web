// const baseURL = 'https://www.shianqi.com'
const baseURL = 'http://localhost:3000'

//登录
export const loginURL = `${baseURL}/login/cellphone`
//刷新登录状态登录
export const refreshURL = `${baseURL}/login/refresh`
export const playlistURL = `${baseURL}/user/playlist`
export const playlistDetailURL = `${baseURL}/playlist/detail`
//每日推荐歌单
export const dailyRecommendedPlaylist = `${baseURL}/personalized`
