const router = require('express').Router();
const { Campus } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll({ include: { all: true } });
    res.json(allCampuses);
  } catch (error) {
    //Come back to add a stock error page
    console.log(error);
  }
});

module.exports = router;
