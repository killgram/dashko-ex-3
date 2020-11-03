import { ADD_CASE } from '../../actions/api/addCaseAction'
import { ADD_SUCCESS } from '../../actions/api/addCaseAction'
import { CHECK_CASE } from '../../actions/api/addCaseAction'

const initialState = {
  caseData: [],
}

export function addCaseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CASE:
      return { ...state }
    case ADD_SUCCESS:
      return {
        ...state,
        caseData: action.caseData,
        status: action.status,
      }
    case CHECK_CASE:
      return {
        ...state,
        caseData: action.caseData,
        status: action.status,
      }
    default:
      return state
  }
}
