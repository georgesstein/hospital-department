import { Link } from 'react-router-dom'

export default function EmployeePage() {
  return (
    <>
      <Link to={`/employees`}>to employees</Link>
      <h1>It's the Employee Page</h1>
    </>
  )
}
