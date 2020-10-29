import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../../actions/api/logoutAction'

const initialState = {
  error: '',
  isLogin: true,
}

export function logOutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return { ...state }
    case LOGOUT_SUCCESS:
      return { ...state, isLogin: false }
    case LOGOUT_FAIL:
      return { ...state, error: action.error }
    default:
      return state
  }
}
