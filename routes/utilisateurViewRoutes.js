const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurViewController');

// ✅ Liste des utilisateurs
router.get('/vue', utilisateurController.getAllView);

// ✅ Formulaire création
router.get('/new', utilisateurController.newForm);

// ✅ Créer un utilisateur
router.post('/create', utilisateurController.createView);

// ✅ Formulaire édition
router.get('/edit/:id', utilisateurController.editForm);

// ✅ Mettre à jour un utilisateur
router.post('/update/:id', utilisateurController.updateView);

// ✅ Supprimer un utilisateur
router.get('/delete/:id', utilisateurController.deleteView);

module.exports = router;