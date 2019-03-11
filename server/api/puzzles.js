const router = require('express').Router();
const { Puzzle } = require('../db/index');
const createHash = require('hash-generator');
const Twit = require('twit');
const configInfo = require('../../config');
const Filter = require('bad-words');
const filter = new Filter();

var T = new Twit(configInfo);

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params.id);
    const lookUp = req.params.id.split('_');
    const hashCode = lookUp[0];
    const answer = lookUp[1];
    console.log(hashCode, answer);
    const puzzleBack = await Puzzle.findOne({ where: { hashCode, answer } });
    if (puzzleBack.puzzle.length) res.send(puzzleBack);
    else res.json({ message: 'Sorry Not Correct.' });
  } catch (error) {
    console.log(error);

    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const hash = createHash(12);
    if (req.body.puzzle.length) {
      const puzzle = filter.clean(req.body.puzzle);
      T.post('statuses/update', { status: `#: ${hash} ${puzzle}` });
      const createdPuzzle = await Puzzle.create({
        ...req.body,
        hashCode: hash,
      });
      res.json(createdPuzzle);
    } else {
      res
        .status(400)
        .send('Sorry you need to supply something for the people to look at.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
