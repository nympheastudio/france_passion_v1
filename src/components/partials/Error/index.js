// == Import npm
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import styles
import errorFullScreen from '@styles/Themes/interfaces/error';

// == Composant
const Error = ({ message }) => (
  <View style={{ ...errorFullScreen }}>
    <TextCustom style={{ color: '#fff' }}>
      {global.i18n.t(message)}
    </TextCustom>
  </View>
);

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'MESSAGE_ERREUR_INATTENDUE',
};

// == Export
export default Error;
