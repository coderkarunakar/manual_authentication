const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

//in index.js file a users prefix is created u need to use both that users+this sign-up in this local host url.
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

//  it is post since we are positng data and going to other pages
router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);


module.exports = router;