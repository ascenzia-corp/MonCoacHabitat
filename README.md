# Mon COACHhabitat, site vitrine

Site statique 4 pages pour Mon COACHhabitat (coach travaux et habitat, Elven,
Morbihan) : Accueil, Prestations et tarifs, Académie, Demander une prestation,
plus une page Mentions légales minimale.

Construit avec [Astro](https://astro.build) en export statique et du CSS natif
(tokens dans `src/styles/global.css`). Aucun backend : les deux formulaires
envoient vers un service tiers compatible Formspree.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # sortie statique dans dist/
npm run preview
npm run check      # vérification TypeScript et templates
```

Node 22.23 ou plus récent (contrainte d'Astro 7).

## Structure

```
src/
  data/site.ts        coordonnées, horaires, tarifs, endpoints des formulaires
  data/content.ts     formules, packs, familles de prestations, vidéos, parcours
  styles/global.css   tokens (couleurs, typo, espacements) et composants partagés
  layouts/Base.astro  <head>, nav, pied de page, barre d'appel mobile, reveal
  components/         Nav, Footer, CallBar, Photo (placeholder ou vraie photo)
  pages/              index, prestations, academie, demande, mentions-legales
  scripts/forms.ts    envoi JSON des formulaires, honeypot, messages d'erreur
public/assets/        logo.png, casque.png
```

## Formulaires

Copier `.env.example` en `.env` et renseigner :

- `PUBLIC_FORM_ENDPOINT` : formulaire de demande de prestation (champs `nom`,
  `email`, `telephone`, `commune`, `prestation`, `description`, `budget`,
  `fichiers`, `rgpd`, `_subject`).
- `PUBLIC_WAITLIST_ENDPOINT` : liste d'attente Académie (champ `email`).

Tant qu'un endpoint est vide, le formulaire affiche un message honnête
(« envoi pas encore activé ») et renvoie vers le téléphone et WhatsApp. Il
n'affiche jamais un faux « Demande envoyée ».

Les pièces jointes partent en `multipart/form-data` : sur Formspree, l'envoi de
fichiers demande un plan payant. Sans pièce jointe, l'envoi est en JSON.

## Avant la mise en ligne

Placeholders à remplacer (tous marqués `TODO placeholder` dans `src/data/`) :

- numéro de téléphone et lien WhatsApp (`site.ts`) ;
- nom et URL de la chaîne YouTube, titres, durées et URL des vidéos ;
- prix des packs 10 h / 20 h / 40 h et prix mensuel / annuel de l'Académie
  (ce dernier en dur dans `academie.astro`) ;
- nombre de vidéos par parcours ;
- les 11 photos (brief de cadrage dans `Composants.dc.html` du handoff) :
  renseigner `photo.src` dans `content.ts` et `index.astro`, les placeholders
  rayés disparaissent automatiquement ;
- domaine de production dans `astro.config.mjs` (`site`) ;
- page Mentions légales : gérant, hébergeur, email de contact.

## Déploiement

Export statique : n'importe quel hébergeur de fichiers convient. Sur Vercel,
importer le dépôt, le preset Astro est détecté ; ajouter les deux variables
`PUBLIC_*` dans les réglages du projet.
