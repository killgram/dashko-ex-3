import { db } from '../../firebase'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })
    var docRef = db.collection('login').doc('20RBfPY3aPtlducl4ilj')
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data())
        dispatch({
          type: LOGIN_SUCCESS,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    })
  }
}
