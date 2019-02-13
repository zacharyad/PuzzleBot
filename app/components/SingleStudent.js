import React from 'react';
import { connect } from 'react-redux';
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
    if (id) return this.props.studentState[0].campus.name;
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
            <h4>{this.findCampus(student.campusId)}</h4>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
