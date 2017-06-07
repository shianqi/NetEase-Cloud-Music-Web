import React, { Component } from 'react'
import Style from './SunListItem.css'

class SunListItem extends Component{
    render() {
        return (
            <div className={Style['main']}>
                <div className={Style['item-img']}/>
                <div className={Style['item-title']}>
                    this is a title
                </div>
            </div>
        )
    }
}

export default SunListItem