import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Style from './index.css'

class MiniBox extends PureComponent {
  render() {
    const { musicPlayer } = this.props
    const { picUrl, name } = musicPlayer
    return (
      <div className={Style.miniBox}>
        <img className={Style['miniBox-img']} src={picUrl} alt=""/>
        <div className={Style['img_cover']} />
        <div className={Style['mini-box-infomation']}>
          <h5 className={Style['mini-box-infomation-title']}>{name}</h5>
        </div>
      </div>
    )
  }
}

const selector = (state) => ({
  musicPlayer: state.musicPlayer
})

export default connect(selector)(MiniBox)
