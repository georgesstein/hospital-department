import * as I from '../../types'
import * as action from '../constants/employees'

export const employees = {
  fetch: () => ({
    type: action.FETCH_EMPLOYEES,
  }),
  success: (employees: I.Employee[]) => ({
    type: action.FETCH_EMPLOYEES_SUCCESS,
    payload: employees,
  }),
  error: (error: string) => ({
    type: action.FETCH_EMPLOYEES_ERROR,
    payload: error,
  }),
}

export const workLog = {
  fetch: () => ({
    type: action.FETCH_WORKLOG,
  }),
  success: (worklog: I.WorkLogItem[]) => ({
    type: action.FETCH_WORKLOG_SUCCESS,
    payload: worklog,
  }),
  error: (error: string) => ({
    type: action.FETCH_WORKLOG_ERROR,
    payload: error,
  }),
}
