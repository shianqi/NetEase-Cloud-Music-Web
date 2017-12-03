import React, { Component } from 'react'
import Title from '../../../page_components/Title'
import Style from './index.css'
import SunList from '../../../page_components/SongList'
import { connect } from 'react-redux'

const selector = (state) => (
  {
    dailyRecommendedPlaylist :state.discoverMusic.personalityRecommendation.dailyRecommendedPlaylist
  }
)

class GXTJ extends Component {
  componentDidMount() {
    const { dispatch } = this.props
  }

  render() {
    const getMore = function() {

    }

    const {
      dispatch,
      dailyRecommendedPlaylist
    } = this.props

    return (
      <div className={Style['main']}>
        <div></div>
        <Title rightButtonClick={getMore} rightButton={'更多>'} title={'推荐歌单'}/>
        <SunList sunLists={ dailyRecommendedPlaylist.result ? dailyRecommendedPlaylist.result : [] }/>
        <Title rightButtonClick={getMore} rightButton={'更多>'} title={'独家放送'}/>
        <Title rightButtonClick={getMore} rightButton={'更多>'} title={'最新音乐'}/>
      </div>
    )
  }
}

export default connect(selector)(GXTJ)
