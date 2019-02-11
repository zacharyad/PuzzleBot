import React from 'react';

export default class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    this.setState({ students: studentDummyData });
  }
  render() {
    console.log(this.props);
    const state = this.state.students.length ? (
      this.state.students[0].firstName
    ) : (
      <div>Sorry there are no students Here, yet!</div>
    );
    return (
      <div>
        <h2>Student List</h2>
        <hr />
        <div>
          <p>will map over the state form reducer</p>
        </div>
      </div>
    );
  }
}

const studentDummyData = [
  {
    firstName: 'Zach',
    lastName: 'Droge',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR-o8HOi-uC719mwT9VKl8czeWTGMtcvgYZPsedTaz-IPRa7xlQ',
  },
  {
    firstName: 'Bill',
    lastName: 'Smith',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR-o8HOi-uC719mwT9VKl8czeWTGMtcvgYZPsedTaz-IPRa7xlQ',
  },
  {
    firstName: 'Kyle',
    lastName: 'Droge',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR-o8HOi-uC719mwT9VKl8czeWTGMtcvgYZPsedTaz-IPRa7xlQ',
  },
];
