const { Specialty } = require('../models');

const specialtyData = [
  {
    specialty_name: 'Ophthalmology',
  },
  {
    specialty_name: 'Cardiology',
  },
  {
    specialty_name: 'Radiology',
  },
  {
    specialty_name: 'Neurology',
  },
  {
    specialty_name: 'ENT',
  },
  {
    specialty_name: 'Pediatrics',
  },
];

const seedSpecialties = () => Specialty.bulkCreate(specialtyData);

module.exports = seedSpecialties;
