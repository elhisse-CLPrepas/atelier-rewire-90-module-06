# Intégrer les médias REWIRE et les CTA sociaux

## Objectif

Enrichir le mini-site V2 avec une présentation vidéo, deux affiches de la masterclass et des liens sociaux contrôlés pour la démonstration pédagogique de la séance 23.

## Changements

- ajoute la vidéo REWIRE avec des contrôles natifs et sans lecture automatique ;
- ajoute une animation 3D CSS courte, compatible avec la réduction des mouvements ;
- ajoute une section Masterclass avec deux affiches datées du 21 août 2026 ;
- ajoute Facebook Reel comme CTA principal ;
- ajoute la vidéo et le profil TikTok comme CTA secondaires ;
- étend les tests structurels de 12 à 14 contrôles ;
- documente les étapes 1 à 6 du workflow LN-IA.

## Impact utilisateur

Le visiteur peut regarder la présentation dans la page, consulter les visuels de la masterclass et rejoindre les contenus sociaux depuis des CTA explicites.

## Contrôles

- [x] `node 03-tests/test-structure.mjs` — 14/14 ;
- [x] `node --check 02-mini-site-v2/js/app.js` ;
- [x] `git diff --check` ;
- [x] accueil, CSS, JavaScript, JSON, vidéo et affiches — HTTP 200 local ;
- [x] contrôle des secrets ;
- [x] validation humaine de l’étape 4.

## Risques et limites

- les coordonnées, portraits et QR code des affiches ont été autorisés par le candidat ;
- la seconde affiche est une copie corrigée avec ImageGen ;
- le QR code corrigé doit être confirmé lors de la review ;
- le test TikTok distant a été limité par une indisponibilité DNS locale ;
- la fusion déclenchera automatiquement le workflow GitHub Pages.

## Review attendue

- [ ] contrôler le diff complet ;
- [ ] vérifier les affiches et la date du 21 août 2026 ;
- [ ] tester la vidéo et les CTA ;
- [ ] vérifier le rendu mobile ;
- [ ] confirmer le QR code ;
- [ ] autoriser explicitement le merge.
