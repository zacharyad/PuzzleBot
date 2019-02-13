import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Campus from './Campus';
import { fetchCampuses, removeCampusFromServer } from '../store';

export class CampusList extends React.Component {
  constructor(props) {
    super(props);
    this.campusRemoveHandler = this.campusRemoveHandler.bind(this);
  }

  campusRemoveHandler(id) {
    this.props.campusRemove(id);
    this.props.fetchCampusList();
  }

  componentDidMount() {
    this.props.fetchCampusList();
  }

  render() {
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
              </Link>
              <button
                onClick={() => this.campusRemoveHandler(campus.id)}
                type="button"
              >
                <strong>X</strong>
              </button>
              <hr />
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
    campusRemove: id => dispatch(removeCampusFromServer(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusList);
