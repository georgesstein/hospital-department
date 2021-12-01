import { Link } from 'react-router-dom'

import Table from '../components/Table'

const COLUMNS = ['ID', 'Full Name', 'Birth Date']
const ROWS = [
  {
    id: 1,
    firstName: 'Леонид',
    lastName: 'Старокадомский',
    middleName: 'Михайлович',
    birthDate: '1875-03-27',
    phone: '+79975669545',
  },
  {
    id: 2,
    firstName: 'Владимир',
    lastName: 'Демихов',
    middleName: 'Петрович',
    birthDate: '1916-06-18',
    phone: '+74951263366',
  },
]

export default function EmployeesPage() {
  return (
    <>
      <Link to={`/employees/:id`}>to employee</Link>
      <Table 
        columns={COLUMNS} 
        rows={ROWS.map(employee => {
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
