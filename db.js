require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserModel = require("./models/UserModel");
const AdminModel = require("./models/AdminModel");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
    native: false,
  }
);

const User = UserModel(database);
const Admin = AdminModel(database);

// Manejo de errores durante la autenticación
try {
  database.authenticate();
  console.log('Conexión a la base de datos establecida correctamente.');
} catch (error) {
  console.error('Error al conectar a la base de datos:', error);
}

module.exports = { User, Admin, database };
