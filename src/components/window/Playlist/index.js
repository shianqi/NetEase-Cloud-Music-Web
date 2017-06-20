import React, { Component } from 'react'
import { Route } from 'react-router'

import PlaylistItems from './PlaylistItems'

class Playlist extends Component{
    render(){
        const { match } = this.props

        return (
            <div>
                <Route exact path={`${match.url}/:thisID`} component={PlaylistItems}/>
            </div>
        )
    }
}

export default Playlist
