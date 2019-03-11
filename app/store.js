import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

///////////////////
// // campus reducer
///////////////////
//ACTION TYPES
const TWEET_CREATED = 'GTWEET_CREATED';
const CORRECT_GUESS = 'CORRECT_GUESS';
const WRONG_GUESS = 'WRONG_GUESS';

const GOT_A_SINGLE_CAMPUS = 'GOT_A_SINGLE_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
//ACTION CREATORS
const createdTweet = hashCode => {
  return {
    type: TWEET_CREATED,
    hashCode,
  };
};
const gotCorrectAnswer = puzzle => {
  return {
    type: CORRECT_GUESS,
    puzzle,
  };
};

const gotWrongAnswer = guess => {
  return {
    type: WRONG_GUESS,
    guess,
  };
};

const gotASingleCampus = campus => {
  return {
    type: GOT_A_SINGLE_CAMPUS,
    campus,
  };
};

const addCampusToServer = campusObj => {
  return {
    type: ADD_CAMPUS,
    campusObj,
  };
};

const removeCampus = () => {
  return {
    type: REMOVE_CAMPUS,
  };
};

//THUNK CREATORS
export const fetchCampuses = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/campuses');
      const action = gotAllCampusesFromServer(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTweet = tweet => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/puzzles`, tweet);
      const action = createdTweet(data.hashCode);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const isCorrectGuess = guess => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `/api/puzzles/${guess.hashCode}_${guess.answer}`
      );
      const action = gotCorrectAnswer(data);
      dispatch(action);
      //making the tweet
    } catch (error) {
      console.log(error);
      const wrongAction = gotWrongAnswer({
        answer: `${guess.answer} is the wrong answer!`,
      });
      dispatch(wrongAction);
    }
  };
};

export const removeCampusFromServer = campusId => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/campuses/${campusId}`);
      const action = removeCampus(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

//STATE AND REDUCER
const initialState = {
  hashCode: '',
  correctAnswers: [],
  guessCheck: [],
  wrongAnswers: [],
};
// eslint-disable-next-line complexity
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_CREATED: {
      const newState = {
        ...state,
        hashCode: action.hashCode,
      };
      return newState;
    }
    case CORRECT_GUESS: {
      const newState = {
        ...state,
        correctAnswers: [
          ...state.correctAnswers,
          {
            puzzle: action.puzzle.puzzle,
            answer: action.puzzle.answer,
            hashCode: action.puzzle.hashCode,
          },
        ],
        guessCheck: [...state.guessCheck, action.puzzle.hashCode],
      };
      return newState;
    }
    case WRONG_GUESS: {
      return {
        ...state,
        wrongAnswers: [...state.wrongAnswers, action.guess],
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);
export default store;
