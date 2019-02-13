const router = require('express').Router();
const { Campus } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll({ include: { all: true } });
    res.json(allCampuses);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const singleCampuses = await Campus.findAll({
      where: { id },
      include: { all: true },
    });
    res.json(singleCampuses);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    const campusToAdd = await Campus.create(req.body);
    res.json(campusToAdd);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete('/:campusId', async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const deletedCampus = await Campus.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
