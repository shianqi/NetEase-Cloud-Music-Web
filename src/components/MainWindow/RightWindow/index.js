import React, {Component} from 'react'
import { Route } from 'react-router'
import Style from './RightWindow.css'
import DiscoverMusic from '../../window/DiscoverMusic'
import PersonalFM from '../../window/PersonalFM'
import MV from '../../window/MV'
import Playlist from '../../window/Playlist'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'

class RightWindow extends Component{

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(push('/DiscoverMusic/GXTJ'))
    }

    render(){
        return (
            <div className={Style.rightWindow}>
                <Route path="/DiscoverMusic" component={DiscoverMusic}/>
                <Route path="/PersonalFM" component={PersonalFM}/>
                <Route path="/MV" component={MV}/>
                <Route path="/playlist" component={Playlist}/>
            </div>
        )
    }
}

export default withRouter(connect()(RightWindow))
