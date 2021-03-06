export type Employee = {
  id: number
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  phone: string
}

export type WorkLogItemDTO = {
  id: number
  employee_id: number
  from: string
  to: string
}

export type WorkLogItem = {
  id: number
  employeeId: number
  from: number
  to: number
}

export type AppState = {
  workLog: WorkLogItem[] | null
  employees: Employee[] | null
}
