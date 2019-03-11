import React from 'react';
import { connect } from 'react-redux';
import { isCorrectGuess } from '../store';

export class GetAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      hashCode: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const hash = this.state.hashCode;
    const ans = this.state.answer;
    const submitGuess = {
      hashCode: hash,
      answer: ans,
    };
    this.props.correctG(submitGuess);
  }

  render() {
    return (
      <div>
        <div className="centered">
          {this.props.correctAnswers.length ? (
            this.props.correctAnswers.map(elem => {
              return `   |   Correct! "${elem.answer}" is the answer to: "${
                elem.puzzle
              }".     `;
            })
          ) : (
            <div>Correct Answers will display here.</div>
          )}

          <div>{`You have guessed incorrectly ${
            this.props.wrongGuesses.length
          } this round.`}</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            maxLength="12"
            name="hashCode"
            type="text"
            placeholder="12 digit puzzle Code."
            onChange={this.handleChange}
          />
          <input
            maxLength="280"
            name="answer"
            type="text"
            placeholder="Best Guess."
            onChange={this.handleChange}
          />
          <button type="submit">Check My Guess</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.hashCode,
    correctAnswers: state.correctAnswers,
    guessCheck: state.guessCheck,
    wrongGuesses: state.wrongAnswers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    correctG: guess => dispatch(isCorrectGuess(guess)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAnswer);
