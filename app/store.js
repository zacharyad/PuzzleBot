// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import axios from 'axios';
// import rootReducer from './reducers';
// import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       // `withExtraArgument` gives us access to axios in our async action creators!
//       // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//       thunkMiddleware.withExtraArgument({ axios }),
//       loggingMiddleware
//     )
//   )
// );
// export default store;

////////

////////

import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
//import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
///////////////////
// // campus reducer
///////////////////
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

///////////////////
// // campus reducer
///////////////////

//ACtion types

//action creators

//thunk creators

//STATE AND REDUCER
const initialState = {
  campusesList: [],
  studentList: [],
};
const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES_FROM_SERVER: {
      const newState = {
        ...state,
        campusesList: [...action.allCampuses],
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  campusesReducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware,
      loggingMiddleware
    )
  )
);
export default store;
