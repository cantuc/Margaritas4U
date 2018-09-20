const Products = require ('../models/models.js')
function getAllProducts(req,res){
    Products.find({})
        .then(data => console.log("Found all Products" && res.json(data)))
        .catch(errs => console.log("Could NOT find all Products" && res.json(errs)))
}
function getOneProduct(req,res){
    Products.findById(req.params.prod_id)
        .then(data => console.log("got Product by Id " && res.json(data)))
        .catch(errs => console.log("could NOT get Product by Id" && res.json(errs)))
}
function createProduct(req,res){
    Products.create(req.body)
        .then(data => console.log("you have created new Product" && res.json(data)))
        .catch(errs => console.log("could NOT create new Product" && res.json(errs)))
}
function deleteProduct(req,res){
    Products.findByIdAndRemove(req.params.prod_id)        
        .then(data => console.log("Product with id: " +req.params.prod_id+ " has been DELETED" && res.json(data)))
        .catch(errs => console.log("could NOT delete Product" && res.json(errs)))
}
function updateProduct(req,res){    
    Products.findById(req.params.prod_id)      
    .then(product => {        
        product.name = req.body.name;
        product.quantity = req.body.quantity;
        product.price = req.body.price;        
        return product.save();  //returns promise          
    })
    .then(data => res.json(data))
    .catch(errs => res.json(errs))
}

module.exports = {getAllProducts, getOneProduct, createProduct, deleteProduct, updateProduct};