/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// == Import style
import { infos } from '@styles/Themes/fiche/routes/infos';

// == Import icons
// import markerFP from '@styles/images/marker-fp/marker-fp.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import PopUpMap from '@containers/partials/PopUpMap';

// == Import services
import getMarkerIcon from '@services/Map/markerIcon';
import { openItinerary } from '@services/Fiche';

// == Composant
const MapItem = ({ marker }) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const { inactiveMarker } = getMarkerIcon();

  const handleItineraryPress = () => {
    if (Platform.OS === 'ios') {
      setIsPopUpVisible(true);
    }
    if (Platform.OS === 'android') {
      openItinerary(marker);
    }
  };

  

	
	
  return (
    <>
      <View style={infos.mapItemMainContainer}>
        <MapView
          pitchEnabled={false}
          rotateEnabled={false}
          zoomEnabled={false}
          scrollEnabled={false}
          style={infos.mapItemMapStyle}
          initialRegion={{
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
         <Image source={inactiveMarker} 
    
      style={{width: 32, height: 32}}
      resizeMode="contain"
       />
      
          </Marker>
        </MapView>
        <TouchableOpacity style={infos.mapItemGotoBtn} onPress={handleItineraryPress}>
          <TextCustom style={infos.mapItemGotoBtnText}>{global.i18n.t('BT_FICHE_ITINERAIRE')}</TextCustom>
        </TouchableOpacity>
      </View>
      <PopUpMap isVisible={isPopUpVisible} setIsVisible={setIsPopUpVisible} />
    </>
  );
};

// == Validation
MapItem.propTypes = {
  marker: PropTypes.object.isRequired,
};

// == Export
export default MapItem;
