/* eslint-disable no-console */
// Actions
import {
  SAVE_DEVICE_INFO,
  SAVE_NETWORK_INFO,
} from '@actions/device';

// initial state
const initialState = {
  deviceId: '',
  deviceName: '',
  expoPushToken: '',
  isInternetReachable: false,
};

// reducer
const Device = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DEVICE_INFO:
      return {
        ...state,
        deviceId: action.deviceId,
        deviceName: action.deviceName,
        expoPushToken: action.expoPushToken,
      };
    case SAVE_NETWORK_INFO:
      return {
        ...state,
        isInternetReachable: action.isInternetReachable,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Device;
