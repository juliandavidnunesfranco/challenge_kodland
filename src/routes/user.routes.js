const express = require("express");
const router = express.Router();

const {
    postUser,
    postLogin,
    updatePersonalData,
    getUsers,
    getIdUsers,
    verifyToken,
    changeAdmin,
    forgotPassword,
    changePassword,
    verifyTokenChange,
} = require("../controller/controllerUser")



router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getIdUsers);


//router.get("/", getUsers);
//router.get("/:id",  getIdUsers);

router.post("/register", postUser);

router.post("/login", postLogin);
router.put("/updateprofile", verifyToken, updatePersonalData);

router.put("/update/:id", changeAdmin);

router.post("/forgot", forgotPassword);
router.put("/change-password", verifyTokenChange, changePassword);

module.exports = router;