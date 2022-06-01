// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Updates from 'expo-updates';
import {
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Divider } from 'react-native-paper';
import Modal from 'react-native-modal';

// == Import styles
import { modal } from '@styles/Themes';

// == Import icons
import flagFr from '@styles/images/drapeau-fr/drapeau-fr.png';
import flagEn from '@styles/images/drapeau-en/drapeau-en.png';
import flagDe from '@styles/images/drapeau-de/drapeau-de.png';

// == Import services
import languageChangeConfirmation from '@services/Language/languageModal';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import LanguageBtn from './LanguageBtn';


// == Const definitions
const { width, height } = Dimensions.get('window');

// == Composant
const LanguageModal = ({
  isVisible,
  setVisibility,
  language,
  saveLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleBackPress = () => {
    setVisibility(false);
  };

  const handleModalWillHide = () => {
    // Set la language selectionné sur la langue courrante
    // après fermeture de la modale
    setSelectedLanguage(language);
  };
  const handleConfirmationPress = () => {
    setVisibility(false);
    saveLanguage(selectedLanguage);
    Updates.reloadAsync();
  };

  const handleCancelPress = () => {
    setVisibility(true);
  };

  const handleValidatonPress = () => {
    if (language !== selectedLanguage) {
      languageChangeConfirmation(handleConfirmationPress, handleCancelPress);
    } else {
      setVisibility(false);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      deviceHeight={height}
      deviceWidth={width}
      onBackButtonPress={handleBackPress}
      onBackdropPress={handleBackPress}
      onModalWillHide={handleModalWillHide}
    >
      <View style={modal.modalMainContainer}>
        <TextCustom fontType="medium" style={modal.modalTitle}>{global.i18n.t('TITRE_COMPTE_CHOSIR_LANGUE')}</TextCustom>

        <View style={modal.modalOptionsContainer}>
          <LanguageBtn language={selectedLanguage} setLanguage={setSelectedLanguage} icon={flagFr} label={global.i18n.t('BT_COMPTE_FRANCAIS')} value="fr" />
          <LanguageBtn language={selectedLanguage} setLanguage={setSelectedLanguage} icon={flagEn} label={global.i18n.t('BT_COMPTE_ANGLAIS')} value="en" />
          <LanguageBtn language={selectedLanguage} setLanguage={setSelectedLanguage} icon={flagDe} label={global.i18n.t('BT_COMPTE_ALLEMAND')} value="de" />
        </View>

        <Divider style={modal.divider} />
        <View style={modal.modalOptionsContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <TextCustom style={modal.cancelBtn}>{global.i18n.t('BT_COMPTE_ANNULER')}</TextCustom>
          </TouchableOpacity>
          <TouchableOpacity style={modal.validateBtn} onPress={handleValidatonPress}>
            <TextCustom style={modal.validateBtnText}>{global.i18n.t('BT_COMPTE_VALIDER')}</TextCustom>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// == Validation
LanguageModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  saveLanguage: PropTypes.func.isRequired,
};

// == Export
export default LanguageModal;
