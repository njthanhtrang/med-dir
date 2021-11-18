// import models
const Provider = require('./Provider');
const Specialty = require('./Specialty');
const Patient = require('./Patient');
const Insurance = require('./Insurance');

// Provider belongsTo Specialty
Provider.belongsTo(Specialty, {
  foreignKey: "specialty_id",
  onDelete: "SET NULL"
})

// Specialties have many Providers
Specialty.hasMany(Provider, {
  foreignKey: "specialty_id"
})

// Providers belongToMany Patients (through Insurance)
Provider.belongsToMany(Patient, {
  through: Insurance,
  as: "patients",
  foreignKey: "provider_id",
  onDelete: "SET NULL"
})

// Patients belongToMany Providers (through Insurance)
Patient.belongsToMany(Provider, {
  through: Insurance,
  as: "providers",
  foreignKey: "patient_id",
  onDelete: "SET NULL"
})

module.exports = {
  Provider,
  Specialty,
  Patient,
  Insurance,
};
