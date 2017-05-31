import React, { Component } from 'react'
import Style from './MiniBox'

class MiniBox extends Component{
    render() {
        return (
            <div className={Style.miniBox}>
                <img src="" alt=""/>
                <div className={Style.img_cover}/>
            </div>
        )
    }
}

export default MiniBox