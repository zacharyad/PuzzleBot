import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {} from '../store';

export class DeleteForm extends React.Component {
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
    if (this.state[event.target.name].length > 279) {
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
    this.props.sendTweet(studentDataToSend);
    this.props.history.push('/thankyou');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            maxLength="280"
            name="puzzle"
            type="text"
            placeholder="Hash Code"
            onChange={this.handleChange}
          />
          <input
            maxLength="280"
            name="answer"
            type="text"
            placeholder="UserName"
            onChange={this.handleChange}
          />
          <button type="submit">Delete My Tweet</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteForm);
