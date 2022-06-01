/* eslint-disable no-console */
// Actions
import {
  CHANGE_VALUE,
  CONNECT_USER,
  DISCONNECT_USER,
  ADD_USER_FAVORITE,
  REMOVE_USER_FAVORITE,
  SAVE_USER_FAVORITE,
  DELETE_USER_FAVORITE,
} from '@actions/auth';

// initial state
const initialState = {
  isConnected: null,
  email: '',
  password: '',
  token: null,
  expirationDate: null,
  user: {},
};

// reducer
const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CONNECT_USER:
      return {
        ...state,
        email: '',
        password: '',
        isConnected: true,
        token: action.token,
        expirationDate: action.expirationDate,
        user: action.user,
      };
    case DISCONNECT_USER:
      return {
        ...initialState,
        isConnected: false,
      };
    case ADD_USER_FAVORITE:
    case SAVE_USER_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          favoris: [...state.user.favoris, action.favoriteId],
        },
      };
    case REMOVE_USER_FAVORITE:
    case DELETE_USER_FAVORITE:
      return {
        ...state,
        user: {
          ...state.user,
          favoris: state.user.favoris.filter((favoriteId) => favoriteId !== action.favoriteId),
        },
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Auth;
