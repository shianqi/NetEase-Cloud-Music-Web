import React, { Component } from 'react'
import SunListItem from '../SongListItem'
import Style from './SunList.css'

class SunList extends Component{
    render() {
        return (
            <div className={Style['main']}>
                <SunListItem />
                <SunListItem />
                <SunListItem />
                <SunListItem />
                <SunListItem />
                <SunListItem />
                <SunListItem />
            </div>
        )
    }
}

export default SunList