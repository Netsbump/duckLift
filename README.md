<a name="readme-top"></a>

<!-- LOGO DU PROJET -->
<br />
<div align="center">
  <a href="https://github.com/VotreNomUtilisateurGitHub/DuckLift">
    <img src="chemin-vers-votre-logo-si-disponible" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">DuckLift : Application de club d'Haltérophilie</h3>
  <p align="center">
    Une application pour optimiser le suivi et la gestion de l'entraînement en haltérophilie.
    <br />
    <a href="https://github.com/VotreNomUtilisateurGitHub/DuckLift"><strong>Explorer la documentation »</strong></a>
    <br />
    <br />
    <a href="votre-url-de-demo-si-disponible">Voir la Démonstration</a>
    ·
    <a href="https://github.com/VotreNomUtilisateurGitHub/DuckLift/issues">Signaler un Bug</a>
    ·
    <a href="https://github.com/VotreNomUtilisateurGitHub/DuckLift/pulls">Demander une Fonctionnalité</a>
  </p>
</div>

<!-- TABLE DES MATIÈRES -->
<details>
  <summary>Table des Matières</summary>
  <ol>
    <li><a href="#description-du-projet">Description du Projet</a></li>
    <li><a href="#cahier-des-charges">Cahier des Charges</a></li>
    <li><a href="#technologies-utilisees">Technologies Utilisées</a></li>
    <li><a href="#fonctionnalites">Fonctionnalités</a></li>
    <li><a href="#developpement">Développement</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#demarrage">Démarrage</a></li>
    <li><a href="#contribuer">Contribuer</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- Ajoutez d'autres sections selon vos besoins -->
  </ol>
</details>

<!-- DESCRIPTION DU PROJET -->
<p id="description-du-projet"></p>

# Description du Projet

DuckLift est une application mobile conçue pour simplifier et améliorer la visualisation et le suivi des programmes d'haltérophilie pour les membres de notre club. Cette application permet aux athlètes de consulter facilement leurs programmes, leurs progressions et de recevoir des annonces de l'entraîneur directement sur leur téléphone.

L'application vise également à enrichir ma maîtrise de certaines technologies en consolidant mes compétences existantes et en en explorant de nouvelles. (voir la partie <a href="#technologies-utilisees">Technologies Utilisées</a>)

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- CAHIER DES CHARGES -->
<p id="cahier-des-charge"></p>

## Cahier des Charges

1. **Définition des Besoins et User Stories**

- [ ] Collecte des Exigences : Interaction avec les utilisateurs finaux pour comprendre leurs besoins.
- [ ] Spécification des Fonctionnalités : Création de user stories et élaboration d'un backlog produit.

2. **Conception de l'Architecture**

- [ ] Définition de l'architecture système (client-serveur, microservices).
- [ ] Conception préliminaire de la base de données et des modèles de données.
- [ ] Définition des classes d'entités et application des principes SOLID pour une POO robuste.

3. **Maquettes et Prototypage**

- [ ] Développement de wireframes, de maquette et/ou de prototypes pour les interfaces utilisateur.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- TECHNOLOGIES UTILISEES -->
<p id="technologies-utilisees"></p>

## Technologies Utilisées

- Front-End : React Native, TypeScript, Expo, Chakra UI, TanStack Query.
- Back-End : .NET, Entity Framework Core, LINQ, Duende Identity Server.
- Base de Données : PostgreSQL.
- CI/CD : Docker, Docker Compose, GitHub Actions (Ou Jenkins).
- Gestion de projet : Jira
- Qualité du Code : Eslint, Prettier, SonarQube.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- FONCTIONNALITES -->
<p id="fonctionnalites"></p>

## Fonctionnalités

  - Gestion des Athlètes : Profils détaillés, suivi des performances, planification des entraînements.
  - Journal d'Entraînement : Enregistrement des exercices, des poids, et des répétitions.
  - Tableau de Bord du Coach : Vue d'ensemble des performances et des progrès des athlètes.
  - Notifications et Annonces : Système de notifications pour les mises à jour importantes.
  - Calculateur de Charges : Outil pour calculer les charges optimales basées sur les pourcentages des maxima.
  - Suivi de la Progression : Graphiques et visualisations pour suivre les progrès au fil du temps.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- DEVELOPPEMENT -->
