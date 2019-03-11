import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Home = props => {
  return (
    <div className="centered">
      <h2>
        Make puzzles, answer puzzles, share puzzles by retweeting them from{' '}
        <a href="https://twitter.com/ZacharyAdams"> @PuzzleBot </a>
      </h2>
      <ol>
        <li>
          To make a puzzle that shows up on PuzzleBot's twitter for all to
          solve, just click on the "Make Puzzle" link above and fill out the
          puzzle field (what will be posted to twitter) and also the answer
          field (what will be guessed by anyone!).
        </li>
        <li>
          To make try and answer a puzzle that shows up on PuzzleBot's twitter,
          just click on the "Make Guess" link above. But remember to copy the
          code after the tweets "#: " so you can paste it on the Hash text
          field.
        </li>
        <li>
          <strong>Puzzle Answer Hint:</strong> Do worry about uppercase,
          lowercase, and even spaces when guessing an answer (and creating one).
          You also want to make it easy to guess, unlike... the "answer" being
          "An$w3R", because that would be "bullsh*t". OH, also DON'T use foul
          language cuz it will just turn in ******* stars in the tweet.
        </li>
      </ol>
    </div>
  );
};

export default Home;
