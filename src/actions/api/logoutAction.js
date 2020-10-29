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
      isLogin: true,
    })
    firebase
      .auth()
      .signOut()
      .then(function () {
        localStorage.clear()
        console.log(localStorage.length)
        dispatch({
          type: LOG_OUT,
          isLogin: false,
        })
      })
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (!localStorage.getItem('isLogin')) {
    //     console.log('должен выйти')
    //     dispatch({
    //       type: AUTH_SUCCESS,
    //       isLogin: false,
    //     })
    //   }
    // })
  }
}
