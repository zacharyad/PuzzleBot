import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Campus from './Campus';

import { fetchCampuses } from '../store';

export class CampusList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampusList();
  }

  render() {
    console.log('props from campusList: ', this.props);
    return (
      <div>
        <Link to="/campuses/add">Add a new Campus</Link>
        <hr />
        <h1>Campus List</h1>
        {this.props.campusList[0] ? (
          this.props.campusList.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <Campus campus={campus} />
                <hr />
              </Link>
            </div>
          ))
        ) : (
          <div>There seems to be no Campuses Here</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  campusList: state.campusesList,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCampusList: () => dispatch(fetchCampuses()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusList);
