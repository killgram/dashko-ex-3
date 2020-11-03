import { CHOOSE_CASE } from '../../actions/api/chooseCase'
import { CHOOSE_CASE_SUCCESS } from '../../actions/api/chooseCase'
import { CLEAR_TASK_TABLE } from '../../actions/api/chooseCase'

const initialState = {
  case_id: '',
  taskData: [],
  case_value: '',
}

export function chooseCaseReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_CASE:
      return {
        ...state,
        case_id: action.case_id,
        case_value: action.case_value,
      }
    case CHOOSE_CASE_SUCCESS:
      return {
        ...state,
        case_id: action.case_id,
        taskData: action.taskData,
        case_value: action.case_value,
      }
    case CLEAR_TASK_TABLE:
      return { ...state, case_id: '', taskData: [], case_value: '' }
    default:
      return state
  }
}
