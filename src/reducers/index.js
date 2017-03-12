import { combineReducers } from 'redux';
import * as constants from '../constants/';

let initialState = {
  data: [],
  text: ''
};

const App = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case constants.SEARCH_BAR_TEXT_UPDATED:
      return {
       ...state,
       text: action.text
      }
    default:
      return state;
  }
};



export default App;
