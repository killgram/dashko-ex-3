import { db } from '../../components/App'

export const ADD_CASE = 'ADD_CASE'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const CHECK_CASE = 'CHECK_CASE'

export function addCase(setCase, letUid) {
  return function (dispatch) {
    dispatch({
      type: ADD_CASE,
    })
    db.collection('case')
      .add({
        uid: letUid,
        case_value: setCase,
        status: 'empty',
      })
      .then(function (docRef) {
        db.collection('case')
          .doc(docRef.id)
          .onSnapshot(function (doc) {
            db.collection('case')
              .where('uid', '==', localStorage.getItem('uid'))
              .get()
              .then(function (querySnapshot) {
                let data = []

                querySnapshot.forEach(function (doc) {
                  data.push(doc.data())
                })
                dispatch({
                  type: ADD_SUCCESS,
                  caseData: data,
                  status: 'empty',
                })
              })
          })
        db.collection('case').doc(docRef.id).set(
          {
            case_id: docRef.id,
          },
          {
            merge: true,
          }
        )
      })
  }
}

export function checkCase(items) {
  return function (dispatch) {
    db.collection('case')
      .where('uid', '==', localStorage.getItem('uid'))
      .get()
      .then(function (querySnapshot) {
        if (items.length === 0) {
          let arr = []
          querySnapshot.forEach(function (doc) {
            arr.push(doc.data())
          })
          if (arr.length !== 0) {
            dispatch({
              type: CHECK_CASE,
              caseData: arr,
            })
          }
        }
      })
  }
}
