const router = require('express').Router();
const { 
    index,
    all,
    store,
    // added,
    // removed
} = require('./controller');

router.get('/project/:id', index);
router.get('/projects', all);
router.post('/project', store);
// router.put('/pattern/added', added);
// router.put('/pattern/removed', removed);

module.exports = router;