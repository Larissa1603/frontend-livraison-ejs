const express = require('express');
const router = express.Router();
const clientViewController = require('../controllers/clientViewController');

// Liste des clients → /clients/vue
router.get('/vue', clientViewController.getAllView);

// Formulaire création → /clients/vue/new
router.get('/new', clientViewController.newForm);
router.post('/create', clientViewController.createView);

// Formulaire édition → /clients/vue/edit/:id
router.get('/edit/:id', clientViewController.editForm);
router.post('/update/:id', clientViewController.updateView);

// Suppression → /clients/vue/delete/:id
router.get('/delete/:id', clientViewController.deleteView);

module.exports = router;