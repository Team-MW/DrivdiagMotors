import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import { Link } from 'react-router-dom';

const section = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div>
      <SEO title="Accueil – Drive Diag Motors" description="Accueil du site Drive Diag Motors : hero, services, témoignages et contact." path="/" />

      <motion.section className="section light hero" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container hero-inner">
          <h1>Diagnostic auto expert, rapide et fiable</h1>
          <p>
            Gagnez du temps et de la sérénité: nous identifions vos pannes avec précision et proposons des solutions
            claires pour remettre votre véhicule au top.
          </p>
          <div className="actions">
            <Link className="cta" to="/contact">Demander un devis</Link>
            <Link className="secondary" to="/services">Nos services</Link>
          </div>
        </div>
      </motion.section>

      <motion.section className="section dark" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Services</h2>
          <p>OBD, reprogrammation, entretien préventif et plus encore.</p>
          <ul className="grid">
            <li>
              <h3>Diagnostic électronique</h3>
              <p>Analyse complète des calculateurs et capteurs.</p>
            </li>
            <li>
              <h3>Reprogrammation</h3>
              <p>Optimisation moteur et corrections logicielles.</p>
            </li>
            <li>
              <h3>Entretien</h3>
              <p>Révisions et contrôles périodiques.</p>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section className="section light" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Témoignages</h2>
          <blockquote>
            "Service impeccable, diagnostic rapide et précis." – Alex
          </blockquote>
        </div>
      </motion.section>

      <motion.section className="section dark" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Contact</h2>
          <p>Besoin d'un devis ou d'une prise de rendez-vous ?</p>
          <Link className="cta" to="/contact">Demander un devis</Link>
        </div>
      </motion.section>
    </div>
  );
}
