import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectArtemis from './pages/ProjectArtemis'
import MeleeScreen from './pages/MeleeScreen'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import ClipSeason from './pages/ClipSeason'
import SmartCoffeeCup from './pages/SmartCoffeeCup'
import './App.css'


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-artemis" element={<ProjectArtemis />} />
      <Route path="/melee-screen" element={<MeleeScreen />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ClipSeason" element={<ClipSeason />} />
      <Route path="/smart-coffee-cup" element={<SmartCoffeeCup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
