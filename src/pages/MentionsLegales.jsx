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
            <section className="section" style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '40px', fontSize: '2.5rem' }}>Mentions Légales</h1>

                <div className="legal-content">
                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>1. Éditeur du site</h2>
                    <p>
                        Le site <strong>Drive Diag Motors</strong> est édité par l'entreprise Drive Diag Motors.<br />
                        <strong>Adresse :</strong> 46 chemin Teynier, 31300 Toulouse<br />
                        <strong>Téléphone :</strong> 05 32 02 64 44 / 06 00 00 00 00<br />
                        <strong>Email :</strong> <a href="mailto:Labonneauto31@gmail.com">Labonneauto31@gmail.com</a>
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>2. Hébergement</h2>
                    <p>
                        Ce site est hébergé par une plateforme tierce.<br />
                        Pour plus d'informations, veuillez nous contacter aux coordonnées indiquées ci-dessus.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>4. Données personnelles</h2>
                    <p>
                        D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles.
                        Cependant, nous pouvons parfois vous demander des informations, par exemple pour traiter un devis ou une prise de rendez-vous.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}
