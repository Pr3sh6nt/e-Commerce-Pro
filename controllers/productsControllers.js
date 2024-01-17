const productModel = require('./../models/productsModel');

exports.createProduct = async (req, res) => {
    try {
        const { prodName, prodModel, prodPrice, prodQuantity } = req.body;
        let prodData = await productModel.create({ prodName, prodModel, prodPrice, prodQuantity });
        res.status(200).json({ message: "products details created successfull!...", data: prodData });
    } catch (err) {
        res.status(404).json({ message: `invalid credentials!.. ${err}`, data: 0 });
    }
}

