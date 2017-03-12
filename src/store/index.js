import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import App from '../reducers';

const store = createStore(
  combineReducers({
    App,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
)

export default store;
