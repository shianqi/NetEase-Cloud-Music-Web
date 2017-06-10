import React from 'react'
import Style from './Banner.css'
import {
    iconfont,
    icon_houtui,
    icon_qianjin,
    icon_sousuo_sousuo1,
    icon_houdongfangiconfont10,
    icon_zuidahua,
    icon_zuixiaohua,
    icon_suoxiao
} from '../../../style/iconfont.css'
import cs from 'classnames'
import { connect } from 'react-redux'
import { openLogin } from '../../actions/login'

const getState = (state) => ({
    nickname: state.user.userInfo.profile ? state.user.userInfo.profile.nickname: '未登录',
    avatarUrl: state.user.userInfo.profile ? state.user.userInfo.profile.avatarUrl: ''
})

let Banner = ({ dispatch, nickname, avatarUrl }) => {
    const openLoginWindow = function(){
        dispatch(openLogin())
    }

    return (
        <div className={Style['title']}>
            <div className={Style['logo']}/>
            <div className={Style['historyButton']}>
                <div
                    className={cs(Style['historyButtonBack'], iconfont, icon_houtui)}
                />
                <div
                    className={cs(Style['historyButtonForward'], iconfont, icon_qianjin)}
                />
                <div className={ Style['searchBox'] }>
                    <input
                        type="text"
                        className={Style['searchBoxInput']}
                        placeholder="搜索音乐，歌手，歌词，用户"/>
                    <div
                        type="text"
                        className={
                            cs(
                                Style['searchBoxButton'],
                                iconfont,
                                icon_sousuo_sousuo1
                            )
                        }
                    />
                </div>
            </div>
            <div className={ Style['userInfo'] }>
                <div className={Style['sys']}>
                    <div
                        className={
                            cs(
                                Style['sys-item'],
                                iconfont,
                                icon_houdongfangiconfont10
                            )
                        }
                    />
                    <div
                        className={
                            cs(
                                Style['sys-item'],
                                iconfont,
                                icon_zuidahua
                            )
                        }
                    />
                    <div
                        className={
                            cs(
                                Style['sys-item'],
                                iconfont,
                                icon_zuixiaohua
                            )
                        }
                    />
                    <div
                        className={
                            cs(
                                Style['sys-item'],
                                iconfont,
                                icon_suoxiao
                            )
                        }
                    />
                </div>
                <div className={Style['user']}>
                    <div
                        className={Style['user-nickname']}
                        onClick={openLoginWindow}
                    >
                        { nickname }
                    </div>
                    <img
                        src={avatarUrl}
                        className={Style['user-photo']}
                    />
                </div>
            </div>
        </div>
    )
}
Banner = connect(getState)(Banner)

export default Banner
