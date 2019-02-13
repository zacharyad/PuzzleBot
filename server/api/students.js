const router = require('express').Router();
const { Student } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({ include: { all: true } });
    res.json(allStudents);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:studentId', async (req, res, next) => {
  try {
    const id = req.params.studentId;
    const singleStudent = await Student.findAll({
      where: { id },
      include: { all: true },
    });
    res.json(singleStudent);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    const studentsToAdd = await Student.create(req.body);
    res.json(studentsToAdd);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete('/:campusId', async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const deletedStudent = await Student.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
