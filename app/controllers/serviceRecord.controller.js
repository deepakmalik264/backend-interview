const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { serviceRecordService } = require("../services");

/**
 * Create a new Service Record
 */
const createServiceRecord = catchAsync(async (req, res) => {
    const serviceRecordData = req.body;
    const serviceName = serviceRecordData.name;
    const createdServiceRecord = await serviceRecordService.createServiceRecord(serviceName);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: createdServiceRecord });
});

/**
 * Update a service record by ID
 */
const updateServiceRecordById = catchAsync(async (req, res) => {
    const serviceId = req.params.serviceId;
    const updateData = req.body.name;
    const updatedServiceRecord = await serviceRecordService.updateServiceRecordById(serviceId, updateData);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: updatedServiceRecord });
});

/**
 * Get a service record by ID
 */
const getServiceRecordById = catchAsync(async (req, res) => {
    const serviceId = req.params.serviceId;
    const serviceRecord = await serviceRecordService.getServiceRecordById(serviceId);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: serviceRecord });
});

/**
 * Retrieve all service records
 */
const getAllServiceRecords = catchAsync(async (req, res) => {
    const serviceRecords = await serviceRecordService.getAllServiceRecords();
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: serviceRecords });
});

/**
 * Delete a service record by ID
 */
const deleteServiceRecordById = catchAsync(async (req, res) => {
    const serviceId = req.params.serviceId;
    const deletedServiceRecord = await serviceRecordService.deleteServiceRecordById(serviceId);
    return res.status(httpStatus.OK).send({ code: httpStatus.OK, message: "success", data: deletedServiceRecord });
});

module.exports = {
    createServiceRecord,
    updateServiceRecordById,
    getServiceRecordById,
    getAllServiceRecords,
    deleteServiceRecordById
};
