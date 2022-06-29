const router = require('express').Router();
const userRouters = require('./userRoutes');
const postRouters = require('./postRoutes');

router.use('/users', userRouters);
router.use('/posts', postRouters);

module.exports = router;