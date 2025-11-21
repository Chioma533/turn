import Home from "./pages/HomePage/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WaitlistHome from "./pages/waitlist/WaitlistHome"
import ThankYou from "./pages/thank-you/ThankYou"
import Waitlist from "./pages/waitlist/Waitlist"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/waitlist' element={<WaitlistHome />} /> */}
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App