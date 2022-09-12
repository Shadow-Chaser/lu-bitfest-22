const userRouter = require("./userRoute");
const busRouter = require("./busRoute");
const consumerRequestRouter = require("./consumerRequestRoute");

module.exports = (app) => {
    app.use("/api/user", userRouter);
    app.use("/api/bus", busRouter);
    app.use("/api/consumer-request", consumerRequestRouter);
};
