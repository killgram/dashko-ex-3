import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
} from '../../actions/login/loginAction'
import { LOG_OUT } from '../../actions/login/loginAction'

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
    case AUTH_SUCCESS:
      return { ...state, isLogin: true }
    case LOG_OUT:
      return { ...state, isLogin: false }
    default:
      return state
  }
}
