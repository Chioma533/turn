import { Button } from "@/components/ui/button"
import Home from "./pages/HomePage/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App