import React from 'react';
import SEO from '../components/SEO.jsx';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="page">
      <SEO title="Portfolio – Drive Diag Motors" description="Quelques réalisations et cas clients." path="/portfolio" />

      <section className="section light">
        <div className="container">
          <h1>Portfolio</h1>
          <h2>Études de cas</h2>
          <p>Une sélection d'interventions qui illustrent notre méthodologie et notre exigence de qualité.</p>
          <ul className="cards">
            <li>
              <h3>Diagnostic moteur – perte de puissance</h3>
              <p>Recherche de panne via OBD, contrôle capteurs, essai routier. Remplacement capteur défectueux et réinitialisation.</p>
              <div className="badge-list">
                <span className="badge">OBD</span>
                <span className="badge">Capteurs</span>
                <span className="badge">Test routier</span>
              </div>
            </li>
            <li>
              <h3>Freinage – vibration au freinage</h3>
              <p>Contrôle disques/plaquettes, mesure usure et voile. Remplacement disques + plaquettes, rodage et contrôle.</p>
              <div className="badge-list">
                <span className="badge">Disques</span>
                <span className="badge">Plaquettes</span>
                <span className="badge">Sécurité</span>
              </div>
            </li>
            <li>
              <h3>Entretien – vidange constructeur</h3>
              <p>Vidange avec huile conforme, remplacement filtre, remise à zéro indicateur d'entretien.</p>
              <div className="badge-list">
                <span className="badge">Huile</span>
                <span className="badge">Filtre</span>
                <span className="badge">Garantie</span>
              </div>
            </li>
          </ul>
          <div className="actions" style={{marginTop:16}}>
            <Link className="cta" to="/contact">Demander un devis</Link>
            <Link className="secondary" to="/services">Voir les services</Link>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq">
            <details>
              <summary>Quels délais de prise en charge ?</summary>
              <p>Selon charge atelier, souvent sous 48h. Contactez-nous pour un créneau rapide.</p>
            </details>
            <details>
              <summary>Les pièces sont-elles garanties ?</summary>
              <p>Oui, pièces et main d'œuvre sont garanties selon l'intervention.</p>
            </details>
            <details>
              <summary>Proposez-vous un devis avant travaux ?</summary>
              <p>Toujours. Vous recevez un devis clair avant toute intervention.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
