const router = require("express").Router();
const { Specialty, Provider } = require("../../models");
const Joi = require("joi");
const specialties = [
  { id: 1, name: "radiology" },
  { id: 2, name: "surgery" },
  { id: 3, name: "plastics" },
];

// The `/api/specialties` endpoint
// path, route handler
router.get("/", (req, res) => {
  // find all specialties
  // Specialty.findAll({
  //     // be sure to include its associated Providers
  //   include: [Provider]
  // })
  // .then((dbSpecialtyData) => res.json(dbSpecialtyData))
  // .catch((err) => {
  //   console.log(err);
  //   res.status(500).json(err);
  // });
  res.send(specialties);
});

// /api/specialties/:id
router.get("/:id", (req, res) => {
  // find one specialty by its `id` value
  // Specialty.findOne({
  //   where: {
  //     id: req.params.id
  //   },
  //   // be sure to include its associated Providers
  //   include: [
  //     Provider
  //   ],
  // }).then((dbSpecialtyData) => {
  //   if (!dbSpecialtyData) {
  //     // obj not found, HTTP status 404
  //     res.status(404).json({ message: "No specialty found with that ID" });
  //     return;
  //   }
  //   res.json(dbSpecialtyData);
  // });

  const specialty = specialties.find(
    (spec) => spec.id === parseInt(req.params.id)
  );
  if (!specialty)
    return res.status(404).send("Specialty with that ID not found");
  res.send(specialty);
});

router.post("/", (req, res) => {
  // create a new specialty
  // Specialty.create({
  //   id: req.body.id,
  //   specialty_name: req.body.specialty_name
  // })
  // .then((dbSpecialtyData) => res.json(dbSpecialtyData))
  // .catch((err) => {
  //   console.log(err);
  //   res.status(500).json(err);
  // });
  //  const result = validateSpecialty(req.body);
  // destructure from result
  const { error } = validateSpecialty(req.body);

  // validate, if invalid, 400 bad request

  if (error) return res.status(400).send(error.details[0].message);

  const specialty = {
    id: specialties.length + 1,
    name: req.body.name,
  };
  specialties.push(specialty);
  res.send(specialty);
});

router.put("/:id", (req, res) => {
  // update a specialty by its `id` value
  // Specialty.update(
  //   {
  //     specialty_name: req.body.specialty_name,
  //   },
  //   {
  //     where: {
  //       id: req.params.id,
  //     },
  //   }
  // )
  //   .then((dbSpecialtyData) => {
  //     if (!dbSpecialtyData) {
  //       res.status(404).json({ message: "No specialty found with that ID" });
  //       return;
  //     }
  //     res.json(dbSpecialtyData);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });

  // look up specialty, if doesn't exist, return 404
  const specialty = specialties.find(
    (spec) => spec.id === parseInt(req.params.id)
  );
  if (!specialty)
    return res.status(404).send("Specialty with that ID not found");

  //  const result = validateSpecialty(req.body);
  // destructure from result
  const { error } = validateSpecialty(req.body);

  // validate, if invalid, 400 bad request

  if (error) return res.status(400).send(error.details[0].message);

  // update specialty, return updated spec
  specialty.name = req.body.name;
  res.send(specialty);
});

function validateSpecialty(specialty) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(specialty, schema);
}

router.delete("/:id", (req, res) => {
  // delete a specialty by its `id` value
  // Specialty.destroy({
  //   where: {
  //     id: req.params.id,
  //   },
  // })
  //   .then((dbSpecialtyData) => {
  //     if (!dbSpecialtyData) {
  //       res.status(404).json({ message: "No specialty found with that ID" });
  //       return;
  //     }
  //     res.json(dbSpecialtyData);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });

  // look up course, if doesn't exist, return 404
  const specialty = specialties.find(
    (spec) => spec.id === parseInt(req.params.id)
  );
  if (!specialty)
    return res.status(404).send("Specialty with that ID not found");

  //  delete
  const index = specialties.indexOf(specialty);
  specialties.splice(index, 1);
  // return same course
  res.send(specialty);
});

module.exports = router;
