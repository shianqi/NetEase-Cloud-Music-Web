import React, { Component } from 'react'
import Style from './MainWindow.css'
import LeftMenu from './LeftMenu'
import RightWindow from './RightWindow'

class MainWindow extends Component {
    render () {
        return (
            <div className={Style["main-box"]}>
                <LeftMenu/>
                <RightWindow/>
            </div>
        )
    }
}

export default MainWindow