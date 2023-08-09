const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { orderService } = require("../services");
const { Console } = require("console");





/**
 * Create a new order
 */
const createOrder = catchAsync(async (req, res) => {
    const orderData = req.body; 
    const hasPreExistingOrder = await orderService.hasPreExistingOrder(3);

    if (hasPreExistingOrder) {
        return res.status(httpStatus.BAD_REQUEST).send({ code: httpStatus.BAD_REQUEST, message: "An order cannot be created within 3 hours of a pre-existing order." });
    }
    const createdOrder = await orderService.createOrder(orderData);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: createdOrder });
});



/**
 * Update an order by ID
 */
const updateOrderById = catchAsync(async (req, res) => {
    const orderId = req.params.orderId; 
    const updateData = req.body;
    const hasPreExistingOrder = await orderService.hasPreExistingOrder(3);
    if (hasPreExistingOrder) {
        return res.status(httpStatus.BAD_REQUEST).send({ code: httpStatus.BAD_REQUEST, message: "An order cannot be updated within 3 hours of a pre-existing order." });
    }
    const updatedOrder = await orderService.updateOrderById(orderId, updateData);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: updatedOrder });
});

const getAllOrders = catchAsync(async (req, res) =>{
    const order = await orderService.getAllOrders();
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: order });
});


/**
 * Get an order by ID
 * @param {string} orderId - ID of the order to retrieve
 * @returns {Promise<Object|null>} Order object or null if not found
 */
const getOrderById = catchAsync(async (req, res) =>{
    const orderId = req.params.orderId;
    const order = await orderService.getOrderById(orderId);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: order });
});



/**
 * Delete an order by ID
 */
const deleteOrderById = catchAsync(async(req,res) => {
    const orderId = req.params.orderId;
    const deletedOrder = await orderService.deleteOrderById(orderId);
    return deletedOrder;
});

module.exports = {
    createOrder,
    updateOrderById,
    getOrderById,
    getAllOrders,
    deleteOrderById
}