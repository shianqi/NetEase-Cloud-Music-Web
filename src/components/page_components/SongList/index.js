import React, { Component } from 'react'
import SunListItem from '../SongListItem'
import Style from './SunList.css'

class SunList extends Component{
    render() {
        const sunLists = [
            {
                plays: "33k",
                title: "每日歌曲推荐 欲罢不能的电音",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: false
            },
            {
                plays: "63k",
                title: "高考提分哪家强，听完此单斗志昂",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: true
            },
            {
                plays: "163k",
                title: "欲罢不能的电音，Dopa Trap/Future",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: true
            },
            {
                plays: "13k",
                title: "❤不让你通宵的电音不是好毒品Ⅰ",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: true
            },
            {
                plays: "13k",
                title: "❤不让你通宵的电音不是好毒品Ⅰ",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: true
            },
            {
                plays: "13k",
                title: "❤不让你通宵的电音不是好毒品Ⅰ",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: true
            },
            {
                plays: "13k",
                title: "❤不让你通宵的电音不是好毒品Ⅰ",
                recommendReason: "根据您的音乐口味生成每日更新",
                playButton: true
            },
        ]

        const SunListItems = sunLists.map((item, index)=>(
            <SunListItem
                key={index}
                title={item.title}
                plays={item.plays}
                recommendReason={item.recommendReason}
                playButton={item.playButton}
                HandlerClick={()=>{console.log('SunListItem Clicked!');}}
            />
        ))
        return (
            <div className={Style['main']}>
                {SunListItems}
            </div>
        )
    }
}

export default SunList