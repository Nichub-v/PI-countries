const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInRange(value) {
                    if (value < 1 || value > 5) {
                        throw new Error("Difficulty value out of range (1 to 5)")
                    }
                }
            },
        },

        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        season: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
  };