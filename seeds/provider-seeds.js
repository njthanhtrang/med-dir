const { Provider } = require('../models');

const providerData = [
  {
    provider_name: 'Kevin Lee',
    medical_assistant: "Kelly A",
    visit_price: 14.99,
    appointments: 14,
    specialty_id: 1,
    patientIds: [1, 2, 3, 4]
  },
  {
    provider_name: 'Heidi Queen',
    medical_assistant: "Amy L",
    visit_price: 90.0,
    appointments: 25,
    specialty_id: 5,
    patientIds: [5, 6, 7, 8]
  },
  {
    provider_name: 'Tuan Do',
    medical_assistant: "Sean D",
    visit_price: 22.99,
    appointments: 12,
    specialty_id: 4,
    patientIds: [2, 3, 5, 7]
  },
  {
    provider_name: 'Ted Love',
    medical_assistant: "Charles M",
    visit_price: 12.99,
    appointments: 50,
    specialty_id: 3,
    patientIds: [4, 5, 7, 8]
  },
  {
    provider_name: 'Sonia Bell',
    medical_assistant: "Katherine C",
    visit_price: 29.99,
    appointments: 22,
    specialty_id: 2,
    patientIds: [4, 9, 10, 11]
  },
];

const seedProviders = () => Provider.bulkCreate(providerData);

module.exports = seedProviders;
