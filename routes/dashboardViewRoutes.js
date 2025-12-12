const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/vue', dashboardController.renderDashboard);

module.exports = router;