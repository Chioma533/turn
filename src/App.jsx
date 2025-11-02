import Home from "./pages/HomePage/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WaitlistHome from "./pages/waitlist/WaitlistHome"
import WaitlistAuth from "./pages/auth/WaitlistAuth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/waitlist' element={<WaitlistHome />} />
        <Route path="/join" element={<WaitlistAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App