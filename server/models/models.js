const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/final_exam_db4',{ useNewUrlParser: true });

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3,'Name must be greater than 3 characters'],
        
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0,'Quantity must be greater or equal to 0'],
        
    },
    price: {
        type: Number,
        min: [0,'Price must be greater or equal to 0'],        
        required: [true, "Price is required"]
    }
},{timestamps: true})




const Products = mongoose.model('products', ProductSchema)

module.exports = Products;