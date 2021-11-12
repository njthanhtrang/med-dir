const router = require('express').Router();
const { Provider, Specialty, Patient, Insurance } = require('../../models');

// The `/api/providers` endpoint

// get all providers
router.get('/', (req, res) => {
  // find all providers
  // be sure to include its associated Specialty and Patient data
});

// get one provider
router.get('/:id', (req, res) => {
  // find a single provider by its `id`
  // be sure to include its associated Specialty and Patient data
});

// create new provider
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      provider_name: "Kevin Lee",
      medical_assistant: "Kelly A",
      visit_price: 200.00,
      appointments: 3,
      meds: ["Ketorolac", "Moxifloxacin"],
      treatment: ["Pterygeum", "Cataract", "Chalazion"]
      patientIds: [1, 2, 3, 4]
    }
  */
  Provider.create(req.body)
    .then((provider) => {
      // if there's insurance, we need to create pairings to bulk create in the Insurance model
      if (req.body.patientIds.length) {
        const insuranceIdArr = req.body.patientIds.map((patient_id) => {
          return {
            provider_id: provider.id,
            patient_id,
          };
        });
        return Insurance.bulkCreate(insuranceIdArr);
      }
      // if no insurances, just respond
      res.status(200).json(provider);
    })
    .then((insuranceIds) => res.status(200).json(insuranceIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update provider
router.put('/:id', (req, res) => {
  // update provider data
  Provider.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((provider) => {
      // find all associated patients from Insurance
      return Insurance.findAll({ where: { provider_id: req.params.id } });
    })
    .then((insurances) => {
      // get list of current patient_ids
      const insuranceIds = insurances.map(({ patient_id }) => patient_id);
      // create filtered list of new patient_ids
      const newInsurance = req.body.patientIds
        .filter((patient_id) => !insuranceIds.includes(patient_id))
        .map((patient_id) => {
          return {
            provider_id: req.params.id,
            patient_id,
          };
        });
      // figure out which ones to remove
      const insurancesToRemove = insurances
        .filter(({ patient_id }) => !req.body.patientIds.includes(patient_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        Insurance.destroy({ where: { id: insurancesToRemove } }),
        Insurance.bulkCreate(newInsurance),
      ]);
    })
    .then((updatedInsurance) => res.json(updatedInsurance))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one provider by its `id` value
});

module.exports = router;
