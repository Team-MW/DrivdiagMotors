import React from 'react'
import { Link } from 'react-router-dom'
import oilIcon from '../assets/Icon_Oil.svg'
import acIcon from '../assets/Icon_AirCond.svg'
import bodyIcon from '../assets/Icon_CarBody_Tolerie.svg'
import distIcon from '../assets/Distribution_pzba9n.svg'
import serviceIcon1 from '../assets/Car_Service_Icons_1_nd3iyd.svg'
import serviceIcon3 from '../assets/Car_Service_Icons_3_nxm7px.svg'
import serviceIcon4 from '../assets/Car_Service_Icons_4_fypgtj.svg'

function ArrowRightMini(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Icons basés sur les assets
const Icons = {
  oil: () => <img src={oilIcon} alt="" width="72" height="72" />,
  belt: () => <img src={distIcon} alt="" width="72" height="72" />,
  brake: () => <img src={serviceIcon3} alt="" width="72" height="72" />,
  battery: () => <img src={serviceIcon1} alt="" width="72" height="72" />,
  ac: () => <img src={acIcon} alt="" width="72" height="72" />,
  tire: () => <img src={serviceIcon3} alt="" width="72" height="72" />,
  wiper: () => <img src={serviceIcon4} alt="" width="72" height="72" />,
  body: () => <img src={bodyIcon} alt="" width="72" height="72" />,
}

const services = [
  { id: 'oil', title: 'Révision (Vidange)', price: 'dès 49€ TTC*' },
  { id: 'belt', title: 'Distribution', price: 'dès 199€ TTC*' },
  { id: 'brake', title: 'Freinage', price: 'dès 59€ TTC*' },
  { id: 'battery', title: 'Embrayage', price: 'dès 300€ TTC*' },
  { id: 'ac', title: 'Climatisation', price: '106€ TTC*' },
  { id: 'tire', title: 'Diagnostique approfondi', price: '49€ TTC*' },
  { id: 'wiper', title: "Diagnostique basic", price: '20€ TTC*' },


]

export default function Services() {
  return (
    <section id="prestations" className="section services">
      <div className="section__inner">
        <h2 className="section__title">Prestations atelier</h2>
        <p style={{ textAlign: 'center', marginBottom: '32px', fontWeight: 'bold', fontSize: '18px' }}>
          Taux horaire : 75 € TTC
        </p>
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
                <Link to="/prestations" className="serviceCard__action" aria-label="Voir la prestation">
                  <ArrowRightMini />
                </Link>
              </article>
            )
          })}
        </div>
        <div className="services__more">
          <Link to="/prestations" className="services__link">
            Voir toutes nos prestations atelier
            <span className="services__linkIcon" aria-hidden="true">⟲</span>
          </Link>
        </div>
        <div className="services__note">*Prix moyens — <a href="#infos">pour en savoir plus</a></div>


      </div>
    </section>
  )
}
