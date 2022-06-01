/* eslint-disable react/prop-types */
// == Import npm
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// == Import routes constants
import {
  PAGE_CHARGEMENT,
  PAGE_ETAPE,
  PAGE_FAVORIS,
  PAGE_COMPTE,
  PAGE_AVIS,
  PAGE_LISTE,
  PAGE_FICHE,
  PAGE_REGLES_OR,
  PAGE_CONTACT,
  PAGE_CONTACT_VALIDATION,
  PAGE_MENTIONS_LEGALES,
  PAGE_CONFIDENTIALITE,
  PAGE_LEGENDES,
  PAGE_AVIS_DEPOSER,
  PAGE_AVIS_VALIDATION,
  PAGE_RDV_FESTIFS,
} from '@components/navigations/routes';

// == Import components
import Chargement from '@containers/views/Chargement';
import Avis from '@containers/views/Avis';
import Confidentialite from '@containers/views/Confidentialite';
import Compte from '@containers/views/Compte';
import Contact from '@containers/views/Contact';
import ContactValidation from '@components/views/ContactValidation';
import Etape from '@containers/views/Etape';
import Favoris from '@containers/views/Favoris';
import Fiche from '@containers/views/Fiche';
import Legendes from '@components/views/Legendes';
import Liste from '@containers/views/Liste';
import MentionsLegales from '@containers/views/MentionsLegales';
import ReglesOr from '@containers/views/ReglesOr';
import AvisDeposer from '@containers/views/AvisDeposer';
import AvisValidation from '@containers/views/AvisValidation';
import Rdvfestifs from '@containers/views/Rdvfestifs';
// import Test from '@containers/views/Test';

// == Import partials
import MyTabBar from './MyTabBar';

// == Création de l'élément de navigation
const Tab = createBottomTabNavigator();

// == Composant
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={PAGE_CHARGEMENT}
    tabBar={({ navigation, state }) => <MyTabBar navigation={navigation} state={state} />}
    screenOptions={{
      headerShown: false
    }}
  >
    <Tab.Screen name={PAGE_CHARGEMENT} component={Chargement} />
    <Tab.Screen name={PAGE_ETAPE} component={Etape} />
    <Tab.Screen name={PAGE_FAVORIS} component={Favoris} />
    <Tab.Screen name={PAGE_COMPTE} component={Compte} />
    <Tab.Screen name={PAGE_LISTE} component={Liste} />
    <Tab.Screen name={PAGE_FICHE} component={Fiche} />
    <Tab.Screen name={PAGE_REGLES_OR} component={ReglesOr} />
    <Tab.Screen name={PAGE_CONTACT} component={Contact} />
    <Tab.Screen name={PAGE_CONTACT_VALIDATION} component={ContactValidation} />
    <Tab.Screen name={PAGE_MENTIONS_LEGALES} component={MentionsLegales} />
    <Tab.Screen name={PAGE_CONFIDENTIALITE} component={Confidentialite} />
    <Tab.Screen name={PAGE_LEGENDES} component={Legendes} />
    <Tab.Screen name={PAGE_AVIS} component={Avis} />
    <Tab.Screen name={PAGE_AVIS_DEPOSER} component={AvisDeposer} />
    <Tab.Screen name={PAGE_AVIS_VALIDATION} component={AvisValidation} />
    <Tab.Screen name={PAGE_RDV_FESTIFS} component={Rdvfestifs} />
  </Tab.Navigator>
);

// == Export
export default TabNavigator;
