// Actions
import {
  CHANGE_INPUT_VALUE,
  SAVE_RESULTS,
  SELECT_RESULT,
  RESET_SEARCH_BAR,
} from '@actions/search';

// initial state
const initialState = {
  query: '',
  results: {},
};

// reducer
const Base = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        query: action.text,
      };
    case SAVE_RESULTS:
     // console.log('reduce action.results :' + JSON.stringify(action.results));
      return {
        ...state,
        results: action.results,
      };
    case SELECT_RESULT:
      return {
        ...state,
        query: action.result,
        results: {},
      };
    case RESET_SEARCH_BAR:
      return {
        ...initialState,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Base;
