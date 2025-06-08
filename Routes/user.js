const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user');


router.post("/signUp",UserController.signup)
router.post("/login",UserController.signIn)


module.exports =router