import React from 'react'
import Header from './components/Header.jsx'
import { AppRoutes } from './routes/index.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  )
}
