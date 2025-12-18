import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoLine from '../assets/logo-drive-diag-motors-ligne.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <Link to="/" className="siteHeader__brand">
          <img src={logoLine} alt="Drive Diag Motors" style={{ height: '40px', width: 'auto' }} />
        </Link>

        <button
          type="button"
          className="siteHeader__menuBtn"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          Menu
        </button>

        <nav className={`siteHeader__nav ${isOpen ? 'is-open' : ''}`}>
          <a href="/#prestations" onClick={closeMenu}>Prestations</a>
          <Link to="/prestations" onClick={closeMenu}>Nos prestations</Link>
          <Link to="/garages" onClick={closeMenu}>Trouver un garage</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
