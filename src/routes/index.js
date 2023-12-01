const express = require("express");
const router = express.Router();
const routeUsers = require("./user.routes.js");

router.use("/users", routeUsers);
router.get("/", (req, res) => {
    res.send("Bienvenido al servidor Kodland! 😎");
});

module.exports = router;
