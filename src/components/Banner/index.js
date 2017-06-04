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
import { add } from '../../actions'

const getState = (state) => ({
    value: state
})

let Banner = ({ dispatch, value }) => {
    return (
        <div className={Style.title}>
            <div className={Style.logo}/>
            <div className={Style.historyButton}>
                <div className={ cs(Style.historyButtonBack, iconfont, icon_houtui)}/>
                <div className={ cs(Style.historyButtonForward, iconfont, icon_qianjin) }/>
                <div className={ Style.searchBox }>
                    <input type="text" className={Style.searchBoxInput} placeholder="搜索音乐，歌手，歌词，用户"/>
                    <div type="text" className={ cs(Style.searchBoxButton, iconfont, icon_sousuo_sousuo1)}/>
                </div>
            </div>
            {/*<div>*/}
                 {/*<input type="button" onClick={()=>{*/}
                     {/*dispatch(add())*/}
                 {/*}}/>*/}
                 {/*{value}*/}
            {/*</div>*/}
            <div className={Style.userInfo}>
                <div className={Style.userInfoWin}>
                    <div className={ cs(Style.userInfoWinItem, iconfont, icon_houdongfangiconfont10)}/>
                    <div className={ cs(Style.userInfoWinItem, iconfont, icon_zuidahua)}/>
                    <div className={ cs(Style.userInfoWinItem, iconfont, icon_zuixiaohua)}/>
                    <div className={ cs(Style.userInfoWinItem, iconfont, icon_suoxiao)}/>
                </div>
                <div className={Style.userInfoSetting}></div>
                <div className={Style.userInfoUser}></div>
            </div>
        </div>
    )
}
Banner = connect(getState)(Banner)

export default Banner
