// == Import npm
import React, { useCallback } from 'react';
import {
  ScrollView,
  View,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useIsFocused, useFocusEffect } from '@react-navigation/native';
import { Divider } from 'react-native-paper';

// == Import routes
import { PAGE_ETAPE } from '@components/navigations/routes';

// == Import style
import { avisDeposer, liste } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Composant
const ContactValidation = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleBackPress = () => {
    navigation.navigate(PAGE_ETAPE);
    return true;
  };

  const handlePress = () => {
    navigation.navigate(PAGE_ETAPE);
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

  return (
    <ScrollView style={avisDeposer.mainContainer}>
      <View fontType="bold" style={liste.titlePage}>
        <TextCustom fontType="bold" style={[text, titre3]}>
          {global.i18n.t('TITRE_CONTACT_ALERT_ENVOI_REUSSI')}
        </TextCustom>
      </View>
      <Divider style={liste.listDivider} />
      <View style={{}}>
        <TextCustom style={avisDeposer.introText}>
          {global.i18n.t('MESSAGE_CONTACT_ENVOYE_SUCCES')}
        </TextCustom>
        <TouchableOpacity style={avisDeposer.validationBtn} onPress={handlePress}>
          <TextCustom style={avisDeposer.btnText}>
            {global.i18n.t('BT_LISTE_RETOUR_CARTE')}
          </TextCustom>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// == Export
export default ContactValidation;
