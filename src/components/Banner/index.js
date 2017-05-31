import React, { Component } from 'react'
import Style from './Banner.css'
import Font from '../../../style/iconfont.css'

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
                <div className={Style.historyButtonBack + ' ' + Font.iconfont + ' ' + Font['icon-houtui']}/>
                <div className={Style.historyButtonForward + ' ' + Font.iconfont + ' ' + Font['icon-qianjin']}/>
                <div className={Style.searchBox}>
                    <input type="text" className={Style.searchBoxInput} placeholder="搜索音乐，歌手，歌词，用户"/>
                    <div type="text" className={Style.searchBoxButton + ' ' + Font.iconfont + ' ' + Font['icon-sousuo_sousuo1']}/>
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
                    <div className={Style.userInfoWinItem + ' ' + Font.iconfont + ' ' + Font['icon-houdongfangiconfont10']}/>
                    <div className={Style.userInfoWinItem + ' ' + Font.iconfont + ' ' + Font['icon-zuidahua']}/>
                    <div className={Style.userInfoWinItem + ' ' + Font.iconfont + ' ' + Font['icon-zuixiaohua']}/>
                    <div className={Style.userInfoWinItem + ' ' + Font.iconfont + ' ' + Font['icon-suoxiao']}/>
                </div>
                <div className={Style.userInfoSetting}></div>
                <div className={Style.userInfoUser}></div>
            </div>
        </div>
    )
}
Banner = connect(getState)(Banner);

export default Banner
