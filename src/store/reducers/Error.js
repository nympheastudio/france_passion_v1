/* eslint-disable no-console */
// Actions
import { DISMISS_ALERT, GENERATE_ERROR } from '@actions/error';

// initial state
const initialState = {};

// reducer
const Error = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISMISS_ALERT:
      console.log('ErrorReducer: DismissAlert');
      return {
        ...initialState,
      };
    case GENERATE_ERROR: {
      console.log('ErrorReducer: GenerateError');
      return {
        ...state,
        errorCode: action.errorCode,
        errorMessage: action.errorMessage,
      };
    }
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Error;
