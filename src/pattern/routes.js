const router = require('express').Router();
const { 
    all,
    index,
    store
} = require('./controller');

router.get('/patterns', all);
router.get('/pattern/:id', index);
router.post('/pattern', store);

module.exports = router;