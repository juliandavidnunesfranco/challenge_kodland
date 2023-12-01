require("dotenv").config();
const app = require("./app");
const http = require("http");
const { conn } = require("./db/index.js");
const { PORT } = process.env;

async function startServer() {
    try {
        const server = http.createServer(app);
        server.maxConnections = 500;
        server.timeout = 30000;

        conn.sync({ force: false }).then(() => {
            console.log("Connection to Database successfuly established!!🤖👾");
            server.listen(PORT, () => {
                console.log(`🚀 listening at ${PORT} 🚀 `); // eslint-disable-line no-console
            });
        });
    } catch (error) {
        console.error(error, "Error al iniciar el servidor");
        server.on("error", (err) => {
            console.error("Error al iniciar el servidor:", err);
            process.exitCode = 1;
        });
    }
}

startServer();
