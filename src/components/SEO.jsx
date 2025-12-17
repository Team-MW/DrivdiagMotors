import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '/' }) {
  const siteUrl = '';
  const url = siteUrl ? `${siteUrl}${path}` : undefined;
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />} 
    </Helmet>
  );
}
