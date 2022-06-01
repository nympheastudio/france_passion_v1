// == Import npm
import React from 'react';
import { View } from 'react-native';

// == Import styles
import { review } from '@styles/Themes/fiche/routes/review';

// == Import component
import TextCustom from '@components/partials/TextCustom';

// == Composant
const NoPhoto = () => (
  <View style={review.noReviewContainer}>
    <TextCustom style={review.noReviewText}>
      {global.i18n.t('TEXTE_FICHE_PHOTOS_PAS_PHOTO')}
    </TextCustom>
  </View>
);

// == Export
export default NoPhoto;
