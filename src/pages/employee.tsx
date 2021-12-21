import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

import API from '../api/index'
import * as I from '../types'
import countIntersections from '../utils/count-intersections'

import Table from '../components/Table'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

export const EMPLOYEE_ID = 'employeeId'

const MIN_EMPLOYEES_ON_DUTY = 3

function RenderEmployeePage(p: { employeeId: number }) {
  const [workLog, setWorkLog] = useState<I.WorkLogItem[]>()

  useEffect(() => {
    // API.get.workLogs().then(setWorkLog)
    API.get.workLogs().then(setWorkLog)
  }, [])
  
  if (!workLog) {
    return <Loading />
  }
  
  const currentEmployeeLog = workLog.filter(log => log.employeeId === p.employeeId)
  const restEmployeesPresenceTimeRanges: [number, number][] = workLog.filter(log => log.employeeId !== p.employeeId).map(({ from, to }) => [from, to])
  
  const violationsIds = findViolationIds(currentEmployeeLog, restEmployeesPresenceTimeRanges)
  console.log(violationsIds)

  return (
    <>
      <Link to='/employees'>to employees</Link>
      <h1>Employee ID: {p.employeeId}</h1>
      <Table 
        columns={['ID', 'Entrance', 'Exit']}
        rows={currentEmployeeLog.map(log => {
          return [`${log.id}`, `${log.formattedLogRange.from}`, `${log.formattedLogRange.to}`]
        })}
        renderCell={({ value, cellIndex, rowId }) => {
          if (cellIndex === 2 && violationsIds.includes(parseInt(rowId))) {

            return <span style={{ color: 'red' }}>{value}</span>
          }

          return value
        }}
      />
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

const findViolationIds = (employeeLog: I.WorkLogItem[], collegesLog: Array<[number, number]>): number[] =>
  employeeLog.reduce((acc: number[], { to, id }) => {
    if (countIntersections(to, collegesLog) < MIN_EMPLOYEES_ON_DUTY) {
      acc.push(id)
    }

    return acc
  }, [])