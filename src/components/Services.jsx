import React from 'react'

function ArrowRightMini(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

// Placeholder line icons
const Icons = {
  oil: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <path d="M18 40c10-10 22-4 28-16"/>
      <path d="M40 20c0 4-4 8-8 8s-8-4-8-8" stroke="#111"/>
      <circle cx="44" cy="28" r="6" stroke="#e10012" fill="none"/>
    </svg>
  ),
  belt: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <circle cx="22" cy="32" r="10"/>
      <circle cx="46" cy="32" r="6"/>
      <path d="M22 32h18"/>
    </svg>
  ),
  brake: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <path d="M14 32a18 18 0 1036 0"/>
      <path d="M50 24a8 8 0 010 16"/>
      <circle cx="32" cy="32" r="3"/>
    </svg>
  ),
  battery: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <rect x="12" y="22" width="40" height="24" rx="4"/>
      <path d="M20 34h8M24 30v8"/>
      <path d="M40 30h8"/>
    </svg>
  ),
  ac: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <circle cx="28" cy="32" r="10" stroke="#111"/>
      <path d="M28 22v20M18 32h20"/>
      <path d="M42 26c4 2 6 4 6 6s-2 4-6 6"/>
    </svg>
  ),
  tire: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <rect x="24" y="16" width="16" height="32" rx="8"/>
      <path d="M24 24h16M24 40h16"/>
    </svg>
  ),
  wiper: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <path d="M10 40c8-8 36-8 44 0"/>
      <path d="M22 40l14-12" stroke="#111"/>
    </svg>
  ),
  body: () => (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none" stroke="#e10012" strokeWidth="2.5">
      <path d="M8 40h48l-4-8-10-6H22l-8 6-6 8z"/>
      <circle cx="20" cy="40" r="4" stroke="#111"/>
      <circle cx="44" cy="40" r="4" stroke="#111"/>
    </svg>
  ),
}

const services = [
  { id: 'oil', title: 'Vidange et Filtre à huile', price: '156€ TTC*' },
  { id: 'belt', title: 'Distribution et Pompe à eau', price: '611€ TTC*' },
  { id: 'brake', title: 'Freinage', price: '104€ TTC*' },
  { id: 'battery', title: 'Batterie', price: '274€ TTC*' },
  { id: 'ac', title: 'Climatisation', price: '106€ TTC*' },
  { id: 'tire', title: 'Pneumatiques', price: '288€ TTC*' },
  { id: 'wiper', title: "Balais d'essuie-glace", price: '55€ TTC*' },
  { id: 'body', title: 'Carrosserie', price: 'Prix sur demande €*' },
]

export default function Services() {
  return (
    <section id="prestations" className="section services">
      <div className="section__inner">
        <h2 className="section__title">Prestations atelier</h2>
        <div className="services__grid">
          {services.map((s) => {
            const Icon = Icons[s.id] || Icons.oil
            return (
              <article className="serviceCard" key={s.id}>
                <div className="serviceCard__content">
                  <div className="serviceCard__text">
                    <h3 className="serviceCard__title">{s.title}</h3>
                    <div className="serviceCard__price">{s.price}</div>
                  </div>
                  <div className="serviceCard__icon">
                    <Icon />
                  </div>
                </div>
                <button className="serviceCard__action" aria-label="Voir la prestation">
                  <ArrowRightMini />
                </button>
              </article>
            )
          })}
        </div>
        <div className="services__more">
          <a href="#prestations" className="services__link">
            Voir toutes nos prestations atelier
            <span className="services__linkIcon" aria-hidden="true">⟲</span>
          </a>
        </div>
        <div className="services__note">*Prix moyens — <a href="#infos">pour en savoir plus</a></div>
      </div>
    </section>
  )
}
