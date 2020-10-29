var firebase = require('firebase')

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin(email, password) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
      email: email,
      password: password,
    })
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        if (error.message) {
          dispatch({
            type: LOGIN_FAIL,
            error: error.message,
          })
        }
      })

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: LOGIN_SUCCESS,
        })
      }
    })
  }
}
