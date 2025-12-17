import React from 'react';
import SEO from '../components/SEO.jsx';

export default function Services() {
  return (
    <div className="page">
      <SEO title="Services – Drivdiag Motors" description="Découvrez nos services de diagnostic et entretien automobile." path="/services" />
      <h1>Services</h1>
      <h2>Nos expertises</h2>
      <p>
        Nous proposons des prestations complètes : diagnostic électronique, reprogrammation moteur, 
        entretien préventif, et assistance technique.
      </p>
      <img src="https://picsum.photos/800/400" alt="Illustration d'un véhicule" loading="lazy" />
    </div>
  );
}
