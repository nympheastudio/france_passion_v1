// import npm

// import Actions / Methods
import { CONNECT_USER, DISCONNECT_USER } from '@actions/auth';
import { SAVE_HOSTS } from '@actions/host';
import { SAVE_REVIEWS } from '@actions/review';
import { SAVE_LANGUAGE } from '@actions/language';

// == Import services
import { removeAuthDataStored, storeAuthData } from '@services/AsyncStorage/auth';
import { storeHostsData, removeHostsDataStored } from '@services/AsyncStorage/host';
import { storeReviewsData, removeReviewsDataStored } from '@services/AsyncStorage/review';
import { storeLanguageData } from '@services/AsyncStorage/language';

// Middleware definition
// eslint-disable-next-line no-unused-vars
const storageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      try {
        storeAuthData(action.token, action.user, action.expirationDate);
      } catch (error) {
        console.log(error);
      }
      break;

    case DISCONNECT_USER:
      try {
        removeAuthDataStored();
        removeHostsDataStored();
        removeReviewsDataStored();
      } catch (error) {
        console.log(error);
      }
      break;

    case SAVE_HOSTS:
      try {
        storeHostsData(action.hosts);
      } catch (error) {
        console.log(error);
      }
      break;

    case SAVE_REVIEWS:
      try {
        storeReviewsData(action.reviews);
      } catch (error) {
        console.log(error);
      }
      break;

    case SAVE_LANGUAGE:
      try {
        storeLanguageData(action.language);
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      break;
  }
  next(action);
};

export default storageMiddleware;
