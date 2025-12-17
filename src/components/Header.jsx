import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Accueil Drivdiag Motors">Drivdiag Motors</Link>

        <nav className="nav-desktop" aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link className="cta" to="/contact">Demander un devis</Link>
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
          <Link className="cta" to="/contact" onClick={() => setOpen(false)}>Demander un devis</Link>
        </div>
      </div>
    </header>
  );
}
