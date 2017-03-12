import 'core-js/fn/object/assign';
import MainComponent from './components/Main';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainComponent}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

