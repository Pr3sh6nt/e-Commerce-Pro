const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide name"],
    },
    emailId: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid_Email!.. please provide valid email!")
            }
        }
    },
    password: {
        type: String,
        require: [true, "please enter password!"],

    }
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema);