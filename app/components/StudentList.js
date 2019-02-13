import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, removeStudentFromServer } from '../store';
import Student from './Student';
import AddStudent from './AddStudent';
export class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.studentRemoveHandler = this.studentRemoveHandler.bind(this);
  }

  studentRemoveHandler(idForStu) {
    console.log('Got to studentRemoveHandler');
    this.props.studentRemove(idForStu);
    this.props.fetchStudentList();
  }

  componentDidMount() {
    this.props.fetchStudentList();
  }
  render() {
    return (
      <div>
        <Link to={'/students/add'}>Add Student To List</Link>
        <hr />
        <h1>Student List</h1>
        {this.props.studentList[0] ? (
          this.props.studentList.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <Student student={student} />
              </Link>
              <button
                onClick={() => this.studentRemoveHandler(student.id)}
                type="button"
              >
                <strong>X</strong>
              </button>

              <hr />
            </div>
          ))
        ) : (
          <div>No Students Seem to be enrolled, sorry.</div>
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
    studentRemove: id => dispatch(removeStudentFromServer(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
