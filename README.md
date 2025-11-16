Gestion des Livraisons
Ce projet est un backend développé avec Node.js, Express et Sequelize pour gérer les livraisons, les clients, les utilisateurs, les adresses, les rôles et les statuts. Il est conçu pour être testé avec Postman et facilement extensible pour des besoins professionnels ou académiques.
Technologies utilisées
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JSON Web Token (JWT)
- express-validator
- Postman
Structure du projet
- models : modèles Sequelize (Client, Livraison, Adresse, Utilisateur, Role, Statut)
- controllers : logique métier pour chaque ressource
- routes : endpoints RESTful pour chaque entité
- middlewares : validation des requêtes et authentification JWT
- validators : règles de validation avec express-validator
- postman : collections et environnements Postman pour tester l’API
- seedTestData.js : script d’initialisation avec des données de test
Installation
- Cloner le dépôt GitHub
- Installer les dépendances :
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
Tests Postman
- Collection : postman/collections/Gestion Livraison.postman_collection.json
- Environnement : postman/environments/New_Environment.postman_environment.json
- Inclut :
- Création d’utilisateurs avec validation
- Connexion JWT
- Accès protégé avec token
- Tests automatiques intégrés
Auteur
Akram Latrous
Etudiant en intelligence artificielle à La Cité collégiale
Contact : latrousakram@gmail.com
