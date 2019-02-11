import React from 'react';
import { Route, Link } from 'react-router-dom';
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
          <Link to="/">Home</Link>
          <Link to="/campuses">Campus List</Link>
          <Link to="/students">Student List</Link>
        </main>
      </div>
    );
  }
}
