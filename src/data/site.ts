/* Coordonnées et réglages du site. Les prix des packs et de l'Académie
   restent « sur demande » : ils ne sont pas inventés. */

export const site = {
  name: 'Mon COACHabitat',
  title: 'Mon COACHabitat, coach travaux et habitat, Elven (56)',
  description:
    'Faites vos travaux vous-même, avec un pro à vos côtés. Conseil, visites et coaching sur chantier dans le Morbihan. 40 € de l’heure.',
  address: { line1: 'Le Gohélis', line2: '56250 Elven' },
  /** Gérant et directeur de la publication. */
  manager: 'Etienne Blanco',
  siret: '530 388 206 00027',
  hours: '6j/7 de 9h à 18h, hors vacances et jours fériés.',
  phone: { display: '+33 6 61 45 29 50', href: 'tel:+33661452950' },
  whatsapp: 'https://wa.me/33661452950',
  host: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
  },

  /**
   * Chaîne YouTube affichée sur le site. Une seule adresse à remplacer
   * quand la chaîne de Mon COACHabitat existera. `interim` affiche la
   * mention « bientôt » : la chaîne du coach n’est pas encore ouverte.
   */
  youtube: {
    name: 'Système D',
    url: 'https://www.youtube.com/@SystemedTV',
    interim: true,
  },

  rates: { hour: '40 €', day: '310 €', visit: '80 €' },

  forms: {
    request: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
    waitlist: import.meta.env.PUBLIC_WAITLIST_ENDPOINT ?? '',
  },
} as const;
