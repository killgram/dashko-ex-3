import { combineReducers } from 'redux'
import { loginReducer } from './login/login'
import { registerReducer } from './register/register'

export const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
})