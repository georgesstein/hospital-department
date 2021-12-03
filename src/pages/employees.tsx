import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import API from '../api/index'
import * as I from '../DTO'

import Table from '../components/Table'
import Loading from '../components/Loading'

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<I.Employee[]>()

  useEffect(() => {
    API.get.employees().then(response => setEmployees(response))
  }, [])

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
