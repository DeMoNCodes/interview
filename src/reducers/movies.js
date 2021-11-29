import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  ASYNC_START,
  LOAD_MOVIES,
  SEARCH_MOVIES,
  NOT_SEARCH_MOVIES
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movie:action.movies,
        header : action.movies ? action.movies.page.title : state.header
      };
    case NOT_SEARCH_MOVIES:
      return {
        ...state,
        search:false
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        search:true
      }
    
    default:
      return state;
  }
};
