import React from 'react'
import { Link } from 'react-router-dom'

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

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="brand">MOTRIO</div>
          <h1 className="hero__title">votre voiture, notre moteur</h1>
          <p className="hero__subtitle">Depuis plus de 20 ans, notre réseau de plus de 1400 réparateurs en France se tient à votre disposition.</p>

          <div className="hero__ctaRow">
            <a href="#rdv" className="btn btn--primary">
              <span>Prendre un rendez-vous</span>
              <span className="btn__icon"><ArrowRightIcon /></span>
            </a>
          </div>

          <div className="hero__rating">
            <div className="rating__logo" aria-label="Google">G</div>
            <div className="rating__stars" aria-hidden="true">★★★★★</div>
            <strong className="rating__score">4.6</strong>
            <span className="rating__count">(parmi 6397 avis)</span>
          </div>
        </div>

        <div className="hero__right">
          <img src="/hero-placeholder.svg" alt="Portrait" className="hero__image" />
        </div>

        <div className="hero__topActions">
          <Link to="/garages" className="pill pill--primary"><PinIcon /> <span>Trouver un garage</span></Link>
          <button className="pill pill--dark">Menu</button>
        </div>
      </div>
    </section>
  )
}
