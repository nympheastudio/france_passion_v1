// == Import npm
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';
import { orderByDistance } from 'geolib';

// == Import Component
import HostList from '@components/partials/HostList';
import BackToMapBtn from './BackToMapBtn';
import NoMarker from './NoMarker';

// == Composant
const Liste = ({ userLocation, currentMarkers }) => {
  const [sortedMarkers, setSortedMarkers] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (userLocation.latitude && userLocation.longitude) {
        setSortedMarkers(orderByDistance(userLocation, currentMarkers));
      } else {
        setSortedMarkers(currentMarkers);
      }

      return () => setSortedMarkers([]);
    }, [currentMarkers]),
  );

  return (
    <HostList
      markers={sortedMarkers}
      HeaderComponent={BackToMapBtn}
      EmptyComponent={NoMarker}
      stickyHeader
    />
  );
};

// == Validation
Liste.propTypes = {
  userLocation: PropTypes.object.isRequired,
  currentMarkers: PropTypes.array,
};

Liste.defaultProps = {
  currentMarkers: null,
};

// == Export
export default Liste;
