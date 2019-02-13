import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addStudentToServer } from '../store';

export class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      imageUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFNameChange = this.onFNameChange.bind(this);
    this.onLNameChange = this.onLNameChange.bind(this);
    this.onGpaChange = this.onGpaChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onFNameChange(event) {
    this.setState({ firstName: event.target.value });
  }
  onLNameChange(event) {
    this.setState({ lastName: event.target.value });
  }
  onGpaChange(event) {
    this.setState({ gpa: event.target.value });
  }
  onImageChange(event) {
    this.setState({ imageUrl: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const gpa = +this.state.gpa;
    const imageUrl = this.state.imageUrl;

    const studentDataToSend = {
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
    };

    this.props.studentAdd(studentDataToSend);
    this.props.history.push('/students');
  }

  render() {
    return (
      <div className={`wrapper`}>
        <h2>Add Student</h2>
        <hr />
        <div className="form-Wrapper">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fName">First Name: </label>
            <input
              onChange={this.onFNameChange}
              name="fName"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
            />
            <br />
            <label htmlFor="lName">Last Name: </label>
            <input
              onChange={this.onLNameChange}
              name="lName"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
            />
            <br />
            <label htmlFor="gpa">GPA: </label>
            <input
              name="gpa"
              onChange={this.onGpaChange}
              type="number"
              min="0.0"
              max="4.0"
              value={this.state.gpa}
              step="0.1"
              placeholder="Student GPA"
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              onChange={this.onEmailChange}
              type="text"
              placeholder="Student Email"
              value={this.state.email}
            />
            <br />
            <label htmlFor="imageUrl">Image Url: </label>
            <input
              name="imageUrl"
              onChange={this.onImageChange}
              type="text"
              placeholder="Link to Avatar Image"
              value={this.state.imageUrl}
            />
            <br />
            <button type="submit">Submit New Student</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  studentAdd: stuObj => dispatch(addStudentToServer(stuObj)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddStudent)
);
