const express = require('express');
const router = express.Router();
const livraisonController = require('../controllers/livraisonViewController');

// ✅ Liste des livraisons
router.get('/vue', livraisonController.getAllView);

// ✅ Formulaire création
router.get('/new', livraisonController.newForm);

// ✅ Créer une livraison
router.post('/create', livraisonController.createView);

// ✅ Formulaire édition
router.get('/edit/:id', livraisonController.editForm);

// ✅ Mettre à jour une livraison
router.post('/update/:id', livraisonController.updateView);

// ✅ Supprimer une livraison
router.get('/delete/:id', livraisonController.deleteView);

module.exports = router;