import { Link } from 'react-router-dom'
import { useParams } from 'react-router'


export const EMPLOYEE_ID = 'id'

export default function EmployeePage() {
  const { id } = useParams<typeof EMPLOYEE_ID>()
  
  return (
    <>
      <Link to="/employees">to employees</Link>
      <h1>Employee ID: {id}</h1>
      
    </>
  )
}
