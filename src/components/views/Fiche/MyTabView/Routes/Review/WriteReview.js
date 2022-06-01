// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// == Import routes
import { PAGE_AVIS_DEPOSER } from '@components/navigations/routes';

// == Import styles
import { review as reviewStyle } from '@styles/Themes/fiche/routes/review';

// == Import icons
import editIcon from '@styles/images/icon-edit-bleu/icon-edit-bleu.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Import serives
import isAlreadyReviewed from '@services/Review';

// == Composant
const WriteReview = ({ userReviews, hostId }) => {
  const navigation = useNavigation();
  const hostReviewed = isAlreadyReviewed(userReviews, hostId);

  const handleReviewPress = () => {
    if (!hostReviewed) {
      navigation.navigate(PAGE_AVIS_DEPOSER);
    } else {
      Alert.alert(
        'Attention',
        'Vous avez déjà déposé un avis concernant cet accueillant. Afin de le modifier ou le supprimer, merci de vous rendre directement dans votre espace adhérent sur notre site web',
      );
    }
  };

  return (
    <>
      <Divider style={reviewStyle.customerDivider} />
      <TouchableOpacity onPress={handleReviewPress} style={reviewStyle.writeReviewBtnContainer}>
        <View style={reviewStyle.writeReviewImageBtnContainer}>
          <Image source={editIcon} style={reviewStyle.writeReviewBtnImage} />
        </View>
        <TextCustom fontType="medium" style={reviewStyle.writeReviewBtnText}>
          {global.i18n.t('BT_FICHE_AVIS_DEPOSER_AVIS')}
        </TextCustom>
      </TouchableOpacity>
    </>
  );
};

// == Validation
WriteReview.propTypes = {
  userReviews: PropTypes.array.isRequired,
  hostId: PropTypes.number.isRequired,
};

// == Export
export default WriteReview;
