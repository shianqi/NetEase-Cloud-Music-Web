import React, { Component } from 'react';
import Style from './LeftMenu.css'
import MiniBox from './MiniBox'

class LeftMenu extends Component{
    render(){
        return (
            <div className={Style.leftMenu}>
                <MiniBox/>
            </div>
        )
    }
}

export default LeftMenu