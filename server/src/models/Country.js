const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      validate: {
        length(value) {
          if (value.length > 3 || value.length < 0) {
            throw new Error("Invalid ID")
          }
        }
      },
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: false
    },

    area: {
      type: DataTypes.STRING,
      allowNull: false
    },

    population: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
};