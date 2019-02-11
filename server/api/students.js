const router = require('express').Router();
const { Student } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({ include: { all: true } });
    res.json(allStudents);
  } catch (error) {
    //Come back to add a stock error page
    console.log(error);
  }
});

module.exports = router;
