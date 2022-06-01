// Types
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER';
export const TOGGLE_CRITERIA_FILTER = 'TOGGLE_CRITERIA_FILTER';
export const TOGGLE_LANGUAGE_FILTER = 'TOGGLE_LANGUAGE_FILTER';
export const TOGGLE_KEYWORD_FILTER = 'TOGGLE_KEYWORD_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';

// Creators
export const toggleCategoryFilter = (filterId) => ({
  type: TOGGLE_CATEGORY_FILTER,
  filterId,
});

export const toggleKeywordFilter = (filterId) => ({
  type: TOGGLE_KEYWORD_FILTER,
  filterId,
});

export const toggleCriteriaFilter = (filterId) => ({
  type: TOGGLE_CRITERIA_FILTER,
  filterId,
});

export const toggleLanguageFilter = (filterId) => ({
  type: TOGGLE_LANGUAGE_FILTER,
  filterId,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});
