<a id="readme-top" name="readme-top"></a>

<br />

<div align="center">

  <h3 align="center">🚀 DuckLift Web App</h3>

</div>

<div>

### ✨ Librairies

- **React & TypeScript:** The foundation of this project. I'm diving into modern web development with React and bolstering my expertise through TypeScript.
- **Chakra UI:** I chose the Chakra UI library for its sleek design and versatility. It's a great playground for enhancing my design sense and crafting user-friendly interfaces.
- **Axios:** For seamless API integration. I'm using Axios to familiarize myself with best-practice API integration and to improve frontend-backend communication.
- **React Router:** Routing is crucial in React apps. I'm learning to structure my application and provide smooth navigation with React Router.
- **ESLint & Prettier:** Discipline first! I've equipped myself with ESLint and Prettier to ensure I adhere to best practices, keep my code neat, and maintain consistency in my coding style.
- **Vite.js:** Performance and rapid development in focus. I've adopted Vite.js to keep abreast of modern development tools and to enhance my development workflow's efficiency.
- **Jest:** : Providing a comprehensive platform for unit and integration testing. With its capabilities for mocking, test coverage, and powerful assertions, Jest facilitates the validation of application logic and enhances the development experience. In combination with `@testing-library/react` for testing React components in a more idiomatic way and `@testing-library/jest-dom` to extend Jest's assertions with more DOM-specific matchers, this setup aims to ensure the application remains reliable and maintainable as it evolves.
- **Vite-tsconfig-paths**: Streamlining imports. This plugin is a game-changer for managing complex directory structures. By leveraging TypeScript's path aliases, it simplifies imports across the project, making the codebase more navigable and reducing the overhead of managing long relative paths.
- **Storybook**: Crafting components in isolation. Storybook serves as an essential tool in this project for building and testing UI components in isolation. It accelerates UI development, promotes component reuse, and ensures visual consistency across the application.
- **React Hook Form** : Streamlined form management. React Hook Form is employed for its performance and minimal re-rendering, making form handling in React applications efficient and straightforward. It significantly simplifies form validation and data gathering, leading to an improved user experience.

### 🔴 Note

The remainder of this README delves into detailed explanations about files, configurations, and structures. This section is currently in French. My apologies for any inconvenience! I'll aim to provide an English translation in the future.

</div>

<br />

<!-- TABLE DES MATIERES -->
<details>
  <summary>Table des matières</summary>
		<ul>
      <li><a href="#projet-vitejs">Projet React avec Vite.js </a></li>
          <ol>
            <li><a href="#fonctionnement-vitejs">Comment fonctionne Vite.js</a></li>
            <li><a href="#fichiers-vitejs">Contenu des fichiers générés par Vite</a></li>
          </ol>
      <br/>
      <li><a href="#getting-started">Getting Started</a></li>
      		<ol>
        		<li><a href="#recuperation-projet">Récupération du Projet</a></li>
            <li><a href="#navigation">Navigation</a></li>
            <li><a href="#prerequis">Prérequis</a></li>
            <li><a href="#installation-dependances">Installation des dépendances</a></li>
            <li><a href="#config-vsc">Configuration de Visual Studio Code</a></li>
            <li><a href="#run-projet">Lancement du projet</a></li>
            <li><a href="#build-projet">Build du projet</a></li>
      		</ol>
      <br/>
    <li><a href="#commit">Commit</a></li>
    <br/>
    <li><a href="#structure-de-fichier">Structure de fichier de l'application</a></li>
    </ul>
</details>

<p id="projet-vitejs"></p>

# Projet React avec Vite.js

Vite est un outil de développement front-end qui nous permet de démarrer rapidement un projet avec des configurations minimales. Il offre un démarrage rapide, des rechargements à chaud et d'autres fonctionnalités pour améliorer notre flux de développement. Si vous souhaitez en savoir plus sur Vite, consultez la [documentation officielle de Vite](https://vitejs.dev/guide/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p id="fonctionnement-vitejs"></p>

## Comment fonctionne Vite.js

