import React from 'react';
import { BUSINESS } from '../config.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>{BUSINESS.name}</h3>
          <p>Diagnostic et services automobiles.</p>
          <ul>
            <li>{BUSINESS.address}{BUSINESS.city ? `, ${BUSINESS.city}` : ''}</li>
            <li>Tél: <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/reservation">Réserver</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Ressources</h4>
          <ul>
            <li><a href="/sitemap.xml">Sitemap</a></li>
            <li><a href="/robots.txt">Robots</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Suivez-nous</h4>
          <ul>
            <li><a href="#" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>© {year} {BUSINESS.name}. Tous droits réservés.</div>
          <div>
            Développé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer">microdidact.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
