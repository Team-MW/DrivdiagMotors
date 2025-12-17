import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BUSINESS } from '../config.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label={`Accueil ${BUSINESS.name}`}>{BUSINESS.name}</Link>

        <nav className="nav-desktop" aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/reservation">Réservation</NavLink>
          <Link className="cta" to="/contact">Demander un devis</Link>
          {BUSINESS.whatsappNumber && (
            <a className="cta" href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${BUSINESS.whatsappMessage}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          )}
          <a className="phone-link" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}>{BUSINESS.phone}</a>
        </nav>

        <button className={`burger ${open ? 'open' : ''}`} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-panel ${open ? 'show' : ''}`} onClick={() => setOpen(false)}>
        <div className="mobile-panel-inner" onClick={e => e.stopPropagation()}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/reservation" onClick={() => setOpen(false)}>Réservation</NavLink>
          <Link className="cta" to="/contact" onClick={() => setOpen(false)}>Demander un devis</Link>
          {BUSINESS.whatsappNumber && (
            <a className="cta" href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${BUSINESS.whatsappMessage}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>WhatsApp</a>
          )}
        </div>
      </div>
    </header>
  );
}
