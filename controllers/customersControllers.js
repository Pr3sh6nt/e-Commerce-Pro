const customerModel = require('./../models/customersModel');

exports.CreateCustomer = async (req, res) => {
    try {
        const { name, age, gender, isMarried, email, subscription, renewalDate, } = req.body;
        let customerData = await customerModel.create({ name, age, gender, isMarried, email, subscription, renewalDate });
        res.status(200).json({ message: 'customer details created successfull!..', data: customerData });
    } catch (err) {
        res.status(404).json({ message: `invalid credentials!.. ${err}`, data: 0 });
    }
}

exports.removeCustomer = async (req, res) => {
    try {
        const _id = req.params;
        let customerData = await customerModel.deleteOne({ _id: _id });
        res.status(200).json({ message: 'customer detail removed successfull!..', data: customerData });
    } catch (err) {
        res.status(404).json({ message: `invalid credentials!.. ${err}`, data: 0 });
    }
}

exports.getCustOrdrDetails = async (req, res) => {
    try {
        let CustomerData = await customerModel.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'cust_Id',
                    as: "orderDetails",
                },
            },
            { $unwind: '$orderDetails' },
            {
                $lookup: {
                    from: 'products',
                    localField: 'orderDetails.prod_Id',
                    foreignField: '_id',
                    as: 'orderDetails.prod_Id'
                }

            },
            {
                $set: { "orderDetails": { $concat: ["$orderDetails",] } }
            },



            // {
            //     $addFields: {
            //         orderDetails:{ "$push": "orderDetails.prod_Id"} 
            //     }
            // }
        ]);

        res.status(200).json({ message: "Order details fetched successfull!..", data: CustomerData });
    } catch (err) {
        res.status(404).json({ message: `invalid credentials!.. ${err}`, data: 0 });
    }
}

// exports.findCustomerByAge = async (req,res) => {
//     try{
//         const CustomerData = await customerModel.aggregate([
//             {
//                 $match: {$and:
//                     [{gender: "female"},{age: {$gte : 22}}]
//                 }
//             }
//         ]);
//         res.status(200).json({message: "Customer data fetched successfull!..", data: CustomerData});
//     }catch(err){
//         res.status(404).json({message: `invalid credentials!.. ${err}`, data: 0});
//     }
// }

// exports.findGroupByCustomerData = async (req, res) => {
//     try{
//         const CustomerData = await customerModel.aggregate([
//             {
//                 $group: {
//                     _id : {age: "$age", gender: "$gender"}
//                 }
//             }
//         ])
//         res.status(200).json({message: "Customer data fetched successfull!..", data: CustomerData});
//     }catch(err){
//         res.status(404).json({message: `invalid credentials!.. ${err}`, data: 0});
//     }
// }

// exports.findGroupByCustomerData = async (req, res) => {
//     try{
//         const CustomerData = await customerModel.aggregate([
//             {
//                 $group: {
//                     _id : {age: "$age", gender: "$gender"}
//                 }
//             }
//         ])
//         res.status(200).json({message: "Customer data fetched successfull!..", data: CustomerData});
//     }catch(err){
//         res.status(404).json({message: `invalid credentials!.. ${err}`, data: 0});
//     }
// }
