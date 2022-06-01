// Import node modules
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';

// Import components
import TextCustom from '@components/partials/TextCustom';

// Import styles
import { etape } from '@styles/Themes';
// Component
const Cluster = ({ coordinate, onPress, pointCount }) => (
  <Marker coordinate={coordinate} onPress={onPress} tracksViewChanges={false}>
    <View style={etape.clusterContainer}>
      <TextCustom style={etape.clusterText}>
        {pointCount}
      </TextCustom>
    </View>
  </Marker>
);

// Validation
Cluster.propTypes = {
  coordinate: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  pointCount: PropTypes.number.isRequired,
};

// Export
export default Cluster;
