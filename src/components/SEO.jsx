import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords }) {
    // Default values
    const defaultTitle = 'DrivDiag'
    const defaultDescription = 'Garage automobile à Toulouse (31300) spécialisé en diagnostic, entretien et réparation toutes marques. Vidange, freinage, distribution. Rendez-vous rapide.'
    const defaultKeywords = 'garage toulouse, mécanique auto, révision voiture, diagnostic auto, garage 31300,entretien véhicule'

    return (
        <Helmet>
            <title>{title ? `${title} | DrivDiag` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | Drive Diag Motors` : defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | Drive Diag Motors` : defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Helmet>
    )
}
