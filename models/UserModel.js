const { DataTypes } = require("sequelize");

module.exports = (database) => {
  const User =database.define("User",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: true
        },
        cuil: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          sexo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          dni: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          lineaprograma: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          institucion_de_inscripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          provincia: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          nacionalidad: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          municipio: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
         localidad: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          calle: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          callenumero: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          codigopostal: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          telefono: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          barrio: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
          crenatep: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: true
          },
      
    },{
        timestamps: false,
    })
    return User;
};

