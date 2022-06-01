/* eslint-disable global-require */
// Import node modules
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

// Import components
// import Router from '@containers/navigations/Router';
import Main from '@containers/Main';

// Import store
import store from '@store';

import './global';



const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  </Provider>
);

export default App;
