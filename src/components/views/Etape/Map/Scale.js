// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { getDistance } from 'geolib';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Import styles
import { etape } from '@styles/Themes';

// == Composant
const Scale = ({ mapPoints }) => {
  const [distance, setDistance] = useState(null);

  // Fonction retournant une syntaxe adaptée pour l'affichage
  // en fonction de la valeur de la distance
  const convertDistance = () => {
    if (distance >= 100000) {
      // Arrondi au kilomètre
      const convertedDist = Math.round(distance / 1000);
      return `${convertedDist}km`;
    }
    if (distance >= 1000) {
      // Arrondi au 100 mètres
      const convertedDist = Math.round(distance / 100) / 10;
      return `${convertedDist}km`;
    }
    // Arrondi à 5 mètres
    const convertedDist = Math.ceil(distance / 5) * 5;
    return `${convertedDist}m`;
  };

  // A chaque update de mapPoint (donc changement de region)
  // On update la valeur de distance
  // Qu'on divise pas 4 car échelle = 1/4 de la largeur de l'écran
  useEffect(() => {
    if (mapPoints) {
      setDistance(getDistance(
        { latitude: mapPoints.southWest.latitude, longitude: mapPoints.northEast.longitude },
        { latitude: mapPoints.southWest.latitude, longitude: mapPoints.southWest.longitude },
        5,
      ) / 4);
    }
  }, [mapPoints]);

  return (
    <View style={etape.scaleContainer}>
      <TextCustom style={etape.scaleText}>
        {convertDistance()}
      </TextCustom>
    </View>
  );
};

// == Validation
Scale.propTypes = {
  mapPoints: PropTypes.object,
};

Scale.defaultProps = {
  mapPoints: null,
};

// == Export
export default Scale;
