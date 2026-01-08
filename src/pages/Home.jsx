import React from 'react'
import SEO from '../components/SEO.jsx'
import Hero from '../components/Hero.jsx'
import SnapchatPromo from '../components/SnapchatPromo.jsx'
import Services from '../components/Services.jsx'

import Highlights from '../components/Highlights.jsx'
import Reasons from '../components/Reasons.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <SEO title="Accueil" />
      <Hero />
      <SnapchatPromo />
      <Services />

      <Highlights />
      <Reasons />
      <Testimonials />
      <Footer />
    </>
  )
}
