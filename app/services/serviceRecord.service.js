const { ServiceRecord } = require("../models");
const { ObjectId } = require("mongodb");

/**
 * Create a new service record
 * @param {Object} serviceName - Data for creating a new service record
 * @returns {Promise<Object>} Created new service record object
 */
const createServiceRecord = async (serviceName) => {
   
    const serviceToCreate = {
        name: serviceName
    };
    const createdNewService = await ServiceRecord.create(serviceToCreate);
    return createdNewService;
};

/**
 * Update a service record by ID
 * @param {string} serviceId - ID of the service record to update
 * @param {Object} serviceName - Updated data for the service record
 * @returns {Promise<Object|null>} Updated service record object or null if not found
 */
const updateServiceRecordById = async (serviceId, serviceName) => {
    const updatedService = await ServiceRecord.updateOne(
        { _id: new ObjectId(serviceId) },
        { $set: { name: serviceName } }
    );
    return updatedService;
};

/**
 * Get the service record by ID
 * @param {string} serviceId - ID of the service record to retrieve
 * @returns {Promise<Object|null>} Retrieved service record object or null if not found
 */
const getServiceRecordById = async (serviceId) => {
    const retrievedService = await ServiceRecord.findById(new ObjectId(serviceId)).lean();
    return retrievedService;
};

/**
 * Retrieve all service records
 * @returns {Promise<Array>} Array of service record objects
 */
const getAllServiceRecords = async () => {
    const serviceRecords = await ServiceRecord.find({}).lean();
    return serviceRecords;
};

/**
 * Delete a service record by ID
 * @param {string} serviceId - ID of the service record to delete
 * @returns {Promise<Object|null>} Deleted service record object or null if not found
 */
const deleteServiceRecordById = async (serviceId) => {
    const deletedService = await ServiceRecord.findByIdAndDelete(new ObjectId(serviceId)).lean();
    return deletedService;
};

module.exports = {
    createServiceRecord,
    updateServiceRecordById,
    getServiceRecordById,
    getAllServiceRecords,
    deleteServiceRecordById
};