<p id="developpement"></p>

## Développement

### *Back-End .NET*
  - Intégration des Design Patterns : Utilisation de modèles tels que Repository, Unit of Work, Singleton, et Factory pour structurer le code de manière efficace et maintenable.
  - API et Logique Métier : Développement de l'API (RESTful) en .NET, implémentation de la logique métier, utilisation de LINQ pour les interactions avec la base de données.
  - Authentification : Intégration de Duende Identity Server pour la gestion de l'authentification et de l'autorisation.


### *Front-End React Native*

  - Interface Utilisateur : Construction des vues en React Native, en utilisant des composants pour un design réactif et accessible.
  - Intégration avec le Back-End : Connexion du front-end au back-end via les API RESTful.
  - Accessibilité : RGAA 


### *Tests*

  - Tests Unitaires :  Utilisation des frameworks comme xUnit ou NUnit (pour le Back-end) et Jest ou React Testing Library pour les composants Front-End.
  - Tests d'Intégration : Vérification de l'interaction entre différents modules et services.
  - Tests E2E : Utilisation Playwright pour simuler des scénarios utilisateur complets


### *Sécurité*

  - Sécurité : Assurer la sécurité des données utilisateur et des communications entre le client et le serveur. Définition des méthodes et outils utilisés pour sécuriser l'application dans la documentation.
  - Authentification / Autorisation : Intégration de Duende Identity Server pour l'authentification et l'autorisation.


### *Performance*

  - Techniques et outils utilisés pour le profiling et l'optimisation des performances.
  - Approches pour assurer des temps de réponse rapides et une utilisation efficace des ressources.


### *Déploiement*

  - CI/CD : Mise en place d'un pipeline d'intégration continue et de déploiement continu avec GitHub Actions (ou Jenkins).
  - Stratégies de Déploiement : Déployer l'application sur des plateformes cloud telles que Heroku, Vercel ou Netlify.


### *Environnements de Staging et Production*

  - Définition : L'environnement de staging, ou de préproduction, est une réplique exacte de l'environnement de production. Il est utilisé pour tester les codes, les mises à jour ou les nouvelles fonctionnalités dans des conditions presque identiques à celles de l'environnement de production.
  - Objectif : Le but principal est de valider le logiciel dans un environnement qui simule étroitement le monde réel ou la production. Cela permet de détecter et de corriger les bugs, les problèmes de performance ou tout autre problème avant que le logiciel ne soit déployé en production.
  - Tests : Les tests dans l'environnement de staging peuvent inclure des tests d'intégration, des tests de charge et de performance, et des tests d'acceptation utilisateur.


### *Monitoring et Maintenance*

- Surveillance et Logging

  - [ ] Systèmes de monitoring et de logging mis en place.
  - [ ] Stratégies pour surveiller la santé de l'application et détecter rapidement les problèmes.

- Backups et Restauration

  - [ ] Planification des sauvegardes de données.
  - [ ] Procédures de restauration en cas de défaillance.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- DOCUMENTATION -->
<p id="documentation"></p>

## Documentation et Formation

Cette section concerne la documentation technique et la formation des utilisateurs.
Documentation Technique

  Documentation de l'API avec Swagger/OpenAPI.
  Documentation du code et des procédures opérationnelles.
  Diagrammes d'architecture

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

## Formation des Utilisateurs

  Guides d'utilisation pour les utilisateurs finaux.
  Screenshot, carrousel tour tuto

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- DEMARRAGE -->
<p id="demarrage"></p>

## Démarrage

1. Prérequis

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine :

  Git: Nécessaire pour cloner le dépôt et gérer les versions. Télécharger Git.
  Node.js: Essentiel pour exécuter le projet JavaScript/TypeScript. Télécharger Node.js.
  Docker: Utilisé pour créer, déployer et exécuter des applications en utilisant des conteneurs. Installer Docker.
  .NET SDK :
  PostgreSQL : 
  Configurer l'environnement de développement local : Eslint/Prettier VsCode

