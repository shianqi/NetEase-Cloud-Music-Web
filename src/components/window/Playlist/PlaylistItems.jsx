import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { listDetailFetchPosts } from '../../../actions/userSelectSongList'

import PlaylistItem from './PlaylistItem'

const selector = (state) => {
    return {
        playlist: state.userSelectSongList.playlist,
        playlistId: state.userSelectSongList.playlistId
    }
}

class PlaylistItems extends Component {
    componentDidMount() {
        const { match, dispatch } = this.props
        dispatch(listDetailFetchPosts(match.params.thisID))
    }

    render() {
        const { playlist } = this.props
        return (
            <div>
                <PlaylistItem
                    playlist={playlist}
                />
            </div>
        )
    }

    componentWillReceiveProps() {
        const { match, dispatch, playlistId } = this.props
        if(match.params.thisID !== playlistId) {
            dispatch(listDetailFetchPosts(match.params.thisID))
        }
    }
}

export default withRouter(connect(selector)(PlaylistItems))
