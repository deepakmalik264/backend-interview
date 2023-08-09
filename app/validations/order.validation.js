const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createOrder = {
    body: Joi.object().keys({
        totalFee: Joi.number().positive().required(),
        serviceIds: Joi.array()
            .items(Joi.object({ id: Joi.string().custom(objectId).required() }))
            .required(),
    }),
};

const getOrderById = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId).required(),
    }),
};

const updateOrder = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId).required(),
    }),
	body: Joi.object().keys({
        totalFee: Joi.number().positive().required(),
        serviceIds: Joi.array()
            .items(Joi.object({ id: Joi.string().custom(objectId).required() }))
            .required(),
    })
};

const deleteOrder = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId).required(),
    }),
};

module.exports = {
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
};
