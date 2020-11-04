import { CHANGE_STATUS_SUCCESS } from '../../actions/api/taskDoneAction'
import { CHANGE_STATUS_REQUEST } from '../../actions/api/taskDoneAction'

const initialState = {}

export function changeTaskStatusReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATUS_REQUEST:
      return { ...state }
    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}
