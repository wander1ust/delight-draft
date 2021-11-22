const express = require('express');
var path = require('path');
const catalog = require(path.join(__dirname, '../controllers', 'catalog.controller'));
const loyalty = require(path.join(__dirname, '../controllers', 'loyalty.controller'));
// const customer = require(path.join(__dirname, '../controllers', 'customer.controller'));

const router = express.Router();

router.get('/catalog', catalog.init);
router.get('/loyalty', loyalty.init);
// router.get('/customer', customer.init);

// router.post('/customer', customer.postInit);

module.exports = router;
