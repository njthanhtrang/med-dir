const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Patient extends Model {}

Patient.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    patient_name: {
      type: DataTypes.STRING
    },
    meds: {
      type: DataTypes.STRING
    },
    condition: {
      type: DataTypes.STRING
    }
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
