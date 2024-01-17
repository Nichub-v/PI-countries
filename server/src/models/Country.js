const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      validate: {
        length(value) {
          if (value.length > 3 || value.length < 0) {
            throw new Error("Invalid ID")
          }
        }
      },
    },

    name: {
      type: DataTypes.JSONB,
      allowNull: false,
    },

    flags: {
      type: DataTypes.JSONB,
      allowNull: false
    },

    continents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },

    area: {
      type: DataTypes.STRING,
      allowNull: false
    },

    population: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {timestamps: false});
};