const express = require("express");
const { serviceRecordValidation } = require("../validations");
const { serviceRecordController } = require("../controllers");
const router = express.Router();
const validate = require("../middlewares/validate");

router
    .route("/create-service-record")
    .post(validate(serviceRecordValidation.createServiceRecord), serviceRecordController.createServiceRecord)

router
    .route("/get-all-service-records")
    .get(serviceRecordController.getAllServiceRecords);

router
    .route("/:serviceId")
    .get(validate(serviceRecordValidation.getServiceRecordById), serviceRecordController.getServiceRecordById);

router
    .route("/update/:serviceId")
    .put(validate(serviceRecordValidation.updateServiceRecord), serviceRecordController.updateServiceRecordById);

router
    .route("/delete/:serviceId")
    .delete(validate(serviceRecordValidation.deleteServiceRecord), serviceRecordController.deleteServiceRecordById);

module.exports = router;
