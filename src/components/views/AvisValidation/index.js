// == Import npm
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';

// == Import routes
import { PAGE_AVIS, PAGE_FICHE, PAGE_ETAPE } from '@components/navigations/routes';

// == Import components
import { avisDeposer } from '@styles/Themes';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import TopContent from '@components/views/AvisDeposer/TopContent';

// == Composant
const AvisValidation = ({ marker }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleReviewPress = () => {
    navigation.navigate(PAGE_AVIS);
  };
  const handleBackPress = () => {
    navigation.navigate(PAGE_FICHE);
    return true;
  };

  // Gestion du BackHandler sur la page de validation d'avis (Android)
  // Pour ne pas revenir sur la page Déposer Avis mais Fiche depuis cette view
  useFocusEffect(useCallback(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  }, []));

  // Permet de "démonter" le composant s'il n'est plus focus
  if (!isFocused) {
    return (null);
  }

  // Permet de rediriger l'user vers la page Etape s'il n'y a pas de marker selectionné
  if (isFocused && !marker) {
    navigation.navigate(PAGE_ETAPE);
    return (null);
  }

  return (
    <ScrollView style={avisDeposer.mainContainer}>
      <TopContent marker={marker} />
      <View style={{}}>
        <TextCustom fontType="medium" style={avisDeposer.titleText}>
          {global.i18n.t('TITRE_DEPOSER_AVIS_VALIDATION')}
        </TextCustom>
        <TextCustom style={avisDeposer.introText}>
          {global.i18n.t('TEXTE_DEPOSER_AVIS_VALIDATION')}
        </TextCustom>
        <TouchableOpacity style={avisDeposer.validationBtn} onPress={handleReviewPress}>
          <TextCustom style={avisDeposer.btnText}>
            {global.i18n.t('BT_VOIR_AVIS')}
          </TextCustom>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// == Validation
AvisValidation.propTypes = {
  marker: PropTypes.object,
};

AvisValidation.defaultProps = {
  marker: null,
};

// == Export
export default AvisValidation;
