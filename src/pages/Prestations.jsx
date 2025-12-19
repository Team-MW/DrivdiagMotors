import React from 'react'
import SEO from '../components/SEO.jsx'
import Services from '../components/Services.jsx'
import Footer from '../components/Footer.jsx'

export default function Prestations() {
  return (
    <>
      <SEO
        title="Nos Prestations"
        description="Découvrez nos prestations d'entretien et de réparation automobile : vidange, distribution, freinage, batterie, climatisation et carrosserie."
      />
      <section className="section prestationsPage">
        <div className="section__inner">
          <h1 className="prestationsPage__title">RÉSERVEZ NOS SERVICES</h1>
          <p className="prestationsPage__intro">
            Les garages Drive Diag Motors répondent à tous vos besoins d&apos;entretien et de réparation.<br />
            <strong>Taux horaire : 75 € TTC</strong>
          </p>
        </div>
      </section >

      <Services />
      <Footer />
    </>
  )
}


