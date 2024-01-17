const jwt = require('jsonwebtoken');

exports.generateToken = (userdata) => {
    jwt.sign(userdata, process.env.JWT_SCRET_KEY, {expiresIn: process.env.JWT_EXP_IN});
}