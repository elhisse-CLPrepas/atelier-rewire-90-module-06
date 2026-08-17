# Étape 2 — Cadrage et issue

Séance concernée : 21 — Organiser et cadrer
Statut : **CONTRÔLÉ**

## Objectif

Définir précisément l’intégration de la vidéo, des affiches et des CTA sociaux sans perturber le mini-site V2 ni publier une date incorrecte.

## Entrées nécessaires

- décisions humaines consignées à l’étape 1 ;
- vidéo et affiches originales conservées hors du dépôt ;
- trois URL sociales fournies ;
- mini-site V2 et tests structurels existants.

## Action attendue

Créer une amélioration limitée comprenant :

1. une section vidéo placée après le hero ;
2. un flash 3D d’introduction réalisé en CSS, bref et respectueux de `prefers-reduced-motion` ;
3. une section « Masterclass REWIRE » utilisant l’affiche datée du 21 août 2026 ;
4. une seconde affiche uniquement après correction de sa date ;
5. un CTA principal vers le Facebook Reel ;
6. deux CTA secondaires vers la vidéo TikTok et le profil TikTok ;
7. des liens externes signalés et ouverts de manière sûre.

## Titre de l’issue locale

`Intégrer les médias REWIRE et les CTA sociaux dans le mini-site V2`

## Fichiers autorisés

- `assets/media/video-presentation-rewire.mp4` ;
- `assets/media/affiche-master-classe-rewire-21-aout-2026.jpeg` ;
- seconde affiche corrigée et renommée explicitement, après contrôle ;
- `index.html` ;
- `css/styles.css` ;
- `js/app.js` si le comportement vidéo l’exige ;
- `README.md` ;
- `documentation/workflow-ln-ia/`.

## Fichiers protégés

- médias originaux hors dépôt ;
- `data/data.json`, sauf besoin éditorial validé séparément ;
- modèles PWA ;
- rapport Word ;
- workflows GitHub existants ;
- affiche portant la date du 21 septembre 2026 tant qu’elle n’est pas corrigée.

## Données autorisées

La publication du numéro WhatsApp, du lien Telegram, du QR code, de la vidéo et des portraits a été autorisée par le candidat pour la démonstration de la séance 23.

## Données à exclure

- métadonnées inutiles des médias si elles contiennent des informations privées ;
- toute coordonnée absente des affiches autorisées ;
- toute date non confirmée ;
- chemins locaux Windows ;
- secrets, jetons, fichiers `.env` et archives.

## Rôle de Git

Isoler cette amélioration sur une nouvelle branche, relire les médias ajoutés et conserver un commit cohérent.

## Rôle de GitHub

Créer une Pull Request démontrant le diff, les contrôles et la décision humaine avant fusion.

## Assistance possible de Codex

Préparer les médias web, construire les sections accessibles, contrôler les chemins, lancer les tests et documenter les preuves.

## Décision humaine

Le périmètre est validé. La seconde affiche reste protégée jusqu’à sa correction graphique en date du 21 août 2026.

## Commandes proposées

Aucune commande Git ou GitHub à cette étape. Une issue GitHub réelle reste non créée jusqu’à l’autorisation distante de l’étape 6.

## Critères d’acceptation

- [ ] le site reste fonctionnel par serveur HTTP local ;
- [ ] la vidéo dispose de contrôles natifs, d’un titre et d’un texte de remplacement contextuel ;
- [ ] aucun démarrage automatique avec son ;
- [ ] l’animation 3D est courte et désactivée pour les mouvements réduits ;
- [ ] seule une date confirmée est publiée ;
- [ ] les affiches conservent un ratio correct sur mobile ;
- [ ] le CTA principal mène au Facebook Reel ;
- [ ] les deux CTA TikTok fonctionnent ;
- [ ] les liens externes utilisent `rel="noopener noreferrer"` ;
- [ ] les chemins restent relatifs et compatibles avec GitHub Pages ;
- [ ] aucun secret ou fichier personnel non autorisé n’est ajouté ;
- [ ] les 12 tests structurels continuent de réussir ;
- [ ] l’accueil, le CSS, le JavaScript, le JSON, les médias et les CTA répondent sans 404 ;
- [ ] le rendu mobile est contrôlé ;
- [ ] le diff est présenté dans une Pull Request avant fusion.

## Tests prévus

- serveur HTTP local ;
- contrôle syntaxique JavaScript ;
- suite `03-tests/test-structure.mjs` ;
- vérification des chemins et codes HTTP ;
- navigation clavier ;
- largeur mobile ;
- préférence de réduction des animations ;
- lecture vidéo manuelle sans lecture automatique sonore.

## Preuves prévues

- résultat des tests ;
- liste exacte des médias intégrés ;
- capture desktop et mobile autorisée ;
- URL de la Pull Request ;
- URL GitHub Pages après fusion ;
- journal des décisions mis à jour.

## Résultat observé

Le périmètre est défini localement. Aucun média n’est encore copié et aucune action distante n’est exécutée.

## Contrôle effectué

Les autorisations humaines, la date officielle, les destinations des CTA et la contradiction entre les deux affiches sont documentées.

## Preuve conservée

Cette fiche sert d’issue locale jusqu’à l’étape 6.

## Erreur ou confusion rencontrée

La deuxième affiche nécessite une correction graphique ou une exclusion. Le choix doit être confirmé avant l’étape de production.

## Prochaine action

Préparer la branche Git de l’étape 3.
