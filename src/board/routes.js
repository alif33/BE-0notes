const router = require('express').Router();
const { 
    index,
    all,
    store,
    update
} = require('./controller');

router.get('/board/:id', index);
router.get('/boards', all);
router.post('/board', store);
router.put('/board', update);

module.exports = router;