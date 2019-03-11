const Sequelize = require('sequelize');
const db = require('./database');

const Puzzle = db.define('puzzle', {
  puzzle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hashCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Puzzle;
