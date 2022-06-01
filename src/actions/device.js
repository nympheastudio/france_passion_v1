// Types
export const SAVE_DEVICE_INFO = 'SAVE_DEVICE_INFO';
export const SAVE_NETWORK_INFO = 'SAVE_NETWORK_INFO';

// Creators
export const saveDeviceInfo = (deviceId, deviceName, expoPushToken) => ({
  type: SAVE_DEVICE_INFO,
  deviceId,
  deviceName,
  expoPushToken,
});

export const saveNetworkInfo = (isInternetReachable) => ({
  type: SAVE_NETWORK_INFO,
  isInternetReachable,
});
