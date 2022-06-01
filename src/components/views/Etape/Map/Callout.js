// Import node modules
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
// Import components
import HostCard from '@containers/partials/HostCard';

// Import styles
import { etape } from '@styles/Themes';

const CallOut = ({
  markerSelected,
  setCalloutLayout,
}) => {
  const opacityValue = useRef(new Animated.Value(0)).current;

  // Définition de l'animation d'apparition du callout
  const fadeAnimation = () => {
    Animated.timing(
      opacityValue,
      { 
        toValue: 1, 
        duration: 100, 
        easing: Easing.linear,
        useNativeDriver: true
      },
    ).start();
  };

  // Mount de Callout
  useEffect(() => {
    fadeAnimation();
  }, []);

  return (
    <Animated.View
      style={[etape.calloutContainer, { opacity: opacityValue }]}
      onLayout={(event) => setCalloutLayout(event.nativeEvent.layout)}
    >
      <HostCard marker={markerSelected} />
    </Animated.View>
  );
};

// Validation
CallOut.propTypes = {
  markerSelected: PropTypes.object,
  setCalloutLayout: PropTypes.func.isRequired,
};

CallOut.defaultProps = {
  markerSelected: null,
};

// Export
export default CallOut;
