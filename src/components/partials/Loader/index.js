// == Import npm
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import styles
import { loaderFullScreen, loaderAbsolute } from '@styles/Themes/interfaces/loader';

// == Composant
const Loader = ({ message, defaultFont }) => (
  <View style={{ ...loaderFullScreen, ...loaderAbsolute }}>
    <ActivityIndicator size="large" color="white" />
    {message !== null && <TextCustom defaultFont={defaultFont} style={{ marginTop: 10, color: '#fff' }}>{message}</TextCustom>}
  </View>
);

Loader.propTypes = {
  message: PropTypes.string,
  defaultFont: PropTypes.bool,
};

Loader.defaultProps = {
  message: null,
  defaultFont: false,
};

// == Export
export default Loader;
