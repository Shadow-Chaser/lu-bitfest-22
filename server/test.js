const data = [
    {
        _id: "631e37314b306564bb361c89",
        incomingRoute: "Route - 2",
        stoppage: "Modina Market",
        incomingSchedule: "10AM",
        outgoingRoute: "Route - 2",
        outgoingSchedule: "3 PM",
        __v: 0,
        user: {
            _id: "631e35b94b306564bb361c86",
            consumerRole: "student",
        },
    },
    {
        _id: "631e38a84b306564bb361c8f",
        incomingRoute: "Route - 2",
        stoppage: "Radio Office",
        incomingSchedule: "11AM",
        outgoingRoute: "Route - 2",
        outgoingSchedule: "4PM",
        __v: 0,
        user: {
            _id: "631e38464b306564bb361c8c",
            consumerRole: "student",
        },
    },
    {
        _id: "631e3a304b306564bb361c9c",
        userID: "631e39f84b306564bb361c99",
        incomingRoute: "Route - 3",
        stoppage: "Mojumdhari",
        incomingSchedule: "11AM",
        outgoingRoute: "Route - 3",
        outgoingSchedule: "4PM",
        __v: 0,
    },
    {
        _id: "631e3b974b306564bb361ca3",
        incomingRoute: "Route - 4",
        stoppage: "Upashar",
        incomingSchedule: "1PM",
        outgoingRoute: "Route - 3",
        outgoingSchedule: "5PM",
        __v: 0,
        user: {
            _id: "631e3b434b306564bb361c9f",
            consumerRole: "student",
        },
    },
    {
        _id: "631e3c7d4b306564bb361caa",
        incomingRoute: "Route - 2",
        stoppage: "Modina Market",
        incomingSchedule: "8AM",
        outgoingRoute: "Route - 2",
        outgoingSchedule: "4PM",
        __v: 0,
        user: {
            _id: "631e3bf44b306564bb361ca6",
            consumerRole: "teacher",
        },
    },
];

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

console.log(demands);
