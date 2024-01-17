const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodName: {
        type: String,
        require: true
    },
    prodModel: {
        type: String,
        require: true
    },
    prodPrice: {
        type: Number,
        require: true
    },
    prodQuantity: {
        type: Number,
        require: true
    },
}, { timestamps: true });

module.exports = mongoose.model('product', ProductSchema);