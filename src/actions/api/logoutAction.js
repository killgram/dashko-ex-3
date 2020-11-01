import { LOG_OUT } from '../login/loginAction'
var firebase = require('firebase')

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'

export function handleLogout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    })
    firebase
      .auth()
      .signOut()
      .then(function () {
        localStorage.clear()
        dispatch({
          type: LOG_OUT,
          isLogin: false,
          regLogin: false,
        })
      })
  }
}
