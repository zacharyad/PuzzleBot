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
