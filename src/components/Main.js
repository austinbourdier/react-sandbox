require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {connect} from 'react-redux';

import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';

class AppComponent extends React.Component {
  render() {
    const artistsTempArray = this.props.App.artists.slice();
    const artistsChunksArray = [];
    while(artistsTempArray.length > 0) {
      const chunk = [];
      const chunkLimit = artistsTempArray.length < 3 ? artistsTempArray.length : 3;
      for(var i = 0; i < chunkLimit; i++) {
        chunk.push(artistsTempArray.shift());
      }
      artistsChunksArray.push(chunk);
    }
    return (
      <div id="main-component">
        <SearchBar/>
        {artistsChunksArray.map((chunk) => {

          const cardOne = <div className="col-sm-4"><ArtistCard artist={chunk[0]}></ArtistCard></div>
          const cardTwo = chunk[1] ? <div className="col-sm-4"><ArtistCard artist={chunk[1]}></ArtistCard></div> : undefined;
          const cardThree = chunk[2] ? <div className="col-sm-4"><ArtistCard artist={chunk[2]}></ArtistCard></div> : undefined;

          return <div className="row" key={chunk[0].id}>{cardOne}{cardTwo}{cardThree}</div>

        })}
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

