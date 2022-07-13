// Import node modules
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Platform, Image } from 'react-native';
import { Marker } from 'react-native-maps';

// Import services
import requestUserLocation from '@services/Map/userLocation';

// Import files
import iconCaravane from '@styles/images/icone-caravane/icone-caravane.png';
import iconCaravaneiOS from '@styles/images/icone-caravane-ios/icone-caravane.png';

const UserMarker = ({ userLocation, saveUserLocation, setLocation }) => {
  useEffect(() => {
    let isMounted = true;
    let locationUpdaterListener = null;

    requestUserLocation(saveUserLocation).then((location) => {
      const { userCoordinate, locationUpdater } = location;
      setLocation(userCoordinate.latitude, userCoordinate.longitude);

      if (isMounted) {
        locationUpdaterListener = locationUpdater;
      } else {
        locationUpdater.remove();
      }
    }).catch((error) => {
      console.log(error);
    });

    const onUnmount = () => {
      if (locationUpdaterListener) {
        locationUpdaterListener.remove();
      }
      isMounted = false;
    };

    return onUnmount;
  }, []);

  if (userLocation.latitude && userLocation.longitude) {
    return (
      <Marker
        style={{ zIndex: 10 ,
       
      }}
        resizeMode="center" 
        resizeMethod="resize"
        cluster={false}
        coordinate={userLocation}
      // image={Platform.OS === 'ios' ? iconCaravaneiOS : iconCaravane}
        tracksViewChanges
        stopPropagation
      >
      <Image

      source={Platform.OS === 'ios' ? iconCaravaneiOS : iconCaravane}
      style={{width: 32, height: 32}}
      resizeMode="contain"
       />
      </Marker>
    );
  }
  return (null);
};

// Validation
UserMarker.propTypes = {
  userLocation: PropTypes.object,
  saveUserLocation: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
};

UserMarker.defaultProps = {
  userLocation: {},
};

// Export
export default UserMarker;
