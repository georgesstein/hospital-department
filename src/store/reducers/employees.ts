import * as actionType from '../constants/employees'
import * as actionCreator from '../actions/employees'

import * as I from '../../types'

export function employeesReducer(
  state: I.AppState['employees'] = null,
  action: ReturnType<typeof actionCreator['employees']['success']>
): I.AppState['employees'] {
  switch (action.type) {
    case actionType.FETCH_EMPLOYEES_SUCCESS: {
      return action.payload
    }

    default:
      return state
  }
}

export function workLogReducer(
  state: I.AppState['workLog'] = null,
  action: ReturnType<typeof actionCreator['workLog']['success']>
): I.AppState['workLog'] {
  switch (action.type) {
    case actionType.FETCH_WORKLOG_SUCCESS: {
      return action.payload
    }

    default:
      return state
  }
}
