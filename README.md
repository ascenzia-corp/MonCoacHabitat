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

Déjà renseigné dans le code, à confirmer par le client :

- téléphone `+33 6 61 45 29 50` et WhatsApp `https://wa.me/33661452950` ;
- gérant Etienne Blanco, hébergeur Vercel Inc. (mentions légales) ;
- pas d'adresse email de contact : les demandes passent par `/demande` ;
- photos de démonstration générées (voir `CREDITS.md`), pas de visage du client ;
- chaîne YouTube de démonstration : Système D. Pour la remplacer, modifier
  uniquement `site.youtube` dans `src/data/site.ts` ;
- domaine canonique `https://www.moncoachhabitat.fr` (`astro.config.mjs`).

Encore à décider, sans inventer de donnée :

- prix des packs 10 h / 20 h / 40 h et tarif de l'Académie (affichés
  « Tarif sur demande ») ;
- endpoints des formulaires (`PUBLIC_FORM_ENDPOINT`, `PUBLIC_WAITLIST_ENDPOINT`) ;
- confirmation du domaine canonique (avec ou sans `www`, et qu'il est bien
  celui de production).

## Déploiement

Export statique : n'importe quel hébergeur de fichiers convient. Sur Vercel,
importer le dépôt, le preset Astro est détecté ; ajouter les deux variables
`PUBLIC_*` dans les réglages du projet.
