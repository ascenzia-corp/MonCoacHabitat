# Crédits des visuels

Les photographies du site sont des images générées pour la démonstration.
Ce ne sont pas des photos d’Etienne Blanco, ni de ses chantiers. Aucun visage
reconnaissable n’est présenté comme celui du client. Elles seront remplacées
par les prises de vue réelles quand elles seront disponibles.

| Fichier | Emplacement | Sujet |
| --- | --- | --- |
| `src/assets/photos/mur-decroute.jpg` | Accueil, carte « Je rénove » | Mur décroûté et seau d’enduit |
| `src/assets/photos/facade-bretonne.jpg` | Accueil, carte « J’achète ou je vends » | Façade bretonne en pierre |
| `src/assets/photos/scie-circulaire.jpg` | Accueil, carte « J’apprends » | Mains sur une scie circulaire |
| `src/assets/photos/telephone-chantier.jpg` | Conseil à distance | Téléphone devant un chantier |
| `src/assets/photos/carnet-metre.jpg` | Visite conseil achat / vente | Carnet et mètre devant une façade |
| `src/assets/photos/piece-niveau.jpg` | Visite conseil travaux | Pièce en rénovation, niveau au sol |
| `src/assets/photos/cloison-placo.jpg` | Coaching sur chantier | Mains sur une cloison en plaques de plâtre |
| `src/assets/photos/plan-casque.jpg` | Coaching personnalisé | Plan et casque jaune |
| `src/assets/photos/bandeau-conseil.jpg` | Bandeau Conseil et projet | Plan et carnet |
| `src/assets/photos/bandeau-etabli.jpg` | Bandeau Chantier et apprentissage | Établi |
| `src/assets/photos/bandeau-thermique.jpg` | Bandeau Énergie et autonomie | Caméra thermique |
| `src/assets/photos/video-mur.jpg` | Vignette Académie | Mains, burin, mur décroûté |
| `src/assets/photos/video-scie.jpg` | Vignette Académie | Mains, scie circulaire, établi |
| `src/assets/photos/video-thermique.jpg` | Vignette Académie | Écran de caméra thermique |
| `src/assets/photos/video-facade.jpg` | Vignette Académie | Carnet, mètre, façade |
| `src/assets/photos/video-placo.jpg` | Vignette Académie | Rails, plaque, visseuse |
| `src/assets/photos/video-plan.jpg` | Vignette Académie | Plan et casque jaune |
| `src/assets/photos/academie-principale.jpg` | Image principale de l’Académie | Casque, mètre, plaque de plâtre |

Les fichiers livrés au navigateur sont des WebP responsives produits au build
par Astro (`astro:assets`), à partir de ces JPEG.

Le logo (`public/assets/logo.png`) et le casque (`public/assets/casque.png`)
viennent du handoff design, ils n’ont pas été régénérés.

## Vidéos

Les six vignettes pointent vers des vidéos publiques de la chaîne YouTube
[Système D](https://www.youtube.com/@SystemedTV) (`@SystemedTV`). Les vidéos
ne sont pas hébergées ici : le site ne fait que lien. Cette chaîne est une
démo, à remplacer par la chaîne Mon COACHhabitat dans `src/data/site.ts`
(`site.youtube`, seule constante à modifier).

Système D n’a pas, au moment de l’intégration, de vidéo publique exactement
intitulée sur la caméra thermique, la visite avant achat d’une maison en
pierre, ou une check-list de chantier. Les liens retenus sont les tutoriels
réels les plus proches, avec leur vrai titre et leur vraie durée :

- [Ravaler une façade](https://www.youtube.com/watch?v=iWWZ2llwSrw) — 3:16
- [Utiliser une scie circulaire](https://www.youtube.com/watch?v=AOGIW2mrXDU) — 3:06
- [Isoler un mur par l’intérieur](https://www.youtube.com/watch?v=mFa1enWlI4U) — 4:49
- [Poser une fenêtre dans un mur en pierre](https://www.youtube.com/watch?v=VOEOL2fImvg) — 1:50
- [Poser des plaques de plâtre sur une ossature métallique](https://www.youtube.com/watch?v=dWg4-W1E4dA) — 3:01
- [Logiciels gratuits pour rénover sa maison](https://www.youtube.com/watch?v=hmkf9Z680IY) — 2:08

## Polices

Italiana et Montserrat sont servies depuis le site via
[@fontsource/italiana](https://fontsource.org/fonts/italiana) et
[@fontsource/montserrat](https://fontsource.org/fonts/montserrat)
(licence SIL Open Font License). Aucun appel à Google Fonts.
