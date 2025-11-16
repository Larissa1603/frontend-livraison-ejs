const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const { createRoleValidator } = require('../validators/roleValidator');
const validateRequest = require('../middlewares/validateRequest');

router.get('/', roleController.getAll);
router.post('/', createRoleValidator, validateRequest, roleController.create);
router.get('/:id', roleController.getById);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);

module.exports = router;