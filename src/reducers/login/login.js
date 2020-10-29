import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../actions/login/loginAction'

const initialState = {
  error: '',
  isLogin: false,
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state }
    case LOGIN_SUCCESS:
      return { ...state, isLogin: true }
    case LOGIN_FAIL:
      return { ...state, error: action.error }
    default:
      return state
  }
}
