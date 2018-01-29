import React, { Component } from 'react'
import Style from './index.css'
import MiniBox from './MiniBox'
import LikeList from './LikeList/index'

class LeftMenu extends Component {
  render () {
    return (
      <div className={Style.leftMenu}>
        <LikeList/>
        <MiniBox/>
      </div>
    )
  }
}

export default LeftMenu
