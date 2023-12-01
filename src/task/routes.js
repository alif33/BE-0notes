const router = require('express').Router();
const { 
    index,
    all,
    store,
    update
} = require('./controller');

router.get('/task/:id', index);
router.get('/tasks', all);
router.post('/task', store);
router.put('/task', update);

module.exports = router;