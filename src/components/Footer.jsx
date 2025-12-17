import React from 'react';
import { BUSINESS } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>{BUSINESS.name}</h3>
          <p>Diagnostic et services automobiles.</p>
          <p>{BUSINESS.address}{BUSINESS.city ? `, ${BUSINESS.city}` : ''}</p>
          <p>Tél: <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a></p>
        </div>
        <div className="footer-col">
          <h4>Suivez-nous</h4>
          <ul>
            <li><a href="#" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Restez informé de nos offres et conseils.</p>
          <a className="cta" href="/contact">S'inscrire</a>
        </div>
      </div>
    </footer>
  );
}
