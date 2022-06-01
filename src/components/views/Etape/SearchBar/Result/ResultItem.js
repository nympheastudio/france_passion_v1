// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View } from 'react-native';

// == Import styles
import { searchBar } from '@styles/Themes';

// == Import icons
import iconMap from '@styles/images/icon-map-bleu/icon-map-bleu.png';

// == Import component
import TextCustom from '@components/partials/TextCustom';

// == Import services
import { getLocationLabel } from '@services/SearchBar/Label';

// == Composant
const ResultItem = ({ result, selectLocation }) => (
  <TouchableOpacity
    style={searchBar.resultsItem}
    onPress={() => selectLocation(result)}
  >
    <Image source={iconMap} style={searchBar.resultsItemIcon} />
    <View style={searchBar.resultsTextContainer}>
      <TextCustom numberOfLines={1} style={searchBar.resultsTextHighlight}>
        {getLocationLabel(result).highlight}
      </TextCustom>
      <TextCustom numberOfLines={1} style={searchBar.resultsTextLowlight}>
        {getLocationLabel(result).lowlight}
      </TextCustom>
    </View>
  </TouchableOpacity>
);

// == Validation
ResultItem.propTypes = {
  result: PropTypes.object.isRequired,
  selectLocation: PropTypes.func.isRequired,
};

// == Export
export default ResultItem;
