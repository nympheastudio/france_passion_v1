// import npm
import axios from 'axios';

// import Actions / Methods
import {
  LOGIN,
  VALIDATE_TOKEN,
  SAVE_USER_FAVORITE,
  DELETE_USER_FAVORITE,
  addUserFavorite,
  removeUserFavorite,
  connectUser,
  disconnectUser,
} from '@actions/auth';
import { LOAD_HOSTS, saveHosts, setHosts } from '@actions/host';
import {
  LOAD_REVIEWS,
  saveReviews,
  setReviews,
} from '@actions/review';
import { generateError } from '@actions/error';
import { saveLanguage } from '@actions/language';

// import services
import { getExpirationDateFromToken } from '@services/Auth/expirationDate';
import { getAppLanguage } from '@services/AsyncStorage/language';

import { API_KEY,SERVER_URL  } from '@app/app.config';



export const Axios = axios.create({
  // baseURL: 'http://api.france-passion.com/',
 // baseURL: 'https://appli.ovh/france_passion/public/',
  baseURL: SERVER_URL ,
  //baseURL: 'http://api.alterne.fr/public/',
  timeout: 10000,
});

// Middleware definition
const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN: {
      const { email, password } = state.auth;
      const { deviceId, deviceName, expoPushToken } = state.device;
      Axios({
        method: 'POST',
        url: 'token',
        headers: {
          'api-key': API_KEY,
        },
        data: {
          email,
          password,
          device_id: deviceId,
          device_name: deviceName,
          expo_push_token: expoPushToken,
        },
      }).then((response) => {
        const { token, adherent } = response.data;
        const expirationDate = getExpirationDateFromToken(token);
        getAppLanguage(adherent.langue)
          .then((data) => {
            store.dispatch(saveLanguage(data));
            store.dispatch(connectUser(token, adherent, expirationDate));
          }).catch(() => {
            store.dispatch(connectUser(token, adherent, expirationDate));
          });
      }).catch((error) => {
        if (error.response) {
          store.dispatch(generateError(error.response.status, error.response.data.error));
        } else {
          store.dispatch(generateError(500));
        }
      });
      break;
    }

    case VALIDATE_TOKEN: {
      const { deviceId } = action;
      const { token, user, expirationDate } = action.data;
      Axios({
        method: 'POST',
        url: 'token/validate',
        headers: {
          token,
          'device-id': deviceId,
        },
      }).then((response) => {
        if (response.data.success) {
          store.dispatch(connectUser(token, user, expirationDate));
        }
      }).catch((error) => {
        console.log(error);
        store.dispatch(disconnectUser());
        if (error.response) {
          store.dispatch(generateError(error.response.status, error.response.data.error));
        } else {
          store.dispatch(generateError(500));
        }
      });
      break;
    }

    case LOAD_HOSTS: {
      const { token } = state.auth;
      const { deviceId } = state.device;
      Axios({
        method: 'GET',
        url: 'host',
        headers: {
          token,
          'device-id': deviceId,
        },
      }).then((response) => {
        const hosts = response.data.accueillants;
        store.dispatch(saveHosts(hosts));
        store.dispatch(setHosts(hosts));
      }).catch((error) => {
        store.dispatch(disconnectUser());
        if (error.response) {
          store.dispatch(generateError(error.response.status, error.response.data.error));
        } else {
          store.dispatch(generateError(500));
        }
      });
      break;
    }

    case SAVE_USER_FAVORITE: {
      const { token } = state.auth;
      const { deviceId } = state.device;
      Axios({
        method: 'POST',
        url: 'favorite',
        headers: {
          token,
          'device-id': deviceId,
        },
        data: {
          host_id: action.favoriteId,
        },
      }).catch((error) => {
        store.dispatch(removeUserFavorite(action.favoriteId));
        if (error.response) {
          store.dispatch(generateError(error.response.status, error.response.data.error));
        } else {
          store.dispatch(generateError(500));
        }
      });
      break;
    }

    case DELETE_USER_FAVORITE: {
      const { token } = state.auth;
      const { deviceId } = state.device;
      Axios({
        method: 'DELETE',
        url: `favorite/${action.favoriteId}`,
        headers: {
          token,
          'device-id': deviceId,
        },
      }).catch((error) => {
        store.dispatch(addUserFavorite(action.favoriteId));
        if (error.response) {
          store.dispatch(generateError(error.response.status, error.response.data.error));
        } else {
          store.dispatch(generateError(500));
        }
      });
      break;
    }

    case LOAD_REVIEWS: {
      const { token } = state.auth;
      const { deviceId } = state.device;
      Axios({
        method: 'GET',
        url: 'review',
        headers: {
          token,
          'device-id': deviceId,
        },
      }).then((response) => {
        store.dispatch(saveReviews(response.data));
        store.dispatch(setReviews(response.data));
      }).catch((error) => {
        if (error.response) {
          store.dispatch(generateError(error.response.status, error.response.data.error));
        } else {
          store.dispatch(generateError(500));
        }
      });
      break;
    }

    default:
      break;
  }
  next(action);
};

export default authMiddleware;
