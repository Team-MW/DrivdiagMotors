import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-drive-diag-motors-ligne.png'

function Logo() {
  return <img src={logo} alt="Drive Diag Motors" className="footer__logoImg" />
}

function FacebookIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 20v-7h2.5l.5-3H13V8.5c0-.9.3-1.5 1.7-1.5H16V4.1C15.7 4 14.7 4 13.6 4 11.1 4 9.5 5.5 9.5 8.1V10H7v3h2.5v7h3.5z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function WhatsAppIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 00-8.78 14.66L2 22l5.45-1.2A10 10 0 1012 2zm0 2a8 8 0 017.12 11.6l-.22.4-.3.38a8 8 0 01-9.9 1.9l-.38-.22-.4-.22L5 19l.7-3.04-.22-.4A8 8 0 0112 4zm3.1 3.5c-.2 0-.4-.02-.58-.02-.18 0-.46.06-.7.34-.24.28-.9.88-.9 2.14 0 1.26.92 2.48 1.04 2.64.12.16 1.76 2.8 4.16 3.8 2.06.85 2.48.68 2.93.64.45-.04 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.38-1.9-1.2-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.2-.48-.4-.42-.58-.42z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="siteFooter" id="contact">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="footer__tag">
              Votre voiture, notre moteur – plus de 4 ans d&apos;expérience à Toulouse.
            </p>
          </div>

          <nav className="footer__col">
            <h4 className="footer__title">Navigation</h4>
            <ul className="footer__list">
              <li><Link to="/">Accueil</Link></li>
              <li><a href="#prestations">Prestations</a></li>
              <li><Link to="/garages">Trouver un garage</Link></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer__col">
            <h4 className="footer__title">Services</h4>
            <ul className="footer__list">
              <li><a href="#">Mécanique auto</a></li>
              <li><a href="#">Diagnostic</a></li>
              <li><a href="#">Vidange</a></li>
              <li><a href="#">Frein</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list">
              <li>46 chemin Teynier, 31300 Toulouse</li>
              <li><a href="tel:+33532026444">05 32 02 64 44</a></li>
              <li><a href="tel:+33600000000">Mobile : 06 00 00 00 00</a></li>
              <li><a href="mailto:Labonneauto31@gmail.com">Labonneauto31@gmail.com</a></li>
              <li><Link to="/garages">Système de réservation en ligne</Link></li>
            </ul>
            <div className="footer__social">
              <a href="#" aria-label="Facebook" className="footer__socialBtn"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="footer__socialBtn"><InstagramIcon /></a>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="footer__socialBtn"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to="/mentions-legales">Mentions légales</Link>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Cookies</a>
          </div>
          <div className="footer__copy">
            © {new Date().getFullYear()} Drive Diag Motors. Tous droits réservés.
            <br />
            Codé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Microdidact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
