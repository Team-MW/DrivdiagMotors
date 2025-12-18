import React from 'react'
import SEO from '../components/SEO.jsx'
import GaragesHero from '../components/GaragesHero.jsx'
import GarageFinder from '../components/GarageFinder.jsx'
import Footer from '../components/Footer.jsx'

export default function Garages() {
  return (
    <>
      <SEO
        title="Trouver un Garage"
        description="Localisez votre garage Drive Diag Motors à Toulouse (31300). Adresse : 46 chemin Teynier. Prenez rendez-vous facilement."
      />
      <GaragesHero />
      <GarageFinder />
      <Footer />
    </>
  )
}
