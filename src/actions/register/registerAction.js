var firebase = require('firebase')

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export function createUser(email, password) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
      email: email,
      password: password,
    })
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        if (error.message) {
          dispatch({
            type: REGISTER_FAIL,
            error: error.message,
          })
        }
      })

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: REGISTER_SUCCESS,
        })
      }
    })
  }
}
