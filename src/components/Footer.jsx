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
function SnapchatIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.003 3.6c-.66 0-1.74.15-2.34.81-.54.6-.66 1.47-.6 1.8.06.39-.06.63-.33.81-.24.15-.45.06-.57 0-.48-.21-1.35-.39-1.89.21-.29.33-.29.84-.23 1.25.04.28 0 .58-.45.82-.45.24-1.29.21-1.62.9-.17.36-.08.92.23 1.34.21.27.18.54-.03.75-.42.42-1.32 1.32-.42 2.52.48.66 1.5.39 1.95.27.39-.09.6.15.54.42-.06.27-.3.9-.39 1.11-.21.48.06 1.14.72 1.35.63.21 1.53.06 2.01-.27.27-.18.6-.09.78.18.15.21.36.75 1.5.75 1.08 0 1.29-.45 1.44-.66.21-.3.57-.36.81-.21h.03c.24-.15.6-.09.81.21.15.21.36.66 1.44.66 1.14 0 1.35-.54 1.5-.75.18-.27.51-.36.78-.18.48.33 1.38.48 2.01.27.66-.21.93-.87.72-1.35-.09-.21-.33-.84-.39-1.11-.06-.27.15-.51.54-.42.45.12 1.47.39 1.95-.27.9-1.2-.03-2.13-.42-2.52-.21-.21-.24-.48-.03-.75.3-.42.39-.98.23-1.34-.33-.69-1.17-.66-1.62-.9-.45-.24-.49-.54-.45-.82.06-.41.06-.92-.23-1.25-.54-.6-1.41-.42-1.89-.21-.12.06-.33.15-.57 0-.27-.18-.39-.42-.33-.81.06-.33-.06-1.2-.6-1.8-.6-.66-1.68-.81-2.34-.81z" />
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
              <li><a href="tel:+33613238860">Mobile : 06 13 23 88 60</a></li>
              <li><a href="mailto:Labonneauto31@gmail.com">Labonneauto31@gmail.com</a></li>
              <li><Link to="/garages">Système de réservation en ligne</Link></li>
            </ul>
            <div className="footer__social">
              <a
                href="https://wa.me/33613238860"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="footer__socialBtn"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.snapchat.com/add/labonneauto31"
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
                className="footer__socialBtn"
              >
                <SnapchatIcon />
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
