import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// import API from '../api/index'
import * as action from '../store/actions/employees'

import * as I from '../types'
import countIntersections from '../utils/count-intersections'
import isNumber from '../utils/is-number'

import Table from '../components/Table'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

export const EMPLOYEE_ID = 'employeeId'

const MIN_EMPLOYEES_ON_DUTY = 3

const workLogSelector = (s: I.AppState) => s.workLog

function EmployeeWorkLogTable(p: { workLog: I.WorkLogItem[]; employeeId: number }) {
  const currentEmployeeLog = p.workLog.filter(log => log.employeeId === p.employeeId)
  const restEmployeesPresenceTimeRanges: [number, number][] = p.workLog
    .filter(log => log.employeeId !== p.employeeId)
    .map(({ from, to }) => [from, to])

  if (currentEmployeeLog.length === 0) {
    return <NotFound />
  }

  const logWithViolationIds = findViolationIds(currentEmployeeLog, restEmployeesPresenceTimeRanges)

  return (
    <>
      <Link to='/employees'>to employees</Link>
      <h1>Employee ID: {p.employeeId}</h1>
      <Table
        columns={['ID', 'Entrance', 'Exit']}
        rows={currentEmployeeLog.map(log => {
          return [`${log.id}`, `${formatDate(log.from)}`, `${formatDate(log.to)}`]
        })}
        renderCell={({ value, cellIndex, rowId }) => {
          if (cellIndex === 2 && logWithViolationIds.includes(parseInt(rowId))) {
            return <span style={{ color: 'red' }}>{value}</span>
          }

          return value
        }}
      />
    </>
  )
}

function RenderEmployeePage(p: { employeeId: number }) {
  const dispatch = useDispatch()
  const workLog = useSelector(workLogSelector)

  useEffect(() => {
    // API.get.workLogs().then(response => dispatch(setWorkLog(response)))
    dispatch(action.workLog.fetch())
  }, [dispatch])

  if (!workLog) {
    return <Loading />
  }

  return <EmployeeWorkLogTable workLog={workLog} employeeId={p.employeeId} />
}

export default function EmployeePage() {
  const { employeeId } = useParams<typeof EMPLOYEE_ID>()
  const parsedEmployeeId = parseInt(employeeId || '', 10)

  if (!isNumber(employeeId || '')) {
    return <NotFound />
  }

  return <RenderEmployeePage employeeId={parsedEmployeeId} />
}

const findViolationIds = (employeeLog: I.WorkLogItem[], collegesLog: Array<[number, number]>): number[] =>
  employeeLog.reduce<number[]>((acc, { to, id }) => {
    if (countIntersections(to, collegesLog) < MIN_EMPLOYEES_ON_DUTY) {
      acc.push(id)
    }

    return acc
  }, [])

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleString('ru-RU')
}
