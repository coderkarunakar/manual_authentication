const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');

// this below line is for getting the main home file ka router

router.get('/', homeController.home);

// this below line is for getting the all user.js related file routers we are using all those here,here users is the prefix for going to the required file 
//it takes to that page when we type this in the localhost url ..
router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


// with this below line it can be accesed every where(like here created profile,sign-in,sign-up are exported with this help only ..just by using this file name)
module.exports = router;