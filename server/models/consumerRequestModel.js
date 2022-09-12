const { Schema, model } = require("mongoose");

const consumerRequestSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    incomingRoute: {
        type: String,
        required: true,
    },
    stoppage: {
        type: String,
        required: true,
    },
    incomingSchedule: {
        type: String,
        required: true,
    },
    outgoingRoute: {
        type: String,
        required: true,
    },
    outgoingSchedule: {
        type: String,
        required: true,
    },
});

module.exports = model("ConsumerRequest", consumerRequestSchema);
