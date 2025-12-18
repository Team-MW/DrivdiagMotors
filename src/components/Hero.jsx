import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/Motrio_france_product_02.svg'

function ArrowRightIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function PinIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 00-8.78 14.66L2 22l5.45-1.2A10 10 0 1012 2zm0 2a8 8 0 017.12 11.6l-.22.4-.3.38a8 8 0 01-9.9 1.9l-.38-.22-.4-.22L5 19l.7-3.04-.22-.4A8 8 0 0112 4zm3.88 3.5c-.2 0-.4-.02-.58-.02-.18 0-.46.06-.7.34-.24.28-.9.88-.9 2.14 0 1.26.92 2.48 1.04 2.64.12.16 1.76 2.8 4.16 3.8 2.06.85 2.48.68 2.93.64.45-.04 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.38-1.9-1.2-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.2-.48-.4-.42-.58-.42z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="brand">DRIVE DIAG MOTORS</div>
          <h1 className="hero__title">Votre voiture, notre moteur.</h1>
          <p className="hero__subtitle">
            Garage auto à Toulouse – 46 chemin Teynier 31300. Plus de 4 ans d&apos;expérience en mécanique,
            diagnostic et entretien.
          </p>

          <div className="hero__ctaRow">
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon />
              <span>Contactez-nous, faites un devis via WhatsApp</span>
            </a>
          </div>

          <div className="hero__rating">
            <div className="rating__logo" aria-label="Google">G</div>
            <div className="rating__stars" aria-hidden="true">★★★★★</div>
            <strong className="rating__score">4.6</strong>
            <span className="rating__count">(parmi 6397 avis)</span>
          </div>
        </div>


      </div>
    </section>
  )
}
