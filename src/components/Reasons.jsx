import React from 'react'

function Badge({ variant = 'red', lines = ['1 an', 'sur toutes', 'les pièces', 'détachées'] }) {
  return (
    <div className={`reasonBadge reasonBadge--${variant}`} aria-label={`Garantie ${lines[0]}`}>
      <div className="reasonBadge__head">Garantie</div>
      <div className="reasonBadge__body">
        <div className="reasonBadge__big">1<small>an</small></div>
        <div className="reasonBadge__small">
          {lines.slice(1).map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    n: '01',
    title: 'Des interventions de qualité même sous garantie',
    text:
      "Le garage MOTRIO prend en charge toutes les interventions d'entretien sur tous les véhicules, y compris ceux sous garantie.",
  },
  {
    n: '02',
    title: 'Des tarifs compétitifs',
    text: "Un réseau de professionnels à votre disposition, partout, à tout moment, au juste prix.",
  },
  {
    n: '03',
    title: 'Des techniciens en formation continue',
    text:
      "Votre sécurité est notre priorité, c’est pourquoi nous voulons que votre véhicule soit entre de bonnes mains ! Tous les techniciens MOTRIO suivent des formations en continu pour pouvoir intervenir sur les dernières technologies.",
  },
]

export default function Reasons() {
  return (
    <section id="reasons" className="section reasons">
      <div className="section__inner">
        <h2 className="reasons__title">Pourquoi MOTRIO? 3 bonnes raisons de nous choisir.</h2>
        <div className="reasons__content">
          <div className="reasons__list">
            {items.map((it) => (
              <div className="reasonItem" key={it.n}>
                <div className="reasonItem__n">{it.n}</div>
                <div className="reasonItem__text">
                  <h3 className="reasonItem__title">{it.title}</h3>
                  <p className="reasonItem__desc">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reasons__badges">
            <Badge variant="red" lines={["1 an", "sur toutes", "les pièces", "détachées"]} />
            <Badge variant="dark" lines={["1 an", "sur la main", "d'œuvre"]} />
          </div>
        </div>
      </div>
    </section>
  )
}
