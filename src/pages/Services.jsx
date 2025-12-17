import React from 'react';
import SEO from '../components/SEO.jsx';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="page">
      <SEO title="Services – Drive Diag Motors" description="Mécanique auto, Diagnostic, Vidange, Frein à Toulouse." path="/services" />

      <section className="section light">
        <div className="container">
          <h1>Services</h1>
          <h2>Nos expertises</h2>
          <p>
            Interventions rapides et fiables: mécanique auto, diagnostic, vidange et freinage. Nous vous conseillons la
            meilleure option selon votre véhicule et votre usage.
          </p>
          <ul className="cards">
            <li>
              <h3>Mécanique auto</h3>
              <p>Entretien courant et réparations pour garder votre voiture performante et sûre.</p>
              <div className="badge-list">
                <span className="badge">Courroie</span>
                <span className="badge">Suspension</span>
                <span className="badge">Échappement</span>
              </div>
            </li>
            <li>
              <h3>Diagnostic</h3>
              <p>Lecture OBD et analyse électronique pour identifier rapidement l'origine des pannes.</p>
              <div className="badge-list">
                <span className="badge">OBD</span>
                <span className="badge">Électronique</span>
                <span className="badge">Capteurs</span>
              </div>
            </li>
            <li>
              <h3>Vidange</h3>
              <p>Remplacement huile et filtres selon les préconisations constructeur.</p>
              <div className="badge-list">
                <span className="badge">Huile</span>
                <span className="badge">Filtre</span>
                <span className="badge">Contrôles</span>
              </div>
            </li>
            <li>
              <h3>Frein</h3>
              <p>Contrôle complet, remplacement plaquettes/disques, purge si nécessaire.</p>
              <div className="badge-list">
                <span className="badge">Plaquettes</span>
                <span className="badge">Disques</span>
                <span className="badge">Purge</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Tarifs indicatifs</h2>
          <p>Transparence totale: les prix varient selon le modèle, l'état du véhicule et les pièces nécessaires.</p>
          <div style={{overflowX:'auto'}}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Prestation</th>
                  <th>Détail</th>
                  <th>Durée</th>
                  <th className="price">À partir de</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Diagnostic</td>
                  <td>Lecture OBD, contrôle visuel et test routier si besoin</td>
                  <td>30-60 min</td>
                  <td className="price">49€</td>
                </tr>
                <tr>
                  <td>Vidange</td>
                  <td>Huile + filtre (hors pièces spécifiques)</td>
                  <td>60-90 min</td>
                  <td className="price">89€</td>
                </tr>
                <tr>
                  <td>Frein</td>
                  <td>Remplacement plaquettes avant (hors pièces)</td>
                  <td>60-90 min</td>
                  <td className="price">79€</td>
                </tr>
                <tr>
                  <td>Mécanique</td>
                  <td>Entretien et réparations diverses</td>
                  <td>Selon intervention</td>
                  <td className="price">Sur devis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq">
            <details>
              <summary>Comment se passe un diagnostic ?</summary>
              <p>Nous réalisons une lecture OBD, contrôles ciblés et tests si nécessaires. Vous recevez un compte-rendu clair avec les priorités.</p>
            </details>
            <details>
              <summary>Proposez-vous un véhicule de courtoisie ?</summary>
              <p>Selon disponibilité. Indiquez-le lors de la prise de rendez-vous pour que nous puissions organiser cela.</p>
            </details>
            <details>
              <summary>Garantissez-vous les interventions ?</summary>
              <p>Oui, nos prestations sont garanties pièces et main d'œuvre selon la nature de l'intervention.</p>
            </details>
          </div>
          <div className="actions" style={{marginTop:16}}>
            <Link className="cta" to="/reservation">Réserver</Link>
            <Link className="secondary" to="/contact">Demander un devis</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
