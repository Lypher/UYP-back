const { User } = require("../db");

const buscarUsuarioPorId = async (id) => {
  try {
    const usuario = await User.findByPk(id);
    return usuario;
  } catch (error) {
    throw new Error("Error al buscar usuario por ID: " + error.message);
  }
};

module.exports = buscarUsuarioPorId;
