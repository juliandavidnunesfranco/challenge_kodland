const { Router } = require("express");
const router = Router();

const {
    postUser, //
    // postLogin,
    // updatePersonalData,
    // getUsers,
    // getIdUsers,
    // verifyToken,
    // changeAdmin,
    // forgotPassword,
    // changePassword,
    // verifyTokenChange,
} = require("../controller/controllerUser");

//router.get("/", getUsers);
//router.get("/:id", verifyToken, getIdUsers);
router.get("/", (req, res) => {
    res.send("Bienvenido al servidor Kodland! 😎 User");
});

router.post("/register", postUser); //

//router.post("/login", postLogin);
//router.put("/updateprofile", verifyToken, updatePersonalData);
//router.put("/update/:id", changeAdmin);
//router.post("/forgot", forgotPassword);
//router.put("/change-password", verifyTokenChange, changePassword);

module.exports = router;
