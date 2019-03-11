import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <nav className="header">
        <ul>
          <li>
            <Link to="/">
              <img width={50} src="./betterPuzzlePLogo.png" />
            </Link>
          </li>
          <li>
            <Link to="/make_tweet">Make Puzzle</Link>
          </li>
          <li>
            <Link to="/get_answer">Make Guess</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>PuzzleBot</h1>
      </main>
    </div>
  );
};

export default Header;
