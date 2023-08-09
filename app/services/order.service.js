const {Order} = require("../models");
const moment = require('moment-timezone');
const mongoose = require('mongoose');
const { ObjectId } = require("bson");




/**
 * Check if there is a pre-existing order within a specified time frame
 * @param {number} hours - The time frame in hours
 * @returns {Promise<boolean>} True if a pre-existing order is found, false otherwise
 */
const hasPreExistingOrder = async (hours) => {
    const startTime = moment().subtract(hours, "hours");
    const existingOrder = await Order.findOne({
        createdAt: { $gte: startTime.toDate(), $lt: moment().toDate() }
    });
    return !!existingOrder; 
};

/**
 * Create a new order
 * @param {Object} orderData - Data for creating a new order
 * @returns {Promise<Object>} Created order object
 */
const createOrder = async (orderData) => {
    const orderToCreate = {
        totalFee: orderData.totalFee,
        serviceIds: orderData.serviceIds
    };

    const createdOrder = await Order.create(orderToCreate);
    return createdOrder;
};


/**
 * Update an order by ID
 * @param {string} orderId - ID of the order to update
 * @param {Object} updateData - Updated data for the order
 * @returns {Promise<Object|null>} Updated order object or null if not found
 */
const updateOrderById = async (orderId, updateData) => {
    console.log(orderId);
    
    const pipeline = [
        {
            $match: {
                _id: ObjectId(orderId)
            }
        }
    ];

    const setStage = {};

    if (updateData.totalFee !== undefined) {
        setStage.totalFee = updateData.totalFee;
    }
    
    if (Array.isArray(updateData.serviceIds)) {
        setStage.serviceIds = {
            $concatArrays: ["$serviceIds", updateData.serviceIds]
        };
    }

    if (Object.keys(setStage).length > 0) {
        pipeline.push({
            $set: setStage
        });
    }

    const updatedOrder = await Order.aggregate(pipeline);
    return updatedOrder;
};



/**
 * Update an order by ID
 * @param {string} orderId - ID of the order to update
 * @param {Object} updateData - Updated data for the order
 * @returns {Promise<Object|null>} Updated order object or null if not found
 */
const getOrderById = async (orderId) => {
    const updatedOrder = await Order.findById(new ObjectId(orderId)).lean();
    return updatedOrder;
};


/**
 * Retrieve all orders
 * @returns {Promise<Array>} Array of order objects
 */
const getAllOrders = async () => {
    const orders = await Order.find({}).lean();
    return orders;
};


/**
 * Delete an order by ID
 * @param {string} orderId - ID of the order to delete
 * @returns {Promise<Object|null>} Deleted order object or null if not found
 */
const deleteOrderById = async (orderId) => {
    const deletedOrder = await Order.findByIdAndDelete(new ObjectId(orderId)).lean();
    return deletedOrder;
};


module.exports = {
    hasPreExistingOrder,
    createOrder,
    updateOrderById,
    getOrderById,
    getAllOrders,
    deleteOrderById
  };






