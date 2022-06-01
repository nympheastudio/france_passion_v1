// Actions
import {
  LOAD_LOCAL_HOSTS,
  SET_HOSTS,
  OPEN_CAROUSEL,
  CLOSE_CAROUSEL,
} from '@actions/host';
import { DISCONNECT_USER } from '@actions/auth';

// initial state
const initialState = {
  isLoading: false,
  hosts: [],
  carousel: {
    isActive: false,
    activeIndex: null,
  },
};

// reducer
const Host = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_LOCAL_HOSTS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_HOSTS:
      return {
        ...state,
        isLoading: false,
        hosts: [
      //    ...state.hosts,
          ...action.hosts,
        ],
      };
    case DISCONNECT_USER:
      return {
        ...initialState,
      };
    case OPEN_CAROUSEL:
      return {
        ...state,
        carousel: {
          ...state.carousel,
          isActive: true,
          activeIndex: action.index,
        },
      };
    case CLOSE_CAROUSEL:
      return {
        ...state,
        carousel: {
          ...initialState.carousel,
        },
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Host;
