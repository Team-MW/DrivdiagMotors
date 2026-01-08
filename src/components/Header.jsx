import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logoLine from '../assets/logo-drive-diag-motors-ligne.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <Link to="/" className="siteHeader__brand" onClick={closeMenu}>
          <img src={logoLine} alt="Drive Diag Motors" style={{ height: '40px', width: 'auto' }} />
        </Link>

        <button
          type="button"
          className="siteHeader__menuBtn"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? 'Fermer' : 'Menu'}
        </button>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90, // Below nav (100)
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(2px)'
            }}
            onClick={closeMenu}
          />
        )}

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
