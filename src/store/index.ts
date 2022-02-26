import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux'
import * as employeesReducer from './reducers/employees'
import { AppState } from '../types'

import employeesMiddleware from './middlewares/employees'
import workLogMiddleware from './middlewares/worklog'

const logger: Middleware<any, AppState> = _ => next => action => {
  console.log(`%c ${action.type}`, 'color: #89eff5; font-weight: 900; font-size: 14px;')
  next(action)
}

const store = createStore(
  combineReducers({
    employees: employeesReducer.employeesReducer,
    workLog: employeesReducer.workLogReducer,
  }),
  applyMiddleware(employeesMiddleware, workLogMiddleware, logger)
)

export default store
