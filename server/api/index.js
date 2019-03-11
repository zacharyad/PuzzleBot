'use strict';
const router = require('express').Router();

router.use('/puzzles', require('./puzzles'));

router.use((req, res, next) => {
  const err = new Error('NO API Found!');
  err.status = 404;
  next(err);
});

module.exports = router;
