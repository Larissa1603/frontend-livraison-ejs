# Guide Frontend - Gestion Livraison

Documentation complète pour les parties frontend du projet Gestion Livraison Backend.

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Architecture Frontend](#architecture-frontend)
- [Structure des fichiers](#structure-des-fichiers)
- [Pages disponibles](#pages-disponibles)
- [Contrôleurs de vues](#contrôleurs-de-vues)
- [Templates EJS](#templates-ejs)
- [Styling CSS](#styling-css)
- [Guide développeur](#guide-développeur)
- [Bonnes pratiques](#bonnes-pratiques)

## 🎯 Vue d'ensemble

Le frontend du projet Gestion Livraison est une interface web construite avec :
- **Express.js** - Framework web Node.js
- **EJS** - Moteur de templates côté serveur
- **Express EJS Layouts** - Système de layouts réutilisables
- **CSS vanilla** - Feuilles de style

L'interface permet une gestion complète des données via une interface utilisateur intuitive.

## 🏗️ Architecture Frontend

### Flux d'une requête

```
Navigateur (HTTP GET/POST)
    ↓
Routes Web (routes/*ViewRoutes.js)
    ↓
Middleware (authentification, validation)
    ↓
Contrôleurs de vues (*ViewController.js)
    ↓
Modèles Sequelize (récupération/modification des données)
    ↓
Templates EJS (rendus HTML)
    ↓
Réponse HTTP (page HTML)
```

## 📁 Structure des fichiers

```
gestion-livraison-backend/
├── controllers/
│   ├── adresseViewController.js      # Gestion des vues adresses
│   ├── clientViewController.js       # Gestion des vues clients
│   ├── livraisonViewController.js    # Gestion des vues livraisons
│   ├── roleViewController.js         # Gestion des vues rôles
│   ├── statutViewController.js       # Gestion des vues statuts
│   ├── utilisateurViewController.js  # Gestion des vues utilisateurs
│   ├── authController.js            # Authentification API
│   └── [autres contrôleurs API]
├── views/
│   ├── partials/
│   │   ├── header.ejs               # En-tête commun
│   │   ├── footer.ejs               # Pied de page commun
│   │   └── layout.ejs               # Layout principal
│   ├── adresses/
│   │   ├── index.ejs                # Liste des adresses
│   │   └── form.ejs                 # Formulaire adresse
│   ├── clients/
│   │   ├── index.ejs                # Liste des clients
│   │   └── form.ejs                 # Formulaire client
│   ├── livraisons/
│   │   ├── index.ejs                # Liste des livraisons
│   │   └── form.ejs                 # Formulaire livraison
│   ├── utilisateurs/
│   │   ├── index.ejs                # Liste des utilisateurs
│   │   └── form.ejs                 # Formulaire utilisateur
│   ├── roles/
│   │   ├── index.ejs                # Liste des rôles
│   │   └── form.ejs                 # Formulaire rôle
│   ├── statuts/
│   │   ├── index.ejs                # Liste des statuts
│   │   └── form.ejs                 # Formulaire statut
│   ├── errors/
│   │   ├── 403.ejs                  # Erreur 403 Forbidden
│   │   ├── 404.ejs                  # Erreur 404 Not Found
│   │   └── 500.ejs                  # Erreur 500 Server
│   ├── home.ejs                     # Page d'accueil
│   ├── dashboard/
│   │   └── index.ejs                # Tableau de bord
│   ├── auth/
│   │   └── login.ejs                # Page de connexion
├── public/
│   └── css/
│       └── style.css                # Styles CSS principaux
├── routes/
│   ├── clientViewRoutes.js          # Routes vues clients
│   ├── adresseViewRoutes.js         # Routes vues adresses
│   ├── livraisonViewRoutes.js       # Routes vues livraisons
│   ├── utilisateurViewRoutes.js     # Routes vues utilisateurs
│   ├── roleViewRoutes.js            # Routes vues rôles
│   ├── statutViewRoutes.js          # Routes vues statuts
│   ├── authViewRoutes.js            # Routes vues authentification
│   ├── dashboardViewRoutes.js       # Routes vues tableau de bord
│   └── [routes API]
└── server.js                         # Configuration Express
```

## 🌐 Pages disponibles

### Pages d'authentification

#### Page de connexion
- **Route** : `GET /auth/login`
- **Template** : `views/auth/login.ejs`
- **Contrôleur** : N/A (rendu direct)
- **Description** : Formulaire de connexion pour les utilisateurs
- **Données requises** : Email, mot de passe

### Pages de gestion

#### Clients
- **Liste** : `GET /clients-ui/vue`
  - Affiche tous les clients dans un tableau
  - Actions : Créer, Modifier, Supprimer
  
- **Formulaire** : `GET /clients-ui/form-create` ou `GET /clients-ui/form-edit/:id`
  - Créer ou modifier un client
  - Champs : Nom, Email, Téléphone, Adresse

#### Adresses
- **Liste** : `GET /adresses-ui/vue`
  - Affiche toutes les adresses
  - Actions : Créer, Modifier, Supprimer
  
- **Formulaire** : `GET /adresses-ui/form-create` ou `GET /adresses-ui/form-edit/:id`
  - Champs : Rue, Ville, Code postal, Pays

#### Livraisons
- **Liste** : `GET /livraisons-ui/vue`
  - Affiche toutes les livraisons avec status
  - Actions : Créer, Modifier, Supprimer
  
- **Formulaire** : `GET /livraisons-ui/form-create` ou `GET /livraisons-ui/form-edit/:id`
  - Champs : Client, Adresse, Date, Statut, Notes

#### Utilisateurs
- **Liste** : `GET /utilisateurs-ui/vue`
  - Affiche tous les utilisateurs
  - Actions : Créer, Modifier, Supprimer
  
- **Formulaire** : `GET /utilisateurs-ui/form-create` ou `GET /utilisateurs-ui/form-edit/:id`
  - Champs : Nom, Email, Mot de passe, Rôle

#### Rôles
- **Liste** : `GET /roles-ui/vue`
  - Affiche tous les rôles
  - Actions : Créer, Modifier, Supprimer
  
- **Formulaire** : `GET /roles-ui/form-create` ou `GET /roles-ui/form-edit/:id`
  - Champs : Nom du rôle

#### Statuts
- **Liste** : `GET /statuts-ui/vue`
  - Affiche tous les statuts
  - Actions : Créer, Modifier, Supprimer
  
- **Formulaire** : `GET /statuts-ui/form-create` ou `GET /statuts-ui/form-edit/:id`
  - Champs : Nom, Description

### Pages spéciales

#### Page d'accueil
- **Route** : `GET /`
- **Template** : `views/home.ejs`
- **Description** : Page d'accueil du système

#### Tableau de bord
- **Route** : `GET /dashboard`
- **Template** : `views/dashboard/index.ejs`
- **Description** : Vue d'ensemble du système

#### Pages d'erreur
- **404** : `views/errors/404.ejs` - Page non trouvée
- **403** : `views/errors/403.ejs` - Accès interdit
- **500** : `views/errors/500.ejs` - Erreur serveur

## 🎮 Contrôleurs de vues

### Structure d'un contrôleur de vue

Chaque contrôleur de vue contient les méthodes suivantes :

```javascript
// controllers/clientViewController.js

const { Client } = require('../models');

// Récupérer et afficher la liste
exports.getAllView = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.render('clients/index', { 
      clients, 
      title: 'Liste des clients' 
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Afficher le formulaire de création
exports.newForm = (req, res) => {
  res.render('clients/form', { 
    client: null, 
    title: 'Créer un client' 
  });
};

// Créer une ressource
exports.createView = async (req, res) => {
  try {
    await Client.create(req.body);
    res.redirect('/clients-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Afficher le formulaire de modification
exports.editForm = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    res.render('clients/form', { 
      client, 
      title: 'Modifier un client' 
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mettre à jour une ressource
exports.updateView = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    await client.update(req.body);
    res.redirect('/clients-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Supprimer une ressource
exports.deleteView = async (req, res) => {
  try {
    await Client.destroy({ where: { id: req.params.id } });
    res.redirect('/clients-ui/vue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
```

### Méthodes communes

| Méthode | Description | Route |
|---------|-------------|-------|
| `getAllView()` | Affiche la liste de toutes les ressources | `GET /ressources-ui/vue` |
| `newForm()` | Affiche le formulaire de création | `GET /ressources-ui/form-create` |
| `createView()` | Crée une nouvelle ressource | `POST /ressources-ui/create` |
| `editForm()` | Affiche le formulaire d'édition | `GET /ressources-ui/form-edit/:id` |
| `updateView()` | Met à jour une ressource | `POST /ressources-ui/update/:id` |
| `deleteView()` | Supprime une ressource | `POST /ressources-ui/delete/:id` |

## 🎨 Templates EJS

### Syntaxe de base

```ejs
<!-- Tags de sortie -->
<%= variableJavaScript %>

<!-- Tags de code exécutable -->
<% if (condition) { %>
  <p>Contenu conditionnel</p>
<% } %>

<!-- Boucles -->
<% items.forEach(item => { %>
  <div><%= item.nom %></div>
<% }); %>

<!-- Inclusions partielles -->
<%- include('partials/header') %>
```

### Template de liste (index.ejs)

```ejs
<!-- views/clients/index.ejs -->
<div class="container">
  <h1><%= title %></h1>
  
  <a href="/clients-ui/form-create" class="btn btn-primary">
    Créer un client
  </a>

  <% if (clients && clients.length > 0) { %>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <% clients.forEach(client => { %>
          <tr>
            <td><%= client.id %></td>
            <td><%= client.nom %></td>
            <td><%= client.email %></td>
            <td><%= client.telephone %></td>
            <td>
              <a href="/clients-ui/form-edit/<%= client.id %>">Modifier</a>
              <form method="POST" action="/clients-ui/delete/<%= client.id %>" style="display:inline;">
                <button type="submit" onclick="return confirm('Êtes-vous sûr?')">Supprimer</button>
              </form>
            </td>
          </tr>
        <% }); %>
      </tbody>
    </table>
  <% } else { %>
    <p>Aucun client trouvé.</p>
  <% } %>
</div>
```

### Template de formulaire (form.ejs)

```ejs
<!-- views/clients/form.ejs -->
<div class="container">
  <h1><%= title %></h1>

  <form method="POST" action="<%= client ? '/clients-ui/update/' + client.id : '/clients-ui/create' %>">
    <div class="form-group">
      <label for="nom">Nom:</label>
      <input 
        type="text" 
        id="nom" 
        name="nom" 
        value="<%= client ? client.nom : '' %>" 
        required
      >
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value="<%= client ? client.email : '' %>" 
        required
      >
    </div>

    <div class="form-group">
      <label for="telephone">Téléphone:</label>
      <input 
        type="tel" 
        id="telephone" 
        name="telephone" 
        value="<%= client ? client.telephone : '' %>"
      >
    </div>

    <button type="submit" class="btn btn-success">
      <%= client ? 'Mettre à jour' : 'Créer' %>
    </button>
    <a href="/clients-ui/vue" class="btn btn-secondary">Annuler</a>
  </form>
</div>
```

### Layout principal (layout.ejs)

```ejs
<!-- views/partials/layout.ejs -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= typeof title !== 'undefined' ? title : 'Gestion Livraison' %></title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <%- include('header') %>
  
  <main class="container">
    <%- body %>
  </main>

  <%- include('footer') %>
</body>
</html>
```

### En-tête (header.ejs)

```ejs
<!-- views/partials/header.ejs -->
<header>
  <nav class="navbar">
    <div class="nav-brand">
      <h1>Gestion Livraison</h1>
    </div>
    <ul class="nav-menu">
      <li><a href="/">Accueil</a></li>
      <li><a href="/clients-ui/vue">Clients</a></li>
      <li><a href="/adresses-ui/vue">Adresses</a></li>
      <li><a href="/livraisons-ui/vue">Livraisons</a></li>
      <li><a href="/utilisateurs-ui/vue">Utilisateurs</a></li>
      <li><a href="/roles-ui/vue">Rôles</a></li>
      <li><a href="/statuts-ui/vue">Statuts</a></li>
      <% if (user) { %>
        <li><a href="/auth/logout">Déconnexion</a></li>
      <% } %>
    </ul>
  </nav>
</header>
```

## 🎨 Styling CSS

### Structure du fichier style.css

```css
/* public/css/style.css */

/* ===== Styles généraux ===== */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/* ===== Navigation ===== */
.navbar {
  background-color: #333;
  padding: 1rem;
  margin-bottom: 2rem;
}

.nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
}

.nav-menu a:hover {
  color: #007bff;
}

/* ===== Conteneur ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
}

/* ===== Tables ===== */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}

table th {
  background-color: #f9f9f9;
  font-weight: bold;
}

table tr:hover {
  background-color: #f5f5f5;
}

/* ===== Formulaires ===== */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

/* ===== Boutons ===== */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

/* ===== Footer ===== */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
```

## 📚 Guide développeur

### Créer une nouvelle page

1. **Créer le contrôleur de vue**
```javascript
// controllers/monResourceViewController.js
const { MonResource } = require('../models');

exports.getAllView = async (req, res) => {
  try {
    const items = await MonResource.findAll();
    res.render('monResource/index', { items, title: 'Liste' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
```

2. **Créer les routes**
```javascript
// routes/monResourceViewRoutes.js
const express = require('express');
const router = express.Router();
const monResourceViewController = require('../controllers/monResourceViewController');

router.get('/vue', monResourceViewController.getAllView);

module.exports = router;
```

3. **Créer les templates EJS**
```ejs
<!-- views/monResource/index.ejs -->
<h1><%= title %></h1>
<!-- Contenu de la page -->
```

4. **Enregistrer les routes dans server.js**
```javascript
app.use('/monresource-ui', require('./routes/monResourceViewRoutes'));
```

### Variables disponibles dans les templates

| Variable | Type | Description |
|----------|------|-------------|
| `title` | String | Titre de la page |
| `user` | Object | Utilisateur connecté (si authentifié) |
| `error` | String | Message d'erreur (si applicable) |
| `data` | Array/Object | Données principales de la page |

## ✅ Bonnes pratiques

### 1. Sécurité
- ✅ Valider tous les inputs utilisateur côté serveur
- ✅ Utiliser les middlewares d'authentification
- ✅ Échapper les variables EJS pour éviter XSS
- ✅ Utiliser HTTPS en production

### 2. Performance
- ✅ Minimiser les requêtes à la base de données
- ✅ Utiliser la mise en cache quand possible
- ✅ Compresser les assets CSS/JS
- ✅ Optimiser les images

### 3. Accessibilité
- ✅ Utiliser des labels pour les formulaires
- ✅ Fournir du texte alternatif pour les images
- ✅ Assurer un contraste suffisant des couleurs
- ✅ Tester avec des lecteurs d'écran

### 4. Maintenabilité
- ✅ Utiliser des noms de variables explicites
- ✅ Ajouter des commentaires pour le code complexe
- ✅ Respecter la structure des dossiers
- ✅ Utiliser des fonctions réutilisables

### 5. Responsive Design
- ✅ Utiliser des media queries pour mobile
- ✅ Tester sur différentes résolutions
- ✅ Utiliser des unités relatives (rem, %)
- ✅ Mettre en place une navigation mobile

## 📝 Exemple complet : Créer une ressource "Catégories"

### 1. Modèle (déjà créé)
```javascript
// models/categorie.js
module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    nom: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Categorie;
};
```

### 2. Contrôleur de vue
```javascript
// controllers/categorieViewController.js
const { Categorie } = require('../models');

exports.getAllView = async (req, res) => {
  const categories = await Categorie.findAll();
  res.render('categories/index', { categories, title: 'Catégories' });
};

exports.newForm = (req, res) => {
  res.render('categories/form', { categorie: null, title: 'Créer une catégorie' });
};

exports.createView = async (req, res) => {
  await Categorie.create(req.body);
  res.redirect('/categories-ui/vue');
};
```

### 3. Routes
```javascript
// routes/categorieViewRoutes.js
const express = require('express');
const router = express.Router();
const categorieViewController = require('../controllers/categorieViewController');

router.get('/vue', categorieViewController.getAllView);
router.get('/form-create', categorieViewController.newForm);
router.post('/create', categorieViewController.createView);

module.exports = router;
```

### 4. Templates
```ejs
<!-- views/categories/index.ejs -->
<h1><%= title %></h1>
<a href="/categories-ui/form-create" class="btn btn-primary">Créer</a>
<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <% categories.forEach(cat => { %>
      <tr>
        <td><%= cat.nom %></td>
        <td><a href="/categories-ui/form-edit/<%= cat.id %>">Modifier</a></td>
      </tr>
    <% }); %>
  </tbody>
</table>
```
    
---

Pour toute question, consultez le README principal du projet ou contactez l'équipe de développement.
