const mongoose = require('mongoose');

//creating the product schema

const productSchema = new mongoose.Schema({
    name: {type: String, 
    require: true},
    quantity: {type: Number,
    require: true}
}, {
    versionKey: false
});

// creating a new model called "Product"

const Product = mongoose.model('Product', productSchema);

module.exports = Product;