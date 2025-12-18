import React from 'react'

function StarRow({ value = 4.6 }) {
  return (
    <div className="starsRow">
      <span className="starsRow__icons">★★★★★</span>
      <strong className="starsRow__value">{value}</strong>
      <span className="starsRow__count">33 avis</span>
    </div>
  )
}

function PinIcon(props){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function ClockIcon(props){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </svg>
  )
}
function CreditIcon(props){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M2 10h20"/>
    </svg>
  )
}
function ArrowRightMini(props){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7"/>
      <path d="M20 12H4"/>
    </svg>
  )
}

const garages = [
  {
    name: 'CARROSSERIE CHANZY',
    rating: 4.6,
    address: '36 Rue De La Folie Regnault, 75011, Paris',
    hours: '08:30–12:30 14:00–18:00',
    payments: 'Carte de crédit, Chèque, Espèces',
    services: 'Carrosserie, Demande personnalisée'
  },
  {
    name: 'MOTRIO PARIS 19 – SAS EJLJ',
    rating: 4.5,
    address: '54 Rue De Mouzaïa, 75019, Paris',
    hours: '08:30–12:30 14:00–18:00',
    payments: 'Carte de crédit, Espèces',
    services: 'Entretien, Climatisation, Batterie, Freinage, Carrosserie, Pneumatiques…'
  }
]

export default function GarageFinder(){
  return (
    <section className="section garageFinder">
      <div className="section__inner">
        <div className="garageFinder__grid">
          <div className="garageFinder__list">
            {garages.map((g, i) => (
              <article className="garageCard" key={i}>
                <div className="garageCard__header">
                  <h3 className="garageCard__title">{g.name}</h3>
                  <StarRow value={g.rating} />
                </div>
                <ul className="garageCard__facts">
                  <li><PinIcon/> {g.address}</li>
                  <li><ClockIcon/> {g.hours}</li>
                  <li><CreditIcon/> {g.payments}</li>
                  <li>{g.services}</li>
                </ul>
                <button className="garageCard__cta btn btn--primary"><span>Sélectionner ce garage</span><span className="btn__icon"><ArrowRightMini/></span></button>
              </article>
            ))}
          </div>
          <div className="garageFinder__map">
            <iframe
              className="garageFinder__mapFrame"
              title="Carte des garages à proximité"
              src="https://www.google.com/maps?q=Paris%2C%20France&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