1. **Démarrage rapide**: Vite.js utilise le protocole natif ES Modules (ESM) du navigateur pour effectuer des importations de modules à la volée sans avoir besoin de bundler les modules au préalable.

2. **Rechargement à chaud des modules (HMR)**: Vite.js prend en charge le rechargement à chaud des modules, ce qui signifie que lorsqu'un fichier est modifié, seules les parties de l'application qui dépendent de ce fichier sont rechargées, et non toute l'application.

3. **Optimisation pour la production**: Lors de la construction pour la production, Vite.js utilise Rollup pour regrouper notre code en un petit nombre de fichiers efficaces.

Pour démarrer le serveur de développement, exécutez la commande suivante dans le terminal :

```sh
npm run dev
```

Cela démarrera le serveur de développement Vite.js et ouvrira votre application dans le navigateur.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p id="fichiers-vitejs"></p>

## Contenu des fichiers générés par Vite

Voici une explication succincte de chaque fichier généré par Vite dans ce projet React + TypeScript :

- `index.html`: Sert de squelette HTML à l'application. Contient le script qui charge le JavaScript initial.

- `src/main.tsx`: Point d'entrée du code JavaScript. Gère le rendu initial du composant racine et l'initialisation de l'application. Utilisé pour des configurations globales telles que l'activation du mode strict de React.

- `src/App.tsx`: : Composant principal où la logique de l'application est principalement écrite. Il est isolé pour faciliter les tests, la réutilisabilité et la maintenance.

- `vite.config.js`: C'est le fichier de configuration principal de Vite dans notre projet. Il nous permet de personnaliser le comportement de Vite en fonction de nos besoins spécifiques. Voici quelques-unes des options de configuration que nous pouvons définir dans ce fichier :

  1.  **plugins**: Nous pouvons ajouter des plugins Vite pour ajouter des fonctionnalités supplémentaires à Vite. Les plugins sont généralement des objets qui suivent l'API de plugin Vite.

  2.  **resolve.alias**: Nous pouvons définir des alias de chemin pour simplifier les importations dans notre code. Par exemple, nous pouvons définir un alias pour le répertoire `src` de notre projet afin de pouvoir importer des fichiers de ce répertoire sans avoir à utiliser des chemins relatifs longs et compliqués.

  3.  **define**: Nous pouvons définir des variables d'environnement globales qui seront disponibles dans notre code. Ces variables peuvent être utiles pour gérer des informations telles que l'URL de notre API.

  4.  **base**: Nous pouvons définir le chemin de base de notre application. C'est utile si nous prévoyons de déployer notre application dans un sous-répertoire d'un domaine.

  5.  **build.outDir**: Nous pouvons définir le répertoire dans lequel Vite générera les fichiers de production de notre application.

  6.  **server.proxy**: Nous pouvons définir des options de proxy pour notre serveur de développement, utiles si nous avons besoin de faire des requêtes à une API qui ne prend pas en charge le CORS.

  7.  **optimizeDeps**: Nous pouvons définir des options pour optimiser les dépendances de notre projet.

- `package.json`: Le fichier package.json est un fichier central dans tout projet Node.js et JavaScript. Dans notre projet, il remplit plusieurs fonctions clés :

  1.  **Métadonnées du projet** : Il contient des informations de base sur notre projet, telles que le nom, la version, la description, et l'auteur.

  2.  **Dépendances** : Liste des bibliothèques et packages dont notre projet dépend. Ces dépendances sont classées en :

      - dependencies : Les packages nécessaires pour que notre application fonctionne en production.
      - devDependencies : Les packages qui ne sont nécessaires que pour le développement, comme les outils de construction ou de test.

  3.  **Scripts** : Une série de scripts que nous pouvons exécuter avec la commande npm run <nom-du-script>. Ces scripts automatisent des tâches courantes comme le démarrage de notre serveur de développement (npm run dev), la construction de notre projet pour la production (npm run build), les tests, etc.

- `package-lock.json`: Alors que package.json nous donne une vue d'ensemble des dépendances de notre projet, le fichier package-lock.json décrit exactement quelles versions de chaque dépendance sont actuellement installées.

