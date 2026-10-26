/* Editorial content: formulas, packs, service families, Académie videos and
   tracks. Texts are final (design handoff); photos are placeholders until the
   real pictures are shot (Composants: "Les 11 photos à produire"). */

export interface Photo {
  /** Public path of the real picture; undefined renders the striped placeholder. */
  src?: string;
  alt: string;
  /** Framing brief shown on the placeholder. */
  brief: string;
}

export interface Formule {
  slug: string;
  nom: string;
  prix: string;
  /** Short unit on the home cards. */
  unite: string;
  /** Unit beside the price on the detailed page. */
  uniteDetail: string;
  /** Short duration line on the home cards. */
  duree: string;
  dureeDetail: string;
  pourqui: string;
  contenu: string;
  photo: Photo;
}

export const formules: Formule[] = [
  {
    slug: 'conseil-a-distance',
    nom: 'Conseil à distance',
    prix: '20 €',
    unite: 'les 30 min · 40 € l’heure',
    uniteDetail: 'les 30 min · 40 € l’heure',
    duree: '30 min ou 1 h · téléphone, visio, WhatsApp',
    dureeDetail: '30 min ou 1 h, par téléphone, visio ou WhatsApp',
    pourqui: 'Une question précise, un choix de matériau, un doute avant de commencer.',
    contenu:
      'Vous décrivez la situation, envoyez quelques photos, et on tranche ensemble : faisabilité, ordre des étapes, matériaux, budget réaliste.',
    photo: { alt: 'Mains tenant un téléphone devant un mur en chantier', brief: 'mains tenant un téléphone devant un mur en chantier' },
  },
  {
    slug: 'visite-achat-vente',
    nom: 'Visite conseil achat / vente',
    prix: '80 €',
    unite: 'la visite',
    uniteDetail: 'la visite de 2 h',
    duree: '2 h sur place',
    dureeDetail: '2 h sur place, compte rendu oral à l’issue',
    pourqui: 'Acheteurs qui veulent mesurer les travaux, vendeurs qui veulent valoriser leur bien.',
    contenu:
      'État du bâti, travaux à prévoir et leur coût, potentiel d’aménagement, éléments à mettre en valeur, décoration et petites réparations qui changent tout.',
    photo: { alt: 'Carnet de notes et mètre devant une façade ancienne', brief: 'carnet de notes et mètre devant une façade ancienne' },
  },
  {
    slug: 'visite-travaux',
    nom: 'Visite conseil travaux à domicile',
    prix: '80 €',
    unite: 'la visite',
    uniteDetail: 'la visite de 2 h',
    duree: '2 h sur place',
    dureeDetail: '2 h chez vous',
    pourqui: 'Vous rénovez une pièce ou une maison et voulez partir sur de bonnes bases.',
    contenu:
      'Faisabilité, optimisation de l’espace, choix des matériaux et du matériel, plan d’action et répartition des tâches, estimation du budget et du planning.',
    photo: { alt: 'Pièce en cours de rénovation, niveau posé au sol', brief: 'pièce en cours de rénovation, niveau posé au sol' },
  },
  {
    slug: 'coaching-chantier',
    nom: 'Coaching réalisation sur chantier',
    prix: '40 €',
    unite: 'de l’heure · packs dégressifs',
    uniteDetail: 'de l’heure · 3, 6, 10 h ou plus',
    duree: '3, 6, 10 h ou plus',
    dureeDetail: 'Séances de 3 h minimum, en pack dégressif',
    pourqui: 'Vous voulez faire vous-même, avec les bons gestes et en sécurité.',
    contenu:
      'Je travaille à vos côtés : démonstration, pratique guidée, utilisation des outils en sécurité, du gros œuvre aux finitions. Vous repartez autonome sur la tâche.',
    photo: { alt: 'Deux paires de mains sur une cloison en plaques de plâtre', brief: 'deux paires de mains sur une cloison en plaques de plâtre' },
  },
  {
    slug: 'coaching-personnalise',
    nom: 'Coaching personnalisé',
    prix: 'Devis',
    unite: 'sur mesure',
    uniteDetail: 'sur mesure',
    duree: 'Volume, fréquence et contenu à définir',
    dureeDetail: 'Volume, fréquence et contenu définis ensemble',
    pourqui: 'Projets longs, suivi de chantier complet, besoins particuliers.',
    contenu:
      'Une offre composée pour votre projet : visites, séances sur chantier, conseil à distance, étude thermique, organisation de déménagement, selon vos contraintes de temps et de budget.',
    photo: { alt: 'Plan dessiné sur une table, casque jaune posé dessus', brief: 'plan dessiné sur une table, casque jaune posé dessus' },
  },
];

export interface Pack {
  heures: string;
  /** TODO placeholder: pack price, e.g. '360 €'. null renders the placeholder. */
  prix: string | null;
  /** TODO placeholder: hourly rate inside the pack. */
  prixHeure: string | null;
  description: string;
  highlight?: boolean;
}

