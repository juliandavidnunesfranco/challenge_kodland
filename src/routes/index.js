const express = require("express");
const router = express.Router();
const routeUsers = require("./user.routes.js");
const gateway = require("../controller/gateway.js");

router.use("/users", routeUsers);
router.use("/", gateway);

module.exports = router;