Lorsque nous installons une dépendance avec npm, cela peut potentiellement installer plusieurs packages. Par exemple, si nous installons une bibliothèque qui dépend d'une autre bibliothèque, cette "sous-dépendance" est également installée. package-lock.json capture une vue exacte de notre arborescence de dépendances, y compris toutes ces sous-dépendances, et leurs versions exactes.

Le but principal de ce fichier est de garantir la consistance. Si un autre développeur récupère notre projet et exécute npm install, le fichier package-lock.json s'assure qu'il installe exactement les mêmes versions de chaque package que celles que nous utilisons, éliminant ainsi les "ça marche sur ma machine" et garantissant que tout le monde travaille dans des conditions identiques.

Il est fortement recommandé de ne pas modifier manuellement ce fichier et de le commiter dans notre dépôt pour maintenir cette cohérence entre les environnements de développement.

- `tsconfig.json`: C'est le fichier de configuration principal pour TypeScript dans notre projet. Il spécifie les options de compilation de TypeScript, telles que les versions de JavaScript cibles, les règles de type à appliquer, les chemins de fichiers à inclure/exclure, et bien d'autres choses.

Voici quelques-unes des options les plus courantes que nous pouvons définir dans notre fichier tsconfig.json :

1.  **compilerOptions**: Un ensemble d'options qui contrôlent le comportement du compilateur TypeScript.

    - target: Spécifie la version de JavaScript cible (par exemple, ES5, ES6).
    - module: Définit le système de modules à utiliser (par exemple, CommonJS, ESNext).
    - jsx: Définit le mode de compilation JSX (utile pour les projets React).
    - strict: Active un ensemble de contrôles de type stricts.

2.  **include**: Un tableau de motifs qui déterminent quels fichiers TypeScript doivent être inclus dans la compilation.

3.  **exclude**: Un tableau de motifs pour exclure certains fichiers de la compilation.

4.  **extends**: Permet de prolonger une autre configuration de TypeScript. Utile pour partager des configurations entre plusieurs projets.

- `tsconfig.node.json`: Le fichier `tsconfig.node.json` est une variation du fichier `tsconfig.json` que nous utilisons spécifiquement pour configurer TypeScript pour le code qui ne fait pas partie de notre code source principal, comme notre fichier de configuration Vite `vite.config.ts`.

Voici ce que nous avons dans notre fichier tsconfig.node.json actuel :

```js
{
"compilerOptions": {
   "composite": true,
   "skipLibCheck": true,
   "module": "ESNext",
   "moduleResolution": "bundler",
   "allowSyntheticDefaultImports": true
},
"include": ["vite.config.ts"]
}
```

1.  **compilerOptions**: Un ensemble d'options qui contrôlent le comportement du compilateur TypeScript.

    - composite: Cette option permet la compilation de projets TypeScript avec des références de projet, ce qui peut améliorer la performance de la compilation.
    - skipLibCheck: Cette option permet de sauter la vérification de type pour les fichiers de déclaration (fichiers .d.ts) dans les bibliothèques que nous utilisons. Cela peut accélérer la compilation.
    - module: Nous utilisons le système de modules ESNext pour ce fichier de configuration.
    - moduleResolution: Nous utilisons l'option "bundler" pour indiquer que notre code sera regroupé par un outil de regroupement de modules (comme Vite).
    - allowSyntheticDefaultImports: Cette option permet d'utiliser des importations par défaut pour les modules qui n'ont pas d'exportation par défaut.

2.  **include**: Nous incluons uniquement notre fichier de configuration Vite (vite.config.ts) pour la compilation avec ce fichier tsconfig.node.json.

Ce fichier de configuration TypeScript séparé nous permet de configurer TypeScript de manière spécifique pour notre fichier de configuration Vite, sans affecter la configuration de notre code source principal.

- `.eslintrc.cjs`: Ce fichier contient la configuration d'ESLint pour notre projet. ESLint est un outil de linting qui nous aide à identifier et corriger les problèmes dans notre code, tels que les erreurs de syntaxe, les problèmes de style de code, et les mauvaises pratiques de programmation. Dans ce fichier, nous pouvons définir des règles de linting, des environnements, des plugins, etc.

