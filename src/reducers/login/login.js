import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../actions/login/loginAction'

const initialState = {
  isLogin: false,
  isFetching: false,
  error: '',
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLogin: true,
      }
    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }
    default:
      return state
  }
}
