import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import Style from './Playlist.css'
import SongList from './PlaylistTab/SongList/index'
import Comment from './PlaylistTab/Comment/index'
import Collector from './PlaylistTab/Collector/index'

class PlaylistItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            name='Loading...',
            createTime,
            coverImgUrl,
            tracks,
            creator={
                avatarUrl: '',
                nickname: ''
            }
        } = this.props.playlist

        const { match } = this.props

        const SuperSongList = (data)=>(
            ()=>(
                <SongList data={ data }></SongList>
            )
        )

        return (
            <div>
                <div className={Style['banner']}>
                    <div className={Style['banner-img']}>
                        <img width="200" height="200" src={coverImgUrl} />
                    </div>
                    <div className={Style['banner-main']}>
                        <div className={ Style['banner-title'] }>
                            <span className={ Style['banner-title-span'] }>歌单</span>
                            <span className={ Style['banner-title-name'] }>{ name }</span>
                        </div>
                        <div>
                            <div className={ Style['banner-owner-img'] }>
                                <img width="30" height="30" src={creator.avatarUrl}/>
                            </div>
                            <span className={ Style['banner-owner-name'] }>{creator.nickname}</span>
                            <span className={ Style['banner-owner-time'] }>{new Date(createTime).toLocaleDateString()}创建</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={ Style['list-option'] }>
                        <span className={ Style['list-option-item'] }>歌曲列表</span>
                        <span className={ Style['list-option-item'] }>评论(0)</span>
                        <span className={ Style['list-option-item'] }>收藏者</span>
                    </div>
                </div>
                <div>
                    <Redirect exact path={`${match.url}`} to={`${match.url}/SongList`}/>
                    <Route path={`${match.url}/SongList`} component={SuperSongList(tracks)} ></Route>
                    <Route path={`${match.url}/Comment`} component={Comment} ></Route>
                    <Route path={`${match.url}/Collector`} component={Collector} ></Route>
                </div>
            </div>
        )
    }
}

export default PlaylistItem
