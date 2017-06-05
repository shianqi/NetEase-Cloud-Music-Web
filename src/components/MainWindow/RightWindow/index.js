import React, {Component} from 'react'
import { Route } from 'react-router'
import Style from './RightWindow.css'
import FindMusic from '../../window/FindMusic'
import PersonalFM from '../../window/PersonalFM'
import MV from '../../window/MV'

class RightWindow extends Component{
    render(){
        return (
            <div className={Style.rightWindow}>
                <Route exact path="/" component={FindMusic}/>
                <Route path="/PersonalFM" component={PersonalFM}/>
                <Route path="/MV" component={MV}/>
            </div>
        )
    }
}

export default RightWindow