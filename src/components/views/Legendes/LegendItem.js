// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

// == Import styles
// eslint-disable-next-line no-unused-vars
import { legendes } from '@styles/Themes';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Composant
const LegendItem = ({ icon, label }) => (
  <View style={legendes.itemContainer}>
    <View style={legendes.itemImageContainer}>
      <Image source={icon} style={legendes.itemImage} />
    </View>
    <View style={legendes.itemLabelContainer}>
      <TextCustom style={legendes.itemLabel}>
        {label}
      </TextCustom>
    </View>
  </View>
);

// == Validation
LegendItem.propTypes = {
  icon: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

// == Export
export default LegendItem;
