// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
  BackHandler,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// == Import Style
import { galery } from '@styles/Themes/fiche/routes/galery';

// == Import icon
import crossLeft from '@styles/images/icon-cross-rose/icon-cross-rose.png';

// Const definition
const { width, height } = Dimensions.get('window');

// == Composant
const GaleryCarousel = ({ marker, index, closeCarousel }) => {
  const { photos } = marker;
  const handleClosePress = () => {
    closeCarousel();
    // return true pour pouvoir faire fonctionner le BackHandler
    return true;
  };

  // Listener sur le BackHandler pour éviter un retour sur view AvisDeposer
  // après validation de l'avis : retour sur Fiche
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleClosePress);
    return () => BackHandler.removeEventListener('hardwareBackPress', handleClosePress);
  }, []);

  return (
    <View style={galery.carouselMainContainer}>

      {/* Bouton de fermture uniquement sur iOS / Android a le bouton physique */}
      {Platform.OS === 'ios' && (
        <TouchableOpacity onPress={handleClosePress} style={galery.carouselBackBtnContainer}>
          <Image source={crossLeft} style={galery.carouselBackBtnIcon} />
        </TouchableOpacity>
      )}

      <Carousel
        data={photos}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={galery.carouselFullImage} />
        )}
        firstItem={index}
        itemWidth={width}
        sliderWidth={width}
        itemHeight={height}
        sliderHeight={height}
        hasParallaxImages
        loop
      />

    </View>
  );
};

// == Validation
GaleryCarousel.propTypes = {
  marker: PropTypes.object,
  index: PropTypes.number,
  closeCarousel: PropTypes.func.isRequired,
};

GaleryCarousel.defaultProps = {
  marker: null,
  index: null,
};

// == Export
export default GaleryCarousel;
