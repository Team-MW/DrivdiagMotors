import React, { useEffect } from 'react';
import SEO from '../components/SEO.jsx';

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
      <SEO title="Contact – Drivdiag Motors" description="Contactez-nous pour un devis ou une question." path="/contact" />
      <h1>Contact</h1>
      <h2>Écrivez-nous</h2>
      <div className="tally-embed">
        <iframe
          data-tally-src="https://tally.so/r/A7KzDy?transparentBackground=1&hideTitle=1"
          loading="lazy"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Formulaire de contact"
          />
      </div>
    </div>
  );
}
