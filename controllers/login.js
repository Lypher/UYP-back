const {Admin} = require("../db")

const login= async ()=>{
    const cuentas = await Admin.findAll();
    return cuentas;
}

module.exports = login