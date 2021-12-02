import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import { getWorklog } from '../api/api'

import Loading from '../components/Loading'

type Worklogs = Array<Worklog>

type Worklog = {
  id: number;
  employee_id: number;
  from: string;
  to: string;
}

export const EMPLOYEE_ID = 'employeeId'

export default function EmployeePage() {
  const { employeeId } = useParams<typeof EMPLOYEE_ID>()
  const [worklog, setWorklog] = useState<Worklogs | null>(null)

  useEffect(() => {
    getWorklog().then(setWorklog)
  }, [employeeId])

  if (worklog === null) {
    <Loading />
  }

  console.log(worklog)
  
  return (
    <>
      <Link to="/employees">to employees</Link>
      <h1>Employee ID: {employeeId}</h1>
      
    </>
  )
}