export const packs: Pack[] = [
  { heures: '10 h', prix: null, prixHeure: null, description: 'Idéal pour une pièce : plan d’action, visite, deux séances de coaching.' },
  { heures: '20 h', prix: null, prixHeure: null, highlight: true, description: 'Pour une rénovation complète menée à votre rythme, sur plusieurs mois.' },
  { heures: '40 h', prix: null, prixHeure: null, description: 'Pour une maison entière ou un suivi de chantier du gros œuvre aux finitions.' },
];

export interface Famille {
  nom: string;
  photo: Photo;
  items: string[];
}

export const familles: Famille[] = [
  {
    nom: 'Conseil et projet',
    photo: { alt: 'Plan et carnet sur une table', brief: 'plan et carnet sur une table' },
    items: [
      'Conseil et réponses aux questions 6j/7, 9h à 18h, par téléphone, mail, visio ou WhatsApp',
      'Étude de faisabilité de votre projet, en adéquation avec vos attentes et votre budget',
      'Optimisation et organisation logique de l’espace',
      'Plans d’aménagement intérieur et extérieur',
      'Accompagnement professionnel pour l’achat de votre bien',
      'Conseil et accompagnement pour la vente : travaux à faire, potentiel, plan, mise en valeur, décoration',
      'Organisation de déménagement',
    ],
  },
  {
    nom: 'Chantier et apprentissage',
    photo: { alt: 'Établi et outils, lumière naturelle', brief: 'établi et outils, lumière naturelle' },
    items: [
      'Plan d’action et répartition des tâches entre les intervenants',
      'Listing et choix des matériaux : qualité, longévité, nocivité, budget',
      'Choix du matériel adéquat',
      'Cours d’utilisation des outils en toute sécurité',
      'Gestion budgétaire du chantier',
      'Organisation du planning travaux : priorités, check-list, to-do list',
      'Apprentissage des techniques, du gros œuvre aux finitions',
      'Coaching réalisation sur chantier',
      'Suivi de chantier',
    ],
  },
  {
    nom: 'Énergie et autonomie',
    photo: { alt: 'Caméra thermique pointée sur un mur', brief: 'caméra thermique pointée sur un mur' },
    items: [
      'Économie d’énergie',
      'Étude thermique détaillée avec caméra thermique',
      'Location de matériel (voir modalités)',
      'Accompagnement vers l’autonomie et la résilience',
      'Partage d’astuces et d’expérience',
    ],
  },
];

export interface Video {
  titre: string;
  duree: string;
  parcours: string;
  /** TODO placeholder: YouTube video URL. */
  url?: string;
  photo: Photo;
}

/* TODO placeholder: indicative titles, replace with the real videos. */
export const videos: Video[] = [
  { titre: 'Décroûter un mur sans tout casser', duree: '12:40', parcours: 'Gros œuvre aux finitions', photo: { alt: '', brief: 'mains, burin et mur décroûté' } },
  { titre: 'Régler et tenir une scie circulaire en sécurité', duree: '9:15', parcours: 'Outillage et sécurité', photo: { alt: '', brief: 'mains sur la scie, établi' } },
  { titre: 'Lire une caméra thermique : les 3 ponts à repérer', duree: '14:02', parcours: 'Énergie et étude thermique', photo: { alt: '', brief: 'écran de caméra thermique, mur' } },
  { titre: 'Visiter une maison en pierre avant d’acheter', duree: '18:30', parcours: 'Acheter, vendre, aménager', photo: { alt: '', brief: 'carnet, mètre, façade' } },
  { titre: 'Monter une cloison en plaques de plâtre', duree: '21:08', parcours: 'Gros œuvre aux finitions', photo: { alt: '', brief: 'rails, plaque, visseuse' } },
  { titre: 'Planifier son chantier : la check-list', duree: '7:55', parcours: 'Acheter, vendre, aménager', photo: { alt: '', brief: 'plan sur table, casque jaune' } },
];

export interface Parcours {
  num: string;
  titre: string;
  desc: string;
  /** TODO placeholder: number of videos, e.g. '12 vidéos · fiches PDF'. */
  meta: string;
}

export const parcours: Parcours[] = [
  { num: '01', titre: 'Techniques du gros œuvre aux finitions', desc: 'Démolition propre, maçonnerie légère, cloisons, enduits, peinture, sols. L’ordre des étapes et les gestes qui tiennent.', meta: '— vidéos · fiches PDF' },
  { num: '02', titre: 'Outillage et sécurité', desc: 'Choisir, régler et entretenir ses outils. Travailler sans se blesser, protéger le chantier et la maison.', meta: '— vidéos · fiches PDF' },
  { num: '03', titre: 'Économies d’énergie et étude thermique', desc: 'Repérer les pertes à la caméra thermique, prioriser les travaux, isoler au bon endroit, viser l’autonomie.', meta: '— vidéos · fiches PDF' },
  { num: '04', titre: 'Acheter, vendre, aménager', desc: 'Lire un bien, estimer les travaux, optimiser l’espace, mettre en valeur avant une vente, organiser un déménagement.', meta: '— vidéos · fiches PDF' },
];
