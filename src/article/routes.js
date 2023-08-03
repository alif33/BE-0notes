const router = require('express').Router();
const { 
    all,
    index,
    store
} = require('./controller');

router.get('/articles', all);
router.get('/article/:id', index);
router.post('/article', store);

module.exports = router;