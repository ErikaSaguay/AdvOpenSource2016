var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/form');

/* Locations pages */
router.get('/', ctrlLocations.formPage);

module.exports = router;
