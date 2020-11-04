import { db } from '../../components/App'

export const CHOOSE_CASE = 'CHOOSE_CASE'
export const CHOOSE_CASE_SUCCESS = 'CHOOSE_CASE_SUCCESS'
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const CLEAR_TASK_TABLE = 'CLEAR_TASK_TABLE'
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'

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
        })
        db.collection('task')
          .orderBy('create_time', 'desc')
          .where('case_id', '==', doc.docs[0].id)
          .onSnapshot(function (querySnapshot) {
            let data = []
            querySnapshot.forEach(function (doc) {
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
  }
}
