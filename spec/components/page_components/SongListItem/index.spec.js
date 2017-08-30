import SunListItem from '../../../../src/components/page_components/SongListItem/index.jsx'
import Style from '../../../../src/components/page_components/SongListItem/index.css'
import { mount } from 'enzyme'
import React from 'react'

describe('Alert', () => {
    it('as an API', () => {
        const sunLists = [
            {
                plays: '33k',
                title: '每日歌曲推荐 欲罢不能的电音',
                recommendReason: '根据您的音乐口味生成每日更新',
                playButton: false
            },
            {
                plays: '63k',
                title: '高考提分哪家强，听完此单斗志昂',
                recommendReason: '根据您的音乐口味生成每日更新',
                playButton: true
            },
            {
                plays: '163k',
                title: '欲罢不能的电音，Dopa Trap/Future',
                recommendReason: '根据您的音乐口味生成每日更新',
                playButton: true
            }
        ]
        const listItem = mount(
            <SunListItem
                key={0}
                title={ '欲罢不能的电音，Dopa' }
                plays={ '163k' }
                recommendReason={ '根据您的音乐口味生成每日更新' }
                playButton={ true }
                HandlerClick={()=>{}}
            />
        )
        expect(listItem.hasClass( Style['main'] )).toBe(true)
    })
})
