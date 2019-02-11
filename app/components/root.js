import React from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SplashHero from './SplashHero';
const Root = props => {
  //const campusId = props.match.params;
  return (
    <div>
      <Header />
      <hr />
      <Route exact path="/" render={() => <SplashHero />} />
      <Route exact path="/campuses/" render={() => <CampusList />} />
      <Route
        exact
        path="/campuses/:id"
        render={() => <CampusList campusId={campusId} />}
      />
      <Route exact path="/students/" render={() => <StudentList />} />
    </div>
  );
};
export default Root;
