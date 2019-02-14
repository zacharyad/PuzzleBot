import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchSingleStudent } from '../store';

export class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
    this.findCampus = this.findCampus.bind(this);
  }
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.studentId);
  }

  findCampus(id) {
    if (id)
      return `Student's Campus: ${this.props.studentState[0].campus.name}`;
    else return 'Sorry this student doesnt have a campus yet.';
  }

  render() {
    const student = this.props.studentState[0];
    return (
      <div>
        {this.props.studentState[0] ? (
          <div>
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <h5>{`Email: ${student.email}`}</h5>
            <h5>{`GPA: ${student.gpa}`}</h5>
            <img src={student.imageUrl} />
            {student.campus ? (
              <Link to={`/campuses/${student.campus.id}`}>{`Student's Campus: ${
                student.campus.name
              }`}</Link>
            ) : (
              <Link to={`/students`}>No Campus, Yet!</Link>
            )}
          </div>
        ) : (
          <div>Sorry no student</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studentState: state.singleStudent,
});

const mapDispatchToProps = dispatch => ({
  fetchStudent: id => dispatch(fetchSingleStudent(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleStudent)
);

{
  /* <Link to={`/campuses/${student.campus.id}`}>
              <h4>{this.findCampus(student.campusId)}</h4>
            </Link> */
}
