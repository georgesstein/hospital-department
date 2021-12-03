import * as vendorAPI from './api'
import * as I from '../DTO'

const API = {
  get: {
    employees: vendorAPI.getEmployees as () => Promise<I.Employee[]>,
    workLogs: vendorAPI.getWorklog as () => Promise<I.WorkLog[]>,
  }
}

export default API