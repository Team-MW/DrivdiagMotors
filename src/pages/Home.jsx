import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config.js';

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


      {/* Engagements (fond différent) */}
      <motion.section className="section bg-b" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Nos engagements</h2>
          <ul className="grid">
            <li>
              <h3>Transparence</h3>
              <p>Devis clairs, explications simples et suivi étape par étape.</p>
            </li>
            <li>
              <h3>Rapidité</h3>
              <p>Disponibilités sous 48h et délais respectés.</p>
            </li>
            <li>
              <h3>Expertise</h3>
              <p>+4 ans d’expérience en diagnostic et mécanique auto.</p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Section photo avec votre dernière image en background */}
      <motion.section className="section photo" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        style={{
          backgroundImage: "url('/muscular-car-service-worker-repairing-vehicle.jpg')"
        }}
      >
        <div className="container">
          <h2>Interventions soignées</h2>
          <p>Nous traitons chaque véhicule avec rigueur pour une sécurité et des performances optimales.</p>
          <Link className="cta" to="/reservation">Réserver une intervention</Link>
        </div>
      </motion.section>

      {/* Témoignages (fond blanc, cartes) */}
      <motion.section className="section white" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Témoignages</h2>
          <ul className="testimonials">
            <li className="testimonial-card">
              <div className="testimonial-head">
                <img className="testimonial-avatar" src="https://i.pravatar.cc/88?img=12" alt="Photo client 1" loading="lazy" />
                <div>
                  <div className="testimonial-name">Alex M.</div>
                  <div className="testimonial-role">Particulier</div>
                </div>
                <div style={{marginLeft:'auto'}} className="testimonial-stars">★★★★★</div>
              </div>
              <p className="testimonial-text">Service impeccable, diagnostic rapide et précis. Ma voiture a retrouvé toute sa puissance en une journée.</p>
            </li>
            <li className="testimonial-card">
              <div className="testimonial-head">
                <img className="testimonial-avatar" src="https://i.pravatar.cc/88?img=5" alt="Photo client 2" loading="lazy" />
                <div>
                  <div className="testimonial-name">Sonia M.</div>
                  <div className="testimonial-role">Gestionnaire de flotte</div>
                </div>
                <div style={{marginLeft:'auto'}} className="testimonial-stars">★★★★★</div>
              </div>
              <p className="testimonial-text">Équipe très pro, rapide et claire dans les explications. Parfait pour nos véhicules utilitaires.</p>
            </li>
            <li className="testimonial-card">
              <div className="testimonial-head">
                <img className="testimonial-avatar" src="https://i.pravatar.cc/88?img=32" alt="Photo client 3" loading="lazy" />
                <div>
                  <div className="testimonial-name">Rachid M.</div>
                  <div className="testimonial-role">Artisan</div>
                </div>
                <div style={{marginLeft:'auto'}} className="testimonial-stars">★★★★☆</div>
              </div>
              <p className="testimonial-text">Diagnostic fiable et devis respecté. J’ai apprécié la disponibilité et la ponctualité.</p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* CTA Contact (fond différent) */}
      <motion.section className="section bg-d" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Contact</h2>
          <p>Besoin d'un devis ou d'une prise de rendez-vous ?</p>
          <Link className="cta" to="/contact">Demander un devis</Link>
        </div>
      </motion.section>

      {/* Adresse en bas de page */}
      <motion.section className="section address" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Adresse</h2>
          <p>{BUSINESS.name}</p>
          <p>{BUSINESS.address}{BUSINESS.city ? `, ${BUSINESS.city}` : ''}</p>
          <p>Tél: <a className="cta" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a></p>
        </div>
      </motion.section>
    </div>
  );
}
