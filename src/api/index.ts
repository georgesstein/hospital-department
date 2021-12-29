import * as vendorAPI from './api'
import * as I from '../types'

const API = {
  get: {
    employees: () => vendorAPI.getEmployees().then((employees: I.Employee[]) => employees),
    workLogs: () =>
      vendorAPI.getWorklog().then((logs: I.WorkLogItemDTO[]) =>
        logs.map(
          (log): I.WorkLogItem => ({
            id: log.id,
            employeeId: log.employee_id,
            from: Date.parse(log.from),
            to: Date.parse(log.to),
          })
        )
      ),
  },
}

export default API
