# Étape 6 — Push et Pull Request

Séance concernée : 23 pour la compréhension et 24 pour l’exécution

Statut : **CONTRÔLÉ**

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

```text
URL du dépôt : https://github.com/elhisse-CLPrepas/atelier-rewire-90-module-06
Remote origin : https://github.com/elhisse-CLPrepas/atelier-rewire-90-module-06.git
Branche distante : publication/preparer-github-pages
Issue GitHub : SIMULÉE par la fiche locale de l’étape 2
Pull Request : https://github.com/elhisse-CLPrepas/atelier-rewire-90-module-06/pull/2
État de la PR : BROUILLON
Commits présentés : 4611947 et f2ae24b, plus la preuve documentaire finale de cette étape
Tests déclarés : 14/14
```

## Contrôle effectué

Contenu public contrôlé, historique contrôlé, tests 14/14, aucun secret détecté et aucun fichier dépassant la limite GitHub.

## Preuve conservée

URL de la branche distante et URL de la Pull Request #2 consignées dans cette fiche.

## Erreur ou confusion rencontrée

Deux tentatives initiales ont rencontré une indisponibilité GitHub `HTTP 503`. La reprise contrôlée a réussi sans créer de doublon.

## Prochaine action

Attendre la validation de l’étape 6 avant de commencer la review de l’étape 7.
