# Gestion Livraison Backend

Un système de gestion de livraison complet construit avec Node.js, Express et MySQL. Cette application fournit une API REST et une interface web pour gérer les clients, adresses, utilisateurs, livraisons et bien plus.
## 📋 Table des matières

- [Caractéristiques](#caractéristiques)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [API Endpoints](#api-endpoints)
- [Routes Web](#routes-web)
- [Authentification](#authentification)
- [Modèles de données](#modèles-de-données)
- [Développement](#développement)
- [Dépendances](#dépendances)

## ✨ Caractéristiques

- **Authentification JWT** - Sécurisation des endpoints API
- **Gestion des sessions** - Gestion des utilisateurs connectés
- **Interface EJS** - Interface web avec EJS et Express Layouts
- **API RESTful** - Endpoints JSON complets
- **Base de données MySQL** - Persistance des données avec Sequelize ORM
- **Validation des données** - Validation des requêtes avec express-validator
- **Chiffrement des mots de passe** - Sécurité des authentifications avec bcrypt
- **Migrations et Seeders** - Initialisation de la base de données

## 📦 Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- MySQL (v5.7 ou supérieur)

## 🚀 Installation

1. **Clonez le dépôt**
```bash
git clone https://github.com/latrousakram1/gestion-livraison-backend.git
cd gestion-livraison-backend
```

2. **Installez les dépendances**
```bash
npm install
```

3. **Créez un fichier `.env`** à la racine du projet
```env
# Base de données
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=gestion_livraison

# Session
SESSION_SECRET=votre_secret_session

# JWT
JWT_SECRET=votre_secret_jwt

# Environnement
NODE_ENV=development
PORT=3000
```

## ⚙️ Configuration

### Configuration MySQL

Assurez-vous que MySQL est en cours d'exécution et accessible avec les identifiants configurés dans `.env`.

### Configuration de la base de données

Les migrations et seeders sont fournis pour initialiser la base de données :

```bash
# Exécuter les migrations (si utilisées par votre ORM)
npm run migrate

# Exécuter les seeders pour les données initiales
npm run seed
```

## 🏃 Démarrage

### Mode développement (avec rechargement automatique)
```bash
npm run dev
```

### Mode production
```bash
npm start
```

Le serveur démarrera sur `http://localhost:3000` (ou le port défini dans `.env`)

## 📁 Structure du projet

```
gestion-livraison-backend/
├── config/                    # Configuration
│   ├── config.js             # Configuration Sequelize
│   └── database.js           # Initialisation DB
├── controllers/              # Logique métier
│   ├── *Controller.js        # Endpoints API
│   └── *ViewController.js    # Rendus EJS
├── middleware/               # Middlewares Express
│   ├── authMiddleware.js     # Authentification
│   ├── requireAuth.js        # Protection des routes
│   └── validateRequest.js    # Validation des requêtes
├── models/                   # Modèles Sequelize
│   ├── index.js
│   ├── client.js
│   ├── adresse.js
│   ├── livraison.js
│   ├── utilisateur.js
│   ├── role.js
│   └── statut.js
├── routes/                   # Routes Express
│   ├── *Routes.js           # Routes API
│   └── *ViewRoutes.js       # Routes pour les vues
├── validators/               # Validateurs de données
│   └── *.js
├── views/                    # Templates EJS
│   ├── partials/            # Composants réutilisables
│   ├── auth/                # Pages d'authentification
│   ├── clients/             # Gestion des clients
│   ├── adresses/            # Gestion des adresses
│   ├── livraisons/          # Gestion des livraisons
│   ├── utilisateurs/        # Gestion des utilisateurs
│   ├── roles/               # Gestion des rôles
│   ├── statuts/             # Gestion des statuts
│   ├── dashboard/           # Tableau de bord
│   ├── errors/              # Pages d'erreur
│   └── home.ejs             # Page d'accueil
├── public/                   # Fichiers statiques
│   └── css/
│       └── style.css
├── migrations/               # Migrations de base de données
├── seeders/                  # Données initiales
├── postman/                  # Collections Postman
├── server.js                 # Point d'entrée
├── package.json             # Dépendances npm
└── README.md                # Ce fichier
```

## 🔌 API Endpoints

### Authentification
- `POST /auth/register` - Inscription d'un nouvel utilisateur
- `POST /auth/login` - Connexion utilisateur
- `POST /auth/logout` - Déconnexion

### Clients
- `GET /clients` - Lister tous les clients
- `GET /clients/:id` - Obtenir un client
- `POST /clients` - Créer un client
- `PUT /clients/:id` - Mettre à jour un client
- `DELETE /clients/:id` - Supprimer un client

### Adresses
- `GET /adresses` - Lister toutes les adresses
- `GET /adresses/:id` - Obtenir une adresse
- `POST /adresses` - Créer une adresse
- `PUT /adresses/:id` - Mettre à jour une adresse
- `DELETE /adresses/:id` - Supprimer une adresse

### Livraisons
- `GET /livraisons` - Lister toutes les livraisons
- `GET /livraisons/:id` - Obtenir une livraison
- `POST /livraisons` - Créer une livraison
- `PUT /livraisons/:id` - Mettre à jour une livraison
- `DELETE /livraisons/:id` - Supprimer une livraison

### Utilisateurs
- `GET /utilisateurs` - Lister tous les utilisateurs
- `GET /utilisateurs/:id` - Obtenir un utilisateur
- `POST /utilisateurs` - Créer un utilisateur
- `PUT /utilisateurs/:id` - Mettre à jour un utilisateur
- `DELETE /utilisateurs/:id` - Supprimer un utilisateur

### Rôles
- `GET /roles` - Lister tous les rôles
- `GET /roles/:id` - Obtenir un rôle
- `POST /roles` - Créer un rôle
- `PUT /roles/:id` - Mettre à jour un rôle
- `DELETE /roles/:id` - Supprimer un rôle

### Statuts
- `GET /statuts` - Lister tous les statuts
- `GET /statuts/:id` - Obtenir un statut
- `POST /statuts` - Créer un statut
- `PUT /statuts/:id` - Mettre à jour un statut
- `DELETE /statuts/:id` - Supprimer un statut

## 🌐 Routes Web

L'application propose également des routes web pour l'interface utilisateur :

- `/` - Page d'accueil
- `/auth/login` - Page de connexion
- `/auth/register` - Page d'inscription
- `/dashboard` - Tableau de bord (protégé)
- `/clients` - Gestion des clients (protégé)
- `/adresses` - Gestion des adresses (protégé)
- `/livraisons` - Gestion des livraisons (protégé)
- `/utilisateurs` - Gestion des utilisateurs (protégé)
- `/roles` - Gestion des rôles (protégé)
- `/statuts` - Gestion des statuts (protégé)
npm install
- Configurer le fichier .env :
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=gestion_livraison
JWT_SECRET=your_secret_key
PORT=3000
- Exécuter le script de seed :
node seedTestData.js
- Lancer le serveur :
npm run dev
Authentification JWT
L’API utilise JWT pour sécuriser les routes.
Connexion via :
POST /auth/login
Champs requis :
email
mot_de_passe
Réponse :
token : eyJhbGciOiJIUzI1NiIsInR5cCI6...
Utiliser ce token dans l’en-tête :
Authorization: Bearer <token>
Validation des données
Toutes les routes POST utilisent express-validator pour valider les champs.
Exemple pour POST /utilisateurs :
- nom : requis
- email : format email valide
- mot_de_passe : minimum 6 caractères
- role_id : entier supérieur à 0
En cas d’erreur :
errors :
- Le nom est requis
- Format d’email invalide
Endpoints principaux
GET /clients
POST /clients
GET /livraisons
POST /livraisons
GET /utilisateurs?page=1
POST /utilisateurs
GET /roles
POST /roles
GET /statuts
POST /statuts
POST /auth/login
## 🔐 Authentification

### JWT pour l'API
Les requêtes API doivent inclure un header Authorization :
```
Authorization: Bearer <token>
```

Connexion via `POST /auth/login` avec :
```json
{
  "email": "user@example.com",
  "mot_de_passe": "password123"
}
```

Réponse :
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

### Sessions pour l'interface web
Les sessions sont gérées automatiquement via express-session. Les utilisateurs doivent être connectés pour accéder aux routes protégées.

## 📊 Modèles de données

### Client
- `id` - Identifiant unique
- `nom` - Nom du client
- `email` - Email du client
- `telephone` - Numéro de téléphone
- `adresse_id` - Référence à une adresse

### Adresse
- `id` - Identifiant unique
- `rue` - Numéro et nom de rue
- `ville` - Ville
- `code_postal` - Code postal
- `pays` - Pays

### Livraison
- `id` - Identifiant unique
- `client_id` - Référence au client
- `adresse_id` - Adresse de livraison
- `date_livraison` - Date prévue
- `statut_id` - État de la livraison
- `notes` - Notes supplémentaires

### Utilisateur
- `id` - Identifiant unique
- `nom` - Nom de l'utilisateur
- `email` - Email unique
- `password` - Mot de passe hashé
- `role_id` - Rôle de l'utilisateur

### Rôle
- `id` - Identifiant unique
- `nom` - Nom du rôle

### Statut
- `id` - Identifiant unique
- `nom` - Nom du statut
- `description` - Description

## 💻 Développement

### Scripts disponibles

```bash
# Démarrage en mode développement avec nodemon
npm run dev

# Démarrage en mode production
npm start

# Tests (à configurer)
npm test
```

### Outils recommandés
- **Postman** - Pour tester l'API (collections incluses dans le dossier `/postman`)
- **MySQL Workbench** - Pour gérer la base de données
- **VS Code** - Éditeur de code

### Tester avec Postman
Des collections Postman sont disponibles dans le dossier `postman/collections/` pour faciliter les tests.

## 📦 Dépendances

### Production
- **express** (^5.1.0) - Framework web
- **sequelize** (^6.37.7) - ORM MySQL
- **mysql2** (^3.15.3) - Driver MySQL
- **express-session** (^1.18.2) - Gestion des sessions
- **jsonwebtoken** (^9.0.2) - Tokens JWT
- **bcrypt** (^6.0.0) - Chiffrement des mots de passe
- **express-validator** (^7.3.0) - Validation des requêtes
- **ejs** (^3.1.10) - Template engine
- **express-ejs-layouts** (^2.5.1) - Layouts pour EJS
- **dotenv** (^17.2.3) - Variables d'environnement

### Développement
- **nodemon** (^3.1.11) - Rechargement automatique
- **cypress** (^15.7.1) - Tests end-to-end

## 📝 Licence

ISC

## 👨‍💻 Auteur

**Akram Latrous**  
Étudiant en intelligence artificielle à La Cité collégiale

📧 Contact : [latrousakram@gmail.com](mailto:latrousakram@gmail.com)

## 🔗 Repository

[https://github.com/latrousakram1/gestion-livraison-backend](https://github.com/latrousakram1/gestion-livraison-backend)

---

Pour toute question ou problème, veuillez ouvrir une issue sur le repository GitHub.
