import React, { Component } from 'react'
import Style from './index.css'
import cs from 'classnames'
import {
  iconfont,
  icon_bofang
} from 'STYLES/iconfont.css'

class SunListItem extends Component {
  render() {
    const {
      name,
      playCount,
      copywriter,
      canDislike,
      picUrl,
      HandlerPlayButtonClick,
      HandlerImgClick
    } = this.props

    return (
      <div className={Style['main']}>
        <div className={Style['item-img']}>
          <img className={ Style['item-img-photo'] } src={ picUrl } onClick={ HandlerPlayButtonClick }></img>
          <div className={Style['item-hover']}>
            { copywriter }
          </div>
          <div
            className={
              cs(
                iconfont,
                icon_bofang,
                Style['item-play-button'],
                {[Style['item-display-none']]: !canDislike}
              )
            }
            onClick={HandlerImgClick}
          >

          </div>
          <div className={Style['item-plays']}>
            { playCount }
          </div>
        </div>
        <div className={Style['item-title']}>
          { name }
        </div>
      </div>
    )
  }
}

export default SunListItem
