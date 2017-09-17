import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchListDetailIfNeeded } from '../../../actions/songList'

import PlaylistItem from './PlaylistItem'

const selector = (state) => (
    {
        id: state.songList.id,
        playlist: state.songList[this.id]
    }
)

class PlaylistItems extends Component {
    componentDidMount() {
        const { match, dispatch } = this.props
        dispatch(fetchListDetailIfNeeded(match.params.thisID))
    }

    render() {
        const { playlist={} } = this.props
        return (
            <div>
                <PlaylistItem
                    playlist={playlist}
                />
            </div>
        )
    }

    componentWillReceiveProps() {
        const { match, dispatch } = this.props
        dispatch(fetchListDetailIfNeeded(match.params.thisID))
    }
}

export default withRouter(connect(selector)(PlaylistItems))
