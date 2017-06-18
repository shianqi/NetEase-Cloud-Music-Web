import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const selector = (state) => {
    return {
        list: state.list[0].items[0].items
    }
}

let Playlist = ({dispatch, list, match})=>{
    const PlaylistItem = ({match}) => {
        return (
            <div>{ match.params.thisID }</div>
        )
    }

    return (
        <div>
            <Route exact path={`${match.url}/:thisID`} component={PlaylistItem}/>
        </div>
    )
}

export default withRouter(connect(selector)(Playlist))
