import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import EmployeesPage from './employees'
import EmployeePage from './employee'
import NotFound from '../components/NotFound'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/employees/:id" element={<EmployeePage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/employees" />} />
      </Routes>
    </Router>
  )
}