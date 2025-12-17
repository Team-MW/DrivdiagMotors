import React from 'react';
import SEO from '../components/SEO.jsx';

export default function Services() {
  return (
    <div className="page">
      <SEO title="Services – Drive Diag Motors" description="Mécanique auto, Diagnostic, Vidange, Frein à Toulouse." path="/services" />
      <h1>Services</h1>
      <h2>Nos expertises</h2>
      <p>
        Interventions rapides et fiables: mécanique auto, diagnostic, vidange et freinage. Nous vous conseillons la
        meilleure option selon votre véhicule et votre usage.
      </p>
      <ul className="grid">
        <li>
          <h3>Mécanique auto</h3>
          <p>Entretien courant et réparations pour garder votre voiture performante et sûre.</p>
        </li>
        <li>
          <h3>Diagnostic</h3>
          <p>Lecture OBD et analyse électronique, pour identifier rapidement l'origine des pannes.</p>
        </li>
        <li>
          <h3>Vidange</h3>
          <p>Remplacement huile et filtres selon les préconisations constructeur.</p>
        </li>
        <li>
          <h3>Frein</h3>
          <p>Contrôle complet, remplacement plaquettes/disques, purge du circuit si nécessaire.</p>
        </li>
      </ul>
    </div>
  );
}
