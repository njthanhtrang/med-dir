// import models
const Provider = require('./Provider');
const Specialty = require('./Specialty');
const Patient = require('./Patient');
const Insurance = require('./Insurance');

// Provider belongsTo Specialty

// Specialties have many Providers

// Specialties belongToMany Patients (through Insurance)

// Patients belongToMany Providers (through Insurance)

module.exports = {
  Provider,
  Specialty,
  Patient,
  Insurance,
};
