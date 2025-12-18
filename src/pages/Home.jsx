import React from 'react'
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
