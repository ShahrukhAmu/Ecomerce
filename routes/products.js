const express = require('express');
const router = express.Router();

// initializing products controller
const productController = require('../controllers/products_controller');

// to get all the products
router.get('/', productController.products);

// to create a product
router.post('/create', productController.create);

// to delete a product using it's ID 
router.delete('/:productID', productController.delete);

// to update the quantity of a product
router.post('/:productID', productController.updateQuantity);

module.exports = router;