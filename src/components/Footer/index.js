import React, { Component } from 'react';
import Style from './Footer.css'
import cs from 'classnames'
import {
    iconfont,
    icon_shangyiqu,
    icon_xiayiqu,
    icon_bofang,
    icon_bofangliebiao,
    icon_geci,
    icon_iconfontttpodicon1eps
} from '../../../style/iconfont.css'

class Footer extends Component{
    render(){
        return(
            <div className={Style.footer}>
                <div>
                    <div
                        className={ cs(iconfont, icon_shangyiqu, Style['button_back']) }
                        title="上一首"
                    />
                    <div
                        className={ cs(iconfont, icon_bofang, Style['button_play']) }
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

export default Footer