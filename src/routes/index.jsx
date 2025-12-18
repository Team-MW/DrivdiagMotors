import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Garages from '../pages/Garages.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/garages" element={<Garages />} />
    </Routes>
  )
}
