const express = require('express');
const authRoute = require('./auth');
const adminRoute = require('./admin');
const controller = require('../controller')

const router = express.Router();

router.use('/auth',authRoute);
router.use('/admin',adminRoute);


router.get('/',controller.homeController);

module.exports  = router ;
