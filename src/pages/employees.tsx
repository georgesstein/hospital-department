import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getEmployees } from '../api/api'

import Table from '../components/Table'
import Loading from '../components/Loading'

type Employees = Array<Employee>

type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  phone: string;
}

const HEADERS = ['ID', 'Full Name', 'Birth Date']

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employees | null>(null)

  useEffect(() => {
    getEmployees().then(setEmployees)
  }, [])

  if (employees === null) {
    return <Loading />
  }
  
  return (
    <>
      <Link to={`/employees/:id`}>to employee</Link>
      <Table 
        columns={HEADERS} 
        rows={employees.map(employee => {
          const { id, firstName, lastName, middleName, birthDate} = employee
          const fullName = `${lastName} ${firstName} ${middleName}`

          return [`${id}`, fullName, birthDate]
        })}
        renderCell={({ value, cellIndex, rowId }) => {
          if (cellIndex === 1) {
            return <Link to={`/employees/${rowId}`}>{value}</Link>
          }

          return value
        }}
      />
    </>
  )
}
