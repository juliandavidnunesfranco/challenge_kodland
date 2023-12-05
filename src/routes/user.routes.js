const { Router } = require("express");
const router = Router();

const {
    postUser, //
    postLogin,
} = require("../controller/controllerUser");

router.get("/", (req, res) => {
    res.send("Bienvenido al servidor Kodland! 😎 User");
});

router.post("/register", postUser);
router.post("/login", postLogin);

module.exports = router;
