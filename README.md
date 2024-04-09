WEATHERLOC

Bienvenue dans le projet de développement d'une application responsive de géolocalisation et météo utilisant Angular, ExpressJS, une base de données NoSQL, Leaflet pour la géolocalisation, et l'API OpenWeather pour les conditions météorologiques. Ce README vous guidera à travers le processus de configuration, d'utilisation, et des choix technologiques réalisés pour garantir la sécurité et la conformité aux réglementations, notamment le RGPD.

# Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

```
Node.js et npm
Angular CLI
MongoDB ou une base de données NoSQL compatible avec ExpressJS
```

# Configuration du Projet

Clonez les dépôts depuis GitHub.

FRONTEND_URL -> `https://github.com/Arnaudb78/frontend_wl.git`
BACKEND_URL -> git clone `https://github.com/Arnaudb78/backend_wl.git`

# Installez les dépendances pour le frontend et le backend.

cd weatherloc/frontend_wl
npm install 

cd ../backend_wl
npm install

# Sécurité et Conformité

Les fonctionnalités de sécurité incluent l'utilisation de JWT (JSON Web Tokens) pour authentifier les utilisateurs, le chiffrement des données sensibles, et la validation côté serveur. La conformité au RGPD est assurée par la gestion transparente des données utilisateur et l'obtention du consentement via les conditions d'utilisation.

# Microservices

Le projet est conçu avec des microservices pour une scalabilité horizontale et une gestion optimale des performances. Chaque service (géolocalisation, météo, utilisateur) est indépendant pour garantir une extensibilité facile.

# Conditions d'Utilisation et RGPD

Avant toute utilisation, les utilisateurs doivent accepter les conditions d'utilisation. Le traitement des données est conforme au RGPD, garantissant la confidentialité et le contrôle des données personnelles.

# Connexion via Google Sign-In

La connexion des utilisateurs s'effectue via Google Sign-In, assurant une authentification sécurisée et simplifiée.

# Déploiement

Pour déployer l'application, veuillez suivre les instructions de déploiement pour Angular et ExpressJS.

# Contributions

Les contributions sont les bienvenues. Veuillez ouvrir une demande d'extraction (pull request) pour discuter des changements majeurs.

# Licence

Ce projet est sous licence MIT.
