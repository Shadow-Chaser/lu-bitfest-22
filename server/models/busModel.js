const { Schema, model } = require("mongoose");

const busSchema = Schema({
    codename: {
        type: String,
        unique: true,
        required: true,
    },
    license: {
        type: String,
        // unique:true,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    driverName: {
        type: String,
        required: true,
    },
    driverPhone: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
});

module.exports = model("Bus", busSchema);