Voici notre configuration actuelle :

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "@typescript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
```

1.  **root**: Indique qu'il s'agit de la configuration racine d'ESLint pour notre projet.

2.  **env**: Spécifie les environnements dans lesquels notre code sera exécuté. Nous indiquons que notre code sera exécuté dans un navigateur et utilise la syntaxe ES2020.

3.  **extends**: Étend plusieurs configurations d'ESLint recommandées pour obtenir un ensemble de règles de base pour le linting. Cela inclut les règles recommandées d'ESLint, les règles recommandées pour TypeScript (avec vérification de type), les règles recommandées pour les hooks React, et les règles recommandées de Prettier.

4.  **ignorePatterns**: Indique les motifs de fichiers à ignorer pour le linting. Nous ignorons les fichiers dans le dossier dist et notre propre fichier de configuration ESLint.

5.  **parser**: Utilise le parseur TypeScript d'ESLint pour analyser notre code TypeScript.

6.  **parserOptions**: Définit des options pour le parseur.

    - ecmaVersion: Spécifie la version d'ECMAScript à utiliser.
    - sourceType: Indique que notre code utilise des modules ECMAScript.
    - project: Spécifie les fichiers de configuration TypeScript à utiliser pour la vérification de type.
    - tsconfigRootDir: Indique le répertoire racine des fichiers de configuration TypeScript.

7.  **plugins**: Utilise les plugins react-refresh, @typescript-eslint, et prettier pour ajouter des règles de linting supplémentaires.

8.  **rules**: Définit des règles de linting personnalisées pour notre projet. Nous ajoutons une règle pour s'assurer que nous exportons uniquement des composants React dans les fichiers qui utilisent React Refresh.

Cette configuration d'ESLint nous aide à maintenir une qualité de code élevée et à éviter les erreurs courantes dans notre code.

- `.prettierrc.cjs`: Ce fichier contient la configuration de Prettier pour notre projet. Prettier est un formatteur de code qui garantit que notre code est cohérent et lisible. Il reformate automatiquement notre code en fonction des règles que nous avons définies dans le fichier de configuration .prettierrc.cjs.

Voici notre configuration actuelle :

```js
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
```

1. **trailingComma**: "es5": Cette option ajoute automatiquement une virgule à la fin des éléments d'un objet ou d'un tableau lorsqu'il s'agit d'un code ES5 ou plus récent. Cela rend le code plus lisible et facilite la modification des objets et des tableaux sans avoir à ajouter manuellement des virgules.

2. **tabWidth**: 2: Cette option définit la largeur de l'indentation à deux espaces. Cela signifie que chaque niveau d'indentation sera composé de deux espaces, ce qui rend le code bien structuré et facile à lire.

3. **semi**: true: Cette option garantit que chaque déclaration se termine par un point-virgule (;). Les points-virgules permettent d'éviter les erreurs de syntaxe potentielles liées à l'insertion automatique de point-virgule (ASI) dans JavaScript.

4. **singleQuote**: true: Cette option indique que les chaînes de caractères doivent être entourées de guillemets simples (') plutôt que de guillemets doubles ("). Les guillemets simples sont souvent préférés dans le code JavaScript car ils sont plus faciles à taper et rendent le code plus lisible.

Chaque fois que nous enregistrons un fichier dans Visual Studio Code, Prettier reformate automatiquement notre code en fonction de ces règles de formatage. Cela nous aide à maintenir un code propre et cohérent dans tout notre projet.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p id="getting-started"></p>
  
## Getting Started

_A venir_

<p id="recuperation-projet"></p>
  
1. _Récupération du Projet_

Commencez par créer un dossier sur votre machine.

<p id="navigation"></p>
  
2. _Navigation_

Une fois le projet téléchargé, ouvrez une invite de commande ou un terminal et naviguez jusqu'au dossier contenant le projet Front :

```sh
cd project
```

Pour l'ouvrir dans VS Code directement, exécutez :

```sh
code .
```

<p id="prerequis"></p>
  
3. _Prérequis_

Assurez-vous d'avoir Node.js installé sur votre machine. Pour ce faire, téléchargez la dernière version LTS de Node.js depuis ce lien : [télécharger Node.js](https://nodejs.org/fr/download)

Confirmez son installation en tapant :

```sh
node -v
```

<p id="installation-dependances"></p>
  
4. _Installation des dépendances_

Avec Node.js correctement installé, positionnez-vous à la racine du projet (là où se trouve le fichier package.json) et installez les dépendances nécessaires avec :

```sh
npm install
```

<p id="config-vsc"></p>
  
5. _Configuration de Visual Studio Code pour le projet_

Pour assurer une expérience de développement cohérente entre tous les membres de l'équipe, veuillez suivre les étapes ci-dessous pour configurer correctement votre environnement de développement avec Visual Studio Code :

a) Installez les extensions suivantes depuis le Marketplace de VSCode :

- Prettier - Code formatter : Intégration de Prettier dans VSCode pour un formatage de code automatique.
- ESLint : Pour intégrer ESLint directement dans VSCode.

b) Configuration des paramètres de l'espace de travail :

- Dans VSCode, ouvrez la barre de recherche rapide avec Ctrl + P (ou Cmd + P sur Mac).
- Tapez et sélectionnez >Preferences: Open Workspace Settings (JSON)
- Ajoutez ou modifiez les configurations suivantes :

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode", // Définit Prettier comme le formateur de code par défaut.
  "editor.formatOnSave": true, // Formate automatiquement le code à chaque sauvegarde.

  // Lors de la sauvegarde d'un fichier, effectue toutes les corrections automatiques disponibles avec ESLint.
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // Désactive le formatage automatique à la sauvegarde pour les fichiers JavaScript.
  // Cela permet à ESLint de prendre en charge le formatage et d'éviter les conflits potentiels avec Prettier.
  "[javascript]": {
    "editor.formatOnSave": false
  },

  // Désactive le formatage automatique à la sauvegarde pour les fichiers JavaScript React.
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },

  // Désactive le formatage automatique à la sauvegarde pour les fichiers TypeScript.
  "[typescript]": {
    "editor.formatOnSave": false
  },

  // Désactive le formatage automatique à la sauvegarde pour les fichiers TypeScript React.
  "[typescriptreact]": {
    "editor.formatOnSave": false
  }
}
```

