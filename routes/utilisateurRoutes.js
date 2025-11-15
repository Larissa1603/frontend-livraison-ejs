const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

router.get('/', utilisateurController.getAllUtilisateurs); // GET avec pagination et filtre par rôle
router.get('/:id', utilisateurController.getUtilisateurById); // GET par ID
router.post('/', utilisateurController.createUtilisateur); // POST
router.put('/:id', utilisateurController.updateUtilisateur); // PUT

module.exports = router;