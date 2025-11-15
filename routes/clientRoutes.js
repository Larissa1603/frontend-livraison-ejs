const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.getAllClients); // GET avec pagination et filtre par nom
router.get('/:id', clientController.getClientById); // GET par ID
router.post('/', clientController.createClient); // POST
router.put('/:id', clientController.updateClient); // PUT

module.exports = router;