const router = require('express').Router();
const { 
    index,
    all,
    store
} = require('./controller');

router.get('/package/:id', index);
router.get('/packages', all);
router.post('/package', store);

module.exports = router;