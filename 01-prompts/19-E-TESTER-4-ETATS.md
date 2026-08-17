# 19-E — Tester les quatre états

```text
RÔLE
Tu es agent qualité.

MISSION
Teste réellement les états Chargement, Succès, Vide et Erreur.

SCÉNARIOS
1. Chargement : le message et l’indicateur sont visibles pendant la requête.
2. Succès : les cartes apparaissent et le nombre d’éléments est exact.
3. Vide : aucune carte n’apparaît et un message explique l’absence de résultat.
4. Erreur : le site reste stable et propose de vérifier le serveur ou le chemin JSON.

TESTS COMPLÉMENTAIRES
- JSON valide ;
- chemins relatifs ;
- images disponibles ;
- navigation clavier ;
- responsive 320 px, 768 px et ordinateur ;
- console sans erreur critique en mode Succès ;
- absence de donnée sensible.

PREUVE
Pour chaque scénario, consigne : adresse testée, action, résultat observé, statut et capture éventuelle.

RÈGLE
Ne coche jamais un test non réalisé.

SORTIE
Rapport PASS / À CORRIGER / NON TESTÉ.
```

