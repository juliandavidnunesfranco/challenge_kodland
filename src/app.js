const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const rateLimit = require("express-rate-limit");

require("./db/index.js");

//middlewares config to app
// app.use(express);
app.use(express.urlencoded({ extended: true, limit: "150mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cors());

//cors headers
/* app.use((req, res, next) => {
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
}); */

// limit requests from same API
app.use(
    rateLimit({
        max: 100,
        windowMs: 120 * 1000, // 2 minute
        message: "Too many requests from this IP, please try again later",
    })
);

//file upload
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./uploads",
    })
);

//Routes
app.use("/", routes);

//system for shutting down the server gracefully
const shutdown = () => {
    app.close(() => {
        console.log("Process terminated");
        process.exit(0);
    });
};
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// Error catching endware.
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;
