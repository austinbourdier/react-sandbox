import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ArtistCard extends React.Component {
  // componentWillReceiveProps(nextProps, nextState) {
    // console.log(nextProps, nextState)
  // }
  render() {
    const artist = this.props.artist;
    var artistImage = artist.images[0] ? <img className="img-fluid" src={artist.images[0].url} alt={artist.name}/> : undefined;
    return (
      <div className="card">
        {artistImage}
        <div className="card-block">
          <h4 className="card-title">{artist.name}</h4>
          <p className="card-text">Followers: {artist.followers.total}
            <br/>Genres: {artist.genres.length ? artist.genres.map((genre, index) => {
              const comma = index === artist.genres.length - 1 ? '.' : ', ';
              return genre + comma;
            }) : 'N/A'}
          </p>
          <a href={artist.external_urls.spotify} target="_blank" className="btn btn-primary">Open Spotify Page</a>
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
    onChange: (event) => {
      dispatch(actions.retrieveArtists(event.target.value));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistCard);
