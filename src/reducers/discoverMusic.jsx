import {
    RECEIVE_DAILY_RECOMMENDED_PLAYLIST
} from '../actions/songList'

const _discoverMusic = {
    personalityRecommendation: {
        dailyRecommendedPlaylist: {
            result: [
                {
                    id: 913731852,
                    type: 0,
                    name: '「想在秋天和你一起做的事情」',
                    copywriter: '编辑推荐：在这个秋天，做爱做的事儿',
                    picUrl: 'http://p1.music.126.net/Cl0MX1yd72mKqq31pkH52A==/109951163023336424.jpg',
                    canDislike: false,
                    playCount: 778271.2,
                    trackCount: 41,
                    highQuality: false,
                    alg: 'featured'
                },
                {
                    id: 916296534,
                    type: 0,
                    name: '引擎里的速度人生',
                    copywriter: '编辑推荐：老司机开车必备歌单：来不及了快上车',
                    picUrl: 'http://p1.music.126.net/n6xJUTMT-sUAKY53ba_V4A==/18923694625993927.jpg',
                    canDislike: false,
                    playCount: 410741.8,
                    trackCount: 38,
                    highQuality: false,
                    alg: 'featured'
                },
                {
                    id: 837456,
                    type: 0,
                    name: '听一句就会喜欢上的英文歌',
                    copywriter: '根据你收藏的歌单《YouTuBe上最受欢迎的音乐 Top100》推荐',
                    picUrl: 'http://p1.music.126.net/4VASY7gX3rXv4ZNycMtaag==/3114916441497858.jpg',
                    canDislike: true,
                    playCount: 18944904,
                    trackCount: 123,
                    highQuality: false,
                    alg: 'itembased2_newVersion'
                },
                {
                    id: 144705454,
                    type: 0,
                    name: 'NBA最成功的背景音乐',
                    copywriter: '根据你喜欢的单曲《Uptown Funk》推荐',
                    picUrl: 'http://p1.music.126.net/Y8YYH6tatto2eLjB2djnGw==/2536573329106346.jpg',
                    canDislike: true,
                    playCount: 2460022.2,
                    trackCount: 77,
                    highQuality: false,
                    alg: 'itembased_newVersion'
                },
                {
                    id: 90662917,
                    type: 0,
                    name: '洗脑小语种(知乎高票答案)',
                    copywriter: '根据你喜欢的单曲《Despacito》推荐',
                    picUrl: 'http://p1.music.126.net/4PMIoAh7ZTsAetwtsPFCgw==/7979155884133578.jpg',
                    canDislike: true,
                    playCount: 1653759,
                    trackCount: 44,
                    highQuality: false,
                    alg: 'itembased_newVersion'
                },
                {
                    id: 473751218,
                    type: 0,
                    name: '【Electro House】舒适入耳，妖娆极致女声',
                    copywriter: '根据你喜欢的单曲《The Darkness (ft. Srvcina)》推荐',
                    picUrl: 'http://p1.music.126.net/FjAGI_vk37cno1hZvEz0ow==/18724683022666670.jpg',
                    canDislike: true,
                    playCount: 3793812.8,
                    trackCount: 79,
                    highQuality: false,
                    alg: 'itembased_newVersion'
                }
            ]
        }
    }
}

const userSelectSongList = (state = _discoverMusic, action) => {
    switch (action.type) {
        case RECEIVE_DAILY_RECOMMENDED_PLAYLIST:
            return {
                personalityRecommendation: {
                    dailyRecommendedPlaylist: {
                        ...action.data
                    }
                }
            }
        default:
            return state
    }
}

export default userSelectSongList
