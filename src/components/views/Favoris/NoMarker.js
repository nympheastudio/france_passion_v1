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
    <TextCustom style={liste.noMarkerText}>
      {global.i18n.t('TEXTE_FAVORIS_PAS_FAVORIS')}
    </TextCustom>
  </View>
);

// == Export
export default NoMarker;
