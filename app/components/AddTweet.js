import React from 'react';
import { connect } from 'react-redux';
import { createTweet } from '../store';

export class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzle: '',
      answer: '',
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.state[event.target.name].length > 265) {
      console.log('too many');
      this.setState({ [event.target.name]: event.target.value, error: true });
    } else {
      this.setState({ [event.target.name]: event.target.value, error: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const puzzle = this.state.puzzle;
    const answer = this.state.answer;
    const submitTweet = {
      puzzle,
      answer,
    };

    this.props.sendTweet(submitTweet);
    this.props.history.push('/thank_you');
  }

  render() {
    return (
      <div>
        <h3>Remember:</h3>
        <ol>
          <li>Keep it clean, with no foul language.</li>
          <li>
            Keep the answer simple and uniform and using normal spacing and
            casing (upper/lowercase).
          </li>
          <li>Keep the puzzle under 280 character.</li>
        </ol>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            maxLength="280"
            name="puzzle"
            type="text"
            placeholder="This is the puzzle that will be tweeted."
            onChange={this.handleChange}
          />
          <input
            maxLength="280"
            name="answer"
            type="text"
            placeholder="This is the answer. Try to avoid extra characters"
            onChange={this.handleChange}
          />
          <button type="submit">Submit This Crytpic Tweet!</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    sendTweet: event => dispatch(createTweet(event)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
