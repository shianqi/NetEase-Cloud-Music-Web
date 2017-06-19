import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { listDetailFetchPosts } from '../../../actions/userSelectSongList.js'

import PlaylistItem from './PlaylistItem'

const selector = (state) => {
    return {
        creator: state.userSelectSongList.playlist.creator
    }
}

let Playlist = ({dispatch, creator, match})=>{

    const PlaylistItems = ({match}) => {
        const initHandler = ()=>{
            dispatch(listDetailFetchPosts(match.params.thisID))
        }
        return (
            <div>
                <PlaylistItem
                    initHandler={initHandler}
                    creator={creator}
                />
            </div>
        )
    }

    return (
        <div>
            <Route exact path={`${match.url}/:thisID`} component={PlaylistItems}/>
        </div>
    )
}

export default withRouter(connect(selector)(Playlist))
