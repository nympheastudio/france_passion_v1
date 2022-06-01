// == Import npm
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// == Import routes
import { PAGE_PREHOME, PAGE_CONNEXION } from '@components/navigations/routes';

// == Import components
import PreHome from '@components/views/PreHome';
import Connexion from '@containers/views/Connexion';

// == Création de l'élément de navigation
const Stack = createStackNavigator();

// == Composant
const StackNavigator = () => (
  <Stack.Navigator 
    initialRouteName="prehome"
    screenOptions={{
      headerShown: false,
      presentation: 'card'
    }}
  >
    <Stack.Screen name={PAGE_PREHOME} component={PreHome} />
    <Stack.Screen name={PAGE_CONNEXION} component={Connexion} />
  </Stack.Navigator>

);

// == Export
export default StackNavigator;
