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
const GOT_A_SINGLE_CAMPUS = 'GOT_A_SINGLE_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';

//ACTION CREATORS
const gotAllCampusesFromStore = allCampuses => {
  return {
    type: GOT_ALL_CAMPUSES_FROM_SERVER,
    allCampuses,
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

export const fetchSingleCampus = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      const action = gotASingleCampus(data);
      dispatch(action);
    } catch (error) {
      console.log('error from thunk: ', error);
    }
  };
};

export const addCampusThunk = campusObj => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`/api/campuses/add`, campusObj);
      const action = addCampusToServer(data);
      dispatch(action);
    } catch (error) {
      console.log('error from thunk: ', error);
    }
  };
};

///////////////////
// // STUDENTS reducer
///////////////////

//Action types
const GOT_ALL_STUDENTS_FROM_SERVER = 'GOT_ALL_STUDENTS_FROM_SERVER';
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
//action creators
const gotStudentsFromServer = studentsArrOfObjs => {
  return {
    type: GOT_ALL_STUDENTS_FROM_SERVER,
    studentsArrOfObjs,
  };
};

const gotASingleStudent = student => {
  return {
    type: GOT_SINGLE_STUDENT,
    student,
  };
};

const addStudent = newStuObj => {
  return {
    type: ADD_STUDENT,
    newStuObj,
  };
};
//thunk creators
export const fetchStudents = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/students');
      const action = gotStudentsFromServer(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleStudent = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      const action = gotASingleStudent(data);
      dispatch(action);
    } catch (error) {
      console.log('error from thunk: ', error);
    }
  };
};

export const addStudentToServer = stuObj => {
  return async dispatch => {
    try {
      console.log('in thunk, stuObj: ', stuObj);
      const { data } = await axios.post(`/api/students/add`, stuObj);
      const action = addStudent(data);
      dispatch(action);
      return true;
    } catch (error) {
      console.log('error from thunk: ', error);
      return false;
    }
  };
};

//STATE AND REDUCER
const initialState = {
  campusesList: [],
  singleCampus: {},
  studentList: [],
  singleStudent: {},
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
    case GOT_ALL_STUDENTS_FROM_SERVER: {
      const newState = {
        ...state,
        studentList: [...action.studentsArrOfObjs],
      };
      return newState;
    }
    case GOT_A_SINGLE_CAMPUS: {
      const newState = {
        ...state,
        singleCampus: action.campus,
      };
      return newState;
    }
    case ADD_CAMPUS: {
      const newState = {
        ...state,
        campusesList: [...state.campusesList, action.campusObj],
      };
      return newState;
    }
    case GOT_SINGLE_STUDENT: {
      const newState = {
        ...state,
        singleStudent: action.student,
      };
      return newState;
    }
    case ADD_STUDENT: {
      const newState = {
        ...state,
        studentList: [...state.studentList, action.newStuObj],
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
