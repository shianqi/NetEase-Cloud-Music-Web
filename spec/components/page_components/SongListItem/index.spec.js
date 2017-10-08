import SunListItem from '../../../../src/components/page_components/SongListItem/index.jsx'
import { main } from '../../../../src/components/page_components/SongListItem/index.css'
import { shallow } from 'enzyme'
import React from 'react'

describe('Alert', () => {
    it('as an API', () => {
        const listItem = shallow(
            <SunListItem
                key={0}
                title={ '欲罢不能的电音，Dopa' }
                plays={ '163k' }
                recommendReason={ '根据您的音乐口味生成每日更新' }
                playButton={ true }
                HandlerClick={()=>{}}
            />
        )
        expect(listItem.hasClass( main )).toBe(true)
    })
})
