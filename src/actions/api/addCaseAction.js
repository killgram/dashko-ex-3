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
              .orderBy('case_value')
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

// export function checkCase(items) {
//   return function (dispatch) {
//     db.collection('case')
//       .where('uid', '==', localStorage.getItem('uid'))
//       .orderBy('case_value')
//       .get()
//       .then(function (querySnapshot) {
//         if (items.length === 0) {
//           let arr = []
//           querySnapshot.forEach(function (doc) {
//             db.collection('task')
//               .where('case_id', '==', doc.data().case_id)
//               .get()
//               .then(function (querySnapshot) {
//                 let count = 0
//                 let check = 0
//                 querySnapshot.forEach(function (doc) {
//                   if (doc.data().task_check) {
//                     check++
//                   }
//                   count++
//                 })
//                 if (count === 0) {
//                   db.collection('case').doc(doc.data().case_id).update({
//                     status: 'empty',
//                   })
//                 } else if (count === check) {
//                   db.collection('case').doc(doc.data().case_id).update({
//                     status: 'finished',
//                   })
//                 } else {
//                   db.collection('case').doc(doc.data().case_id).update({
//                     status: 'notfinished',
//                   })
//                 }
//               })

//             arr.push(doc.data())
//           })
//           for (let v in arr) {
//             console.log(arr[v].case_value, '', arr[v].status)
//           }
//           if (arr.length !== 0) {
//             dispatch({
//               type: CHECK_CASE,
//               caseData: arr,
//             })
//           } else {
//             dispatch({
//               type: CHECK_CASE,
//             })
//           }
//         }
//       })
//   }
// }
export function checkCase(items) {
  return function (dispatch) {
    db.collection('case')
      .where('uid', '==', localStorage.getItem('uid'))
      .orderBy('case_value')
      .onSnapshot(function (querySnapshot) {
        if (items.length === 0) {
          let arr = []
          querySnapshot.forEach(function (doc) {
            db.collection('task')
              .where('case_id', '==', doc.data().case_id)
              .get()
              .then(function (querySnapshot) {
                let count = 0
                let check = 0
                querySnapshot.forEach(function (doc) {
                  if (doc.data().task_check) {
                    check++
                  }
                  count++
                })
                if (count === 0) {
                  db.collection('case').doc(doc.data().case_id).update({
                    status: 'empty',
                  })
                } else if (count === check) {
                  db.collection('case').doc(doc.data().case_id).update({
                    status: 'finished',
                  })
                } else {
                  db.collection('case').doc(doc.data().case_id).update({
                    status: 'notfinished',
                  })
                }
              })

            arr.push(doc.data())
          })
          if (arr.length !== 0) {
            dispatch({
              type: CHECK_CASE,
              caseData: arr,
            })
          } else {
            dispatch({
              type: CHECK_CASE,
            })
          }
        }
      })
  }
}
