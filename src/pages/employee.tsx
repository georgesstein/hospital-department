import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import { getWorklog } from '../api/api'

import Loading from '../components/Loading'

type WorkLogs = Array<WorkLog>

type WorkLog = {
  id: number;
  employee_id: number;
  from: string;
  to: string;
}

export const EMPLOYEE_ID = 'employeeId'

export default function EmployeePage() {
  const { employeeId } = useParams<typeof EMPLOYEE_ID>()
  const [workLog, setWorkLog] = useState<WorkLogs | null>(null)

  useEffect(() => {
    getWorklog().then(data => {
      const mappedData
    })
  }, [employeeId])

  if (workLog === null) {
    <Loading />
  }

  return (
    <>
      <Link to="/employees">to employees</Link>
      <h1>Employee ID: {employeeId}</h1>
      
    </>
  )
}
