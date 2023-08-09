const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const serviceSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// Add plugin that converts mongoose document to JSON
serviceSchema.plugin(toJSON);

const ServiceRecord = mongoose.model("Service", serviceSchema);

module.exports = ServiceRecord;
