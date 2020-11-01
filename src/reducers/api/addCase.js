import { ADD_CASE } from '../../actions/api/addCaseAction'
import { ADD_SUCCESS } from '../../actions/api/addCaseAction'

const initialState = {
  case: '',
}

export function addCaseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CASE:
      return { ...state }
    case ADD_SUCCESS:
      return { ...state, case: action.case }
    default:
      return state
  }
}
