// import router
const router = require('express').Router();

// import api routes and home routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// apply routes to router middleware
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;