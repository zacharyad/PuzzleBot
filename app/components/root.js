import React from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SplashHero from './SplashHero';
const Root = () => {
  return (
    <div>
      <Header />
      <hr />
      <Route exact path="/" render={() => <SplashHero />} />
      <Route exact path="/students/" render={() => <StudentList />} />
      <Route exact path="/campuses/" render={() => <CampusList />} />
    </div>
  );
};
export default Root;
