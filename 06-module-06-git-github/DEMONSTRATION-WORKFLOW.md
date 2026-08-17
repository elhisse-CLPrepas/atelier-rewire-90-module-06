# Démonstration du workflow GitHub

Ce dépôt sert d’exemple concret : une modification est développée sur une branche, contrôlée automatiquement, relue dans une pull request, fusionnée dans `main`, puis publiée sur GitHub Pages.

## Parcours démontré

1. Créer une branche `agent/description-courte` depuis `main`.
2. Modifier uniquement les fichiers nécessaires.
3. Exécuter `node 03-tests/test-structure.mjs` localement.
4. Commiter avec un message expliquant l’intention.
5. Pousser la branche et ouvrir une pull request vers `main`.
6. Attendre le workflow **Valider le mini-site** et relire les changements.
7. Fusionner la pull request après validation humaine.
8. Observer le workflow **Publier le mini-site sur GitHub Pages**.

## Séparation des responsabilités

- `.github/workflows/validate.yml` contrôle la syntaxe JavaScript et les 12 règles structurelles sur chaque pull request.
- `.github/workflows/pages.yml` publie uniquement `02-mini-site-v2` après une modification intégrée à `main`.
- `02-mini-site-v2/data/data.json` contient les textes éditoriaux à faire valider.
- `02-mini-site-v2/js/app.js` gère le chargement, la validation et le rendu DOM.

## Commandes de démonstration

```bash
git switch main
git pull --ff-only
git switch -c agent/amelioration-exemple
node 03-tests/test-structure.mjs
git add chemin/du/fichier
git commit -m "docs: expliquer une amélioration"
git push -u origin agent/amelioration-exemple
```

La pull request reste le point de contrôle humain : les vérifications automatiques prouvent la cohérence technique, mais elles ne valident pas le contenu du programme REWIRE.
