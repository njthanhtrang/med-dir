// import models
const Specialty = require('./Specialty');
const Department = require('./Specialty');
const Tag = require('./Insurance');
const SpecialtyTag = require('./SpecialtyTag');

// Specialty belongsTo Department

// Departments have many Specialties

// Specialtys belongToMany Tags (through SpecialtyTag)

// Tags belongToMany Specialtys (through SpecialtyTag)

module.exports = {
  Product,
  Department,
  Tag,
  ProductTag,
};
