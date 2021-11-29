const express = require('express');
const router = express.Router();
const estimateController = require('../controllers/estimate.controller');

router.post('/estimate', estimateController.generate);

module.exports = router;
