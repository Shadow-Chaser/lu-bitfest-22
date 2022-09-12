const router = require("express").Router();
const { addBus, getAllBus } = require("../controllers/busController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authorizeMiddleware = require("../middlewares/authorizeMiddleware");

router
    .route("/")
    .get([authorizeMiddleware, adminMiddleware], getAllBus)
    .post([authorizeMiddleware, adminMiddleware], addBus);

module.exports = router;
