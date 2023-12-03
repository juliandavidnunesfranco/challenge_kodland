const bcrypt = require("bcrypt");
const { User } = require("../db/index.js");

const postUser = async (req, res) => {
    const {
        name,
        lastName,
        typeIdentification,
        identification,
        contact,
        email,
        address,
        password,
        isAdmin,
    } = req.body;

    try {
        if (!name || !lastName || !email || !password) {
            return res.status(400).send("Information is required!");
        }
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: "The user already exists" });
        }
        let saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the new user in the database
        await User.create({
            name,
            lastName,
            typeIdentification,
            identification,
            contact,
            email,
            address,
            password: hashedPassword,
            isAdmin,
        });

        return res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        console.log("Error creating user:", error);
        return res.status(500).json({ message: "Error creating user" });
    } finally {
        console.log("finally");
        return res.end();
    }
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide email and password" });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        return res.status(201).json({
            message: "Login successful",
            code: 201,
            user,
        });
    } catch (error) {
        console.error(error);
        conn.close();
        return res.status(500).json({ message: error.message });
    }
};
/*
const getUsers = async (req, res) => {
    let id = req.authdata.id;

    if (!id) {
        res.status(404).send("credential invalidated");
        return;
    }

    try {
        const allUsers = await User.findAndCountAll();

        res.status(200).send(allUsers);
    } catch (error) {
        console.log(error);
    }
};

const userDetail = async function (id) {
    try {
        let user = await User.findByPk(id, {
            model: User,
            where: {
                name: id.name,
                lastName: id.lastName,
                identification: id.identification,
                contact: id.contact,
                email: id.email,
                address: id.address,
            },
        });
        //  res.status(200).send(user);

        if (!user) {
            return "User not found";
        }

        if (user) {
            return user;
        }
    } catch (error) {
        console.log(error);
    }
};

const getIdUsers = async (req, res) => {
    const { id } = req.params;
    let iddos = req.authdata.id;

    console.log(id);
    console.log(iddos);

    if (!iddos) {
        return res.status(404).send("credential invalidated");
    }

    try {
        let userData = await userDetail(id);
        res.status(200).send(userData);
    } catch (error) {
        res.status(404).send(error);
    }
};

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, JWT_SECRET, (error, authdata) => {
            if (error) {
                return res.status(403).json({ message: "Unauthorized access" });
            } else {
                req.authdata = authdata;
                next();
            }
        });
    } else {
        res.status(403).json({ message: "Unauthorized access" });
    }
};

const updatePersonalData = async (req, res) => {
    let id = req.authdata.id;
    console.log(id);
    const {
        name,
        lastName,
        typeIdentification,
        identification,
        contact,
        email,
        address,
    } = req.body;

    try {
        let dataUser = await User.findByPk(id);

        if (dataUser) {
            dataUser.update({
                name,
                lastName,
                typeIdentification,
                identification,
                contact,
                address,
                email,
                isAdmin,
            });
            let userData;
            if (dataUser.isAdmin) {
                userData = {
                    name: dataUser.name,
                    lastName: dataUser.lastName,
                    typeIdentification: dataUser.typeIdentification,
                    identification: dataUser.identification,
                    contact: dataUser.contact,
                    address: dataUser.address,
                    email: dataUser.email,
                    isAdmin: true,
                };
            } else {
                userData = {
                    name: dataUser.name,
                    lastName: dataUser.lastName,
                    typeIdentification: dataUser.typeIdentification,
                    identification: dataUser.identification,
                    contact: dataUser.contact,
                    address: dataUser.address,
                    email: dataUser.email,
                    isAdmin: false,
                };
            }

            return res.status(201).json(userData);
        } else {
            return res.send({ message: "User is not found" }).status(400);
        }
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(400);
    }
};

const changeAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user.email !== "admin@admin.com") {
            const updated = await User.update(
                {
                    isAdmin: !user.isAdmin,
                },
                {
                    where: { id },
                    returning: true,
                }
            );

            return res.send(updated[1][0]);
        }
        return res.status(400).send({ message: "Can't change this user" });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const token = jwt.sign({ id: user.id }, "cambiarcontrasena");
            const url = `http://localhost:3000/changepassword?token=${token}`; // url to front
            await sendEmail(forgotPasswordEmail(email, url));
            return res.send("ok");
        } else {
            res.status(400).send("Error");
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const verifyTokenChange = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, "cambiarcontrasena", (error, authdata) => {
            if (error) {
                return res.status(403).json({ message: "Unauthorized access" });
            } else {
                req.authdata = authdata;
                next();
            }
        });
    } else {
        res.status(403).json({ message: "Unauthorized access" });
    }
};

const changePassword = async (req, res) => {
    try {
        let id = req.authdata.id;
        const { password } = req.body;
        bcrypt.hash(password, 11, async function (err, hash) {
            const usr = await User.update(
                { password: hash },
                {
                    where: { id },
                }
            );
        });

        return res.send({ message: "Password is changed!" });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
 */
module.exports = {
    postUser,
    postLogin,
    // updatePersonalData,
    // getUsers,
    // getIdUsers,
    // verifyToken,
    // changeAdmin,
    // forgotPassword,
    // changePassword,
    // verifyTokenChange,
};
