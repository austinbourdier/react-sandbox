require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import SearchBar from '../components/SearchBar';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <SearchBar/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
