const express = require('express');
var path = require('path');
const catalog = require(path.join(__dirname, '../controllers', 'catalog.controller'));
const loyalty = require(path.join(__dirname, '../controllers', 'loyalty.controller'));
// const { catalog } = require('../controllers');

const router = express.Router();

router.get('/catalog', catalog.init);
router.get('/loyalty', loyalty.init);

module.exports = router;
