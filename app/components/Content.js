//Where all the routes will be dispayed
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashHero from './SplashHero';
import CampusList from './CampusList';
import StudentList from './StudentList';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/campuses" render={() => <CampusList />} />
          <Route path="/students" component={StudentList} />
          <Route exact path="/" component={SplashHero} />
        </Switch>
      </div>
    );
  }
}
