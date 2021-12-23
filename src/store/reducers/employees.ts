import * as actionType from '../constants/employees'
import * as actionCreator from '../actions/employees'

import * as I from '../../types'

export function employeesReducer(
  state: I.AppState['employees'] = null,
  action: ReturnType<typeof actionCreator['setEmployees']>
): I.AppState['employees'] {
  switch (action.type) {
    case actionType.SET_EMPLOYEES: {
      return action.payload
    }
    
    default:
      return state
  }
}

export function workLogReducer(
  state: I.AppState['workLog'] = null,
  action: ReturnType<typeof actionCreator['setWorkLog']>
): I.AppState['workLog'] {
  switch (action.type) {
    case actionType.SET_WORKLOG: {
      return action.payload
    }
    
    default: 
      return state
  }
}
