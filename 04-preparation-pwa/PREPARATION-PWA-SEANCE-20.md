# Préparation PWA — NON ACTIVÉE

Cette préparation appartient à la Séance 20. Elle n’est pas reliée au mini-site V2.

## Éléments préparés

- modèle de `manifest.webmanifest` ;
- modèle de `service-worker.js` ;
- liste initiale des fichiers statiques ;
- version de cache explicite ;
- suppression des anciens caches ;
- stratégie réseau d’abord pour `data/data.json` ;
- page de repli à définir et tester.

## Tests obligatoires avant activation

1. Servir le site sur `localhost` ou HTTPS.
2. Vérifier le manifest dans les outils de développement.
3. Fournir des icônes PNG 192 × 192 et 512 × 512.
4. Enregistrer le service worker uniquement après validation.
5. Tester l’installation.
6. Tester un premier chargement en ligne.
7. Passer hors connexion puis tester les pages et ressources prévues.
8. Modifier la version du cache et vérifier la mise à jour.
9. Vérifier qu’une réponse d’erreur n’est pas mise en cache.
10. Documenter les résultats.

## Décision actuelle

`PWA_ACTIVE = false`

Ne pas annoncer un fonctionnement hors connexion avant réalisation de ces tests.

