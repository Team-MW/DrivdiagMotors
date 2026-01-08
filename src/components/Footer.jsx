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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.005 3.39c-3.14 0-5.83 2.14-5.83 5.37 0 1.25.5 2.16.89 2.87-.2.62-.27.87-.85.83-.54-.04-1.57-.42-2.14-.15-.82.38-.85 1.54-.03 2.18.3.23.4.6.14 1-.36.56-1.55 1.25-.56 2.84.44.71 1.77.67 2.37.52.41-.1.67.24.62.53-.1.52-.39 1.66.69 2.1.84.34 2.1.1 2.94-.38.56-.32 1.33-.31 1.88.02.5.3 1.22.75 2.52.33 1.05-.33.82-1.39.73-2.07-.06-.51.27-.86.74-.75.6.13 1.73.18 2.13-.48.97-1.59-.2-2.29-.53-2.84-.26-.41-.16-.77.13-.99.82-.64.79-1.8-.03-2.18-.57-.27-1.6-.11-2.14-.07-.58.04-.65-.21-.85-.83.39-.71.89-1.62.89-2.87 0-3.23-2.69-5.37-5.83-5.37z" />
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
                style={{ backgroundColor: '#25D366', color: '#fff', border: 'none' }}
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.snapchat.com/add/labonneauto31"
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
                className="footer__socialBtn"
                style={{
                  backgroundColor: '#FFFC00',
                  color: '#fff',
                  border: 'none',
                  textShadow: '0 1px 3px rgba(0,0,0,0.2)' // Subtle shadow for white ghost visibility
                }}
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
