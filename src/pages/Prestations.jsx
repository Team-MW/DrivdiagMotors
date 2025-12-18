import React from 'react'
import Services from '../components/Services.jsx'
import Footer from '../components/Footer.jsx'

export default function Prestations() {
  return (
    <>
      <section className="section prestationsPage">
        <div className="section__inner">
          <h1 className="prestationsPage__title">RÉSERVEZ NOS SERVICES</h1>
          <p className="prestationsPage__intro">
            Les garages Drive Diag Motors répondent à tous vos besoins d&apos;entretien et de réparation.
            Découvrez nos prestations atelier, nos prix moyens TTC* ainsi que les services adaptés à votre véhicule.
          </p>
        </div>
      </section>

      <Services />
      <Footer />
    </>
  )
}


