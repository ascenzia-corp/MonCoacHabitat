/* Formules, packs, familles, vidéos de démo et parcours.
   Photos : fichiers réels crédités dans CREDITS.md. */

import type { ImageMetadata } from 'astro';
import murEnduit from '../assets/photos/mur-enduit.jpg';
import facadeAudierne from '../assets/photos/facade-audierne.jpg';
import scie from '../assets/photos/scie-circulaire.jpg';
import telephone from '../assets/photos/telephone.jpg';
import facadePlumeliau from '../assets/photos/facade-plumeliau.jpg';
import pieceTravaux from '../assets/photos/piece-01.jpg';
import placoOutils from '../assets/photos/placo-outils.jpg';
import metre from '../assets/photos/metre.jpg';
import longere from '../assets/photos/longere.jpg';
import etabli from '../assets/photos/etabli.jpg';
import thermique from '../assets/photos/thermique.jpg';
import isolation from '../assets/photos/isolation.jpg';
import enduitPierre from '../assets/photos/enduit-pierre.jpg';
import rails from '../assets/photos/rails.jpg';
import pieceAcademie from '../assets/photos/piece-02.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export interface Formule {
  slug: string;
  nom: string;
  prix: string;
  unite: string;
  uniteDetail: string;
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
    duree: '30 min ou 1 h · téléphone, visio, WhatsApp ou formulaire',
    dureeDetail: '30 min ou 1 h, par téléphone, visio, WhatsApp ou formulaire',
    pourqui: 'Une question précise, un choix de matériau, un doute avant de commencer.',
    contenu:
      'Vous décrivez la situation, envoyez quelques photos, et je vous aide à trancher : faisabilité, ordre des étapes, matériaux, budget réaliste.',
    photo: {
      src: telephone,
      alt: 'Main tenant un smartphone, pour un échange à distance.',
    },
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
    photo: {
      src: facadePlumeliau,
      alt: 'Maison en pierre et enduit clair à Saint-Nicolas-des-Eaux, en Bretagne.',
    },
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
    photo: {
      src: pieceTravaux,
      alt: 'Pièce d’une maison en cours de rénovation, parquet usé et murs décapés.',
    },
  },
  {
    slug: 'coaching-chantier',
    nom: 'Coaching réalisation sur chantier',
    prix: '40 €',
    unite: 'de l’heure · packs dégressifs',
    uniteDetail: 'de l’heure · 3, 6, 10 h ou plus',
    duree: '3, 6, 10 h ou plus · séances de 3 h minimum',
    dureeDetail: '3, 6, 10 h ou plus, séances de 3 h minimum',
    pourqui: 'Vous voulez faire vous-même, avec les bons gestes et en sécurité.',
    contenu:
      'Je travaille à vos côtés : démonstration, pratique guidée, utilisation des outils en sécurité, du gros œuvre aux finitions. Vous repartez autonome sur la tâche.',
    photo: {
      src: placoOutils,
      alt: 'Plaques de plâtre, vis et outils posés au sol avant la pose.',
    },
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
    photo: {
      src: metre,
      alt: 'Mètre ruban déroulé sur une table, pour relever des cotes.',
    },
  },
];

export const accueilPhotos = {
  renove: {
    src: murEnduit,
    alt: 'Mur dont l’enduit est abîmé, avec le lattis de bois apparent, dans une pièce en travaux.',
  },
  facade: {
    src: facadeAudierne,
    alt: 'Façade en granite d’une maison ancienne à Audierne, en Bretagne.',
  },
  scie: {
    src: scie,
    alt: 'Mains tenant une scie circulaire portative pour couper une planche.',
  },
} satisfies Record<string, Photo>;

export interface Pack {
  heures: string;
  /** null : le tarif n’est pas affiché, on écrit « Tarif sur demande ». */
  prix: string | null;
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
    photo: {
      src: longere,
      alt: 'Longère traditionnelle en pierre dans les Monts d’Arrée, en Bretagne.',
    },
    items: [
      'Conseil et réponses aux questions 6j/7, 9h à 18h, par téléphone, visio, WhatsApp ou formulaire',
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
    photo: {
      src: etabli,
      alt: 'Établi de menuisier et outils dans un atelier.',
    },
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
    photo: {
      src: thermique,
      alt: 'Image thermique d’un plafond : les couleurs montrent les écarts de température.',
    },
    items: [
      'Économie d’énergie',
      'Étude thermique détaillée avec caméra thermique',
      'Location de matériel (modalités sur demande)',
      'Accompagnement vers l’autonomie et la résilience',
      'Partage d’astuces et d’expérience',
    ],
  },
];

