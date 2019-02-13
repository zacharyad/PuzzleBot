import React from 'react';
import { connect } from 'react-redux';
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
    const gpa = parseFloat(this.state.gpa);
    const imageUrl = this.state.lastName;

    const studentDataToSend = {
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
    };

    console.log('inside submitHandler, props ', this.props);
    this.props.studentAdd(studentDataToSend);
    //   //this will be the reducer fetch to add the camput form data to api
  }

  render() {
    console.log('from the render for nameChangeHandler ', this.state);
    return (
      <div>
        <h2>Add Student</h2>
        <div className="form-Wrapper">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">First Name: </label>
            <input
              onChange={this.onFNameChange}
              name="name"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
            />
            <br />
            <label htmlFor="name">Last Name: </label>
            <input
              onChange={this.onLNameChange}
              name="name"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
            />
            <br />
            <label htmlFor="gpa">GPA: </label>
            <input
              name="description"
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

export default connect(
  null,
  mapDispatchToProps
)(AddStudent);
