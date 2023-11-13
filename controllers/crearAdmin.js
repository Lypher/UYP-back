const {Admin} = require("../db")

const crearAdmin = async (cuenta) =>{
    const nuevoAdmin = await Admin.create(cuenta)
    return nuevoAdmin;
}

module.exports = crearAdmin;