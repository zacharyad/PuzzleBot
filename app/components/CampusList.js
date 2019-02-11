import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../store';
import Campus from './Campus';

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
        <h1>Campus List</h1>
        <Link to={'/campus/add'}>Add Campus To List</Link>
        {this.props.campusList[1] ? (
          this.props.campusList.map((campus, i) => (
            <div key={this.props.campusList[i].id}>
              <Link to={`/campuses/${i}`}>
                <Campus campus={this.props.campusList[i]} />
              </Link>
            </div>
          ))
        ) : (
          <div>NOOOO</div>
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

// this.props.campusesList.map(campus => {
//   <Campus state={campus} />;
// })
