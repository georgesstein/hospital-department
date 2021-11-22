import { Link } from 'react-router-dom'

export default function EmployeesPage() {
  return (
    <>
      <Link to={`/employees/:id`}>to employee</Link>
      <h1>Hello, it's Employees Page</h1>
    </>
  )
}
