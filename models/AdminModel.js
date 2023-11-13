const { DataTypes } = require('sequelize');

module.exports = (database) => {
    const Admin = database.define("Admin", {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        pass: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }, {
        timestamps: false,
      });
      
  return Admin;
};
