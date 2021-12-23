import * as I from '../../types'
import * as action from '../constants/employees'

export const setEmployees = (employees: I.Employee[]) => ({
  type: action.SET_EMPLOYEES,
  payload: employees,
})

export const setWorkLog = (workLog: I.WorkLogItem[]) => ({
  type: action.SET_WORKLOG,
  payload: workLog,
})