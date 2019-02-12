import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../store';
import Campus from './Campus';
import AddCampus from './AddCampus';

export class CampusList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampusList();
  }
  render() {
    return (
      <div>
        <AddCampus />
        <h1>Campus List</h1>
        {this.props.campusList[0] ? (
          this.props.campusList.map((campus, i) => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <Campus campus={campus} />
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
