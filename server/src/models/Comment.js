const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },

        from: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false, 
        }
    }, {timestamps: true});
  };