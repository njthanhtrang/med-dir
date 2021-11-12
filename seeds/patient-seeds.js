const { Patient } = require("../models");

const patientData = [
  {
    patient_name: "John Doe",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Jane Doe",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Jen Nguyen",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Avonte Apple",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Monty McDonald",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Tara Tarasons",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Rebecca Raspberry",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
  {
    patient_name: "Peter Pettigrew",
    meds: ["Ketorolac", "Moxifloxacin"],
    condition: ["Pterygeum", "Cataract", "Chalazion"],
  },
];

const seedPatients = () => Patient.bulkCreate(patientData);

module.exports = seedPatients;
