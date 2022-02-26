import { Middleware } from 'redux'

import API from '../../api'

import * as actionType from '../constants/employees'
import * as actionCreator from '../actions/employees'

import { AppState } from '../../types'

const networkMiddleware: Middleware<any, AppState> = _ => next => action => {
  switch (action.type) {
    case actionType.FETCH_WORKLOG: {
      API.get
        .workLogs()
        .then(data => {
          next(actionCreator.workLog.success(data))
        })
        .catch(error => next(actionCreator.workLog.error(typeof error === 'string' ? error : 'Unknown error')))
    }
  }

  next(action)
}

export default networkMiddleware
