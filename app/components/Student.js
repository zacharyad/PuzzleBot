import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../store';
export class Student extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSingleStudent();
  }
  render() {
    console.log('******props.students: ', this.props.student);
    const student = this.props.student;
    return (
      <div>
        <h3>{`${student.firstName} ${student.lastName}`}</h3>
        <img src={student.imageUrl} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  studentState: state.singleStudent,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleStudent: id => dispatch(fetchSingleStudent(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
