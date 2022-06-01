// Actions
import { LOAD_LOCAL_REVIEWS, SET_REVIEWS } from '@actions/review';
import { DISCONNECT_USER } from '@actions/auth';

// initial state
const initialState = {
  userReviews: [],
  publicReviews: [],
};

// reducer
const Review = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_LOCAL_REVIEWS:
      return {
        ...state,
      };
    case SET_REVIEWS:
      return {
        ...state,
        userReviews: action.reviews.avis_adherent,
        publicReviews: action.reviews.avis_public,
      };
    case DISCONNECT_USER:
      return {
        ...initialState,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Review;
