import app from "./app";
import { PORT } from "./config/config.js";
import { sequelize } from "./database/databaseConnection.js";

const startServe = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({
      force: false,
    });

    console.log(
      "La conexión con la base de datos ha sido completada exitosamente"
    );

    app.listen(PORT, () => {
      console.log(`El servidor está corriendo en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(`La conexión con la base de datos no se completó por: `, err);
  }
};

startServe();
