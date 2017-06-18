import React, {Component} from 'react'
import { Route } from 'react-router'
import Style from './RightWindow.css'
import DiscoverMusic from '../../window/DiscoverMusic'
import PersonalFM from '../../window/PersonalFM'
import MV from '../../window/MV'
import Playlist from '../../window/Playlist'

class RightWindow extends Component{

    render(){
        return (
            <div className={Style.rightWindow}>
                <Route exact path="/" component={DiscoverMusic}/>
                <Route path="/DiscoverMusic" component={DiscoverMusic}/>
                <Route path="/PersonalFM" component={PersonalFM}/>
                <Route path="/MV" component={MV}/>
                <Route path="/playlist" component={Playlist}/>
            </div>
        )
    }
}

export default RightWindow
