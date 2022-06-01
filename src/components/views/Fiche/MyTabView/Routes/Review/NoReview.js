// == Import npm
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// == Import routes
import { PAGE_AVIS_DEPOSER } from '@components/navigations/routes';

// == Import styles
import { review } from '@styles/Themes/fiche/routes/review';

// == Import component
import TextCustom from '@components/partials/TextCustom';

// == Composant
const NoReview = () => {
  const navigation = useNavigation();
  const handleReviewPress = () => {
    navigation.navigate(PAGE_AVIS_DEPOSER);
  };
  return (
    <View style={review.noReviewContainer}>
      <TextCustom style={review.noReviewText}>
        {global.i18n.t('TEXTE_FICHE_AVIS_PAS_AVIS')}
      </TextCustom>
      <View style={review.noReviewBtnContainer}>
        <TouchableOpacity onPress={handleReviewPress} style={review.noReviewBtn}>
          <TextCustom fontType="medium" style={review.noReviewBtnText}>
            {global.i18n.t('BT_FICHE_AVIS_DEPOSER_AVIS')}
          </TextCustom>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// == Export
export default NoReview;
