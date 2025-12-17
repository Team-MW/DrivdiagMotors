import React from 'react';
import SEO from '../components/SEO.jsx';

export default function Portfolio() {
  return (
    <div className="page">
      <SEO title="Portfolio – Drivdiag Motors" description="Quelques réalisations et cas clients." path="/portfolio" />
      <h1>Portfolio</h1>
      <h2>Nos réalisations</h2>
      <p>Études de cas et exemples de projets menés pour nos clients.</p>
      <img src="https://picsum.photos/seed/p/800/400" alt="Exemple de réalisation" loading="lazy" />
    </div>
  );
}
