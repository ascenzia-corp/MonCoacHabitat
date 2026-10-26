/* Site-wide facts. The YouTube block below is the only place to change
   when the real Mon COACHhabitat channel replaces the demo channel. */

export const site = {
  name: 'Mon COACHhabitat',
  title: 'Mon COACHhabitat, coach travaux et habitat, Elven (56)',
  description:
    'Faites vos travaux vous-même, avec un pro à vos côtés. Conseil, visites et coaching sur chantier dans le Morbihan. 40 € de l’heure.',
  address: { line1: 'Le Gohélis', line2: '56250 Elven' },
  /** Gérant et directeur de la publication. */
  manager: 'Etienne Blanco',
  host: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
  },
  siret: '530 388 206 00027',
  hours: '6j/7 de 9h à 18h, hors vacances et jours fériés.',

  phone: { display: '+33 6 61 45 29 50', href: 'tel:+33661452950' },
  whatsapp: 'https://wa.me/33661452950',

  /**
   * Chaîne YouTube affichée sur le site.
   * Démo : Système D, chaîne publique francophone de bricolage.
   * Pour passer à la chaîne Mon COACHhabitat, remplacer uniquement cet objet
   * (nom, url, et les six vidéos : id, titre, durée réelle ou chaîne vide, parcours).
   */
  youtube: {
    name: 'Système D',
    url: 'https://www.youtube.com/@SystemedTV',
    videos: [
      {
        id: 'iWWZ2llwSrw',
        titre: 'Ravaler une façade',
        duree: '3:16',
        parcours: 'Gros œuvre aux finitions',
      },
      {
        id: 'AOGIW2mrXDU',
        titre: 'Utiliser une scie circulaire',
        duree: '3:06',
        parcours: 'Outillage et sécurité',
      },
      {
        id: 'mFa1enWlI4U',
        titre: 'Isoler un mur par l’intérieur',
        duree: '4:49',
        parcours: 'Énergie et étude thermique',
      },
      {
        id: 'VOEOL2fImvg',
        titre: 'Poser une fenêtre dans un mur en pierre',
        duree: '1:50',
        parcours: 'Acheter, vendre, aménager',
      },
      {
        id: 'dWg4-W1E4dA',
        titre: 'Poser des plaques de plâtre sur une ossature métallique',
        duree: '3:01',
        parcours: 'Gros œuvre aux finitions',
      },
      {
        id: 'hmkf9Z680IY',
        titre: 'Logiciels gratuits pour rénover sa maison : les meilleurs outils testés par Système D',
        duree: '2:08',
        parcours: 'Acheter, vendre, aménager',
      },
    ],
  },

  // Hourly / daily rates, shown on every page.
  rates: { hour: '40 €', day: '310 €', visit: '80 €' },

  // Form endpoints (Formspree-compatible). Empty = sending not configured.
  forms: {
    request: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
    waitlist: import.meta.env.PUBLIC_WAITLIST_ENDPOINT ?? '',
  },
} as const;
