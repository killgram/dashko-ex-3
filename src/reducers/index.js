import { combineReducers } from 'redux'
import { loginReducer } from './login/login'
import { registerReducer } from './register/register'
import { logOutReducer } from './logout/logout'
import { addCaseReducer } from './api/addCase'
import { chooseCaseReducer } from './api/chooseCaseReducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  logout: logOutReducer,
  addcase: addCaseReducer,
  choosecase: chooseCaseReducer,
})
