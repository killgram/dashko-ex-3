import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../actions/register/registerAction'

const initialState = {
  login: '',
  password: '',
}

export function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state }
    case REGISTER_SUCCESS:
      return { ...state }
    case REGISTER_FAIL:
      return { ...state }
    default:
      return state
  }
}
