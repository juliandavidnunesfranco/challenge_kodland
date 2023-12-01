const express = require("express");
//const cookieparser = require("cookie-parser");
//const session = require("express-session");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

require("./db/index.js");

// db= "authentication";
app.use(express());
app.use(express.urlencoded({ extended: true, limit: "150mb" }));
app.use(express.json({ limit: "50mb" }));
//app.use(cookieparser());
app.use(morgan("dev"));
app.use(cors());

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./uploads",
    })
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});
app.use("/", routes);

// Error catching endware.
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;