const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { createClientValidator } = require('../validators/clientValidator');
const validateRequest = require('../middlewares/validateRequest');

router.get('/', clientController.getAll);
router.post('/', createClientValidator, validateRequest, clientController.create);
router.get('/:id', clientController.getById);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.delete);

module.exports = router;