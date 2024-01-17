var express = require('express');
var router = express.Router();

const CustomerCTRL = require('./../controllers/customersControllers');
const ProductCTRL = require('./../controllers/productsControllers');
const OrderCTRL = require('./../controllers/ordersControllers');
const UserCTRL = require('./../controllers/userControllers');


// CUSTOMER ROUTER
router.post('/createCustomer', CustomerCTRL.CreateCustomer);
router.post('/removeCustomer/:_id', CustomerCTRL.removeCustomer);
router.post('/getCustOrdrDetails', CustomerCTRL.getCustOrdrDetails);
// router.post('/findCustomerByAge', CustomerCTRL.findCustomerByAge);
// router.post('/findGroupByCustomerData', CustomerCTRL.findGroupByCustomerData);

// PRODUCT ROUTER
router.post('/createProduct', ProductCTRL.createProduct);

// ORDER ROUTER
router.post('/createOrder', OrderCTRL.createOrders);
router.post('/getOrderDetails/:_id', OrderCTRL.getOrderDetails);

// Users Router
router.post('/signup', UserCTRL.createUser)


module.exports = router;