const router = require("express").Router();
const {
    addConsumerRequest,
    getAllConsumerRequest,
    getTransportDemands,
} = require("../controllers/consumerRequestController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authorizeMiddleware = require("../middlewares/authorizeMiddleware");

router.route("/transport-demands").get([authorizeMiddleware, adminMiddleware], getTransportDemands);

router
    .route("/")
    .get([authorizeMiddleware, adminMiddleware], getAllConsumerRequest)
    .post(authorizeMiddleware, addConsumerRequest);

module.exports = router;
