'use strict';

const db = require('./database');

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
const Campus = require('./campuses');
const Student = require('./students');

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!

Campus.hasMany(Student);
Student.belongsTo(Campus);
//may need another id for campuses so that they can be eager loaded for that list of students under single campus page

module.exports = {
  // Include your models in this exports object as well!
  db,
  Campus,
  Student,
};
