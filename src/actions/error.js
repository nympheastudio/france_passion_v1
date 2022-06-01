// Types
export const DISMISS_ALERT = 'DISMISS_ALERT';
export const GENERATE_ERROR = 'GENERATE_ERROR';

// Creators
export const dismissAlert = () => ({
  type: DISMISS_ALERT,
});

export const generateError = (errorCode, errorMessage) => ({
  type: GENERATE_ERROR,
  errorCode,
  errorMessage,
});
