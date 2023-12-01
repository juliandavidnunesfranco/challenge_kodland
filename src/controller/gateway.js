const fs = require("fs");
const path = require("path");

function gateway(req, res) {
    const filePath = path.join(__dirname, "../public/index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al leer el archivo.");
        }

        // Envía el contenido del archivo como respuesta
        res.setHeader("Content-Type", "text/html");
        return res.status(200).send(data);
    });
}

module.exports = gateway;
