import db from "./connection.js";

async function createDatabaseTables() {
  await db.sequelize.sync({ force: true });
  console.log("[Tablas creadas correctamente]");
}

createDatabaseTables();
