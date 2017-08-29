import React, { Component } from 'react'
import Style from './index.css'

class MiniBox extends Component {
    render() {
        return (
            <div className={Style.miniBox}>
                <img src="" alt=""/>
                <div className={Style['img_cover']}/>
            </div>
        )
    }
}

export default MiniBox
