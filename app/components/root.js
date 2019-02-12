import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SplashHero from './SplashHero';
import Campus from './Campus';
import Student from './Student';
const Root = props => {
  const campusId = 1;
  const studentId = 1;
  console.log(props.match);

  return (
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" render={() => <SplashHero />} />
        <Route exact path="/campuses/" render={() => <CampusList />} />
        <Route
          path={`/campuses/:campusId`}
          render={() => <Campus campusId={campusId} />}
        />
        <Route exact path="/students/" render={() => <StudentList />} />
        <Route path="/students/:studntId" component={Student} />
      </Switch>
    </div>
  );
};
export default Root;

{
}
