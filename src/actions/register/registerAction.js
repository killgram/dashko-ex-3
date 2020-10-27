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
    console.log(email)

    // firebase.auth().createUserWithEmailAndPassword('asd@qwerty.com', 'password')
  }
}
