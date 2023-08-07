const router = require('express').Router();
const { 
    index,
    all,
    store,
    added,
    removed
} = require('./controller');

router.get('/pattern/:id', index);
router.get('/patterns', all);
router.post('/pattern', store);
router.put('/pattern/added', added);
router.put('/pattern/removed', removed);

module.exports = router;