const express = require('express');
const router = express.Router();
const livraisonController = require('../controllers/livraisonController');
const { createLivraisonValidator } = require('../validators/livraisonValidator');
const validateRequest = require('../middlewares/validateRequest');

router.get('/', livraisonController.getAll);
router.post('/', createLivraisonValidator, validateRequest, livraisonController.create);
router.get('/:id', livraisonController.getById);
router.put('/:id', livraisonController.update);
router.delete('/:id', livraisonController.delete);

module.exports = router;