c) Utilisation

Avec ces configurations, chaque fois que vous sauvegardez un fichier dans cet espace de travail, ESLint corrigera automatiquement les problèmes (selon les règles définies dans notre configuration ESLint) et Prettier formatera le code (selon les règles définies dans notre configuration Prettier).

d) Conseils

Si vous rencontrez des comportements inattendus ou des conflits entre les extensions, assurez-vous de désactiver tout autre formateur de code ou extension liée à ESLint/Prettier que vous pourriez avoir installé.

<p id="run-projet"></p>
  
6. _Lancement du projet_

Pour lancer l'application en mode développement, exécutez la commande suivante :

```sh
npm run dev
```

Cela démarrera le serveur de développement Vite.js et ouvrira votre application dans le navigateur.

<p id="build-projet"></p>
  
7. _Build du projet_

_A venir_

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  
<p id="commit"></p>

## Commit

Lorsque vous contribuez au projet et que vous préparez vos commits pour le dépôt GitHub, veillez à respecter les consignes suivantes pour maintenir la propreté et la cohérence du code :

- le dossier `.vscode` ainsi que le fichier `.vscode/settings.json.`
  Ces éléments sont propres à votre environnement de développement et ne devraient pas être partagés avec d'autres développeurs.
- le dossier `node_modules`
  Ce dossier contient toutes les dépendances du projet, et il est volumineux. De plus, chaque développeur peut regénérer ce dossier en exécutant npm install sur sa machine locale.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p id="structure-de-fichier"></p>
  
## Structure de fichier de l'application

Le code source se trouve principalement dans le répertoire src/. Voici un aperçu de la structure des dossiers et leur utilisation :

