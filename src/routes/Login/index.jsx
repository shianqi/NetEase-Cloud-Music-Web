import React, { Component } from 'react'
import Style from './index.css'
import cs from 'classnames'
import { connect } from 'react-redux'
import {
  iconfont,
  icon_houdongfangiconfont10,
} from 'STYLES/iconfont.css'
import {
  fetchLoginPosts,
  phoneNumberChanged,
  passwordChanged,
  closeLoginInterface,
  fetchRefreshPosts,
} from '../../actions/login'

const selector = (state) => {
  return {
    ...state.user.userInput,
  }
}

class Login extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchRefreshPosts())
  }

  render () {
    const {
      dispatch,
      phoneNumber,
      password,
      login_window,
      err_message,
    } = this.props

    const handlerUsernameChange = function (e) {
      dispatch(phoneNumberChanged(e.target.value))
    }

    const handlerPasswordChange = function (e) {
      dispatch(passwordChanged(e.target.value))
    }

    const handlerSubmit = function (e) {
      if (e.which === 13) {
        dispatch(fetchLoginPosts(phoneNumber, password))
      }
    }

    const handlerLogin = function () {
      dispatch(fetchLoginPosts(phoneNumber, password))
    }

    return (
      <div
        className={
          cs(
            Style['main'],
            { [Style['display']]: login_window }
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
          onClick={() => {
            dispatch(closeLoginInterface())
          }}
        />
        <div className={Style['form-login']}>
          <div className={Style['form-banner']} />
          <div
            className={Style['form-err-message']}
          >
            { err_message }
          </div>
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
            onKeyPress={handlerSubmit}
          />
          <div className={Style['form-automatic-logon']}>
            <input id="automatic-login" type="checkbox" />
            <label htmlFor="automatic-login"
              className={Style['form-automatic-logon-span']}>自动登陆</label>
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
}

export default connect(selector)(Login)