export interface Video {
  titre: string;
  /** Durée réelle de la vidéo, ou chaîne vide pour ne rien afficher. */
  duree: string;
  parcours: string;
  url: string;
  photo: Photo;
}

/* Vidéos publiques de la chaîne configurée dans site.youtube (démo). */
export const videos: Video[] = [
  {
    titre: 'Décoller du papier peint avec une décolleuse à vapeur',
    duree: '1:25',
    parcours: 'Gros œuvre aux finitions',
    url: 'https://www.youtube.com/watch?v=woUoX4OOrD0',
    photo: {
      src: murEnduit,
      alt: 'Mur dont le revêtement part, lattis de bois apparent.',
    },
  },
  {
    titre: 'Utiliser une scie circulaire',
    duree: '3:06',
    parcours: 'Outillage et sécurité',
    url: 'https://www.youtube.com/watch?v=AOGIW2mrXDU',
    photo: {
      src: scie,
      alt: 'Mains sur une scie circulaire portative, en train de couper une planche.',
    },
  },
  {
    titre: 'Isoler un mur par l’intérieur',
    duree: '4:49',
    parcours: 'Économies d’énergie et étude thermique',
    url: 'https://www.youtube.com/watch?v=mFa1enWlI4U',
    photo: {
      src: isolation,
      alt: 'Mur ouvert, préparé pour une isolation par l’intérieur.',
    },
  },
  {
    titre: 'Poser une fenêtre dans un mur en pierre',
    duree: '1:50',
    parcours: 'Acheter, vendre, aménager',
    url: 'https://www.youtube.com/watch?v=VOEOL2fImvg',
    photo: {
      src: enduitPierre,
      alt: 'Mur en pierre ancienne pendant la reprise des joints à l’enduit de chaux.',
    },
  },
  {
    titre: 'Poser des plaques de plâtre sur une ossature métallique',
    duree: '3:01',
    parcours: 'Gros œuvre aux finitions',
    url: 'https://www.youtube.com/watch?v=dWg4-W1E4dA',
    photo: {
      src: rails,
      alt: 'Rails métalliques d’une cloison en cours de montage sur un chantier.',
    },
  },
  {
    titre: 'La rénovation et les contraintes de chauffage et d’isolation dans la maison',
    duree: '26:12',
    parcours: 'Acheter, vendre, aménager',
    url: 'https://www.youtube.com/watch?v=BJdYIizOMt8',
    photo: {
      src: metre,
      alt: 'Mètre ruban déroulé pour relever des mesures avant travaux.',
    },
  },
];

export const academiePhoto: Photo = {
  src: pieceAcademie,
  alt: 'Intérieur d’une maison en cours de rénovation, avant les finitions.',
};

export interface Parcours {
  num: string;
  titre: string;
  desc: string;
  meta: string;
}

export const parcours: Parcours[] = [
  { num: '01', titre: 'Techniques du gros œuvre aux finitions', desc: 'Démolition propre, maçonnerie légère, cloisons, enduits, peinture, sols. L’ordre des étapes et les gestes qui tiennent.', meta: 'Vidéos · fiches PDF' },
  { num: '02', titre: 'Outillage et sécurité', desc: 'Choisir, régler et entretenir ses outils. Travailler sans se blesser, protéger le chantier et la maison.', meta: 'Vidéos · fiches PDF' },
  { num: '03', titre: 'Économies d’énergie et étude thermique', desc: 'Repérer les pertes à la caméra thermique, prioriser les travaux, isoler au bon endroit, viser l’autonomie.', meta: 'Vidéos · fiches PDF' },
  { num: '04', titre: 'Acheter, vendre, aménager', desc: 'Lire un bien, estimer les travaux, optimiser l’espace, mettre en valeur avant une vente, organiser un déménagement.', meta: 'Vidéos · fiches PDF' },
];
