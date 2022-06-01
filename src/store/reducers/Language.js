// Actions
import { SAVE_LANGUAGE, CHANGE_LANGUAGE } from '@actions/language';

// initial state
const initialState = {
  langue: 'fr',
};

// reducer
const Language = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LANGUAGE:
    case CHANGE_LANGUAGE:
      return {
        ...state,
        langue: action.language,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Language;
