import { getMusicUrl } from './host'

export const MUSICPLAYER_PLAY = 'MUSICPLAYER_PLAY'
export const MUSICPLAYER_STOP = 'MUSICPLAYER_STOP'
export const MUSICPLAYER_PAUSE = 'MUSICPLAYER_PAUSE'
export const MUSICPLAYER_CHANGE = 'MUSICPLAYER_CHANGE'

export const musicPlayer_play = ()=>({
  type: MUSICPLAYER_PLAY
})

export const musicPlayer_pause = ()=>({
  type: MUSICPLAYER_PAUSE
})

export const musicPlayer_changeInfo = (data)=>({
  type: MUSICPLAYER_CHANGE,
  data
})

export const musicPlayer_change = (data)=>(dispatch)=> {
  const {
    id,
    name,
    singer,
    picUrl
  } = data

  return (
    fetch(`${getMusicUrl}?id=${id}`, {
      credentials: 'include',
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(musicPlayer_changeInfo({
          url: json.data[0],
          name,
          singer,
          picUrl
        }))
      })
  )
}
