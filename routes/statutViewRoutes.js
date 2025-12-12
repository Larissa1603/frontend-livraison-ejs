const express = require('express');
const router = express.Router();
const statutViewController = require('../controllers/statutViewController');

router.get('/vue', statutViewController.getAllView);

router.get('/new', statutViewController.newForm);
router.post('/create', statutViewController.createView);

router.get('/edit/:id', statutViewController.editForm);
router.post('/update/:id', statutViewController.updateView);

router.get('/delete/:id', statutViewController.deleteView);

module.exports = router;