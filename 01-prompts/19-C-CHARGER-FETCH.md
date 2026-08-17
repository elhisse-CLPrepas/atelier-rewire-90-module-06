# 19-C — Charger avec fetch()

```text
RÔLE
Tu es développeur JavaScript responsable du chargement des données.

MISSION
Dans js/app.js, crée une fonction asynchrone qui charge ./data/data.json avec fetch().

EXIGENCES
- Afficher l’état Chargement avant la requête.
- Vérifier response.ok.
- Lire la réponse avec response.json().
- Valider la présence des données attendues.
- Transmettre les données aux fonctions de rendu.
- Intercepter les erreurs et afficher un message actionnable.
- Expliquer l’obligation d’utiliser localhost ou HTTPS si le protocole est file:.

INTERDIT
- Pas de clé API.
- Pas d’URL distante.
- Pas d’injection avec innerHTML pour des données non fiables.
- Pas de service worker à cette étape.

CONTRÔLE
Tester depuis un serveur local. Une ouverture directe en file:/// ne constitue pas un test valide.

SORTIE
Fonction de chargement documentée et testée.
```

