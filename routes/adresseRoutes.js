const express = require('express');
const router = express.Router();
const adresseController = require('../controllers/adresseController');
const { createAdresseValidator } = require('../validators/adresseValidator');
const validateRequest = require('../middlewares/validateRequest');

router.get('/', adresseController.getAll);
router.post('/', createAdresseValidator, validateRequest, adresseController.create);
router.get('/:id', adresseController.getById);
router.put('/:id', adresseController.update);
router.delete('/:id', adresseController.delete);

module.exports = router;