import React, { Component } from 'react'
import Style from './index.css'
import cs from 'classnames'
import { connect } from 'react-redux'
import {
    musicPlayer_play,
    musicPlayer_pause
} from '../../actions/musicPlayer.jsx'

import {
    iconfont,
    icon_shangyiqu,
    icon_xiayiqu,
    icon_bofang,
    icon_bofangliebiao,
    icon_geci,
    icon_iconfontttpodicon1eps
} from 'iconfont.css'

const selector = (state)=>({
    playing: state.musicPlayer.playing
})

class Footer extends Component {
    render() {
        const { dispatch } = this.props
        const handlerPlay = ()=>{
            dispatch(musicPlayer_play())
        }

        return(
            <div className={Style.footer}>
                <div>
                    <div
                        className={ cs(iconfont, icon_shangyiqu, Style['button_back']) }
                        title="上一首"
                    />
                    <div
                        className={ cs(iconfont, icon_bofang, Style['button_play']) }
                        onClick = { handlerPlay }
                        title="播放"
                    />
                    <div
                        className={ cs(iconfont, icon_xiayiqu, Style['button_front']) }
                        title="下一首"
                    />
                </div>
                <div>
                    <div
                        className={
                            cs(iconfont, icon_bofangliebiao, Style['button_play_list'])
                        }
                        title="打开播放列表"> 20</div>
                    <div
                        className={cs(iconfont, icon_geci, Style['button_lyric'])}
                        title="打开歌词"
                    />
                    <div
                        className={ cs(iconfont, icon_iconfontttpodicon1eps, Style['button_play_model']) }
                        title="顺序播放"
                    />
                </div>
            </div>
        )
    }
}

export default connect(selector)(Footer)
