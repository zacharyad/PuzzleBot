import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

    this.props.campusAdd(campusToSendToServer);
    this.props.history.push('/campuses');
  }

  render() {
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
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="Name of Campus..."
            />
            <br />
            <h3>Description</h3>
            <label htmlFor="description" />
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              cols="50"
              rows="20"
              onChange={this.handleDescriptionChange}
              placeholder="Describe Campus..."
            />
            <br />
            <label htmlFor="imageUrl">Image Url: </label>
            <input
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleImageChange}
              placeholder="Link to image for campus..."
            />
            <br />
            <label htmlFor="address">Address: </label>
            <input
              required
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleAddressChange}
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

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddCampus)
);
