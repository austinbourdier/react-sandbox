require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {connect} from 'react-redux';

import ArticlesList from '../components/ArticlesList';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';

class AppComponent extends React.Component {
  render() {
    return (
      <div id="main-component">
        <ArticlesList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

