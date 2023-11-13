const { User } = require("../db");

async function eliminarUsuario(req, res) {
  try {
    const userId = req.params.id;

    // Eliminamos el usuario con el ID proporcionado
    const deletedRowsCount = await User.destroy({
      where: {
        id: userId,
      },
    });

    if (deletedRowsCount === 1) {
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = eliminarUsuario;
