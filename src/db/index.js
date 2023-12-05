require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, NODE_ENV } =
    process.env;

const sequelize =
    NODE_ENV === "production"
        ? new Sequelize({
              database: DB_NAME,
              dialect: "postgres",
              dialectModule: require("pg"),
              host: DB_HOST,
              port: 5432,
              username: DB_USER,
              password: DB_PASSWORD,
              pool: {
                  max: 3,
                  min: 1,
                  idle: 10000,
              },
              dialectOptions: {
                  keepAlive: true,
                  ssl: true,
              },
              logging: false,
              native: false,
          })
        : new Sequelize(
              `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
              {
                  logging: false, // set to console.log to see the raw SQL queries
                  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
              }
          );

const basename = path.basename(__filename);
const modelDefiners = [];

//leemos los modelos dentro models
fs.readdirSync(path.join(__dirname, "models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User } = sequelize.models;

// funcion para procedimientos almacenados.
async function loadStoredProcedures() {
    const queryPath = path.join(__dirname, "query");
    const storedProcedures = [];

    await Promise.allSettled(
        fs.readdirSync(queryPath).map(async (file) => {
            try {
                const query = require(path.join(queryPath, file));
                //storedProcedures.push(() => sequelize.query(query)); //los carga y ejecuta
                storedProcedures.push(query); //los carga pero no los ejecuta
                console.log(`Stored procedure ${file} loaded successfully.`);
            } catch (error) {
                console.error(`Error loading stored procedure ${file}:`, error);
                sequelize.close();
            }
        })
    );
    //return storedProcedures; // Devolver un array con los procedimientos almacenados cargados en la base de datos. El array puede estar vacío si no se cargaron procedimientos almacenados.
}

// Cargar los procedimientos almacenados al inicio de la aplicación
loadStoredProcedures().catch((error) => {
    console.error("Error loading stored procedures:", error);
    sequelize.close(); // Cerrar la conexión a la base de datos si ocurre un error al cargar los procedimientos almacenados. Esto permite que la aplicación se cierre y se muestre el mensaje de error.
    throw error; // Proporcionar una excepción para que el proceso de inicialización de la aplicación se detenga y se muestre el mensaje de error. Esto permite el proceso de inicialización de la aplicacion
});

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
    // loadStoredProcedures, // para cargar los procedimientos almacenados en la base de datos como array
};
