const Product = require('../models/product');

//function to show all the products
module.exports.products = async function (req, res) {

    try {
        const foundProducts = await Product.find({});
        res.status(200).send(foundProducts);

    } catch (error) {
        res.status(500).send(error);
    }
    
}

// function to create a new product
module.exports.create = async function (req, res) {
    try {
         newProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });
        // await newProduct.save();

        return res.status(200).json({
            message: 'You are registered Successfully!!',
            data: {
              newProduct: newProduct
            }
          });

        res.send('New product added successfully.');
    } catch (error) {
        res.send(error);
    }
    
}

// function to delete a product using it's ID
module.exports.delete = async function (req, res) {
    try {
        await Product.findOneAndDelete(
            { _id: req.params.productId });
            res.send({
                message:"Product deleted"
            });
    } catch(error){
        res.status(500).send(error);
    }

    
}

// exports.delete = async (req, res) => {
//     try {
//       const taskId = req.params.productId;
      
  
//       const task = await Product.findOneAndDelete({ _id: taskId });
//       if (!task) {
//         return res.sendStatus(404);
//       }
  
//       res.sendStatus(204).send({
//         message: "Product Deleted"
//       });
//     } catch (error) {
//       console.error('Error deleting task:', error);
//       res.sendStatus(500);
//     }
//   };

// function to update a product's quantity
module.exports.updateQuantity = async function (req, res) {
    try {
        const ID = req.params.productID;
        
        // Find the product using id
        const found = await Product.findById(ID);
       

        if (!found) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // NOTE: To increment the quantity of the product, put a positive number in the query.
        // To decrement the quantity, put a negative number in the query.
        const newQty =  parseInt(req.query.number);

        // Update the product's quantity
        const updatedProduct = await Product.findByIdAndUpdate(ID, { quantity: newQty }, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ message: 'Failed to update product' });
        }

        res.send({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        res.status(500).send(err);
    }
}