import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SplashHero from './SplashHero';
import Student from './Student';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log('inside the root: ', this.props.match.params);
    return (
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={SplashHero} />
          <Route exact path="/campuses" component={CampusList} />
          <Route exact path="/campuses/add" component={AddCampus} />
          <Route path={`/campuses/:campusId`} component={SingleCampus} />

          <Route exact path="/students/" component={StudentList} />

          <Route path="/students/:studentId" component={Student} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(Root);
