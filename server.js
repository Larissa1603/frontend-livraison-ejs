require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const { sequelize } = require('./models');
const authMiddleware = require('./middleware/authMiddleware');
const requireAuth = require('./middleware/requireAuth');

const app = express();

// --------------------
// Middleware
// --------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  configurer la session
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

//  injecter l’utilisateur dans res.locals
app.use(authMiddleware);

// --------------------
// Configurer EJS + Layouts
// --------------------
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressLayouts);
app.set('layout', 'partials/layout'); // layout par défaut

// --------------------
// Page d’accueil
// --------------------
app.get('/', (req, res) => {
  res.render('home', { title: 'Accueil', user: res.locals.user });
});

// --------------------
// Routes API JSON
// --------------------
app.use('/auth', require('./routes/authRoutes'));
app.use('/clients', require('./routes/clientRoutes'));
app.use('/adresses', require('./routes/adresseRoutes'));
app.use('/livraisons', require('./routes/livraisonRoutes'));
app.use('/utilisateurs', require('./routes/utilisateurRoutes'));
app.use('/roles', require('./routes/roleRoutes'));
app.use('/statuts', require('./routes/statutRoutes'));

// --------------------
// Routes Vue (EJS front)
// --------------------
app.use('/auth-ui', require('./routes/authViewRoutes'));

// Dashboard accessible à tous les utilisateurs connectés
app.use('/dashboard-ui', requireAuth(), require('./routes/dashboardViewRoutes'));

// CRUD accessibles à tous les utilisateurs connectés
app.use('/clients-ui', requireAuth(), require('./routes/clientViewRoutes'));
app.use('/adresses-ui', requireAuth(), require('./routes/adresseViewRoutes'));
app.use('/livraisons-ui', requireAuth(), require('./routes/livraisonViewRoutes'));
app.use('/utilisateurs-ui', requireAuth(), require('./routes/utilisateurViewRoutes'));

//  Sections réservées aux administrateurs (role = 1)
app.use('/roles-ui', requireAuth(1), require('./routes/roleViewRoutes'));
app.use('/statuts-ui', requireAuth(1), require('./routes/statutViewRoutes'));

// --------------------
// Gestion des erreurs
// --------------------

// 404 - Page introuvable
app.use((req, res) => {
  res.status(404).render('errors/404', {
    title: 'Page introuvable',
    user: res.locals.user
  });
});

// 500 - Erreur serveur
app.use((err, req, res, next) => {
  console.error('Erreur serveur :', err);
  res.status(500).render('errors/500', {
    title: 'Erreur serveur',
    user: res.locals.user
  });
});

// --------------------
// Lancement du serveur
// --------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log(' Serveur lancé sur http://localhost:' + PORT);
  } catch (error) {
    console.error('Erreur Sequelize :', error);
  }
});