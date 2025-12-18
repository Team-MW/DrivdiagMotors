import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Garages from '../pages/Garages.jsx'
import Prestations from '../pages/Prestations.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prestations" element={<Prestations />} />
      <Route path="/garages" element={<Garages />} />
    </Routes>
  )
}
