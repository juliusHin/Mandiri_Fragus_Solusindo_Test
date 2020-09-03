const express = require('express');

const router = express.Router();

const postController = require('./post.controller');

// get all post
router.get('/getAll', postController.findAll);

// create post
router.post('/createPost', postController.create);

// get post with id
router.get('/:id', postController.findById);

// update post with id
router.put('/:id', postController.update);

// delete post with id
router.delete('/:id', postController.delete);

// get user name by post
router.get('/user/:user_id', postController.findUserByPostId);

module.exports = router;