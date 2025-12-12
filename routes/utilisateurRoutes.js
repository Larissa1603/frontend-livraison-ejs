const express = require('express')
const router = express.Router()
const utilisateurController = require('../controllers/utilisateurController')
const { createUtilisateurValidator } = require('../validators/utilisateurValidator')
const validateRequest = require('../middleware/validateRequest')
const auth = require('../middleware/authMiddleware')

router.get('/', auth, utilisateurController.getAll)
router.get('/:id', auth, utilisateurController.getById)

router.post('/', createUtilisateurValidator, validateRequest, utilisateurController.create)
router.put('/:id', utilisateurController.update)
router.delete('/:id', utilisateurController.delete)

module.exports = router