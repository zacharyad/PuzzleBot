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
export const fetchCampuses = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/campuses');
      const action = gotAllCampusesFromStore(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
//STATE AND REDUCER
const initialState = {
  campusesList: [],
};
const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES_FROM_SERVER: {
      return {
        ...state,
        campusesList: [...state.campusesList, action.allCampuses],
      };
    }
    default: {
      return state;
    }
  }
};

export default campusesReducer;
