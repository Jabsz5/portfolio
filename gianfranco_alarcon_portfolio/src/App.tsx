import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectArtemis from './pages/ProjectArtemis'
import MeleeScreen from './pages/MeleeScreen'
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-artemis" element={<ProjectArtemis />} />
      <Route path="/melee-screen" element={<MeleeScreen />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
