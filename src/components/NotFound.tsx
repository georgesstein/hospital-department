import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <Link to={"/employees"}>to employees</Link>
    <h1>Page not found</h1>
    </>
  )
}