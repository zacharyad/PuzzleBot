const router = require('express').Router();
const { Campus } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll({ include: { all: true } });
    res.json(allCampuses);
  } catch (error) {
    //Come back to add a stock error page
    console.log(error);
    nexrt(error);
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

module.exports = router;
