// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';


// == Import Icons
import heartRoseIcon from '@styles/images/icon-heart-rose/icon-heart-rose.png';
import heartBlancIcon from '@styles/images/icon-heart-blanc/icon-heart-blanc.png';

// == Import Style
import { liste } from '@styles/Themes';
import color from '@styles/Themes/variables/color';

// == Composant
const Favorite = ({ isFavorite, toggleFavorite }) => (
  <TouchableOpacity
    style={[liste.cardFavBtn, { backgroundColor: isFavorite ? color.secondary : color.initial }]}
    onPress={toggleFavorite}
  >
    <Image style={liste.cardFavImage} source={isFavorite ? heartBlancIcon : heartRoseIcon} />
  </TouchableOpacity>
);

// == Validation
Favorite.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

// == Export
export default React.memo(Favorite);
