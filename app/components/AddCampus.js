import React from 'react';
import { connect } from 'react-redux';
import { addCampusThunk } from '../store';

export class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      imageUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }
  handleImageChange(event) {
    this.setState({ imageUrl: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const imageUrl = this.state.imageUrl;
    const address = this.state.address;
    const description = this.state.description;

    const campusToSendToServer = {
      name,
      description,
      imageUrl,
      address,
    };

    console.log('inside the campus submithandler: ', campusToSendToServer);
    this.props.campusAdd(campusToSendToServer);
    //this will be the reducer fetch to add the camput form data to api
  }

  render() {
    console.log(this.state);
    return (
      <div className={`wrapper`}>
        <h2>Add Campus Page</h2>
        <hr />
        <div className="form-Wrapper">
          <form onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <label htmlFor="name" />
            <input
              required
              onChange={this.handleNameChange}
              value={this.state.name}
              name="name"
              type="text"
              placeholder="Name of Campus..."
            />
            <br />
            <h3>Description</h3>
            <label htmlFor="description" />
            <textarea
              rows="20"
              cols="50"
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              placeholder="Describe Campus..."
            />
            <br />
            <label htmlFor="imageUrl">Image Url: </label>
            <input
              value={this.state.imageUrl}
              onChange={this.handleImageChange}
              name="imageUrl"
              type="text"
              placeholder="Link to image for campus..."
            />
            <br />
            <label htmlFor="address">Address: </label>
            <input
              required
              onChange={this.handleAddressChange}
              value={this.state.address}
              name="address"
              type="text"
              placeholder="Campus Address"
            />
            <br />
            <button type="submit">Submit New Campus</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  campusAdd: campusObj => dispatch(addCampusThunk(campusObj)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddCampus);
