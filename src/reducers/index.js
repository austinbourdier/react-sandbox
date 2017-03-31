import { combineReducers } from 'redux';
import * as constants from '../constants/';

let initialState = {
  artists: []
};

const App = (state = initialState, action) => {
  switch (action.type) {
    case constants.ARTISTS_FETCHED:
      return {
       ...state,
       artists: action.artists
      }
    default:
      return state;
  }
};



export default App;
