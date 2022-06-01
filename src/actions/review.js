// Types
export const LOAD_LOCAL_REVIEWS = 'LOAD_LOCAL_REVIEWS';
export const LOAD_REVIEWS = 'LOAD_REVIEWS';
export const SAVE_REVIEWS = 'SAVE_REVIEWS';
export const SET_REVIEWS = 'SET_REVIEWS';

// Creators
export const loadLocalReviews = () => ({
  type: LOAD_LOCAL_REVIEWS,
});

export const loadReviews = () => ({
  type: LOAD_REVIEWS,
});

export const saveReviews = (reviews) => ({
  type: SAVE_REVIEWS,
  reviews,
});

export const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  reviews,
});
