import React from 'react'
import SEO from '../components/SEO.jsx'
import Footer from '../components/Footer.jsx'

export default function MentionsLegales() {
    return (
        <>
            <SEO
                title="Mentions Légales"
                description="Mentions légales de Drive Diag Motors. Informations sur l'éditeur, l'hébergement et la propriété intellectuelle."
            />
            <div className="snap-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="snap-bg-grid"></div>
                <div className="section__inner" style={{ maxWidth: '800px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2, textAlign: 'left' }}>
                    <h1 className="snap-title" style={{ display: 'block', textAlign: 'center', marginBottom: '60px' }}>Mentions Légales</h1>

                    <div className="legal-content" style={{ color: '#fff' }}>
                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#FFFC00', textTransform: 'uppercase', letterSpacing: '1px' }}>1. Éditeur du site</h2>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Le site <strong>Drive Diag Motors</strong> est édité par l'entreprise Drive Diag Motors.<br />
                            <strong>Adresse :</strong> 46 chemin Teynier, 31300 Toulouse<br />
                            <strong>Téléphone :</strong> 05 32 02 64 44 / 06 00 00 00 00<br />
                            <strong>Email :</strong> <a href="mailto:Labonneauto31@gmail.com" style={{ color: '#FFFC00', textDecoration: 'underline' }}>Labonneauto31@gmail.com</a>
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#FFFC00', textTransform: 'uppercase', letterSpacing: '1px' }}>2. Hébergement</h2>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Ce site est hébergé par une plateforme tierce.<br />
                            Pour plus d'informations, veuillez nous contacter aux coordonnées indiquées ci-dessus.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#FFFC00', textTransform: 'uppercase', letterSpacing: '1px' }}>3. Propriété intellectuelle</h2>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#FFFC00', textTransform: 'uppercase', letterSpacing: '1px' }}>4. Données personnelles</h2>
                        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                            D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles.
                            Cependant, nous pouvons parfois vous demander des informations, par exemple pour traiter un devis ou une prise de rendez-vous.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
