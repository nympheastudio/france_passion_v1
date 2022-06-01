// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

// == Import styles
import { infos } from '@styles/Themes/fiche/routes/infos';

// == Composant
const PictoItem = ({ info, icon }) => {
  if (!info) {
    return null;
  }
  return (
    <View style={infos.pictoItemContainer}>
      <Image source={icon} />
    </View>
  );
};

// == Validation
PictoItem.propTypes = {
  info: PropTypes.bool,
  icon: PropTypes.number.isRequired,
};

PictoItem.defaultProps = {
  info: null,
};

// == Export
export default PictoItem;
