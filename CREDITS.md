# Crédits

## Polices

Les polices sont auto-hébergées, licence SIL Open Font License 1.1 (`src/fonts/OFL-Italiana.txt`, `src/fonts/OFL-Montserrat.txt`).

| Police servie | Source | Graisses | Rôle |
| --- | --- | --- | --- |
| Coac Display | Italiana, Santiago Orozco, 2011. Nom réservé « Italiana ». | 400 | Titres |
| Montserrat | The Montserrat Project Authors, 2011. Pas de nom réservé. | 400, 500, 600 | Texte |

Italiana, y compris le fichier complet, ne contient pas œ (U+0153), l’espace insécable (U+00A0), l’espace insécable fine (U+202F) ni € (U+20AC). Il n’existe pas de sous-ensemble latin-ext. `scripts/build-fonts.py` ajoute ces quatre glyphes et renomme la police Coac Display, pour ne pas réutiliser le nom réservé. Le œ est construit à partir du o et du e d’Italiana, l’euro à partir du C.

Montserrat latin contient déjà œ, Œ, É, À, Ç, « », ’, … et €. latin-ext est aussi chargé ; il ne contient pas le œ, qui fait partie du latin. U+202F manque aussi du fichier Montserrat complet. Un fichier d’un seul glyphe par graisse ajoute cette espace, avec la chasse de l’espace fine (U+2009) de Montserrat.

## Photographies

Photos réelles, libres de droits pour un usage commercial, choisies pour coller au sujet de chaque emplacement. Aucune image n’a été générée. Aucun visage n’est présenté comme celui d’Etienne Blanco.

Les fichiers sources sont dans `src/assets/photos/`. Le site les sert en WebP, avec plusieurs largeurs.

| Fichier | Sujet sur le site | Auteur | Licence | Page d’origine |
| --- | --- | --- | --- | --- |
| `mur-enduit.jpg` | Accueil « Je rénove » et vignette « Décoller du papier peint » | BrittaniaJones | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Lathe_and_plaster_2.jpg |
| `facade-audierne.jpg` | Accueil « J’achète ou je vends » | Philippe Alès | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:1668_house_in_Audierne.JPG |
| `scie-circulaire.jpg` | Accueil « J’apprends » et vignette « Utiliser une scie circulaire » | simplicity hunter | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:DeWalt_circular_saw_in_use.jpg |
| `telephone.jpg` | Formule « Conseil à distance » | auteur non renseigné | CC0 | https://commons.wikimedia.org/wiki/File:Hand-smartphone-technology-calling.jpg |
| `facade-plumeliau.jpg` | Formule « Visite conseil achat / vente » | Sonja Pieper | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Ein_typisches_Haus.jpg |
| `piece-01.jpg` | Formule « Visite conseil travaux » | Bart Everson | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Under_Renovation_house_in_Mid-City_New_Orleans_-_01.jpg |
| `placo-outils.jpg` | Formule « Coaching réalisation sur chantier » | Timothyjosephwood | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Drywall_and_tools.jpg |
| `metre.jpg` | Formule « Coaching personnalisé » et vignette sur la planification d’une rénovation | Shixart1985 | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Measuring_tape_resting_on_a_smooth_surface_in_a_well-lit_workshop_environment_during_daylight_hours.jpg |
| `longere.jpg` | Bandeau « Conseil et projet » | Moreau.henri | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:102B.Botmeur.Creisquer.Long%C3%A8re_traditionnelle.JPG |
| `etabli.jpg` | Bandeau « Chantier et apprentissage » | Pascalbinder | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Etablie_de_menuisier.JPG |
| `thermique.jpg` | Bandeau « Énergie et autonomie » | Pressestelle BFK Urfahr-Umgebung | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Ventilation_bfkuu_denkmayr_0035_(40428855654).jpg |
| `isolation.jpg` | Vignette « Isoler un mur par l’intérieur » | Okram | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Walls_prepared_for_cellulose_insuflation.jpg |
| `enduit-pierre.jpg` | Vignette « Poser une fenêtre dans un mur en pierre » | Berrucomons | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Enduit_chaux.JPG |
| `rails.jpg` | Vignette « Poser des plaques de plâtre sur une ossature métallique » | MTA Capital Construction Mega Projects | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Metal_stud_framing_for_the_engineering_rooms_located_in_the_LIRR_concourse_area._(CM014B,_07-18-2018)_(28645816477).jpg |
| `piece-02.jpg` | Image principale de l’Académie | Bart Everson | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Under_Renovation_house_in_Mid-City_New_Orleans_-_02.jpg |

Unsplash et Pexels n’ont pas pu être interrogés depuis cet environnement (accès refusé). Les photos viennent de Wikimedia Commons, licences compatibles avec un usage commercial, avec attribution ci-dessus.

## Écarts assumés, sans image inventée

- Le téléphone est une main réelle sur un smartphone, sans visage. L’arrière-plan n’est pas un mur de chantier.
- La visite achat / vente montre une vraie maison bretonne en pierre (Saint-Nicolas-des-Eaux). Il n’y a pas de carnet ni de mètre dans le cadre.
- La pièce en rénovation est un intérieur réellement en travaux. Aucun niveau à bulle n’est posé au sol.
- Le coaching chantier montre des plaques, des vis et des outils, pas deux paires de mains sur une cloison.
- Le coaching personnalisé montre un mètre ruban, pas un plan avec un casque jaune.
- Le bandeau « Conseil et projet » est une longère bretonne, pas un plan et un carnet sur une table.
- Le bandeau énergie est un vrai relevé thermique de plafond, pas une caméra pointée vers un mur.
- La vignette placo montre les rails métalliques d’une cloison en cours de montage. La visseuse n’est pas dans le cadre.
- La scie circulaire est une photo de chantier : on voit les mains et l’outil. Elle n’est pas présentée comme Etienne.
