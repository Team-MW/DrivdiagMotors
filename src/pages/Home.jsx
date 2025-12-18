import React from 'react'
import SEO from '../components/SEO.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Promo from '../components/Promo.jsx'
import Highlights from '../components/Highlights.jsx'
import Reasons from '../components/Reasons.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <SEO title="Accueil" />
      <Hero />
      <Services />
      <Promo />
      <Highlights />
      <Reasons />
      <Testimonials />
      <Footer />
    </>
  )
}
