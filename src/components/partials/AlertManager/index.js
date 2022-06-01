// == Import npm
// import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

// == Import services
import { getError } from '@services/AlertManager/errors';

// == Composant
const AlertManager = ({
  errorCode,
  errorMessage,
  dismissAlert,
  disconnectUser,
}) => {
  const handlePress = () => {
    if (errorCode === 401) {
      dismissAlert();
      disconnectUser();
    } else {
      dismissAlert();
    }
  };

  const { titre, message } = getError(errorCode, errorMessage);
  // console.log(titre, message);

  Alert.alert(
    // Titre
    global.i18n.t(titre),
    // Message
    global.i18n.t(message),
    // Bouton(s)
    [
      { text: 'Ok', onPress: () => handlePress() },
    ],
    { cancelable: false },
  );
  return null;
};

// == Validation
AlertManager.propTypes = {
  errorCode: PropTypes.number.isRequired,
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  dismissAlert: PropTypes.func.isRequired,
  disconnectUser: PropTypes.func.isRequired,
};

AlertManager.defaultProps = {
  errorMessage: null,
};

// == Export
export default AlertManager;
