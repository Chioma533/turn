import Home from "./pages/HomePage/Home"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from "./pages/thank-you/ThankYou"
import Waitlist from "./pages/waitlist/Waitlist"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import DashboardPage from "./pages/dashboard/DashboardPage"
import DashboardLayout from "./components/layouts/DashboardLayout"
import SimulationPage from "./pages/Simulation/SimulationPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />



        <Route path="*" element={<Navigate to='/login' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App