// Actions
import {
  SAVE_USER_LOCATION,
  SAVE_CURRENT_MARKERS,
  SET_LOCATION,
  RESET_LOCATION,
  SET_REGION,
  SET_MARKER_SELECTED,
} from '@actions/map';

// initial state
const initialState = {
  location: {},
  userLocation: {},
  currentMarkers: [],
  markerSelected: null,
  region: {
    latitude: 46.810173,
    longitude: 2.629111,
    latitudeDelta: 1,
    longitudeDelta: 1,
  },
  filters: [],
  lang: [],
};

// reducer
const Map = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_LOCATION:
      return {
        ...state,
        userLocation: action.userLocation,
      };
    case SAVE_CURRENT_MARKERS:
      return {
        ...state,
        currentMarkers: action.markers,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: {
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };
    case RESET_LOCATION:
      return {
        ...state,
        location: {},
      };
    case SET_REGION:
      return {
        ...state,
        region: {
          ...action.region,
        },
      };
    case SET_MARKER_SELECTED:
      return {
        ...state,
        markerSelected: action.marker,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Map;
