/* Editorial content: formulas, packs, service families, Académie videos and
   tracks. Photos are generated stand-ins (see CREDITS.md), not pictures of
   the client. YouTube titles and links come from `site.youtube`. */

import type { ImageMetadata } from 'astro';
import { site } from './site';
import murDecroute from '../assets/photos/mur-decroute.jpg';
import facadeBretonne from '../assets/photos/facade-bretonne.jpg';
import scieCirculaire from '../assets/photos/scie-circulaire.jpg';
import telephoneChantier from '../assets/photos/telephone-chantier.jpg';
import carnetMetre from '../assets/photos/carnet-metre.jpg';
import pieceNiveau from '../assets/photos/piece-niveau.jpg';
import cloisonPlaco from '../assets/photos/cloison-placo.jpg';
import planCasque from '../assets/photos/plan-casque.jpg';
import bandeauConseil from '../assets/photos/bandeau-conseil.jpg';
import bandeauEtabli from '../assets/photos/bandeau-etabli.jpg';
import bandeauThermique from '../assets/photos/bandeau-thermique.jpg';
import videoMur from '../assets/photos/video-mur.jpg';
import videoScie from '../assets/photos/video-scie.jpg';
import videoThermique from '../assets/photos/video-thermique.jpg';
import videoFacade from '../assets/photos/video-facade.jpg';
import videoPlaco from '../assets/photos/video-placo.jpg';
import videoPlan from '../assets/photos/video-plan.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** Original framing brief, kept so a future shoot can match the slot. */
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
    duree: '30 min ou 1 h · téléphone, visio, WhatsApp ou formulaire',
    dureeDetail: '30 min ou 1 h, par téléphone, visio, WhatsApp ou formulaire',
    pourqui: 'Une question précise, un choix de matériau, un doute avant de commencer.',
    contenu:
      'Vous décrivez la situation, envoyez quelques photos, et je tranche avec vous : faisabilité, ordre des étapes, matériaux, budget réaliste.',
    photo: {
      src: telephoneChantier,
      alt: 'Mains tenant un téléphone devant un mur en cours de rénovation',
      brief: 'mains tenant un téléphone devant un mur en chantier',
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
      src: carnetMetre,
      alt: 'Carnet de notes et mètre devant une façade en pierre',
      brief: 'carnet de notes et mètre devant une façade ancienne',
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
      src: pieceNiveau,
      alt: 'Pièce en cours de rénovation, niveau à bulle posé au sol',
      brief: 'pièce en cours de rénovation, niveau posé au sol',
    },
  },
  {
    slug: 'coaching-chantier',
    nom: 'Coaching réalisation sur chantier',
    prix: '40 €',
    unite: 'de l’heure · séances de 3 h minimum',
    uniteDetail: 'de l’heure · séances de 3 h minimum',
    duree: 'Séances de 3 h minimum',
    dureeDetail: 'Séances de 3 h minimum, en pack dégressif',
    pourqui: 'Vous voulez faire vous-même, avec les bons gestes et en sécurité.',
    contenu:
      'Je travaille à vos côtés : démonstration, pratique guidée, utilisation des outils en sécurité, du gros œuvre aux finitions. Vous repartez autonome sur la tâche.',
    photo: {
      src: cloisonPlaco,
      alt: 'Deux paires de mains posant une cloison en plaques de plâtre',
      brief: 'deux paires de mains sur une cloison en plaques de plâtre',
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
      'Une offre composée pour votre projet : visites, séances sur chantier, conseil à distance, étude thermique, organisation de déménagement, selon vos contraintes de temps et de budget. Des partenaires peuvent être associés si le projet le demande.',
    photo: {
      src: planCasque,
      alt: 'Casque de chantier jaune posé sur un plan roulé, sur une table',
      brief: 'plan dessiné sur une table, casque jaune posé dessus',
    },
  },
];

export interface Pack {
  heures: string;
  /** null means the price is not published yet. */
  prix: string | null;
  /** null means the hourly rate inside the pack is not published yet. */
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
      src: bandeauConseil,
      alt: 'Plan d’aménagement et carnet ouverts sur une table en bois',
      brief: 'plan et carnet sur une table',
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
      src: bandeauEtabli,
      alt: 'Établi de menuisier et outils à main, en lumière naturelle',
      brief: 'établi et outils, lumière naturelle',
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
      src: bandeauThermique,
      alt: 'Caméra thermique posée devant un mur intérieur',
      brief: 'caméra thermique pointée sur un mur',
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
  /** Real duration, or empty when it should not be shown. */
  duree: string;
  parcours: string;
  url: string;
  photo: Photo;
}

const videoPhotos: Record<(typeof site.youtube.videos)[number]['id'], Photo> = {
  iWWZ2llwSrw: {
    src: videoMur,
    alt: 'Mains et burin sur un mur dont l’enduit a été décroûté',
    brief: 'mains, burin et mur décroûté',
  },
  AOGIW2mrXDU: {
    src: videoScie,
    alt: 'Mains guidant une scie circulaire sur un établi',
    brief: 'mains sur la scie, établi',
  },
  mFa1enWlI4U: {
    src: videoThermique,
    alt: 'Écran de caméra thermique montrant les écarts de température d’un mur',
    brief: 'écran de caméra thermique, mur',
  },
  VOEOL2fImvg: {
    src: videoFacade,
    alt: 'Carnet et mètre appuyés contre une façade en pierre',
    brief: 'carnet, mètre, façade',
  },
  'dWg4-W1E4dA': {
    src: videoPlaco,
    alt: 'Rails métalliques, plaque de plâtre et visseuse sur un chantier',
    brief: 'rails, plaque, visseuse',
  },
  hmkf9Z680IY: {
    src: videoPlan,
    alt: 'Plan de chantier et casque jaune posés sur une table',
    brief: 'plan sur table, casque jaune',
  },
};

export const videos: Video[] = site.youtube.videos.map((v) => ({
  titre: v.titre,
  duree: v.duree,
  parcours: v.parcours,
  url: `https://www.youtube.com/watch?v=${v.id}`,
  photo: videoPhotos[v.id],
}));

export interface Parcours {
  num: string;
  titre: string;
  desc: string;
  /** No video count: the tracks are not open yet. */
  meta: string;
}

export const parcours: Parcours[] = [
  { num: '01', titre: 'Techniques du gros œuvre aux finitions', desc: 'Démolition propre, maçonnerie légère, cloisons, enduits, peinture, sols. L’ordre des étapes et les gestes qui tiennent.', meta: 'Vidéos et fiches PDF à venir' },
  { num: '02', titre: 'Outillage et sécurité', desc: 'Choisir, régler et entretenir ses outils. Travailler sans se blesser, protéger le chantier et la maison.', meta: 'Vidéos et fiches PDF à venir' },
  { num: '03', titre: 'Économies d’énergie et étude thermique', desc: 'Repérer les pertes à la caméra thermique, prioriser les travaux, isoler au bon endroit, viser l’autonomie.', meta: 'Vidéos et fiches PDF à venir' },
  { num: '04', titre: 'Acheter, vendre, aménager', desc: 'Lire un bien, estimer les travaux, optimiser l’espace, mettre en valeur avant une vente, organiser un déménagement.', meta: 'Vidéos et fiches PDF à venir' },
];

export { murDecroute, facadeBretonne, scieCirculaire };
