import React from 'react'
import { Link } from 'react-router-dom'

function ArrowRightMini(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function Highlights() {
  return (
    <section id="highlights" className="section highlights">
      <div className="section__inner">
        <h2 className="highlights__title">Un service proche de vous, avec des produits premium pour tous</h2>
        <div className="highlights__grid">
          <article className="highlightCard highlightCard--light">
            <div className="highlightCard__body">
              <h3 className="highlightCard__title">Bilan sécurité gratuit</h3>
              <p className="highlightCard__desc">Avec 38 points de contrôle, votre sécurité est toujours garantie</p>
              <div className="highlightCard__media">
                <img src="/hero-placeholder.svg" alt="Icone contrôle" />
              </div>
            </div>
            <a href="#" className="highlightCard__cta btn btn--primary"><span>En savoir plus</span><span className="btn__icon"><ArrowRightMini /></span></a>
          </article>

          <article className="highlightCard highlightCard--primary">
            <div className="highlightCard__body">
              <h3 className="highlightCard__title">Trouver le garage MOTRIO le plus proche</h3>
              <div className="highlightCard__media">
                <img src="/hero-placeholder.svg" alt="Garage" />
              </div>
            </div>
            <Link to="/garages" className="highlightCard__cta btn btn--invert"><span>Trouver un garage</span><span className="btn__icon"><ArrowRightMini /></span></Link>
          </article>

          <article className="highlightCard highlightCard--light">
            <div className="highlightCard__body">
              <h3 className="highlightCard__title">MOTRIO, la meilleure qualité au meilleur prix</h3>
              <div className="highlightCard__media">
                <img src="/hero-placeholder.svg" alt="Produits" />
              </div>
            </div>
            <a href="#" className="highlightCard__cta btn btn--primary"><span>En savoir plus</span><span className="btn__icon"><ArrowRightMini /></span></a>
          </article>
        </div>
      </div>
    </section>
  )
}
