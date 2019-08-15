var controller = require('../controller/index.js');
var router = require('express').Router()

router.get('/users', controller.get);
router.post('/users', controller.post);

module.exports = router