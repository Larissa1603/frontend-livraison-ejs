const express = require('express');
const router = express.Router();
const roleViewController = require('../controllers/roleViewController');

router.get('/vue', roleViewController.getAllView);

router.get('/new', roleViewController.newForm);
router.post('/create', roleViewController.createView);

router.get('/edit/:id', roleViewController.editForm);
router.post('/update/:id', roleViewController.updateView);

router.get('/delete/:id', roleViewController.deleteView);

module.exports = router;