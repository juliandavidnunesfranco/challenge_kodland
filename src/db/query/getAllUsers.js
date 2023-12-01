//const { conn } = require("../index.js");
// Definición del procedimiento almacenado
const getAllUsersProcedure = `
CREATE OR REPLACE FUNCTION sp_GetUsers()
RETURNS SETOF "Users" AS $$
BEGIN
    RETURN QUERY SELECT * FROM "Users";
END;
$$ LANGUAGE plpgsql
`;

// Comando para eliminar el procedimiento almacenado si ya existe
const getAllUsersProcedureDrop = `DROP FUNCTION IF EXISTS sp_GetUsers();`;

// Consulta de prueba del procedimiento almacenado
const getAllUsersProcedureTest = `
SELECT * FROM sp_GetUsers();
`;
/* async function executeGetAllUsersProcedure() {
    try {
        // Eliminar el procedimiento almacenado existente
        await conn.query(getAllUsersProcedureDrop);

        // Crear el nuevo procedimiento almacenado
        await conn.query(getAllUsersProcedure);

        // Consulta de prueba
        const result = await conn.query(getAllUsersProcedureTest);
        console.log("Result of the stored procedure:", result.rows);
    } catch (error) {
        console.error(
            "An error occurred while executing the stored procedure:",
            error
        );
    }
} */

// Exportar comandos y funciones para uso externo si es necesario
module.exports = {
    getAllUsersProcedure,
    getAllUsersProcedureDrop,
    getAllUsersProcedureTest,
    //executeGetAllUsersProcedure,
};

// Ejemplo de uso del procedimiento almacenado
//await conn.query('SELECT * FROM sp_GetUsers();');
