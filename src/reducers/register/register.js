import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../actions/register/registerAction'

const initialState = {
  error: '',
  isLogin: false,
}

export function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state }
    case REGISTER_SUCCESS:
      return { ...state, isLogin: true }
    case REGISTER_FAIL:
      return { ...state, error: action.error }
    default:
      return state
  }
}
