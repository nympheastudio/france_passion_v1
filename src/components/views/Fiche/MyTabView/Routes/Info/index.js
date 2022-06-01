/* eslint-disable object-curly-newline */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// == Import components
import Accessiblity from './Accessibility';
import Information from './Information';
import { fiche } from '@styles/Themes';

// == Composant
const Info = ({ marker }) => (
  <View >
    <Accessiblity marker={marker} />
    <Information marker={marker} />
  </View>
);

// == Validation
Info.propTypes = {
  marker: PropTypes.object.isRequired,
};

// == Export
export default Info;
