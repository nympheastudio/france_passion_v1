/* eslint-disable no-plusplus */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

// == Import style
import { starRating } from '@styles/Themes';

// == Import icons
import plainStar from '@styles/images/icon-star_full-lg/icon-star_full-lg.png';
import emptyStar from '@styles/images/icon-star_outline-lg/icon-star_outline-lg.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Composant
// == Permettant d'afficher les étoiles de notation
// == et de modifier / ajuster la notation
const StarRating = ({
  name,
  icon,
  rating,
  setRating,
}) => {
  const maxRating = 5;

  // Fonction retournant un tableau contenant les bouton étoiles en fonction de la note
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          style={starRating.starBtnContainer}
          onPress={rating === i ? () => setRating(0) : () => setRating(i)}
          activeOpacity={1}
        >
          <Image style={starRating.starBtnIcon} source={i > rating ? emptyStar : plainStar} />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <View style={starRating.mainContainer}>
      <View style={starRating.titleContainer}>
        <Image source={icon} style={starRating.titleIcon} />
        <TextCustom fontType="medium" style={starRating.titleText}>{name}</TextCustom>
      </View>
      <View style={starRating.starsContainer}>
        {renderRating()}
      </View>
    </View>
  );
};

// == Validation
StarRating.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

// == Export
export default StarRating;
