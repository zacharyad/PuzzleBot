import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SplashHero from './SplashHero';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/campuses" component={CampusList} />
          <Route path="/campuses/add" component={AddCampus} />
          <Route path={`/campuses/:campusId`} component={SingleCampus} />

          <Route exact path="/students" component={StudentList} />
          <Route path="/students/add" component={AddStudent} />
          <Route path="/students/:studentId" component={SingleStudent} />

          <Route exact path="/" component={SplashHero} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(Root);
