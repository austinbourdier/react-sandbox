import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SearchBar extends React.Component {
  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps, nextState)
  }
  render() {
    console.log(this.props, this.state)
    return (
      <div>
        <input type='text' onChange={this.props.onChange} />
      </div>
    );
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      console.log(event.target.value)
      dispatch(actions.searchBarTextUpdated(event.target.value));
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);