2. Installation

Suivez ces étapes pour installer et configurer le projet :

  Cloner le dépôt Git :

```bash
git clone https://github.com/VotreNomUtilisateurGitHub/DuckLift.git
```

Cela créera une copie locale du projet sur votre machine.

Naviguer dans le dossier du projet :

```bash
cd DuckLift
```

Installer les dépendances Node.js :

```bash
npm install
```

Cette commande installera toutes les dépendances nécessaires telles que définies dans le fichier package.json.

Configurer Docker (si nécessaire) :
Si votre projet nécessite des services spécifiques comme une base de données ou un serveur backend qui s'exécute via Docker, ajoutez les étapes de configuration ici. Par exemple :

```bash
  docker-compose up -d
```

Cela lancera tous les services nécessaires définis dans votre fichier docker-compose.yml.

3. Exécution du projet

Pour lancer le projet, utilisez :

```bash
  npm start
```

Cette commande démarre l'application front-end. Assurez-vous que tous les services nécessaires (comme les bases de données ou les serveurs backend) sont en cours d'exécution, soit localement, soit via Docker.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- CONTRIBUER -->
<p id="contribuer"></p>

## Contribuer

Voici un guide étape par étape pour contribuer :

1. Fork du Projet

Créez une copie du projet sur votre compte GitHub. Cela vous permet d'apporter des modifications sans affecter le projet original.

  1. Visitez le repository GitHub de DuckLift.
  2. Cliquez sur le bouton Fork en haut à droite de la page.

2. Cloner le Fork

Après avoir forké le projet, clonez-le sur votre machine locale pour commencer à travailler dessus.


```bash
git clone https://github.com/VotreGitHubUsername/DuckLift.git
cd DuckLift
```

3. Configurer un Upstream Remote

Pour garder votre fork à jour avec le projet original, configurez un remote "upstream" pointant vers le dépôt d'origine.

```bash
git remote add upstream https://github.com/VotreNomUtilisateurGitHub/DuckLift.git
```

4. Créer une Branche de Fonctionnalité

Pour chaque nouvelle fonctionnalité ou correction, créez une nouvelle branche. Cela facilite le suivi des changements et la gestion des pull requests.

```bash
git checkout -b feature/NomDeVotreFonctionnalité
```

5. Faire des Changements

Apportez vos modifications ou ajouts au code. Assurez-vous de respecter les conventions de codage et les bonnes pratiques du projet.
6. Garder Votre Branche à Jour

Avant de pousser vos changements, assurez-vous que votre branche est à jour avec la branche principale du projet original.


```bash
git fetch upstream
git rebase upstream/main
```

7. Committez vos Changements

Faites des commits clairs et significatifs. Chaque commit doit idéalement représenter une unité logique de changement.

```bash
git add .
git commit -m "Ajout d'une nouvelle fonctionnalité"
```

8. Push Vers Votre Fork

Poussez les changements de votre branche vers votre fork sur GitHub.

```bash
git push origin feature/NomDeVotreFonctionnalité
```

9. Ouvrir une Pull Request

  Retournez sur le repository GitHub de DuckLift.
  Vous verrez un bouton Compare & pull request. Cliquez dessus.
  Remplissez une description claire et détaillée de vos changements.
  Soumettez la pull request.

10. Bonnes Pratiques

  Code propre et lisible : Assurez-vous que votre code est bien formaté et suit les conventions du projet.
  Tests : Ajoutez des tests pour les nouvelles fonctionnalités ou les corrections de bugs.
  Documentation : Mettez à jour le README et tout autre document nécessaire pour refléter vos changements.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- LICENCE -->
<p id="licence"></p>

## Licence

Distribué sous la Licence MIT. Voir le fichier LICENSE pour plus d'informations. A definir
<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

<!-- CONTACT -->
<p id="contact"></p>

## Contact

Twitter - [@votre_twitter] - email@example.com
Linkedin 

Lien du projet: https://github.com/VotreNomUtilisateurGitHub/DuckLift
<p align="right">(<a href="#readme-top">retour en haut</a>)</p>