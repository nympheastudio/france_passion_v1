/* eslint-disable no-console */
// import npm

// import Actions / Methods
import { VALIDATE_LOCAL_AUTH, validateToken, disconnectUser } from '@actions/auth';
import { LOAD_LOCAL_HOSTS, loadHosts, setHosts } from '@actions/host';
import { LOAD_LOCAL_REVIEWS, setReviews, loadReviews } from '@actions/review';

// == Import services
import { getAuthDataStored } from '@services/AsyncStorage/auth';
import { getHostsDataStored } from '@services/AsyncStorage/host';
import { getReviewsDataStored } from '@services/AsyncStorage/review';

// Middleware definition
const localFetchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case VALIDATE_LOCAL_AUTH: {
      const state = store.getState();
      getAuthDataStored().then((data) => {
        if (data.token !== null) {
          const { deviceId } = state.device;
          store.dispatch(validateToken(data, deviceId));
        } else {
          store.dispatch(disconnectUser());
        }
      }).catch((error) => {
        store.dispatch(disconnectUser());
        console.log(error);
      });
      break;
    }

    case LOAD_LOCAL_HOSTS:
      getHostsDataStored().then((data) => {
       if (data !== null) {
          store.dispatch(setHosts(data));
        } else {
          store.dispatch(loadHosts());
        }
      }).catch((error) => {
        console.log(error);
      });
      break;

    case LOAD_LOCAL_REVIEWS:
      getReviewsDataStored().then((data) => {
        if (data !== null) {
          store.dispatch(setReviews(data));
        } else {
          store.dispatch(loadReviews());
        }
      }).catch((error) => {
        console.log(error);
      });
      break;

    default:
      break;
  }
  next(action);
};

export default localFetchMiddleware;
