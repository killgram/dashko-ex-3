import { combineReducers } from 'redux'
import { loginReducer } from './login/login'
import { registerReducer } from './register/register'
import { logOutReducer } from './logout/logout'

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  logout: logOutReducer,
})
