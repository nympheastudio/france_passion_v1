// Import node modules
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import Reducers
import rootReducer from '@store/reducers';

// Import Middlewares
// import authMiddleware from '@store/middlewares/authMiddleware';
import localFetchMiddleware from '@store/middlewares/localFetchMiddleware';
import storageMiddleware from '@store/middlewares/storageMiddleware';
import webFetchMiddleware from './middlewares/webFetchMiddleware';




const enhancers = composeWithDevTools(
  applyMiddleware(
    localFetchMiddleware,
    webFetchMiddleware,
    storageMiddleware,
    // other middlewares,
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

// Export
export default store;
