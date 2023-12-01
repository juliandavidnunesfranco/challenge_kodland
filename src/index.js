require("dotenv").config();
const app = require("./app");
const http = require("http");
const { conn } = require("./db/index.js");
const { PORT } = process.env;

// Syncing all the models at once.
const server = http.createServer(app);

conn.sync({ force: false }).then(() => {
    
    server.listen(PORT, () => {
        console.log(`🚀 listening at ${PORT} 🚀 `); // eslint-disable-line no-console
    });
});
