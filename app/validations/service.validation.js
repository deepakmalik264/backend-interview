const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createServiceRecord = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

const getServiceRecordById = {
    params: Joi.object().keys({
        serviceId: Joi.string().custom(objectId).required(),
    }),
};

const updateServiceRecord = {
    params: Joi.object().keys({
        serviceId: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

const deleteServiceRecord = {
    params: Joi.object().keys({
        serviceId: Joi.string().custom(objectId).required(),
    }),
};

module.exports = {
    createServiceRecord,
    getServiceRecordById,
    updateServiceRecord,
    deleteServiceRecord,
};