```plaintext
src/
├── features/
│   ├── auth/
│   │   ├── components/  # Smart Components spécifiques à l'authentification
│   │   │   ├── AuthProviderButton.tsx
│   │   │   ├── CreateAccountLink.tsx
│   │   │   ├── DividerWithText.tsx
│   │   │   ├── SignInForm.tsx
│   │   │   └── SignInHeader.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   ├── AuthenticationService.ts
│   │   │   └── apiRoutes.ts
│   │   ├── types/
│   │   │   └── authTypes.ts
│   │   └── AuthContext.tsx
│   ├── user/
│   │   ├── components/ # Smart Components liés à la gestion de l'utilisateur
│   │   ├── hooks/
│   │   │   └── useUser.ts
│   │   ├── services/
│   │   │   └── UserService.ts
│   │   ├── types/
│   │   │   └── userTypes.ts
│   │   └── UserContext.tsx
│   ├── training/
│   │   ├── components/
│   │   ├── hooks/
│   │   │   └── useTraining.ts
│   │   ├── services/
│   │   │   └── TrainingService.ts
│   │   ├── types/
│   │   │   └── trainingTypes.ts
│   │   └── TrainingContext.tsx
│   ├── coach/
│   │   ├── components/
│   │   ├── hooks/
│   │   │   └── useCoach.ts
│   │   ├── services/
│   │   │   └── CoachService.ts
│   │   ├── types/
│   │   │   └── coachTypes.ts
│   │   └── CoachContext.tsx
│   └── notifications/
│       ├── components/
│       ├── hooks/
│       │   └── useNotifications.ts
│       ├── services/
│       │   └── NotificationService.ts
│       ├── types/
│       │   └── notificationTypes.ts
│       └── NotificationContext.tsx
├── ui/  # Dumb Components réutilisables
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.styles.ts
│   │   └── Button.test.tsx
│   ├── Switch/
│   │   ├── Switch.tsx
│   │   └── Switch.styles.ts
│   └── ...
├── pages/
│   ├── Login.tsx  # Utilise les Smart Components de `features/auth`
│   ├── Home.tsx
│   └── ...
├── app/
│   ├── api/
│   │   ├── apiPaths.tsx  # Centralise tous les endpoints des API
│   │   ├── axiosConfig.ts  # Configuration d'Axios, intercepteurs HTTP
│   │   └── cacheConfig.ts  # Configuration du cache pour les requêtes (Tanstack Query)
│   ├── stores/
│   │   ├── authStore.tsx # Révision pour inclure le stockage spécifique à l'auth
│   │   ├── userStore.tsx # Stockage spécifique à l'utilisateur
│   │   ├── trainingStore.tsx # Gère l'état de la programmation des entraînements
│   │   └── notificationStore.tsx # Gère les notifications et les annonces
│   ├── routes/
│   │   ├── routes.tsx
│   │   └── RouteGuard.tsx
│   ├── themes/
│   │   └── theme.ts
│   └── App.tsx
├── assets/
│   ├── images/
│   └── fonts/
├── stories/
│   ├── Button.stories.ts
│   └── ...
├── utils/
│   ├── formatDate.ts
│   └── validateEmail.ts
└── main.tsx
```

1. assets/ :

   - Stocke les ressources statiques telles que les images et les polices. Ces fichiers ne contiennent pas de logique, mais sont importés et utilisés dans les composants et les pages.

2. features/ :

   - Dossier central regroupant les différentes fonctionnalités de l'application, chacune dans son sous-dossier spécifique.
   - Chaque fonctionnalité encapsule ses composants, contextes, hooks, services, types, et tests relatifs.
   - Exemple de Feature: `auth/` :
     - `components/`: Composants spécifiques à l'authentification (appellé aussi Smart Components ou Container Components).
     - `hooks/`: Hooks personnalisés, comme `useAuth` pour accéder au contexte d'authentification.
     - `services/`: Logique d'interaction avec les API d'authentification.
     - `types/`: Types et interfaces spécifiques à l'authentification. Ces types permettent de définir la structure des objets, les formats des réponses API, les props des composants et d'autres structures de données utilisées à travers l'application. L'utilisation de ces types contribue à renforcer la sécurité de type dans l'application, à minimiser les erreurs de runtime et à améliorer la lisibilité et la maintenabilité du code.
   - `AuthContext.tsx`: Contexte fournissant l'état d'authentification et les fonctions associées.

