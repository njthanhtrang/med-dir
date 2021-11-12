const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Patient extends Model {}

Patient.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
);

module.exports = Patient;
