import React from 'react'

const testimonials = [
  {
    title: 'Je recommande avec plaisir',
    text: 'Super entreprise, magnifique travail, avec un superbe accueil. Je recommande avec plaisir.',
    name: 'Lydie, Toulouse',
  },
  {
    title: 'Très satisfaite',
    text: 'Très satisfaite pour ma première visite pour une révision et réparation, très bon accueil et correct au niveau des tarifs. Contente d’avoir trouvé un garagiste à côté de chez moi, je recommande 👍',
    name: 'Catherine, Lyon',
  },
  {
    title: 'Les prix compétitifs',
    text: "L’accueil a été excellent, les prix compétitifs, et mon véhicule a été réparé rapidement et avec soin. Je recommande vivement !",
    name: 'Marwan, Paris',
  },
  {
    title: 'Un rapport qualité-prix indéniable',
    text: "Très pro et surtout un rapport qualité-prix indéniable. Merci !",
    name: 'Laura, Montpellier',
  },
]

function StarRow() {
  return (
    <div className="testiStars">
      <span className="testiStars__icons">★★★★★</span>
      <strong className="testiStars__value">4.9/5</strong>
      <span className="testiStars__count">423 avis</span>
    </div>
  )
}

function ArrowButton({ direction = 'prev' }) {
  const label = direction === 'prev' ? 'Précédent' : 'Suivant'
  return (
    <button className="testiNavBtn" aria-label={label} type="button">
      {direction === 'prev' ? '‹' : '›'}
    </button>
  )
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="section testimonials">
      <div className="section__inner">
        <div className="testiHeader">
          <h2 className="testiTitle">Paroles de clients</h2>
          <div className="testiGoogle">
            <span className="testiGoogle__logo">G</span>
            <StarRow />
          </div>
        </div>

        <div className="testiCarousel">
          <div className="testiList">
            {testimonials.map((t, i) => (
              <article className="testiCard" key={i}>
                <div className="testiCard__stars">★★★★★</div>
                <h3 className="testiCard__title">{t.title}</h3>
                <p className="testiCard__text">{t.text}</p>
                <p className="testiCard__name">{t.name}</p>
              </article>
            ))}
          </div>
          <div className="testiNav">
            <ArrowButton direction="prev" />
            <ArrowButton direction="next" />
          </div>
        </div>
      </div>
    </section>
  )
}


