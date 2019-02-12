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

//PostMan dummy post data object

// {
//   "name": "bagain",
//   "imageUrl": "https://uc175bb0aaf3c3410fab2890acd8.dl.dropboxusercontent.com/cd/0/inline/AbPnboZ_hZja_3zrSt7lF3mTuEBESFKH6LQmciAfmwxtxqnDy-3K_t0zzXRbE8eeETgW2Dqjfo5guF4BxksmymMGxDWjEnPk31a8D01ED2dW6w/file#",
//   "address": "1111 one road",
//   "description":"this is a great new school that was created"
//   }
