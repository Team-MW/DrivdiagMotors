import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header.jsx'
import { AppRoutes } from './routes/index.jsx'

export default function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </HelmetProvider>
  )
}
