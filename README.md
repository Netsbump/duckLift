<a name="readme-top"></a>

<!-- LOGO DU PROJET -->
<br />
<div align="center">
  <a href="https://github.com/Netsbump/DuckLift">
    <img src="chemin-vers-votre-logo-si-disponible" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">DuckLift : Application de Club d'Haltérophilie</h3>
  <p align="center">
    Une application pour optimiser le suivi et la gestion de l'entraînement en haltérophilie.
    <br />
    <br />
    Pour plus de détails, vous pouvez 
    <br />
    <a href="https://github.com/Netsbump/duckLift/wiki"><strong>Explorer la documentation »</strong></a>
    <br />
    <br />
    <a href="votre-url-de-demo-si-disponible">Voir la Démonstration</a>
    ·
    <a href="https://github.com/Netsbump/DuckLift/issues">Signaler un Bug</a>
    ·
    <a href="https://github.com/Netsbump/DuckLift/pulls">Demander une Fonctionnalité</a>
  </p>
</div>

***

<!-- TABLE DES MATIÈRES -->
<details>
  <summary>Table des Matières</summary>
  <ol>
    <li><a href="#description-du-projet">A propos du projet</a></li>
    <li><a href="#fonctionnalites">Fonctionnalités</a></li>
    <li><a href="#technologies-utilisees">Technologies Utilisées</a></li>
    <li><a href="#demarrage">Démarrage</a></li>
    <li><a href="#contribuer">Contribuer</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- Ajoutez d'autres sections selon vos besoins -->
  </ol>
</details>

<!-- A PROPOS DU PROJET -->
<p id="description-du-projet"></p>

# À propos du Projet

DuckLift est une application web et mobile conçue pour optimiser le suivi et la gestion de l'entraînement en haltérophilie. Ce projet vise à fournir une solution intuitive pour les athlètes et entraîneurs, tout en consolidant mes compétences en développement logiciel.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

***

<!-- FONCTIONNALITES -->
<p id="fonctionnalites"></p>

## Fonctionnalités

- Journal d'Entraînement Personnalisé : Les athlètes peuvent visualiser la programmation quotidienne avec des détails sur les exercices, les pourcentages de travail et les répétitions.
- Profil Athlète : Les utilisateurs créent et mettent à jour leur profil, y compris les informations de base et les statistiques de performance telles que le poids et la taille.
- Gestion des Performances : Une page dédiée permet aux athlètes de saisir et de visualiser leurs maxima, avec un calculateur de charges pour personnaliser les programmes.
- Tableau de Bord Coach : Les coachs ont accès à une interface de gestion pour accéder aux profils des athlètes, créer et publier des entraînements, et gérer une bibliothèque d'exercices.
- Notifications et Annonces : Un système de notifications informe les utilisateurs des mises à jour importantes, avec des annonces et des messages de la part des coachs.
- Réglages et Support : Les utilisateurs peuvent accéder aux réglages de l'application, y compris la gestion du compte, le changement de mot de passe, la FAQ et l'aide.

## Fonctionnalités à Venir

- Mode Hors Ligne : Permettant l'accès aux fonctionnalités essentielles même sans connexion internet.
- Suivi de la Progression : Des graphiques et des visualisations pour un suivi détaillé des progrès.
- Chat du Club : Une fonctionnalité de messagerie pour faciliter la communication entre les membres du club.
- Personnalisation de l'Interface : Introduction d'un mode clair/sombre et options de choix de langue.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

***

<!-- TECHNOLOGIES UTILISEES -->
<p id="technologies-utilisees"></p>

## Technologies Utilisées

- Front-End : React Native, React, React Router, TypeScript, Expo, Chakra UI, TanStack Query.
- Back-End : .NET, Entity Framework Core, LINQ, Duende Identity Server.
- Base de Données : PostgreSQL.
- CI/CD : Docker, Docker Compose, GitHub Actions (Ou Jenkins).
- Gestion de projet : Notion
- Qualité du Code : Eslint, Prettier, SonarQube.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

***

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

  Cloner le Fork du dépôt Git :

```bash
git clone https://github.com/Netsbump/DuckLift.git
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

Configurer l'environnement de développement local :
Assurez-vous que votre environnement de développement est configuré pour utiliser des outils comme Eslint et Prettier. Cela aidera à maintenir la cohérence du code et à suivre les bonnes pratiques de développement.

Configurer les variables d'environnement :
Si votre projet nécessite des variables d'environnement, assurez-vous de les configurer correctement. Elles peuvent inclure des clés API, des configurations de base de données, etc. Pour des raisons de sécurité, ne les commitez jamais dans le dépôt.

3. Exécution du projet

Pour lancer le projet, utilisez :

```bash
  npm start
```

Cette commande démarre l'application front-end. Assurez-vous que tous les services nécessaires (comme les bases de données ou les serveurs backend) sont en cours d'exécution, soit localement, soit via Docker.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

***

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
git clone https://github.com/Netsbump/DuckLift.git
cd DuckLift
```

3. Configurer un Upstream Remote

Pour garder votre fork à jour avec le projet original, configurez un remote "upstream" pointant vers le dépôt d'origine.

```bash
git remote add upstream https://github.com/Netsbump/DuckLift.git
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

 Chaque commit doit idéalement représenter une unité logique de changement. Voici quelques bonnes pratiques pour les messages de commit :

- Commencez le message par un type de changement comme feat, fix, docs, style, refactor, test, ou chore.
- Utilisez le format type: sujet pour vos messages.
- Le sujet ne doit pas dépasser 50 caractères, doit commencer par une majuscule et ne doit pas finir par un point.
- Utilisez l'impératif présent, par exemple : "Ajoute" plutôt que "Ajouté".

```bash
git add .
git commit -m "feat: Ajoute une fonction de recherche avancée"
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

***

<!-- LICENCE -->
<p id="licence"></p>

## Licence

Distribué sous la Licence MIT. Voir le fichier LICENSE pour plus d'informations.
<p align="right">(<a href="#readme-top">retour en haut</a>)</p>

***

<!-- CONTACT -->
<p id="contact"></p>

## Contact

Twitter - [@votre_twitter] - email@example.com
Linkedin 

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>
