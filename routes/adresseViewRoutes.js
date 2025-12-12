const express = require('express');
const router = express.Router();
const adresseViewController = require('../controllers/adresseViewController');

router.get('/vue', adresseViewController.getAllView);

router.get('/new', adresseViewController.newForm);
router.post('/create', adresseViewController.createView);

router.get('/edit/:id', adresseViewController.editForm);
router.post('/update/:id', adresseViewController.updateView);

router.get('/delete/:id', adresseViewController.deleteView);

module.exports = router;