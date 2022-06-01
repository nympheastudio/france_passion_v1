// == Import npm
import React from 'react';
import { View } from 'react-native';

// == Import component
import TextCustom from '@components/partials/TextCustom';
import { avis } from '@styles/Themes/avis';

// == Composant
const NoReview = () => (
  <View>
    <TextCustom style={avis.noReview}>
      {global.i18n.t('MESSAGE_AVIS_PAS_AVIS')}
    </TextCustom>
  </View>
);

// == Export
export default NoReview;
