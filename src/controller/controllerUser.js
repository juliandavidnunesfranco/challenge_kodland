const bcrypt = require("bcrypt");
const { User } = require("../db/index.js");

const postUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).send("Information is required!");
        }
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: "The user already exists" });
        }
        let saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the new user in the database
        const newUser = await User.create({
            name,
            lastName,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "User created successfully",
            newUser,
            code: 201,
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

module.exports = {
    postUser,
    postLogin,
};
