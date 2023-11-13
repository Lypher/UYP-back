const {User} = require("../db");

const buscarUsuarios = async () =>{
    const usuarios = await User.findAll();
    return usuarios;
}

module.exports= buscarUsuarios;