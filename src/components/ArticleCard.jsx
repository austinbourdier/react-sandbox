import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class Article extends React.Component {
  // componentWillReceiveProps(nextProps, nextState) {
    // console.log(nextProps, nextState)
  // }
  render() {

    return (
      <div className="">
        <div className="card">
          <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">TITLE</h4>
            <p className="card-text">TEXT</p>
            <a href='https://facebook.com' target="_blank" className="btn btn-primary">Open Spotify Page</a>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Article);
