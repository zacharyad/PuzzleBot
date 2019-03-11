import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ThankYou = props => {
  return (
    <div>
      <h1>Thank You for Submitting!</h1>
      <p>{`Your guessing code is: ${props.code}`}</p>
      <p>
        Go to the<a href="https://twitter.com/ZacharyAdams"> @PuzzleBot </a>to
        see your puzzling tweet!
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  code: state.hashCode,
});

export default connect(mapStateToProps)(ThankYou);
