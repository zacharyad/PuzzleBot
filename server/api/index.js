'use strict';

const router = require('express').Router();
const { Campus, Student } = require('../db/index');
router.get('/campuses', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll({ include: { all: true } });
    res.json(allCampuses);
  } catch (error) {
    //Come back to add a stock error page
    console.log(error);
  }
});

router.get('/students', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({ include: { all: true } });
    res.json(allStudents);
  } catch (error) {
    //Come back to add a stock error page
    console.log(error);
  }
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;

// notes from startup
// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
