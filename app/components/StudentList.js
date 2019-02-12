import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../store';
import Student from './Student';

export class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStudentList();
  }
  render() {
    return (
      <div>
        <h1>Student List</h1>
        <Link to={'/students/add'}>Add Student To List</Link>
        {this.props.studentList[1] ? (
          this.props.studentList.map((student, i) => (
            <div key={student.id}>
              <Link to={`/students/${i}`}>
                <Student student={student} />
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
  studentList: state.studentList,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchStudentList: () => dispatch(fetchStudents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
