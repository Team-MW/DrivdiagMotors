import React from 'react'
import SEO from '../components/SEO.jsx'
import Footer from '../components/Footer.jsx'

function WhatsAppIcon(props) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 2a10 10 0 00-8.78 14.66L2 22l5.45-1.2A10 10 0 1012 2zm0 2a8 8 0 017.12 11.6l-.22.4-.3.38a8 8 0 01-9.9 1.9l-.38-.22-.4-.22L5 19l.7-3.04-.22-.4A8 8 0 0112 4zm3.88 3.5c-.2 0-.4-.02-.58-.02-.18 0-.46.06-.7.34-.24.28-.9.88-.9 2.14 0 1.26.92 2.48 1.04 2.64.12.16 1.76 2.8 4.16 3.8 2.06.85 2.48.68 2.93.64.45-.04 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.38-1.9-1.2-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.2-.48-.4-.42-.58-.42z" />
        </svg>
    )
}

export default function Contact() {
    return (
        <>
            <SEO
                title="Contact"
                description="Contactez Drive Diag Motors à Toulouse. Téléphone, WhatsApp ou rendez-vous en ligne pour l'entretien et la réparation de votre véhicule."
            />
            <section className="section contactPage">
                <div className="section__inner">
                    <h1 className="contactPage__title">CONTACTEZ-NOUS</h1>
                    <p className="contactPage__intro">
                        Une question ? Besoin d&apos;un devis ou d&apos;un rendez-vous ?<br />
                        Notre équipe est à votre disposition pour vous répondre rapidement.
                    </p>

                    <div className="contactPage__content">
                        <div className="contactPage__info">
                            <h2>Nos Coordonnées</h2>
                            <p>
                                <strong>Adresse :</strong><br />
                                46 chemin Teynier<br />
                                31300 Toulouse
                            </p>

                            <div className="contactPage__cta">
                                <a
                                    href="https://wa.me/33600000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn--whatsapp"
                                >
                                    <WhatsAppIcon />
                                    <span>Devis / Rdv via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
