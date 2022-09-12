const ConsumerRequest = require("../models/consumerRequestModel");

const addConsumerRequest = async (req, res) => {
    const newRequest = new ConsumerRequest(req.body);

    const result = await newRequest.save();

    return res.status(201).send({
        message: "Consumer Request sent successfully!",
        codename: result.codename,
    });
};

const getAllConsumerRequest = async (req, res) => {
    const result = await ConsumerRequest.find({});
    // .populate("user", "consumerRole");
    return res.status(200).json(result);
};

const getTransportDemands = async (req, res) => {
    const data = await ConsumerRequest.find({});
    // console.log(data);
    const demands = {
        "8AM": {
            route1: 0,
            route2: 0,
            route3: 0,
            route4: 0,
        },
        "9AM": {
            route1: 0,
            route2: 0,
            route3: 0,
            route4: 0,
        },
        "10AM": {
            route1: 0,
            route2: 0,
            route3: 0,
            route4: 0,
        },
        "11AM": {
            route1: 0,
            route2: 0,
            route3: 0,
            route4: 0,
        },
        "1PM": {
            route1: 0,
            route2: 0,
            route3: 0,
            route4: 0,
        },
    };

    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        if (e.incomingSchedule === "8AM") {
            switch (e.incomingRoute) {
                case "Route - 1":
                    demands["8AM"].route1++;
                    break;
                case "Route - 2":
                    demands["8AM"].route2++;
                    break;
                case "Route - 3":
                    demands["8AM"].route3++;
                    break;
                case "Route - 4":
                    demands["8AM"].route4++;
                    break;

                default:
                    break;
            }
        } else if (e.incomingSchedule === "9AM") {
            switch (e.incomingRoute) {
                case "Route - 1":
                    demands["9AM"].route1++;
                    break;
                case "Route - 2":
                    demands["9AM"].route2++;
                    break;
                case "Route - 3":
                    demands["9AM"].route3++;
                    break;
                case "Route - 4":
                    demands["9AM"].route4++;
                    break;

                default:
                    break;
            }
        } else if (e.incomingSchedule === "10AM") {
            switch (e.incomingRoute) {
                case "Route - 1":
                    demands["10AM"].route1++;
                    break;
                case "Route - 2":
                    demands["10AM"].route2++;
                    break;
                case "Route - 3":
                    demands["10AM"].route3++;
                    break;
                case "Route - 4":
                    demands["10AM"].route4++;
                    break;

                default:
                    break;
            }
        } else if (e.incomingSchedule === "11AM") {
            switch (e.incomingRoute) {
                case "Route - 1":
                    demands["11AM"].route1++;
                    break;
                case "Route - 2":
                    demands["11AM"].route2++;
                    break;
                case "Route - 3":
                    demands["11AM"].route3++;
                    break;
                case "Route - 4":
                    demands["11AM"].route4++;
                    break;

                default:
                    break;
            }
        } else if (e.incomingSchedule === "1PM") {
            switch (e.incomingRoute) {
                case "Route - 1":
                    demands["1PM"].route1++;
                    break;
                case "Route - 2":
                    demands["1PM"].route2++;
                    break;
                case "Route - 3":
                    demands["1PM"].route3++;
                    break;
                case "Route - 4":
                    demands["1PM"].route4++;
                    break;

                default:
                    break;
            }
        }
    }

    return res.status(200).send(demands);
};

module.exports = {
    addConsumerRequest,
    getAllConsumerRequest,
    getTransportDemands,
};
