import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../store';

export class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.studentId);
  }

  findCampus(id) {
    console.log(
      'we got to the find campus',
      this.props.studentState[0].campus.name
    );
    return this.props.studentState[0].campus.name;
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
