const router = require('express').Router();
const { Campus } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll({ include: { all: true } });
    res.json(allCampuses);
  } catch (error) {
    //Come back to add a stock error page
    console.log(error);
    next(error);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const id = req.params.campusId;
    console.log('*******************', id);
    const singleCampuses = await Campus.findAll({
      where: { id },
      include: { all: true },
    });
    res.json(singleCampuses);
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

//PostMan dummy post data object

// {
//   "name": "bagain",
//   "imageUrl": "https://picsum.photos/458/354?random&time=1549929620020",
//   "address": "1111 one road",
//   "description":"this is a great new school that was created"
//   }
