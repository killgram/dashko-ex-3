import { db } from '../../components/App'

export const CHANGE_STATUS_REQUEST = 'CHANGE_STATUS_REQUEST'
export const CHANGE_STATUS_SUCCESS = 'CHANGE_STATUS_SUCCESS'

export function changeStatusTask(id, status) {
  return function (dispatch) {
    db.collection('task').doc(id).update({
      task_check: true,
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
//             arr.push(doc.data())
//           })
//           if (arr.length !== 0) {
//             dispatch({
//               type: CHECK_CASE,
//               caseData: arr,
//             })
//           }
//         }
//       })
//   }
// }
