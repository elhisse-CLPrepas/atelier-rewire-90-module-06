# Étape 1 — Idée claire

Séance concernée : 21 — Organiser avant de produire
Statut : **CONTRÔLÉ**

## Objectif

Améliorer le mini-site REWIRE-90 avec une présentation vidéo, deux affiches de masterclass et des CTA vers les réseaux sociaux, sans publier de donnée non autorisée.

## Entrées nécessaires

- mini-site V2 existant ;
- vidéo `Vidéo-présentation-REWIRE.mp4` ;
- deux affiches REWIRE verticales ;
- fichier `LIENS-réseaux-sociaux.md` ;
- décision humaine sur les coordonnées visibles et les dates des événements.

## Action attendue

Préparer une section vidéo après le hero avec une animation lumineuse 3D courte au premier affichage, une galerie d’affiches dans une section « Masterclass », puis des CTA sociaux explicites dans cette section et dans le pied de page.

## Fichiers autorisés

- copies web contrôlées des médias dans `assets/media/` ;
- `index.html` ;
- `css/styles.css` ;
- `js/app.js` uniquement si nécessaire pour le comportement du lecteur ;
- documentation du workflow.

## Fichiers protégés

- médias originaux situés hors du dépôt ;
- données JSON éditoriales non concernées ;
- modèles PWA ;
- rapport Word ;
- affiches originales tant que les coordonnées et dates ne sont pas validées.

## Outil principal

HTML, CSS et lecteur vidéo natif du navigateur. Le flash 3D doit être une animation CSS décorative, courte, non clignotante et désactivée avec `prefers-reduced-motion`.

## Rôle de Git

Tracer séparément la préparation des médias, l’intégration visuelle et les corrections.

## Rôle de GitHub

Présenter le diff dans une Pull Request et fournir la publication Pages après validation.

## Assistance possible de Codex

Contrôler les médias, proposer les emplacements, générer le balisage accessible, tester les chemins et documenter les preuves.

## Décision humaine

Décision du 17 août 2026 : le candidat autorise la publication de la vidéo, des portraits, du numéro WhatsApp, du lien Telegram et du QR code pour la démonstration de la séance 23. La date officielle confirmée est le 21 août 2026. Le Facebook Reel est retenu comme CTA principal ; la vidéo TikTok et le profil TikTok deviennent des CTA secondaires.

## Commandes proposées

Aucune commande de modification Git ou distante à cette étape.

## Résultat observé

- une vidéo MP4 d’environ 10,9 Mo ;
- affiches de 900 × 1600 px et 853 × 1280 px ;
- liens Facebook Reel, vidéo TikTok et profil TikTok disponibles ;
- coordonnées personnelles ou commerciales visibles sur les affiches ;
- dates contradictoires : 21 août 2026 et 21 septembre 2026.

## Contrôle effectué

Présence, taille et dimensions des médias, lecture du fichier de liens et inspection visuelle des affiches.

## Preuve conservée

Constats inscrits dans cette fiche et dans le journal du workflow.

## Erreur ou confusion rencontrée

L’affiche `Affiche01-Master-Classe-Rewire.jpeg` indique le 21 septembre 2026 alors que la date officielle confirmée est le 21 août 2026. Elle doit être corrigée ou exclue de la publication. L’outil `ffprobe` n’est pas installé ; durée, codecs et résolution de la vidéo restent à confirmer.

## Prochaine action

Cadrer précisément les modifications et les contrôles à l’étape 2.
