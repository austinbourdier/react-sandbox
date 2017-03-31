import * as constants from '../constants/';
import ReduxThunk from 'redux-thunk';
import $ from "jquery";

export function artistsFetched(artists) {
  console.log(artists)
  return {
    type: constants.ARTISTS_FETCHED,
    artists: artists.items
  };
}

export function retrieveArtists (text) {
  console.log(text)
  return (dispatch, getState) => {
    if(text.length) {
      return $.ajax({
        url: constants.SPOTIFY_ARTIST_URL + text,
        success: function(res) {
          dispatch(artistsFetched(res.artists));
        },
        error: function(err) {
          console.log(err)
        }
      });
    } else {
      dispatch(artistsFetched([]));
    }
  }
}
