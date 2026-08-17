# Analyse visuelle — Affiche ressource REWIRE

Source analysée : `Affiche-ressource-rewire.jpeg`  
Date d’analyse : 10 août 2026

## Message principal

L’affiche documente le passage du mini-site V1 statique au mini-site V2 dynamique du projet `REWIRE-90-PROJECT`.

Le principe central est explicite : **les données sont séparées de l’affichage**.

La chaîne technique visible est :

`JSON local → fetch() → JavaScript → DOM → cartes REWIRE`

## Informations directement visibles

- Séance 19.
- Projet : `REWIRE-90-PROJECT`.
- Durée affichée : 90 jours.
- Mini-site V1 conservé intact.
- Technologies V1 : HTML, CSS et JavaScript.
- Données V2 dans `data/data.json`.
- Chargement avec `fetch()`.
- Création dynamique du DOM.
- Quatre états : Chargement, Succès, Vide et Erreur.
- Préparation PWA sans activation immédiate.

## Les quatre cartes REWIRE

L’affiche montre quatre noms qui constituent la structure éditoriale minimale du programme :

1. Révélation.
2. Désactivation.
3. Construction.
4. Installation.

L’affiche ne définit pas le contenu détaillé de ces étapes. Toute définition ajoutée est donc une proposition à valider par l’auteur.

## Les six opérations de la Séance 19

| Repère | Action | Preuve attendue |
|---|---|---|
| 19-A | Auditer la V1 | Source validée et conservée |
| 19-B | Créer le JSON | JSON valide |
| 19-C | Charger avec `fetch()` | Réponse HTTP 200 |
| 19-D | Afficher dans le DOM | Rendu sécurisé sans HTML issu du JSON |
| 19-E | Prévoir quatre états | Test humain réel |
| 19-F | Préparer la PWA | Préparation documentée sans activation |

## Contrôles visibles dans l’affiche

- JSON valide avec quatre objets.
- Champs obligatoires présents.
- Chemins des images testés.
- Chemin d’erreur produisant une réponse 404.
- V1 conservée.
- Aucun secret ni chemin absolu.
- Validation visuelle et tests navigateurs encore requis dans la source.

## Règles d’or extraites

- Ne pas mélanger données et affichage.
- Ne pas tester `fetch()` avec `file:///`.
- Ne jamais annoncer un test non réalisé.
- Conserver la V1 intacte lorsqu’elle existe.
- Utiliser la preuve pour montrer la progression.

## Décisions éditoriales prises pour cette production

- Le site public porte le nom `REWIRE-90-PROJECT`.
- Les quatre cartes suivent exactement les intitulés visibles.
- Les descriptions sont marquées à valider.
- Le profil professionnel est séparé des coordonnées privées.
- Le site ne présente aucun formulaire connecté ni collecte de données.
- La reprise Module 06 part d’une copie nettoyée avant le premier commit.
