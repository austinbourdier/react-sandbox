import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class SearchBar extends React.Component {
  // componentWillReceiveProps(nextProps, nextState) {
    // console.log(nextProps, nextState)
  // }
  render() {

    return (
      <div className="md-form">
        <input placeholder="Placeholder" type="text" id="form5" className="form-control" onChange={this.props.onChange}/>
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
    onChange: (event) => {
      dispatch(actions.retrieveArtists(event.target.value));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
