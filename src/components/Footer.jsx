import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return <span className="footer__logo">MOTRIO</span>
}

function FacebookIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 20v-7h2.5l.5-3H13V8.5c0-.9.3-1.5 1.7-1.5H16V4.1C15.7 4 14.7 4 13.6 4 11.1 4 9.5 5.5 9.5 8.1V10H7v3h2.5v7h3.5z"/>
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function YoutubeIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 7.1s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C17.7 3.5 12 3.5 12 3.5h0s-5.7 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 5.5.5 7.1.5 7.1S.3 9 .3 10.8v1.6C.3 14.1.5 16 .5 16s.2 1.6.9 2.3c.9.9 2.1.9 2.7 1 2 .2 7.9.3 7.9.3s5.7 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.6v-1.6c0-1.8-.2-3.7-.2-3.7zM9.8 14.6V7.9l6.2 3.4-6.2 3.3z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="footer__tag">Votre voiture, notre moteur.</p>
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
              <li><a href="#">Vidange</a></li>
              <li><a href="#">Freinage</a></li>
              <li><a href="#">Batterie</a></li>
              <li><a href="#">Pneumatiques</a></li>
              <li><a href="#">Carrosserie</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list">
              <li><a href="tel:+33123456789">+33 1 23 45 67 89</a></li>
              <li><a href="mailto:contact@motrio.fr">contact@motrio.fr</a></li>
              <li><Link to="/garages">Trouver un garage</Link></li>
            </ul>
            <div className="footer__social">
              <a href="#" aria-label="Facebook" className="footer__socialBtn"><FacebookIcon/></a>
              <a href="#" aria-label="Instagram" className="footer__socialBtn"><InstagramIcon/></a>
              <a href="#" aria-label="YouTube" className="footer__socialBtn"><YoutubeIcon/></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Cookies</a>
          </div>
          <div className="footer__copy">© {new Date().getFullYear()} Motrio. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  )
}
