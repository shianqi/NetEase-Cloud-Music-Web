import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchListDetailIfNeeded } from '../../../actions/songList'

import PlaylistItem from './PlaylistItem'

const selector = (state) => {
  return {
    songList: state.songList
  }
}

class PlaylistItems extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props
    dispatch(fetchListDetailIfNeeded(match.params.thisID))
  }

  render() {
    const { match, songList={} } = this.props
    const { playlist={} } = songList[match.params.thisID] || {}

    return (
      <div>
        <PlaylistItem
          playlist={playlist}
          match={ {...match} }
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
