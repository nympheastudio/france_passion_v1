/* eslint-disable react/prop-types */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Import components
import TextCustom from '@components/partials/TextCustom';

// Import styles
import { tabNavigator } from '@styles/Themes';

// == Composant
const SubMenuItem = ({ title, image, navigationTo }) => (
  <TouchableOpacity style={tabNavigator.subMenuItemContainer} onPress={navigationTo}>
    <Image source={image} style={tabNavigator.subMenuItemIcon} />
    <TextCustom fontType="medium" style={tabNavigator.subMenuItemText}>{title}</TextCustom>
  </TouchableOpacity>
);

SubMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  navigationTo: PropTypes.func.isRequired,
};

// == Export
export default SubMenuItem;
