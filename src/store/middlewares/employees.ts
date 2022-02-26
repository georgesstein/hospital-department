import { Middleware } from 'redux'

import API from '../../api'

import * as actionType from '../constants/employees'
import * as actionCreator from '../actions/employees'

import { AppState } from '../../types'

const networkMiddleware: Middleware<any, AppState> = _ => next => action => {
  switch (action.type) {
    case actionType.FETCH_EMPLOYEES: {
      API.get
        .employees()
        .then(data => {
          next(actionCreator.employees.success(data))
        })
        .catch(error => next(actionCreator.employees.error(typeof error === 'string' ? error : 'Unknown error')))
    }
  }

  next(action)
}

export default networkMiddleware
