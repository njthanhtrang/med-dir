const router = require('express').Router();

const specialtyRoutes = require('./specialty-routes');
const providerRoutes = require('./provider-routes');
const patientRoutes = require('./patient-routes');

router.use('/specialties', specialtyRoutes);
router.use('/providers', providerRoutes);
router.use('/patients', patientRoutes);

module.exports = router;
