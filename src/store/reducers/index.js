import { combineReducers } from 'redux';

import Auth from './Auth';
import Device from './Device';
import Error from './Error';
import Filters from './Filters';
import Host from './Host';
import Language from './Language';
import Map from './Map';
import Review from './Review';
import Search from './Search';

const rootReducer = combineReducers({
  auth: Auth,
  device: Device,
  language: Language,
  error: Error,
  search: Search,
  map: Map,
  filters: Filters,
  host: Host,
  review: Review,
  // autres reducers
});

export default rootReducer;
