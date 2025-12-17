import React from 'react';
import SEO from '../components/SEO.jsx';
import { BUSINESS } from '../config.js';

export default function Reservation(){
  const waHref = BUSINESS.whatsappNumber
    ? `https://wa.me/${BUSINESS.whatsappNumber}?text=${BUSINESS.whatsappMessage}`
    : null;
  return (
    <div className="page">
      <SEO title="Réservation – Drive Diag Motors" description="Réservez une intervention: mécanique, diagnostic, vidange, frein." path="/reservation" />
      <h1>Réservation</h1>
      <h2>Choisissez votre intervention</h2>
      <ul className="grid">
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
        <a className="cta" href="/contact">Réserver maintenant</a>
        {waHref && <a className="secondary" href={waHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
      </div>

      <p style={{marginTop:24}}>Adresse: {BUSINESS.address}{BUSINESS.city ? `, ${BUSINESS.city}` : ''} — Tél: <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a></p>
    </div>
  );
}
