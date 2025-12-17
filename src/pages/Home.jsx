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
          backgroundImage: "url('/car-car-park.jpg')"
        }}
      >
        <div className="container">
          <h2>Interventions soignées</h2>
          <p>Nous traitons chaque véhicule avec rigueur pour une sécurité et des performances optimales.</p>
          <div className="badge-list" style={{marginTop:8}}>
            <span className="badge">Diagnostic précis</span>
            <span className="badge">Pièces de qualité</span>
            <span className="badge">Délais respectés</span>
          </div>
          <ul className="cards" style={{marginTop:16}}>
            <li>
              <h3>Contrôles essentiels</h3>
              <p>Freinage, niveaux, électronique: un passage complet pour repartir serein.</p>
            </li>
            <li>
              <h3>Compte‑rendu clair</h3>
              <p>Explications simples, priorités et recommandations adaptées à votre usage.</p>
            </li>
          </ul>
          <div className="actions" style={{marginTop:16}}>
            <Link className="cta" to="/reservation">Réserver une intervention</Link>
          </div>
        </div>
      </motion.section>

      

      {/* Aperçu des services */}
      <motion.section className="section dark" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="container">
          <h2>Nos services</h2>
          <p>Entretien, diagnostic, vidange, freinage: interventions soignées et transparentes.</p>
          <ul className="cards">
            <li>
              <h3>Mécanique auto</h3>
              <p>Entretien courant et réparations pour une voiture fiable.</p>
              <div className="badge-list">
                <span className="badge">Courroie</span>
                <span className="badge">Suspension</span>
                <span className="badge">Échappement</span>
              </div>
            </li>
            <li>
              <h3>Diagnostic</h3>
              <p>Lecture OBD et analyse électronique pour cibler la panne.</p>
              <div className="badge-list">
                <span className="badge">OBD</span>
                <span className="badge">Capteurs</span>
                <span className="badge">Électronique</span>
              </div>
            </li>
            <li>
              <h3>Vidange</h3>
              <p>Huile et filtre selon préconisations constructeur.</p>
              <div className="badge-list">
                <span className="badge">Huile</span>
                <span className="badge">Filtre</span>
                <span className="badge">Contrôles</span>
              </div>
            </li>
            <li>
              <h3>Frein</h3>
              <p>Contrôle et remplacement plaquettes/disques, purge si besoin.</p>
              <div className="badge-list">
                <span className="badge">Plaquettes</span>
                <span className="badge">Disques</span>
                <span className="badge">Purge</span>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>

      

      

      

      {/* Carte */}
      <motion.section className="section photo" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        style={{ backgroundImage: "url('/top-view-man-repairing-car.jpg')" }}
      >
        <div className="container">
          <h2>Nous trouver</h2>
          <div className="map">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.403%2C43.56%2C1.53%2C43.68&layer=mapnik&marker=43.60%2C1.45"
              title="Carte – localisation"
            />
          </div>
        </div>
      </motion.section>

      {/* Témoignages (fond noir, bas de page) */}
      <motion.section className="section dark" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
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

      
    </div>
  );
}
