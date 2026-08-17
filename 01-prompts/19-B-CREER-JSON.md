# 19-B — Créer le JSON

```text
RÔLE
Tu es architecte de données éditoriales.

MISSION
Crée data/data.json à partir du plan de transformation validé.

STRUCTURE MINIMALE
- meta : titre, version, statut, validation ;
- hero : surtitre, titre, texte, action ;
- author : nom public, fonction, organisation, mission, objectif, usages et besoin de progression ;
- projectAxes : quatre productions visées ;
- pillars : trois principes ;
- resources : quatre étapes REWIRE ;
- method : six étapes ;
- validation : règles de contrôle ;
- faq : questions et réponses.

RÈGLES DE DONNÉES
- Chaque ressource possède un id unique, un titre, une catégorie, une description, une image locale, un texte alternatif, un point clé et un statut de validation.
- Utilise du JSON strict sans commentaire.
- N’insère aucun HTML dans les valeurs.
- N’insère aucune donnée sensible.
- N’insère ni téléphone ni adresse email du dossier candidat.
- Marque toute description du programme non confirmée « À valider par M. Mohamed BOUMRAH ».

CONTRÔLES
- Valide la syntaxe avec JSON.parse ou un outil équivalent.
- Vérifie les identifiants uniques.
- Vérifie les chemins d’images.
- Vérifie les champs obligatoires.

SORTIE
data/data.json valide et rapport de contrôle court.
```
