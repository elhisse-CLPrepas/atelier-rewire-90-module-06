# PACK REWIRE-90-PROJECT — SÉANCE 19 ET MODULE 06

Version : V1 à valider  
Porteur du sujet : **M. Mohamed BOUMRAH**, Master coach personnel et professionnel  
Organisation : **DEEP PERFORMANCE**  
Statut : **PRÊT POUR VALIDATION HUMAINE — NON PUBLIÉ**

## Finalité

Ce pack transforme l’affiche ressource REWIRE et la fiche candidature en deux productions complémentaires :

- une landing page V2 dynamique conforme à la Séance 19 ;
- un cas réel Git/GitHub prêt à intégrer aux Séances 21 à 24 du Module 06.

Le mini-site :

- stocke les contenus dans `data/data.json` ;
- charge le JSON avec `fetch()` ;
- crée les cartes dans le DOM ;
- présente Révélation, Désactivation, Construction et Installation ;
- rend visibles Chargement, Succès, Vide et Erreur ;
- exclut les coordonnées et les signatures de la fiche candidature ;
- reste volontairement non-PWA avant la Séance 20.

## Ordre conseillé

1. Lire `00-sources-et-cadrage/01-ANALYSE-VISUELLE.md`.
2. Lire `00-sources-et-cadrage/05-ANALYSE-DOSSIER-AUTEUR.md`.
3. Valider `00-sources-et-cadrage/02-CONTEXTE-PROJET.yaml`.
4. Compléter `00-sources-et-cadrage/03-FICHE-VALIDATION-HUMAINE.md`.
5. Tester `02-mini-site-v2/` sur localhost.
6. Exécuter `node 03-tests/test-structure.mjs`.
7. Utiliser `06-module-06-git-github/` pour créer une copie publique nettoyée et un dépôt de formation.

## Lancement local

```bash
cd 02-mini-site-v2
python -m http.server 8000
```

Ouvrir `http://localhost:8000`.

## Limite assumée

La fiche candidature confirme le profil, le projet REWIRE, l’objectif d’autonomie et la landing page comme livrable. L’affiche confirme les quatre étapes. Elle ne donne pas leurs définitions détaillées. Les formulations du site sont donc des propositions éditoriales à valider par M. Mohamed BOUMRAH.

Aucun dépôt distant n’a été créé. Aucune publication n’a été effectuée.
