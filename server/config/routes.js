// const {getAllProducts, getOneProduct, createProduct, deleteProduct, updateProduct} = require('../controllers/controller.js');

const bp = require("body-parser");
const api = require('../controllers/controller.js');

module.exports = function(app){
    app.use(bp.json());

    // app.get('/api/products', api.getAllProducts);
    // app.get('/api/products/:prod_id', api.getOneProduct);       
    // app.post('/api/products/new', api.createProduct);    
    // app.delete('/api/products/:prod_id/deleteProd', api.deleteProduct);
    // app.put('/api/products/:prod_id/updateProd', api.updateProduct);      
      
}

