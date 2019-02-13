import React from 'react';

export default class AddStudent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Event from the submit:', event);
    // const name = event.target.value.name;

    // const imageUrl = event.target.value.imageUrl;
    // const address = event.target.value.address;

    // const dataToSend = {
    //   name,
    //   description,
    //   imageUrl,
    //   address,
    // };

    // console.log(dataToSend);
    //this will be the reducer fetch to add the camput form data to api
  }

  render() {
    return (
      <div>
        <h2>Add Student</h2>
        <div className="form-Wrapper">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" placeholder="Name of Campus..." />
            <br />
            <label htmlFor="description">Description: </label>
            <input
              name="description"
              type="text"
              placeholder="Describe Campus..."
            />
            <br />
            <label htmlFor="imageUrl">Image Url: </label>
            <input
              name="imageUrl"
              type="text"
              placeholder="Link to image for campus..."
            />
            <br />
            <label htmlFor="address">Address: </label>
            <input name="address" type="text" placeholder="Campus Address" />
            <br />
            <button type="submit">Submit New Student</button>
          </form>
        </div>
      </div>
    );
  }
}
