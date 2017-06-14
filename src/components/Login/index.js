import React from 'react'
import Style from './Login.css'
import cs from 'classnames'
import { connect } from 'react-redux'
import {
    iconfont,
    icon_houdongfangiconfont10
} from '../../../style/iconfont.css'
import { fetchPosts, phoneNumberChanged, passwordChanged, closeLogin } from '../../actions/login'

const selector = (state) => {
    return {
        phoneNumber: state.user.userInput.phoneNumber,
        password: state.user.userInput.password,
        automaticLogin: state.user.userInput.automaticLogin,
        login_window: state.user.userInput.login_window
    }
}

let Login = ({dispatch, phoneNumber, password, automaticLogin, login_window}) => {

    const handlerUsernameChange = function(e){
        dispatch(phoneNumberChanged(e.target.value))
    }

    const handlerPasswordChange = function(e){
        dispatch(passwordChanged(e.target.value))
    }

    const handlerLogin = function(){
        dispatch(fetchPosts(phoneNumber, password))
    }

    return(
        <div
            className={
                cs(
                    Style['main'],
                    {[Style['display']]: login_window}
                )
            }>
            <div
                className={
                    cs(
                        iconfont,
                        icon_houdongfangiconfont10,
                        Style['close-button']
                    )
                }
                onClick={()=>{
                    dispatch(closeLogin())
                }}
            />
            <div className={Style['form-login']}>
                <div className={Style['form-banner']} />
                <input
                    type="text"
                    className={Style['form-phone-number']}
                    value={phoneNumber}
                    placeholder="请输入手机号"
                    onChange={handlerUsernameChange}
                />
                <input
                    type="password"
                    className={Style['form-password']}
                    value={ password }
                    placeholder="请输入密码"
                    onChange={handlerPasswordChange}
                />
                <div className={Style['form-automatic-logon']}>
                    <input id="automatic-login" type="checkbox" className={Style['form-automatic-logon-radio']}/>
                    <label htmlFor="automatic-login" className={Style['form-automatic-logon-span']}>自动登陆</label>
                </div>
                <input
                    value="登 陆"
                    className={Style['form-login-button']}
                    type="button"
                    onClick={handlerLogin}
                />
            </div>
        </div>
    )
}

export default connect(selector)(Login)
