/* eslint-disable max-len */
// == Import npm
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Platform } from 'react-native';
import { useNavigation, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Import utilities
import { Axios } from '@store/middlewares/webFetchMiddleware';

// == Import Styles
import { avisDeposer } from '@styles/Themes';

// == Import routes
import { PAGE_AVIS_VALIDATION, PAGE_ETAPE } from '@components/navigations/routes';

// == Import icons
import messageIcon from '@styles/images/icon-message_rounded_alt-bleu/icon-message_rounded_alt-bleu.png';
import vanIcon from '@styles/images/icon-van-bleu/icon-van-bleu.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import StarRating from '@components/partials/StarRating';
import TopContent from './TopContent';
import Form from './Form';

// == Composant
const AvisDeposer = ({
  token,
  deviceId,
  marker,
  generateError,
}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [accueilRating, setAccueilRating] = useState(0);
  const [stationnementRating, setStationnementRating] = useState(0);
  const [message, setMessage] = useState(null);
  const [isPublic, setIsPublic] = useState(false);

  // Scrollview non maitrisée sur iOS
  // nécessité d'utiliser KeyboardAwareScrollViews pour gérer Scroll et Keyboard
  const Container = Platform.OS === 'ios' ? KeyboardAwareScrollView : ScrollView;


  useFocusEffect(useCallback(() => {
    setAccueilRating(0);
    setStationnementRating(0);
    setMessage(null);
    setIsPublic(false);
  }, []));

  const handleCancelPress = () => {
    navigation.goBack();
  };

  const handleValidationPress = () => {
    Axios({
      method: 'POST',
      url: 'review',
      headers: {
        token,
        'device-id': deviceId,
      },
      data: {
        host_id: marker.id,
        is_public: isPublic,
        area_rating: stationnementRating,
        host_rating: accueilRating,
        comment: message,
      },
    }).then(() => {
      navigation.navigate(PAGE_AVIS_VALIDATION);
    }).catch((error) => {
      if (error.response) {
        generateError(error.response.status, error.response.data.error);
      } else {
        generateError(500);
      }
    });
  };

  if (!isFocused) {
    return (null);
  }

  if (isFocused && !marker) {
    navigation.navigate(PAGE_ETAPE);
    return (null);
  }

  return (
    <Container
      style={avisDeposer.mainContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      viewIsInsideTabBar={false}
      extraScrollHeight={-70}
    >
      <TopContent marker={marker} />

      <TextCustom style={avisDeposer.introText}>
        {global.i18n.t('TEXTE_DEPOSER_AVIS_INTRO')}
      </TextCustom>

      <StarRating name={global.i18n.t('FORM_DEPOSER_AVIS_ACCUEIL')} icon={messageIcon} rating={accueilRating} setRating={setAccueilRating} />
      <StarRating name={global.i18n.t('FORM_DEPOSER_AVIS_STATIONNEMENT')} icon={vanIcon} rating={stationnementRating} setRating={setStationnementRating} />

      <Form
        message={message}
        setMessage={setMessage}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        handleCancelPress={handleCancelPress}
        handleValidationPress={handleValidationPress}
      />
    </Container>
  );
};

// == Validation
AvisDeposer.propTypes = {
  token: PropTypes.string.isRequired,
  deviceId: PropTypes.string.isRequired,
  marker: PropTypes.object,
  generateError: PropTypes.func.isRequired,
};

AvisDeposer.defaultProps = {
  marker: null,
};

// == Export
export default AvisDeposer;
