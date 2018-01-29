import React, { Component } from 'react'
import SunListItem from '../SongListItem'
import Style from './index.css'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const selector = (state) => (
  {
    dailyRecommendedPlaylist: state.discoverMusic.personalityRecommendation.dailyRecommendedPlaylist,
  }
)

class SunList extends Component {
  render () {
    const {
      dispatch,
      sunLists,
    } = this.props

    const SunListItems = sunLists.map((item, index) => (
      <SunListItem
        key={index}
        id={item.id}
        name={item.name}
        playCount={item.playCount}
        picUrl={item.picUrl}
        copywriter={item.copywriter}
        canDislike={item.canDislike}
        HandlerPlayButtonClick={() => {
          dispatch(push(`/playlist/${item.id}`))
        }}
        HandlerImgClick={() => {

        }}
      />
    ))
    return (
      <div className={Style['main']}>
        {SunListItems}
      </div>
    )
  }
}

export default connect(selector)(SunList)
