const Bus = require("../models/busModel");

const addBus = async (req, res) => {
    const newBus = new Bus(req.body);

    const result = await newBus.save();

    return res.status(201).send({
        message: "Bus info added successfully!",
        data: {
            codename: result.codename,
        },
    });
};

const getAllBus = async (req, res) => {
    const result = await Bus.find({});
    return res.status(200).json(result);
};

module.exports = {
    addBus,
    getAllBus,
};
