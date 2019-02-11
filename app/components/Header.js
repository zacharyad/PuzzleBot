import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campus List</Link>
            </li>
            <li>
              <Link to="/students">Student List</Link>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}
