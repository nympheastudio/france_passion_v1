// Types
export const SAVE_USER_LOCATION = 'SAVE_USER_LOCATION';
export const SAVE_CURRENT_MARKERS = 'SAVE_CURRENT_MARKERS';
export const SET_LOCATION = 'SET_LOCATION';
export const RESET_LOCATION = 'RESET_LOCATION';
export const SET_REGION = 'SET_REGION';
export const SET_MARKER_SELECTED = 'SET_MARKER_SELECTED';

// Creators
export const saveUserLocation = (userLocation) => ({
  type: SAVE_USER_LOCATION,
  userLocation,
});

export const saveCurrentMarkers = (markers) => ({
  type: SAVE_CURRENT_MARKERS,
  markers,
});

export const setLocation = (latitude, longitude) => ({
  type: SET_LOCATION,
  latitude,
  longitude,
});

export const resetLocation = () => ({
  type: RESET_LOCATION,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  region,
});

export const setMarkerSelected = (marker) => ({
  type: SET_MARKER_SELECTED,
  marker,
});
