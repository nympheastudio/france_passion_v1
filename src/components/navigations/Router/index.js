/* eslint-disable global-require */
// Import node modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Font from 'expo-font';

// Import Navigation elements
import TabNavigator from '@components/navigations/Router/TabNavigator';
import StackNavigator from '@components/navigations/Router/StackNavigator';

// Import views/components
import AlertManager from '@containers/partials/AlertManager';
import GaleryCarousel from '@containers/partials/GaleryCarousel';

// Import partial
import SafeAreaContainer from '@containers/partials/SafeAreaContainer';
import Loader from '@components/partials/Loader';

// Import service
import { loadTranslations, fetchTranslations } from '@services/Translation';
import { translationAlert } from '@services/Router';

// Not needed
// import size from '@styles/Themes/variables/size';

// Composant Router
const Router = ({
  isConnected,
  error,
  isCarouselActive,
  language,
}) => {
  // Initialisation des states
  const [fontLoaded, setFontLoaded] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [translationLoaded, setTranslationLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  // Fonction permettant le chargement des Fonts custom dans l'app
  const loadFont = async () => {
    await Font.loadAsync({
      Poppins: require('@styles/fonts/Poppins-Regular.ttf'),
      'Poppins-Regular': require('@styles/fonts/Poppins-Regular.ttf'),
      'Poppins-Medium': require('@styles/fonts/Poppins-Medium.ttf'),
      'Poppins-Bold': require('@styles/fonts/Poppins-Bold.ttf'),
    });
    setFontLoaded(true);
  };

  // Fonction permettant le chargement des tradcutions via i18n
  const initTranslations = async () => {
    // dans un premier temps depuis le FileSystem
    const dataStore = await loadTranslations();
   
   if (dataStore) {
      global.i18n.translations = dataStore;
      setTranslationLoaded(true);
    }

    // Dans un second temps via un requête AJAX
    try {
      const dataFetch = await fetchTranslations();
      if (dataFetch) {
        global.i18n.translations = dataFetch.data;
        setTranslationLoaded(true);
      }
    } catch (err) {
	
      if (!translationLoaded) {
        translationAlert(language);
      }
    }
  };

  // Mount de Router
  useEffect(() => {
    // Chargement des fonts
    loadFont();
    // Chargement des traductions
    initTranslations();
    // On set la langue des traductions
    if (global.i18n && global.i18n.locale !== language) {
      global.i18n.locale = language;
    }
  }, []);

  // Update de isConnected
  useEffect(() => {
    // Permet de bypasser l'état null de la connexion lors du retour sur l'app
    // après le dévérouillage du device ou autre
    // afin de ne pas réavoir la vue Préhome et Connexion
    if (isConnected !== null) {
      setAuthLoaded(true);
    }
  }, [isConnected]);

  // Update de language
  useEffect(() => {
    // On change la langue des traductions
    if (global.i18n && global.i18n.locale !== language) {
      global.i18n.locale = language;
    }
  }, [language]);

  // Update de authLoaded, fontLoaded, translationLoaded
  useEffect(() => {
    // On set allLoaded à true lorsque tout est chargé
    if (authLoaded && fontLoaded && translationLoaded) {
      setAllLoaded(true);
    }
  }, [authLoaded, fontLoaded, translationLoaded]);

  return (
    <SafeAreaContainer>
      {!allLoaded && <Loader />}
      {allLoaded && (
        <View style={{ flex: 1 }}>
          {isConnected ? <TabNavigator /> : <StackNavigator />}
          {error.errorCode && <AlertManager />}
          {isCarouselActive && <GaleryCarousel />}
        </View>
      )}
    </SafeAreaContainer>
  );
};

// Validation
Router.propTypes = {
  isConnected: PropTypes.bool,
  error: PropTypes.object.isRequired,
  isCarouselActive: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

Router.defaultProps = {
  isConnected: null,
};

// Export
export default Router;
