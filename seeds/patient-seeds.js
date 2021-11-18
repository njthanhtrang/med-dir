const { Patient } = require("../models");

const patientData = [
  {
    patient_name: "John Doe",
    meds: "Ketorolac",
    condition: "cataracts"
  },
  {
    patient_name: "Jane Doe",
    meds: "Moxifloxacin",
    condition: "chalazion"
  },
  {
    patient_name: "Monty McDonald",
    meds: "Ibuprofen",
    condition: "Pterygium"
  },
  {
    patient_name: "Tara Tarasons",
    meds: "Durezol",
    condition: "diabetic retinopathy"
  },
  {
    patient_name: "Rebecca Raspberry",
    meds: "Pepto Bismol",
    condition: "Diarrhea"
  },
  {
    patient_name: "Peter Pettigrew",
    meds: "Ivermectin",
    condition: "viral infection"
  },
];

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;
