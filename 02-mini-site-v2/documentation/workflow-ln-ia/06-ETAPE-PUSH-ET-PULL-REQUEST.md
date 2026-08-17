# Étape 6 — Push et Pull Request

Séance concernée : 23 pour la compréhension et 24 pour l’exécution

Statut : **EN COURS**

## Objectif

Pousser la branche contrôlée et ouvrir une Pull Request vers `main` sans publier directement les changements sur GitHub Pages.

## Entrées nécessaires

- commit local `4611947` ;
- branche `publication/preparer-github-pages` ;
- dépôt public existant ;
- GitHub CLI authentifié ;
- autorisation distante explicite du candidat.

## Action attendue

Contrôler l’identité GitHub et le remote, pousser la branche, puis ouvrir une Pull Request en brouillon avec le rapport de tests.

## Fichiers autorisés

Cette fiche, le prompt 06, le modèle de Pull Request et le journal des preuves.

## Fichiers protégés

Tous les fichiers fonctionnels déjà commités. Aucun changement de code supplémentaire n’est autorisé pendant cette étape.

## Outil principal

Git local et GitHub CLI.

## Rôle de Git

Transmettre la branche et ses commits sans forçage.

## Rôle de GitHub

Héberger la branche et présenter la proposition dans une Pull Request avant toute fusion.

## Assistance possible de Codex

Vérifier l’accès, pousser la branche, créer la PR et conserver ses URL.

## Décision humaine

Le candidat a autorisé la liaison du dépôt, le push et la Pull Request. La création d’une issue distincte n’est pas exécutée.

## Commandes proposées

```powershell
gh auth status
git remote -v
git push -u origin publication/preparer-github-pages
gh pr create --draft --base main --head publication/preparer-github-pages
```

## Résultat observé

À compléter après le push et la création de la Pull Request.

## Contrôle effectué

Contenu public contrôlé, historique contrôlé, tests 14/14, aucun secret détecté et aucun fichier dépassant la limite GitHub.

## Preuve conservée

À compléter avec les URL de la branche et de la Pull Request.

## Erreur ou confusion rencontrée

Aucune avant exécution.

## Prochaine action

Pousser, ouvrir la PR en brouillon, puis attendre la review de l’étape 7.
