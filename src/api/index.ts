import * as vendorAPI from './api'
import * as I from '../types'

const API = {
  get: {
    employees: vendorAPI.getEmployees as () => Promise<I.Employee[]>,
    workLogs: () =>
      vendorAPI.getWorklog().then((logs: I.WorkLogItemDTO[]) =>
        logs.map(
          (log): I.WorkLogItem => ({
            id: log.id,
            employeeId: log.employee_id,
            from: Date.parse(log.from),
            to: Date.parse(log.to),
            formattedLogRange: {
              from: new Date(log.from).toLocaleString('ru-RU'),
              to: new Date(log.to).toLocaleString('ru-RU'),
            },
          })
        )
      ),
  },
}

export default API
