const router = require('express').Router();
const { 
    index,
    all,
    store,
    update
    // added,
    // removed
} = require('./controller');

router.get('/project/:id', index);
router.get('/projects', all);
router.post('/project', store);
router.put('/project', update);
// router.put('/pattern/removed', removed);

module.exports = router;