/* eslint-disable newline-per-chained-call */
/* eslint-disable object-curly-newline */
// @refresh reset
// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NetInfo from '@react-native-community/netinfo';

// == Import component
import Router from '@containers/navigations/Router';
import Loader from '@components/partials/Loader';

// == Import services
import getDeviceInfo from '@services/Device';
import { getAppLanguage } from '@services/AsyncStorage/language';





// == Composant
const Main = ({
  saveNetworkInfo,
  saveDeviceInfo,
  validateLocalAuth,
  changeLanguage,
  isInternetReachable,
  langue,
}) => {
  const [isReady, setIsReady] = useState(false);
  // Mount de Main :
  useEffect(() => {
    // Subscription à NetInfo via listener afin de sauvegarder dans le state le status de connexion
    const unsubscribe = NetInfo.addEventListener((data) => {
		
      saveNetworkInfo(data.isConnected);
    });

    getDeviceInfo()
      .then((deviceInfo) => {
        // On récupère toutes les infos liées au device et on les sauvegarde dans le state
        const { deviceId, deviceName, expoPushToken, language } = deviceInfo;
        saveDeviceInfo(deviceId, deviceName, expoPushToken);

        // On lance la validation de l'authentification avec les data stockées en local
        // et qui utilise les donnée du device
        let auuuth = validateLocalAuth();

        // On récupère une langue pour l'app si défini depuis l'AsyncStorage
        return getAppLanguage(language);
      })
      .then((data) => {
      
        if (global.i18n && global.i18n.locale !== data) {
          global.i18n.locale = data;
        }
        // On définie la langue de l'app dans le state
        changeLanguage(data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setIsReady(true);
      });

    // Unmount de Main : remove le listener des évènement de connexion
    return () => unsubscribe();
  }, []);

  const getMessage = () => {
    switch (langue) {
      case 'de':
        return 'Eine Internetverbindung ist erforderlich';
      case 'en':
        return 'An Internet connection is required';
      default:
        return 'Une connexion à Internet est requise';
    }
  };

  return (
    <>
      {(!isInternetReachable || !isReady) && <Loader defaultFont message={getMessage()} />}
      {isInternetReachable && isReady && <Router />}
    </>
  );
};

// == Validation
Main.propTypes = {
  saveNetworkInfo: PropTypes.func.isRequired,
  saveDeviceInfo: PropTypes.func.isRequired,
  validateLocalAuth: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  isInternetReachable: PropTypes.bool.isRequired,
  langue: PropTypes.string.isRequired,
};

// == Export
export default Main;
