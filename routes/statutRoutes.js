const express = require('express');
const router = express.Router();
const statutController = require('../controllers/statutController');
const { createStatutValidator } = require('../validators/statutValidator');
const validateRequest = require('../middleware/validateRequest');

router.get('/', statutController.getAll);
router.post('/', createStatutValidator, validateRequest, statutController.create);
router.get('/:id', statutController.getById);
router.put('/:id', statutController.update);
router.delete('/:id', statutController.delete);

module.exports = router;