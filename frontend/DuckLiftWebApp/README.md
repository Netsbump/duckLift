<a id="readme-top" name="readme-top"></a>

<br />

<div align="center">

  <h3 align="center">🚀 DuckLift Web App</h3>

</div>

<div>

### ✨ Librairies

- **React & TypeScript**
- **Shadcn**
- **Tailwind**
- **Tanstack Router**
- **Tanstack Query**
- **Tanstack Start**
- **Ky**
- **Biome** 
- **Vite.js**
- **Vitest/Testin**
- **Vite-tsconfig-paths**
- **React Hook Form**
- **Zod**
- **Date-fns**
- **React-email**
- **FormatJS**
- **Blurhash**<
- **Motion**
- **Lucide React**
- **Zod**
- **Ts-rest**

</div>

<br />

<!-- TABLE DES MATIERES -->
<details>
  <summary>Table des matières</summary>
	<ul>
    		<li><a href="#structure-de-fichier">Structure de fichier de l'application</a></li>
    	</ul>
</details>


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
