const router = require('express').Router();
const { Specialty, Provider } = require('../../models');

// The `/api/specialties` endpoint

router.get('/', (req, res) => {
  // find all specialties
  // be sure to include its associated Providers
});

router.get('/:id', (req, res) => {
  // find one specialty by its `id` value
  // be sure to include its associated Providers
});

router.post('/', (req, res) => {
  // create a new specialty
});

router.put('/:id', (req, res) => {
  // update a specialty by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a specialty by its `id` value
});

module.exports = router;
