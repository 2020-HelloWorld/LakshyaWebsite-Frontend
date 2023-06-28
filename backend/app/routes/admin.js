const express = require('express');

const controller = require('../controller')

const router = express.Router();

router.post('/adduser',controller.signupController);

module.exports = router;