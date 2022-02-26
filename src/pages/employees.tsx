import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// import API from '../api/index'
import * as action from '../store/actions/employees'

import Table from '../components/Table'
import Loading from '../components/Loading'

import * as I from '../types'

const employeesSelector = (s: I.AppState) => s.employees

export default function EmployeesPage() {
  const dispatch = useDispatch()
  const employees = useSelector(employeesSelector)

  useEffect(() => {
    // API.get.employees().then(response => dispatch(setEmployees(response)))
    dispatch(action.employees.fetch())
  }, [dispatch])

  if (!employees) {
    return <Loading />
  }

  const sortedEmployees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName))

  return (
    <Table
      columns={['ID', 'Full Name', 'Birth Date']}
      rows={sortedEmployees.map(employee => {
        const { id, firstName, lastName, middleName, birthDate } = employee
        const fullName = `${lastName} ${firstName} ${middleName}`
        const formattedDate = new Date(birthDate).toLocaleDateString('ru-RU')

        return [`${id}`, fullName, formattedDate]
      })}
      renderCell={({ value, cellIndex, rowId }) => {
        if (cellIndex === 1) {
          return <Link to={`/employees/${rowId}`}>{value}</Link>
        }

        return value
      }}
    />
  )
}
