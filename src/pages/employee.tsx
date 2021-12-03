import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import API from '../api/index'
import * as I from '../DTO'

import Loading from '../components/Loading'

export const EMPLOYEE_ID = 'employeeId'

export default function EmployeePage() {
  const { employeeId } = useParams<typeof EMPLOYEE_ID>()
  const [workLog, setWorkLog] = useState()

  useEffect(() => {
    API.get.workLogs().then(data => {
      const parsedData = data.map(log => {
        return { from: Date.parse(log.from), to: Date.parse(log.to), employee_id: log.employee_id, id: log.id }
      })

      const currentEmployeeWorkLog = parsedData.filter(log => log.employee_id === parseInt(employeeId))
    })
  })

  if (!workLog) {
    <Loading />
  }

  return (
    <>
      <Link to="/employees">to employees</Link>
      <h1>Employee ID: {employeeId}</h1>
      
    </>
  )
}
