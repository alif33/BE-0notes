const router = require('express').Router();
const { 
    getPost,
    getPosts,
    addPost
} = require('../controllers/postController');

router.get('/posts', getPosts);
router.get('/post/:id', getPost);
router.post('/post', addPost);

module.exports = router;