# Workflow Git/GitHub — REWIRE-90-PROJECT

## Flux de travail

1. Le Pilote crée une issue avec un résultat attendu et des critères d’acceptation.
2. Le Producteur crée une branche courte depuis `main`.
3. Il modifie un périmètre limité.
4. Il exécute les tests locaux.
5. Il crée un commit qui explique la valeur produite.
6. Il pousse la branche sur GitHub.
7. Il ouvre une pull request reliée à l’issue.
8. Le Contrôleur vérifie le code, les preuves et la confidentialité.
9. Le Producteur corrige si nécessaire.
10. Le Pilote autorise la fusion et crée un tag de version.

## Exemple de première évolution

Issue : `Valider et améliorer les descriptions des quatre étapes REWIRE`  
Branche : `feat/valider-etapes-rewire`  
Commit : `content: préciser les quatre étapes REWIRE`  
Preuve : test structurel, capture ordinateur et capture mobile.

## Rôles

| Rôle | Responsabilité | Preuve |
|---|---|---|
| Pilote | Cadre, décide et accepte | Issue et décision de fusion |
| Producteur | Modifie, teste et documente | Commits et résultats |
| Contrôleur | Relit et vérifie | Revue et demandes de correction |

## Garde-fous

- Ne jamais pousser la fiche candidature originale.
- Ne jamais inscrire une coordonnée privée dans une issue.
- Ne jamais fusionner avec un test critique en échec.
- Ne jamais confondre fusion du code et autorisation de publication.
