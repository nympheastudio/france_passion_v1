// Types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SAVE_RESULTS = 'SAVE_RESULTS';
export const SELECT_RESULT = 'SELECT_RESULT';
export const RESET_SEARCH_BAR = 'RESET_SEARCH_BAR';

// Creators
export const changeInputValue = (text) => ({
  type: CHANGE_INPUT_VALUE,
  text,
});

export const saveResults = (results) => ({
  type: SAVE_RESULTS,
  results,
});

export const selectResult = (result) => ({
  type: SELECT_RESULT,
  result,
});

export const resetSearchBar = () => ({
  type: RESET_SEARCH_BAR,
});
