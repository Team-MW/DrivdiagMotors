import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <Link to="/" className="siteHeader__brand">
          Drive Diag Motors
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
          <a href="/#prestations" onClick={closeMenu}>Prestations (Home)</a>
          <Link to="/prestations" onClick={closeMenu}>Nos prestations</Link>
          <a href="/#highlights" onClick={closeMenu}>Services +</a>
          <a href="/#reasons" onClick={closeMenu}>Pourquoi nous</a>
          <Link to="/garages" onClick={closeMenu}>Trouver un garage</Link>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
