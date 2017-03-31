import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ArticleCard from '../components/ArticleCard';


class ArticlesList extends React.Component {
  // componentWillReceiveProps(nextProps, nextState) {
    // console.log(nextProps, nextState)
  // }
  render() {

    return (
      <div className="col-md-6 col-centered container">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
