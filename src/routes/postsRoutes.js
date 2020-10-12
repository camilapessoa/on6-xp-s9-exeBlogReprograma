const express = require('express')
const router = express.Router();

const postsController = require('../controllers/postsController');
const cors = require('cors');


router.get('/posts', cors(), postsController.getPosts);

router.post('/posts', cors(), postsController.buildPost);

router.delete('/posts/:id', cors(), postsController.deletedById);

module.exports = router;
