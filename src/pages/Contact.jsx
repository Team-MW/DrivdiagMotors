import React from 'react';
import SEO from '../components/SEO.jsx';

export default function Contact() {
  return (
    <div className="page">
      <SEO title="Contact – Drivdiag Motors" description="Contactez-nous pour un devis ou une question." path="/contact" />
      <h1>Contact</h1>
      <h2>Écrivez-nous</h2>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form">
        <label>
          Nom
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit" className="cta">Envoyer</button>
      </form>
    </div>
  );
}
