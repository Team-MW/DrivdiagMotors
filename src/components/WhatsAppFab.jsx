import React from 'react';
import { BUSINESS } from '../config.js';

export default function WhatsAppFab(){
  if(!BUSINESS.whatsappNumber) return null;
  const href = `https://wa.me/${BUSINESS.whatsappNumber}?text=${BUSINESS.whatsappMessage}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Contacter via WhatsApp" className="wa-fab">
      ☎
    </a>
  );
}
