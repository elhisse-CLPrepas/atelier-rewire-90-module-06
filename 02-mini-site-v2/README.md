# REWIRE-90-PROJECT — Mini-site V2 dynamique

Ce dossier contient la landing page de démonstration produite à partir de l’affiche de la Séance 19 et de la fiche candidature de M. Mohamed BOUMRAH.

## Objectifs techniques

- séparer les données et l’affichage ;
- charger `data/data.json` avec `fetch()` ;
- créer les cartes avec le DOM ;
- rendre visibles Chargement, Succès, Vide et Erreur ;
- préparer la reprise du cas dans Git et GitHub au Module 06 ;
- conserver la PWA inactive avant la Séance 20.

## Lancement

```bash
python -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000`.

## Publication GitHub Pages

Le workflow `.github/workflows/pages.yml` publie uniquement ce dossier lorsque des changements arrivent sur la branche `main`. Le site attendu est :

<https://elhisse-clprepas.github.io/atelier-rewire-90-module-06/>

La source Pages doit être configurée sur **GitHub Actions** dans les paramètres du dépôt. La publication reste conditionnée à la validation humaine des contenus éditoriaux.

## Workflow de démonstration

Les pull requests vers `main` exécutent automatiquement :

- la vérification syntaxique de `js/app.js` ;
- les 12 contrôles de `03-tests/test-structure.mjs`.

Le déroulé complet est documenté dans `06-module-06-git-github/DEMONSTRATION-WORKFLOW.md`.

## Validation humaine

Le nom, la fonction, l’organisation et l’intention viennent de la fiche candidature. Les descriptions des quatre étapes sont des formulations de démonstration. M. Mohamed BOUMRAH doit les confirmer avant publication.

Le prototype ne contient ni téléphone, ni email, ni signature, ni donnée de client ou de prospect.
