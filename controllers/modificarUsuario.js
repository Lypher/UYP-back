const { User } = require("../db");

async function modificarUsuario(req, res) {
  try {
    const userId = req.params.id;
    const {
      id, // Eliminamos el campo 'id' del objeto de datos
      name,
      apellido,
      sexo,
      cuil,
      email,
      lineaprograma,
      nacimiento,
      nacionalidad,
      provincia,
      municipio,
      localidad,
      calle,
      callenumero,
      codigopostal,
      telefono,
      dni,
      crenatep,
    } = req.body;

    // Filtramos el objeto de datos para eliminar el campo 'id' si está presente
    const filteredData = {
      name,
      apellido,
      sexo,
      cuil,
      email,
      lineaprograma,
      nacimiento,
      nacionalidad,
      provincia,
      municipio,
      localidad,
      calle,
      callenumero,
      codigopostal,
      telefono,
      dni,
      crenatep,
    };

    const [updatedRowsCount] = await User.update(filteredData, {
      where: {
        id: userId,
      },
    });

    if (updatedRowsCount === 1) {
      res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = modificarUsuario;
