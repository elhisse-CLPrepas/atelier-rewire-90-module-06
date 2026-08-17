# Étape 4 — Produire et tester

Séance concernée : 22 — Action locale contrôlée
Statut : **CONTRÔLÉ**

## Objectif

Intégrer localement la vidéo, les deux affiches validées et les CTA sociaux, puis mesurer le résultat avant tout commit.

## Entrées nécessaires

- branche `publication/preparer-github-pages` ;
- périmètre validé à l’étape 2 ;
- médias originaux autorisés ;
- date officielle du 21 août 2026 ;
- destinations Facebook et TikTok.

## Action réalisée

- vidéo placée immédiatement après le hero ;
- animation 3D CSS courte avant l’affichage du lecteur ;
- lecteur HTML5 avec contrôles, sans `autoplay` ;
- section « Masterclass REWIRE » ajoutée après la méthode ;
- deux affiches intégrées ;
- seconde affiche produite comme copie corrigée au 21 août 2026 ;
- Facebook Reel utilisé comme CTA principal ;
- vidéo et profil TikTok utilisés comme CTA secondaires ;
- liens externes sécurisés par `noopener noreferrer` ;
- tests structurels étendus de 12 à 14 contrôles.

## Fichiers autorisés modifiés ou ajoutés

- `index.html` ;
- `css/styles.css` ;
- `README.md` ;
- `assets/media/video-presentation-rewire.mp4` ;
- `assets/media/affiche-master-classe-rewire-21-aout-2026.jpeg` ;
- `assets/media/affiche-programme-rewire-21-aout-2026.png` ;
- `03-tests/test-structure.mjs` ;
- documentation du workflow.

## Fichiers protégés respectés

`data/data.json`, `js/app.js`, modèles PWA, rapport Word, workflows GitHub et médias originaux hors dépôt n’ont pas été modifiés.

## Outil principal

HTML, CSS, lecteur vidéo natif, serveur HTTP Python et tests Node.js. La compétence ImageGen a servi uniquement à créer une copie corrigée de la seconde affiche ; l’original est préservé.

## Rôle de Git

Afficher le diff et les nouveaux fichiers sans les indexer ni les committer à cette étape.

## Rôle de GitHub

Aucun rôle actif : aucun push, aucune PR et aucune publication.

## Assistance possible de Codex

Intégration, accessibilité, contrôle des chemins, tests HTTP et documentation des limites.

## Décision humaine

Le candidat a validé les tests de l’étape 4 et autorisé le commit de l’étape 5.

## Commandes exécutées

```powershell
node 03-tests/test-structure.mjs
node --check 02-mini-site-v2/js/app.js
python -m http.server 8765 --bind 127.0.0.1
git diff --check
```

## Rapport de test

```text
Serveur utilisé : Python http.server
URL locale : http://127.0.0.1:8765/
Tests structurels : 14/14 RÉUSSIS
Syntaxe JavaScript : RÉUSSIE
Diff whitespace : RÉUSSI
Accueil local : HTTP 200
CSS : HTTP 200
JavaScript : HTTP 200
JSON : HTTP 200
Vidéo MP4 : HTTP 200, type video/mp4
Affiche principale : HTTP 200, type image/jpeg
Affiche corrigée : HTTP 200, type image/png
Facebook Reel : HTTP 200
TikTok : NON VÉRIFIÉ À DISTANCE — résolution DNS indisponible pendant le contrôle
Console navigateur : NON EXÉCUTÉE — navigateur intégré indisponible
Affichage mobile : NON EXÉCUTÉ
Lecture vidéo et son : NON EXÉCUTÉS
QR code de l’affiche corrigée : NON VÉRIFIÉ automatiquement
État : PRÊT POUR COMMIT — validation humaine reçue
```

## Contrôle effectué

Chemins relatifs, présence des médias, codes HTTP locaux, absence d’autoplay, CTA externes, sécurité des liens, syntaxe JavaScript, tests structurels et diff technique.

## Preuve conservée

Résultats consignés dans cette fiche. Les médias du projet portent des noms normalisés sans espace ni accent.

## Erreur ou confusion rencontrée

Le navigateur intégré n’était pas disponible. La résolution DNS TikTok a échoué dans l’environnement de contrôle. Le QR code régénéré ne peut pas être déclaré fonctionnel sans essai humain.

## Prochaine action

Relire le diff et préparer le commit contrôlé de l’étape 5.
