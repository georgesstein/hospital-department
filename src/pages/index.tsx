import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import EmployeesPage from './employees'
import EmployeePage from './employee'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/employees/employee" element={<EmployeePage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Navigate to="/employees" replace={true} />

        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </Router>
  )
}