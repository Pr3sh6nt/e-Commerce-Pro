const userModel = require('./../models/usersModel');
const Token = require('./../utils/auth');

exports.createUser = async (req, res) => {
    try {
        const { name, emailId, password } = req.body;
        const userData = await userModel.create({ name, emailId, password })
        let userToken = Token.generateToken({
            data : userData
        });
        res.status(201).json({message: 'user details created!..', data :{user: userData, token: userToken}});
        }catch (err) {
        res.status(400).json({ message: `Invalid credentials! please provide valid details! ${err}`, data: 0 });
    }
}

