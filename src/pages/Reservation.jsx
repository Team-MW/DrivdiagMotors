import React from 'react';
import SEO from '../components/SEO.jsx';
import { BUSINESS } from '../config.js';
import { Link } from 'react-router-dom';

export default function Reservation(){
  const waHref = BUSINESS.whatsappNumber
    ? `https://wa.me/${BUSINESS.whatsappNumber}?text=${BUSINESS.whatsappMessage}`
    : null;
  return (
    <div className="page">
      <SEO title="Réservation – Drive Diag Motors" description="Réservez une intervention: mécanique, diagnostic, vidange, frein." path="/reservation" />

      <section className="section light">
        <div className="container">
          <h1>Réservation</h1>
          <h2>Choisissez votre intervention</h2>
          <ul className="cards">
            <li>
              <h3>Mécanique auto</h3>
              <p>Entretien et réparations courantes pour rouler l'esprit tranquille.</p>
            </li>
            <li>
              <h3>Diagnostic</h3>
              <p>Lecture OBD et analyse électronique pour trouver l'origine des pannes.</p>
            </li>
            <li>
              <h3>Vidange</h3>
              <p>Huile et filtres, avec recommandations adaptées à votre véhicule.</p>
            </li>
            <li>
              <h3>Frein</h3>
              <p>Contrôle et remplacement plaquettes/disques pour une sécurité optimale.</p>
            </li>
          </ul>
          <div className="actions" style={{marginTop:16}}>
            <Link className="cta" to="/contact">Réserver maintenant</Link>
            {waHref && <a className="secondary" href={waHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Comment ça se passe ?</h2>
          <ul className="cards">
            <li>
              <h3>1. Demande</h3>
              <p>Vous choisissez votre prestation et proposez vos disponibilités.</p>
            </li>
            <li>
              <h3>2. Confirmation</h3>
              <p>Nous confirmons l'horaire et préparons les pièces/équipements nécessaires.</p>
            </li>
            <li>
              <h3>3. Intervention</h3>
              <p>Réalisation soignée, suivi transparent et conseils personnalisés.</p>
            </li>
            <li>
              <h3>4. Remise & conseils</h3>
              <p>Remise du véhicule, compte-rendu et recommandations d'entretien.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <h2>Informations pratiques</h2>
          <ul className="grid">
            <li>
              <h3>Adresse</h3>
              <p>{BUSINESS.address}{BUSINESS.city ? `, ${BUSINESS.city}` : ''}</p>
            </li>
            <li>
              <h3>Contact</h3>
              <p><a className="cta" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a></p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
