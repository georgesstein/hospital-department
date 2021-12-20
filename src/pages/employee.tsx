import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useParams } from 'react-router'

import API from '../api/index'
import * as I from '../types'

import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

export const EMPLOYEE_ID = 'employeeId'

function RenderEmployeePage(p: { employeeId: number }) {
  const [workLog, setWorkLog] = useState<I.WorkLogItem[]>()

  useEffect(() => {
    API.get.workLogs().then(setWorkLog)
  }, [])
  
  // useEffect(() => {
  //   API.get.workLogs().then(data => {
  //     const parsedData = data.map(log => {
  //       return { from: Date.parse(log.from), to: Date.parse(log.to), employee_id: log.employee_id, id: log.id }
  //     })

  //     const currentEmployeeWorkLog = parsedData.filter(log => log.employee_id === parseInt(p.employeeId))
  //   })
  // })

  if (!workLog) {
    return <Loading />
  }

  return (
    <>
      <Link to='/employees'>to employees</Link>
      <h1>Employee ID: {p.employeeId}</h1>
    </>
  )
}

export default function EmployeePage() {
  const { employeeId } = useParams<typeof EMPLOYEE_ID>()
  const parsedEmployeeId = parseInt(employeeId || '', 10)

  if (isNaN(parsedEmployeeId)) {
    return <NotFound />
  }

  return <RenderEmployeePage employeeId={parsedEmployeeId}/>

}
