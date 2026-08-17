# Étape 5 — Commit

Séances concernées : 22 et 23
Statut : **CONTRÔLÉ**

## Objectif

Enregistrer dans Git une intention cohérente : intégrer les médias REWIRE, les CTA sociaux, les tests associés et les preuves pédagogiques des étapes 1 à 5.

## Entrées nécessaires

- étape 4 validée humainement ;
- branche `publication/preparer-github-pages` ;
- tests structurels 14/14 ;
- liste exacte des fichiers de la mission.

## Action attendue

Relire le diff, contrôler les risques, indexer explicitement les chemins autorisés et créer un seul commit local.

## Fichiers autorisés

- `02-mini-site-v2/index.html` ;
- `02-mini-site-v2/css/styles.css` ;
- `02-mini-site-v2/README.md` ;
- `02-mini-site-v2/assets/media/` ;
- `02-mini-site-v2/documentation/workflow-ln-ia/` ;
- `03-tests/test-structure.mjs`.

## Fichiers protégés

Tous les autres fichiers du dépôt.

## Outil principal

Git local.

## Rôle de Git

Conserver une trace vérifiable de l’amélioration et de ses tests.

## Rôle de GitHub

Aucun rôle actif à cette étape. Un commit local ne publie rien.

## Assistance possible de Codex

Présenter le statut, contrôler les risques, indexer les chemins autorisés, relire l’index et créer le commit autorisé.

## Décision humaine

Le candidat a validé l’étape 4 et autorisé le commit de l’étape 5.

## Commandes proposées

```powershell
git status --short
git diff --stat
git add -- CHEMINS_VALIDES
git diff --cached --stat
git diff --cached
git commit -m "feat: intégrer les médias REWIRE et les CTA sociaux"
git status --short
git log --oneline -5
```

## Résultat observé

Commit local créé sur `publication/preparer-github-pages` avec le message `feat: intégrer les médias REWIRE et les CTA sociaux`.

## Contrôle effectué

Vingt fichiers inclus, tests 14/14 réussis, aucun secret détecté, médias inférieurs à la limite GitHub et index limité aux chemins autorisés.

## Preuve conservée

L’identifiant court final est conservé dans le rapport de l’étape et dans `git log`.

## Erreur ou confusion rencontrée

Aucune à ce stade.

## Prochaine action

Attendre une autorisation distincte avant toute action distante de l’étape 6.
