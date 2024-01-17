const mongoose = require('mongoose');
const validator = require('validator');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    isMarried: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new console.error("Invalid Email!..");
            }
        }
    },
    subscription: {
        type: String,
        default: null
    },
    renewalDate: {
        type: String,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('customer', CustomerSchema);