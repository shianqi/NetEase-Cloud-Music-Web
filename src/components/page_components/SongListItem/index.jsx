import React, { Component } from 'react'
import Style from './SunListItem.css'
import cs from 'classnames'
import {
    iconfont,
    icon_bofang
} from 'iconfont.css'

class SunListItem extends Component {
    render() {
        const {
            title,
            plays,
            recommendReason,
            playButton,
            HandlerClick
        } = this.props

        return (
            <div className={Style['main']}>
                <div className={Style['item-img']}>
                    <div className={Style['item-hover']}>
                        { recommendReason }
                    </div>
                    <div
                        className={
                            cs(
                                iconfont,
                                icon_bofang,
                                Style['item-play-button'],
                                {[Style['item-display-none']]: !playButton}
                            )
                        }
                        onClick={HandlerClick}
                    >

                    </div>
                    <div className={Style['item-plays']}>
                        { plays }
                    </div>
                </div>
                <div className={Style['item-title']}>
                    { title }
                </div>
            </div>
        )
    }
}

export default SunListItem
