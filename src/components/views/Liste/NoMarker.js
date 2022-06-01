// == Import npm
import React from 'react';
import { View } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Styles
import { liste } from '@styles/Themes';

// == Composant
const NoMarker = () => (
  <View style={liste.noMarkerContainer}>
    <TextCustom style={liste.noMarkerText}>Il n'y a pas d'accueillants dans le coin...</TextCustom>
  </View>
);

// == Export
export default NoMarker;
