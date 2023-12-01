const express = require("express");
const router = express.Router();


const routeUsers = require("./user.routes.js");



router.get("/", (req, res) => {
    res.send("Bienvenido al servidor Kodland! 😎");
});

router.use("/users", routeUsers);

module.exports = router;
