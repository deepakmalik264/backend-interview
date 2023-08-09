const express = require("express");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");
const router = express.Router();
const validate = require("../middlewares/validate");

router
    .route("/create-order")
    .post(validate(orderValidation.createOrder), orderController.createOrder);


router
    .route("/get-all-order")
    .get(orderController.getAllOrders);    

router
    .route("/:orderId")
    .get(validate(orderValidation.getOrderById), orderController.getOrderById)


router
    .route("/update/:orderId")
    .put(validate(orderValidation.updateOrder), orderController.updateOrderById)
 

router
    .route("/delete/:orderId")
    .delete(validate(orderValidation.deleteOrder), orderController.deleteOrderById);   

module.exports = router;
