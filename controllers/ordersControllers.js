const orderModel = require('./../models/ordersModel');

exports.createOrders = async (req, res) => {
    try {
        const { cust_Id, prod_Id, prod_price, paymentMethod, paymentStatus } = req.body;
        let OrderData = await orderModel.create({ cust_Id, prod_Id, prod_price, paymentMethod, paymentStatus });
        res.status(200).json({ message: "Order details created successfull!..", data: OrderData });
    } catch (err) {
        res.status(404).json({ message: `invalid credentials!.. ${err}`, data: 0 });
    }
}

exports.getOrderDetails = async (req, res) => {
    try {
        //const _id = req.params;
        let OrderData = await orderModel.find({}).populate('cust_Id');
        res.status(200).json({ message: "Order details fetched successfull!..", data: OrderData });
    } catch (err) {
        res.status(404).json({ message: `invalid credentials!.. ${err}`, data: 0 });
    }
}


