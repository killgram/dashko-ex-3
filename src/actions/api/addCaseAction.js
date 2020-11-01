import { db } from '../../components/App'
var firebase = require('firebase')

export const ADD_CASE = 'ADD_CASE'
export const ADD_SUCCESS = 'ADD_SUCCESS'

export function addCase(setCase, letUid) {
  return function (dispatch) {
    dispatch({
      type: ADD_CASE,
    })
    db.collection(letUid).add({
      case: setCase,
    })
    dispatch({
      type: ADD_SUCCESS,
      case: setCase,
    })
    console.log('добавилось')
  }
}
