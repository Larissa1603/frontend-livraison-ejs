const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Formulaire de connexion → /auth/vue/login
router.get('/vue/login', authController.loginForm);

// Traitement du login → /auth/vue/create
router.post('/vue/create', authController.login);

// Déconnexion → /auth/vue/logout
router.get('/vue/logout', authController.logout);

module.exports = router;