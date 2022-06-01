// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

// == Import icons
import outlinedStar from '@styles/images/icon-star_outline-rose/icon-star_outline-rose.png';
import plainStar from '@styles/images/icon-star-rose/icon-star-rose.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Composant
// Permettant d'afficher le étoiles correspondant à une note fixe
const Stars = ({ score, size }) => {
  const renderStar = () => {
    const stars = [];
    for (let i = 0; i < score; i += 1) {
      stars.push(<Image source={plainStar} key={i} style={{ height: size, width: size, resizeMode: 'contain' }} />);
    }
    for (let i = 0; i < (5 - score); i += 1) {
      stars.push(<Image source={outlinedStar} key={(5 - i)} style={{ height: size, width: size, resizeMode: 'contain' }} />);
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: (size * 5) }}>
      {score !== 0
        ? renderStar()
        : <TextCustom fontType="bold" style={{ paddingLeft: 5, color: '#ED125F' }}>-</TextCustom>}
    </View>
  );
};

// == Validation
Stars.propTypes = {
  score: PropTypes.number.isRequired,
  size: PropTypes.number,
};

Stars.defaultProps = {
  size: 18,
};
// == Export
export default Stars;
