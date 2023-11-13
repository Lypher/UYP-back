const express = require("express");
const crearUsuario = require("./controllers/crearUsuario")
const server = express();
const cors = require("cors");
const { database } = require ("./db");
const buscarUsuarios = require ("./controllers/buscarUsuarios")
const modificarUsuario = require("./controllers/modificarUsuario")
const eliminarUsuario = require("./controllers/eliminarUsuario")
const buscarUsuarioPorId = require("./controllers/buscarUsuarioPorId")
const crearAdmin = require("./controllers/crearAdmin")
const login = require("./controllers/login")

// Configura CORS para permitir el acceso desde cualquier origen (*)
server.use(express.json(),cors());


database.sync({force:false}).then(
    ()=>{
        console.log("Base de datos conectada =D")
        server.listen(3001, () => {
            console.log("Servidor escuchando en el puerto 3001");
        });
        
    }
);

server.get("/", (req, res) => {
    res.send("¡Hola!");
});

server.get("/usuarios", async (req, res) => {
try {
    const usuarios = await buscarUsuarios()
    res.status(200).json(usuarios);
    console.log("Llegó una petición a /usuarios");
} catch (error) {
    res.status(500).json({error: error.message})
}
});

server.post("/usuarios", async (req,res) =>{
   try {
    const {name, apellido, sexo, cuil, email, lineaprograma, nacimiento, nacionalidad, provincia, municipio, localidad, calle, callenumero, codigopostal, telefono, dni, crenatep} = req.body;
    const nuevoUsuario = await crearUsuario({name, apellido, sexo, cuil, email, lineaprograma, nacimiento, nacionalidad, provincia, municipio, localidad, calle, callenumero, codigopostal, telefono, dni, crenatep})
    res.status(200).json(nuevoUsuario)
   } catch (error) {
       res.status(400).json({ error: error.message })
   }
});

server.put('/usuarios/:id', modificarUsuario);

server.delete('/usuarios/:id', eliminarUsuario);

server.get("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const usuario = await buscarUsuarioPorId(id);
  
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  server.post("/registro", async (req, res) => {
    try {
      const {email, pass } = req.body;
      const nuevaCuenta = await crearAdmin({email, pass})
      res.status(200).json(nuevaCuenta)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  server.get("/registro",async (req, res) => {
    try {
        const cuentas = await login()
        res.status(200).json(cuentas);
        console.log("Llegó una petición a /registro");
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    });
  