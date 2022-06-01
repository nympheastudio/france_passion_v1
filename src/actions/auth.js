// types
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const ADD_USER_FAVORITE = 'ADD_USER_FAVORITE';
export const REMOVE_USER_FAVORITE = 'REMOVE_USER_FAVORITE';
export const SAVE_USER_FAVORITE = 'SAVE_USER_FAVORITE';
export const DELETE_USER_FAVORITE = 'DELETE_USER_FAVORITE';
export const VALIDATE_LOCAL_AUTH = 'VALIDATE_LOCAL_AUTH';
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN';

// Creators
export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const connectUser = (token, user, expirationDate) => ({
  type: CONNECT_USER,
  token,
  user,
  expirationDate,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});

export const addUserFavorite = (favoriteId) => ({
  type: ADD_USER_FAVORITE,
  favoriteId,
});

export const removeUserFavorite = (favoriteId) => ({
  type: REMOVE_USER_FAVORITE,
  favoriteId,
});

export const saveUserFavorite = (favoriteId) => ({
  type: SAVE_USER_FAVORITE,
  favoriteId,
});

export const deleteUserFavorite = (favoriteId) => ({
  type: DELETE_USER_FAVORITE,
  favoriteId,
});

export const validateLocalAuth = () => ({
  type: VALIDATE_LOCAL_AUTH,
});

export const validateToken = (data, deviceId) => ({
  type: VALIDATE_TOKEN,
  data,
  deviceId,
});
