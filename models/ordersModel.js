const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    cust_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    prod_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    prod_price: {
        type: Number,
        require: true
    },
    paymentMethod: {
        cardMode: {
            cardNum: {
                type: Number,
                default: null
            },
            Exp_In: {
                type: String,
                default: null
            }
        },
        upiMode: {
            upi_Id: {
                type: String,
                default: null
            }
        }
    },
    paymentStatus: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('order', OrderSchema);