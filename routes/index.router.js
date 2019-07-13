/* Create a express router */
const express = require('express');
const router = express.Router();

/* To require controller files */
const productController = require('../controller/productController');
const categoryController = require('../controller/categoryController');

/* create products routes */
router.post('/createProducts', productController.createProducts);

/* create categories routes */
router.post('/createCategories', categoryController.createCategories);

/* delete categories and associated products of category routes */
router.put('/deleteCategories', categoryController.deleteCategories)



/* To export router */ 
module.exports = router;