3. ui/ :

   - Contient des composants réutilisables dans toute l'application (appelé aussi Dumb Components ou Stateless Components).
   - Ces composants ne doivent pas encapsuler de logique métier ou d'appels API.
   - Le fichier principal, par exemple `Button.tsx`, définit la logique et la vue du composant.
   - Les styles associés se trouvent soit dans un fichier `.styles.ts` (pour le CSS-in-JS)S soit directement dans le fichier `Button.tsx`.

4. pages/ :

   - Composants qui représentent des vues entières ou des pages dans l'application.
   - Utilisent les Smart Components de `features/` pour construire la page souhaité.

5. api/ :

   - Comprend des modules spécialisés dans la gestion des interactions avec des services externes, comme les API.
   - Chaque fichier se concentre sur un domaine particulier. Par exemple, `apiRoutes.tsx` centralise toutes les URL d'appels API, tandis que `authentificationService.tsx` gère la logique spécifique à l'authentification (comme obtenir un token).
   - Ces services permettent de séparer la logique des données des composants, rendant le code plus propre et plus facile à gérer.

6. stories/ :

   - Contient les fichiers Storybook pour chaque composant. Storybook est utilisé pour développer et tester les composants de manière isolée.
   - Chaque fichier `.stories.tsx` correspond à un composant dans le dossier components/ et contient des scénarios de rendu pour différents états et variations du composant.
   - Ces stories aident à visualiser et à interagir avec les composants dans différents états sans avoir besoin de les intégrer dans une page réelle, facilitant ainsi le développement et le test des composants UI.

7. utils/ :

   - Regroupe les fonctions utilitaires qui peuvent être utilisées à travers l'application.
   - Ces fonctions, par exemple `formatDate.ts`, offrent des solutions rapides à des problèmes courants, comme le formatage des dates.

8. app/ :

   - api/ : Comprend des modules spécialisés dans la gestion des interactions avec des services externes, comme les API. Chaque fichier se concentre sur un domaine particulier. Par exemple, `apiPath.tsx` centralise tout les préfixes URL des appels API, `AxiosConfig` (httpInterceptors) `CacheCongig` (Tanstack)
   - stores/: Gestion de l'état global avec des stores pour chaque domaine majeur (utilisateurs, préférences, notifications) en utilisant des bibliothèques comme Jotai ou Zustand.
   - routes/: Centralise la définition et la configuration des routes dans l'application.
     - `routes.tsx` : Ce fichier regroupe toutes les routes et sert de point d'entrée principal pour le routage dans l'application.
     - `RouteGuard.tsx` : Ce composant est une couche d'abstraction au-dessus des routes nécessitant une authentification.
       Il utilise le contexte `AuthContext.tsx` pour vérifier si un utilisateur est authentifié pour accéder à une route spécifique.
       Si un utilisateur non authentifié tente d'accéder à une route protégée, il est redirigé vers la page de connexion.
       Si un utilisateur déjà authentifié tente d'accéder à la page de connexion (/longin), il est redirigé vers la page home (/).
       Ce comportement sert principalement à éviter une nouvelle session ou connexion inutile pour un utilisateur déjà authentifié, en plus d'éliminer la redondance où un utilisateur authentifié serait renvoyé à la page de connexion
   - themes/: Gère le theming global de l'application en utilisant une bibliothèque CSS-in-JS.
     - `index.ts` sert de point d'entrée pour le thème personnalisé et regroupe les configurations du thème.
     - `components.ts` contient les styles personnalisés pour les composants Chakra UI ou autres composants de la bibliothèque utilisée.
     - `theme.ts` inclut les configurations de style globales spécifiques au thème, comme les couleurs, les tailles de police, etc.
   - `App.tsx`: Composant racine englobant la configuration globale, les routes, et les contextes.

9. main.tsx :

   - Point d'entrée de l'application, où l'application React est rendue dans le DOM. C'est ici que tout commence et où `App.tsx` est appelé.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
