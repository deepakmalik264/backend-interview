const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
const { ObjectId } = require("bson");


const orderSchema = new mongoose.Schema(
    {
        totalFee: { type: Number, required: true },
        serviceIds: [Object]
    },
    {
        timestamps: true,
        versionKey: false, 
    }
);



// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;



