/* Site-wide facts. Every "TODO placeholder" below must be replaced before
   launch (see README, "Avant la mise en ligne"). */

export const site = {
  name: 'Mon COACHhabitat',
  title: 'Mon COACHhabitat, coach travaux et habitat, Elven (56)',
  description:
    'Faites vos travaux vous-même, avec un pro à vos côtés. Conseil, visites et coaching sur chantier dans le Morbihan. 40 € de l’heure.',
  address: { line1: 'Le Gohélis', line2: '56250 Elven' },
  siret: '530 388 206 00027',
  hours: '6j/7 de 9h à 18h, hors vacances et jours fériés.',

  // TODO placeholder: real phone number and WhatsApp link.
  phone: { display: '06 00 00 00 00', href: 'tel:+33600000000' },
  whatsapp: 'https://wa.me/33600000000',

  // TODO placeholder: YouTube channel name and URL.
  youtube: { name: '[Nom de la chaîne]', url: '#' },

  // Hourly / daily rates, shown on every page.
  rates: { hour: '40 €', day: '310 €', visit: '80 €' },

  // Form endpoints (Formspree-compatible). Empty = sending not configured.
  forms: {
    request: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
    waitlist: import.meta.env.PUBLIC_WAITLIST_ENDPOINT ?? '',
  },
} as const;
