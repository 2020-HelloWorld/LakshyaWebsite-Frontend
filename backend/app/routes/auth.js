const express = require('express');

const controller = require('../controller')

const router = express.Router();

router.post('/login',controller.loginController);

module.exports = router;