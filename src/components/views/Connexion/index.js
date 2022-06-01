/* eslint-disable no-console */
// == Import npm
import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';

// Import components
import TextCustom from '@components/partials/TextCustom';
import TextInputCustom from '@components/partials/TextInputCustom';

// == Import items
import logoFP from '@styles/images/logo-fp/logo-fp.png';

// == Style
import { connexion } from '@styles/Themes';
import { texte } from '@styles/Themes/interfaces/articles';
import { base } from '@styles/Themes/interfaces/button';

// == Import Utils
import { openSignupLink, openResetPasswordLink } from '@services/Language/externalLinks';

// == Composant
const Connexion = ({
  email,
  password,
  changeField,
  login,
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // Listener sur la visibility du clavier au mount du composant
  // Afin de gérer la vue des champs de login
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const handleChange = (e, name) => {
    const value = e.nativeEvent.text;
    changeField(name, value);
  };
  const handleSignupLink = () => {
    openSignupLink();
  };
  const handleConnexionPress = () => {
    login();
  };
  const handleResetPasswordPress = () => {
    openResetPasswordLink();
  };

  return (
    <View style={connexion.container}>
      {!isKeyboardVisible && (
        <View style={connexion.logoContainer}>
          <Image source={logoFP} />
        </View>
      )}

      <TextCustom style={{ ...texte, ...connexion.text }}>
        {global.i18n.t('TEXT_PAGE_CONNEXION')}
      </TextCustom>

      <View style={connexion.form}>
        <TextInputCustom
          value={email}
          onChange={(e) => handleChange(e, 'email')}
          placeholder={global.i18n.t('FORM_PAGE_CONNEXION_EMAIL')}
          placeholderTextColor="grey"
          textContentType="emailAddress"
          style={connexion.input}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <TextInputCustom
          value={password}
          onChange={(e) => handleChange(e, 'password')}
          placeholder={global.i18n.t('FORM_PAGE_CONNEXION_MDP')}
          placeholderTextColor="grey"
          textContentType="password"
          secureTextEntry
          style={connexion.input}
          autoCapitalize="none"
          autoCompleteType="password"
          keyboardType="default"
        />

        <TouchableOpacity style={connexion.connexionBtn} onPress={handleConnexionPress}>
          <TextCustom style={{ ...base, ...connexion.textBtn }}>
            {global.i18n.t('BT_PAGE_CONNEXION_CONNEXION')}
          </TextCustom>
        </TouchableOpacity>

        <TouchableOpacity style={connexion.resetMdp} onPress={handleResetPasswordPress}>
          <TextCustom style={{ ...connexion.textBtn, opacity: 0.6 }}>
            {global.i18n.t('BT_PAGE_CONNEXION_MDP_PERDU')}
          </TextCustom>
        </TouchableOpacity>
      </View>

      {!isKeyboardVisible && (
        <TouchableHighlight style={connexion.createAccountBtn} onPress={handleSignupLink}>
          <TextCustom style={connexion.textBtnBlue}>
            {global.i18n.t('BT_PAGE_CONNEXION_INSCRIPTION')}
          </TextCustom>
        </TouchableHighlight>
      )}
    </View>
  );
};
// == Validation
Connexion.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

// == Export
export default Connexion;
