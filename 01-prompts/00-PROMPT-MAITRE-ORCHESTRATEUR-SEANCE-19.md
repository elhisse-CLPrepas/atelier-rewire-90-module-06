# Prompt maître orchestrateur — Séance 19

## Utilisation

Copiez ce prompt dans Codex depuis la racine du projet. L’agent doit exécuter les opérations dans l’ordre. Il doit s’arrêter après chaque étape si une validation humaine est nécessaire.

## Prompt

```text
RÔLE
Tu es l’agent de production du projet REWIRE-90-PROJECT. Tu transformes une landing page V1 statique en mini-site V2 dynamique selon la méthode de la Séance 19. Tu prépares aussi une copie propre pour le Module 06 sans créer de dépôt distant.

SOURCES OBLIGATOIRES
Lis d’abord :
- 00-LIRE-EN-PREMIER.md
- 00-sources-et-cadrage/01-ANALYSE-VISUELLE.md
- 00-sources-et-cadrage/02-CONTEXTE-PROJET.yaml
- 00-sources-et-cadrage/03-FICHE-VALIDATION-HUMAINE.md
- 00-sources-et-cadrage/05-ANALYSE-DOSSIER-AUTEUR.md

OBJECTIF
Séparer les données et l’affichage. Stocker les contenus dans data/data.json. Charger ce fichier avec fetch(). Créer les composants dans le DOM. Présenter le profil professionnel et les quatre étapes REWIRE sans publier de coordonnées. Rendre visibles les états Chargement, Succès, Vide et Erreur. Documenter la reprise Git/GitHub du Module 06.

ORDRE D’EXÉCUTION
1. Exécuter 19-A-AUDITER-V1.md.
2. Présenter le plan de transformation et signaler les décisions humaines.
3. Exécuter 19-B-CREER-JSON.md.
4. Valider la syntaxe et la structure du JSON.
5. Exécuter 19-C-CHARGER-FETCH.md.
6. Exécuter 19-D-AFFICHER-DOM.md.
7. Exécuter 19-E-TESTER-4-ETATS.md.
8. Exécuter 19-F-PREPARER-PWA.md sans enregistrer de service worker.
9. Mettre à jour README.md et la preuve finale.

RÈGLES
- Ne pas modifier ni supprimer une V1 existante.
- Ne pas utiliser file:/// pour valider fetch().
- Ne pas inventer un test ou une validation.
- Ne pas intégrer une donnée personnelle, une clé ou un secret.
- Ne jamais copier le téléphone ou les emails du dossier auteur dans le site.
- Ne pas publier ni déployer.
- Ne pas déclarer une PWA opérationnelle avant les tests de la Séance 20.
- Utiliser des chemins relatifs.
- Conserver l’accessibilité clavier et les messages d’état.
- Marquer les descriptions du programme comme « à valider par M. Mohamed BOUMRAH » tant qu’elles ne sont pas confirmées.
- Ne jamais intégrer la fiche candidature originale dans Git.

CONTRÔLES FINAUX
- JSON valide.
- Chargement par serveur local.
- Affichage dynamique réussi.
- Quatre états observables.
- Responsive mobile, tablette et ordinateur.
- Console sans erreur critique en mode Succès.
- Documentation et preuve cohérentes.

SORTIE
Termine par un tableau : exigence, résultat, preuve, statut.
Statut autorisé : PRÊT POUR VALIDATION HUMAINE — NON PUBLIÉ.
```
