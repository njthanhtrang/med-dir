const router = require('express').Router();
const { Patient, Provider, Insurance } = require('../../models');

// The `/api/patients` endpoint

router.get('/', (req, res) => {
  // find all patients
  // be sure to include its associated Provider data
});

router.get('/:id', (req, res) => {
  // find a single patient by its `id`
  // be sure to include its associated Provider data
});

router.post('/', (req, res) => {
  // create a new patient
});

router.put('/:id', (req, res) => {
  // update a patient's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete an patient by its `id` value
});

module.exports = router;
