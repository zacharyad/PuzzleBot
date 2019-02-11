import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//ACTION TYPES
const GOT_ALL_CAMPUSES_FROM_SERVER = 'GOT_ALL_CAMPUSES_FROM_SERVER';
//ACTION CREATORS
const gotAllCampusesFromStore = allCampuses => {
  return {
    type: GOT_ALL_CAMPUSES_FROM_SERVER,
    allCampuses,
  };
};
//THUNK CREATORS
const fetchCampuses = () => {
  return dispatch => {
    try {
      const { data } = axios.get('/api/campuses');
      const action = gotAllCampusesFromStore(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
//STATE AND REDUCER
const initialState = {
  campuses: [],
};
const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES_FROM_SERVER: {
      return {
        ...state,
        campuses: [action.allCampuses],
      };
    }
    default: {
      return state;
    }
  }
};

export default campusesReducer;
