import * as constants from '../constants/';

export function searchBarTextUpdated(text) {
  return {
    type: constants.SEARCH_BAR_TEXT_UPDATED,
    text: text
  };
}
