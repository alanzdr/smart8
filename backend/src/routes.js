const express = require('express');

const ClassificationController = require('./controllers/ClassificationController')
const router = express.Router();

router.get('/', ClassificationController.read)

module.exports = router;