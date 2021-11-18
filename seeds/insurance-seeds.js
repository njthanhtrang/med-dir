const { Insurance } = require('../models');

const insuranceData = [
  {
    provider_id: 1,
    patient_id: 6,
  },
  {
    provider_id: 2,
    patient_id: 6,
  },
  {
    provider_id: 1,
    patient_id: 3,
  },
  {
    provider_id: 4,
    patient_id: 1,
  },
  {
    provider_id: 5,
    patient_id: 3,
  },

];

const seedInsurances = () => Insurance.bulkCreate(insuranceData);

module.exports = seedInsurances;
