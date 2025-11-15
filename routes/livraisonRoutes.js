const express = require('express');
const router = express.Router();
const livraisonController = require('../controllers/livraisonController');

router.get('/', livraisonController.getAllLivraisons); // GET avec pagination et filtre par statut
router.get('/:id', livraisonController.getLivraisonById); // GET par ID
router.post('/', livraisonController.createLivraison); // POST
router.put('/:id', livraisonController.updateLivraison); // PUT

module.exports = router;