import { doc } from 'prettier'
import { db } from '../../components/App'
import { CHECK_CASE } from './addCaseAction'

export const CHOOSE_CASE = 'CHOOSE_CASE'
export const CHOOSE_CASE_SUCCESS = 'CHOOSE_CASE_SUCCESS'
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const CLEAR_TASK_TABLE = 'CLEAR_TASK_TABLE'
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const DELETE_CASE_REQUEST = 'DELETE_CASE_REQUEST'
export const DELETE_CASE_SUCCESS = 'DELETE_CASE_SUCCESS'

export function selectCase(case_id) {
  return function (dispatch) {
    db.collection('case')
      .where('case_value', '==', case_id)
      .get()
      .then(function (doc) {
        dispatch({
          type: CHOOSE_CASE,
          case_id: doc.docs[0].id,
          case_value: case_id,
          isOpen: true,
        })
        db.collection('task')
          .orderBy('create_time', 'desc')
          .where('case_id', '==', doc.docs[0].id)
          .onSnapshot(function (querySnapshot) {
            let data = []
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

              data.push(doc.data())
            })

            dispatch({
              type: CHOOSE_CASE_SUCCESS,
              taskData: data,
              case_id: doc.docs[0].id,
              case_value: case_id,
            })
          })
      })
  }
}

export function addTask(data) {
  return function (dispatch) {
    dispatch({
      type: ADD_TASK_REQUEST,
    })
    db.collection('task')
      .add({
        case_id: data.case_id,
        task_value: data.task_value,
        task_quickly: data.task_quickly,
        create_time: data.create_time,
        task_check: data.task_check,
        task_id: '',
      })
      .then(function (docRef) {
        db.collection('task').doc(docRef.id).set(
          {
            task_id: docRef.id,
          },
          {
            merge: true,
          }
        )
      })
  }
}

export function deleteTask(task) {
  return function (dispatch) {
    dispatch({
      type: DELETE_TASK_REQUEST,
    })
    db.collection('task').doc(task).delete()
    dispatch({
      type: DELETE_TASK_SUCCESS,
    })

    db.collection('case')
      .where('uid', '==', localStorage.getItem('uid'))
      .orderBy('case_value')
      .get()
      .then(function (querySnapshot) {
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
        })
      })
  }
}

export function deleteCase(case_data) {
  return function (dispatch) {
    dispatch({
      type: DELETE_CASE_REQUEST,
    })
    db.collection('case').doc(case_data).delete()

    db.collection('task')
      .where('case_id', '==', case_data)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          db.collection('task').doc(doc.id).delete()
        })
      })
    dispatch({
      type: DELETE_CASE_SUCCESS,
      case_id: '',
      case_value: '',
      isOpen: false,
    })
    db.collection('case')
      .orderBy('case_value')
      .where('uid', '==', localStorage.getItem('uid'))
      .onSnapshot(function (querySnapshot) {
        let data = []
        querySnapshot.forEach(function (doc) {
          data.push(doc.data())
        })
        dispatch({
          type: CHECK_CASE,
          caseData: data,
        })
      })
  }
}
