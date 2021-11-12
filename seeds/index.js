const seedSpecialties = require('./specialty-seeds');
const seedProviders = require('./provider-seeds');
const seedPatients = require('./patient-seeds');
const seedInsurances = require('./insurance-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedSpecialties();
  console.log('\n----- SPECIALTIES SEEDED -----\n');

  await seedProviders();
  console.log('\n----- PROVIDERS SEEDED -----\n');

  await seedPatients();
  console.log('\n----- PATIENTS SEEDED -----\n');

  await seedInsurances();
  console.log('\n----- INSURANCES SEEDED -----\n');

  process.exit(0);
};

seedAll();
