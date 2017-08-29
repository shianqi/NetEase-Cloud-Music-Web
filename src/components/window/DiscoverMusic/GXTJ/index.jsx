import React, { Component } from 'react'
import Title from '../../../page_components/Title'
import Style from './index.css'
import SunList from '../../../page_components/SongList'

class GXTJ extends Component {
    render() {
        const getMore = function() {

        }

        return (
            <div className={Style['main']}>
                <div></div>
                <Title rightButtonClick={getMore} rightButton={'更多>'} title={'推荐歌单'}/>
                <SunList/>
                <Title rightButtonClick={getMore} rightButton={'更多>'} title={'独家放送'}/>
                <Title rightButtonClick={getMore} rightButton={'更多>'} title={'最新音乐'}/>
            </div>
        )
    }
}

export default GXTJ
