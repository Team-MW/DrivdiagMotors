import React, { useEffect } from 'react';
import SEO from '../components/SEO.jsx';
import { BUSINESS } from '../config.js';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    if (!document.querySelector('script[data-tally-script]')) {
      const s = document.createElement('script');
      s.src = 'https://tally.so/widgets/embed.js';
      s.async = true;
      s.setAttribute('data-tally-script', 'true');
      document.body.appendChild(s);
    }
  }, []);
  return (
    <div className="page">
      <SEO title="Contact – Drive Diag Motors" description="Contactez-nous pour un devis ou une question." path="/contact" />

      <section className="section light">
        <div className="container">
          <h1>Contact</h1>
          <h2>Coordonnées</h2>
          <ul className="cards">
            <li>
              <h3>Adresse</h3>
              <p>{BUSINESS.address}{BUSINESS.city ? `, ${BUSINESS.city}` : ''}</p>
            </li>
            <li>
              <h3>Téléphone</h3>
              <p><a className="cta" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a></p>
            </li>
            <li>
              <h3>Devis</h3>
              <p>Décrivez votre besoin, nous répondons rapidement.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Nous écrire</h2>
          <div className="tally-embed">
            <iframe
              data-tally-src="https://tally.so/r/A7KzDy?transparentBackground=1&hideTitle=1"
              loading="lazy"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulaire de contact"
            />
          </div>
          <div className="actions" style={{marginTop:16}}>
            <Link className="secondary" to="/services">Voir les services</Link>
            <Link className="cta" to="/reservation">Réserver</Link>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <h2>Nous trouver</h2>
          <div className="map">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.403%2C43.56%2C1.53%2C43.68&layer=mapnik&marker=43.60%2C1.45"
              title="Carte – localisation"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
