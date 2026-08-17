# Commandes Git — atelier REWIRE

## Initialiser la copie nettoyée

```bash
git init
git status
git add .
git commit -m "chore: initialiser le cas REWIRE-90"
git branch -M main
```

## Relier le dépôt distant vide

Commande proposée après création humaine du dépôt :

```bash
git remote add origin https://github.com/elhisse-CLPrepas/atelier-rewire-90-module-06.git
git remote -v
git push -u origin main
```

## Travailler sur une amélioration

```bash
git switch -c feat/valider-etapes-rewire
git status
git add 02-mini-site-v2/data/data.json 06-module-06-git-github
git commit -m "content: préciser les quatre étapes REWIRE"
git push -u origin feat/valider-etapes-rewire
```

## Contrôler l’historique

```bash
git log --oneline --decorate --graph --all
git diff main...feat/valider-etapes-rewire
```

## Taguer une version validée

```bash
git switch main
git pull --ff-only
git tag -a v1.0.0 -m "Version REWIRE-90 validée pour l’atelier"
git push origin v1.0.0
```

Le nom du compte, du dépôt et du tag reste à confirmer avant exécution.
