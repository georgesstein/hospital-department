import { combineReducers, createStore } from 'redux'
import * as employeesReducer from './reducers/employees'

const store = createStore(
  combineReducers({
    employees: employeesReducer.employeesReducer,
    workLog: employeesReducer.workLogReducer
}))

export default store