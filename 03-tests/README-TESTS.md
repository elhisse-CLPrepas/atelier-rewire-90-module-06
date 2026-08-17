# Tests de la Séance 19 — REWIRE-90-PROJECT

## Contrôle automatique

Depuis la racine du pack :

```bash
node 03-tests/test-structure.mjs
```

Le script vérifie la structure, le JSON, les quatre étapes, les images, `fetch()`, les quatre états, l’absence de service worker, l’absence de coordonnées privées et la présence du dossier Module 06.

## Contrôle navigateur

1. Lancer `python -m http.server 8000` dans `02-mini-site-v2`.
2. Ouvrir `http://localhost:8000`.
3. Tester les boutons Chargement, Succès, Vide et Erreur.
4. Vérifier la console en mode Succès.
5. Contrôler les largeurs 320 px, 768 px et 1440 px.
6. Vérifier la navigation au clavier et les annonces d’état.

Un test n’est réussi que si la preuve a été réellement observée.
