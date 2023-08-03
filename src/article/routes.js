const router = require('express').Router();
const { 
    all,
    index,
    store,
    update
} = require('./controller');

router.get('/articles', all);
router.get('/article/:id', index);
router.post('/article', store);
router.put('/article', update);

module.exports = router;