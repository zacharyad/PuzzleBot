import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../store';
import Student from './Student';
import AddStudent from './AddStudent';
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
        <Link to={'/students/add'} component={AddStudent}>
          Add Student To List
        </Link>
        <hr />
        <h1>Student List</h1>
        {this.props.studentList[0] ? (
          this.props.studentList.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <Student student={student} />
                <hr />
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
