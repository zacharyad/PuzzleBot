import React from 'react';

export default class CampusList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>ALL THE CAMPUSES</h1>;
      </div>
    );
  }
}
