import React, { Component } from 'react'
import Style from './Login.css'
import cs from 'classnames'
import { connect } from 'react-redux'
import {
    iconfont,
    icon_houdongfangiconfont10
} from '../../../style/iconfont.css'
import { fetchPosts } from '../../actions/login'


const selector = (state) => {
    return {
        selectedReddit: ''
    }
}

let Login = ({dispatch, selectedReddit}) => {

    const handlerLogin = function(){
        console.log("handlerLogin");
        dispatch(fetchPosts('', ''))
    }
    return(
        <div className={ Style['main'] }>
            <div className={
                cs(
                    iconfont,
                    icon_houdongfangiconfont10,
                    Style['close-button']
                )
            } />
            <div className="form-login">
                <input type="text"/>
                <input type="text"/>
                <br/>
                <input type="radio"/>
                <span>自动登陆</span>
                <br/>
                <input value="登陆" type="button" onClick={handlerLogin}/>
            </div>
        </div>
    )
}

export default connect(selector)(Login)