const express = require('express');

const router = express.Router();

const userController = require('./user.controller');

// get all users
router.get('/getAll', userController.findAll);

// create user
router.post('/createUser', userController.create);

// get user with id
router.get('/:id', userController.findById);

// update user with id
router.put('/:id', userController.update);

// delete user with id
router.delete('/:id', userController.delete);

module.exports = router;