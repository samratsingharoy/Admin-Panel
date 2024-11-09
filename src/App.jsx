import React from 'react'
import Home from "./pages/Home"
import Password from './pages/Password'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password" element={<Password />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
