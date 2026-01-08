import React from 'react'

function ArrowRightIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Promo() {
  return (
    <section id="promo" className="section promo">
      <div className="section__inner">
        <div className="promo__card">
          <div className="promo__left">
            <div className="promo__badge">JUSQU'AU 31 JANVIER</div>
            <p className="promo__kicker">Pour l'achat d’une batterie premium</p>
            <h3 className="promo__title">Jusqu'au 30€ de remise*</h3>
            <div className="promo__ctaRow">
              <a href="#rdv" className="btn btn--primary">
                <span>Prendre un rendez-vous</span>
                <span className="btn__icon"><ArrowRightIcon /></span>
              </a>
            </div>
            <a className="promo__conditions" href="#conditions">*voir conditions</a>
          </div>
          <div className="promo__right">
            <img src="/promo-battery.jpg" alt="Batterie Premium" className="promo__image" />
          </div>
        </div>
        <div className="promo__divider"><span /></div>
      </div>
    </section>
  )
}
