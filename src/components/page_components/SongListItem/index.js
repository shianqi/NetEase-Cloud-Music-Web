import React, { Component } from 'react'
import Style from './SunListItem.css'
import cs from 'classnames'
import {
    iconfont,
    icon_bofang
} from '../../../../style/iconfont.css'

class SunListItem extends Component{
    render() {
        return (
            <div className={Style['main']}>
                <div className={Style['item-img']}>
                    <div className={Style['item-hover']}>
                        192W 哈瑟夫啊阿尔法阿瑟哦IF家阿瑟减肥怕ois耳机fpa
                    </div>
                    <div
                        className={
                            cs(
                                iconfont,
                                icon_bofang,
                                Style['item-play-button']
                            )
                        }
                    >

                    </div>
                    <div className={Style['item-plays']}>
                        193k
                    </div>
                </div>
                <div className={Style['item-title']}>
                    this is a title
                </div>
            </div>
        )
    }
}

export default SunListItem