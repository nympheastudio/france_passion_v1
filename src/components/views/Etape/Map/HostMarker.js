// Import node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import { Alert,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useNavigationState} from '@react-navigation/native';


// == Import services
import getMarkerIcon from '@services/Map/markerIcon';







const HostMarker = ({ marker, markerSelected, setMarkerSelected }) => {
  // Récupération des icônes de markers en fonction de l'OS
  const { activeMarker, inactiveMarker } = getMarkerIcon();

  // Fonction définissant le comportement du press d'un marker
  const handlePress = () => {
    if (!markerSelected) {
      setMarkerSelected(marker);
    } else if (markerSelected && markerSelected.id !== marker.id) {
      setMarkerSelected(null);
      setTimeout(() => setMarkerSelected(marker), 100);
    } else {
      setMarkerSelected(null);
    }
  };

  // const navigation = useNavigation();
 // console.log(navigation.dangerouslyGetState());
/*
const state = useNavigationState(state => state);
const routeName = (state.routeNames[state.index]);

console.log(state.routes[state.index]);
*/


	const showUpdateAlert = () => {
	  Alert.alert(
		'Statut',
	   marker.etape_fermee+' '+marker.id,
		[
		  {
			text: 'OK',
		  },
		],
		{ cancelable: false }
	  );
	}

	var opacityVal;

	if(marker.etape_fermee === 'ouvert') {
	 opacityVal = 1;
	}else{
	 opacityVal = 0.3;
	}




  return (
    <Marker

      identifier={`id-${marker.id}`}
      coordinate={{
        latitude: parseFloat(marker.latitude),
        longitude: parseFloat(marker.longitude),
      }}
    //  image={(markerSelected && markerSelected.id === marker.id) ? activeMarker : inactiveMarker}
	  opacity={opacityVal}
      tracksViewChanges={false}
      onPress={handlePress}
      stopPropagation
    ><Image source={(markerSelected && markerSelected.id === marker.id) ? activeMarker : inactiveMarker}
    
    style={{width: 32, height: 32}}
    resizeMode="contain"
     />
     </Marker>
  );
};

// Validation
HostMarker.propTypes = {
  marker: PropTypes.object.isRequired,
  markerSelected: PropTypes.object,
  setMarkerSelected: PropTypes.func.isRequired,
};

HostMarker.defaultProps = {
  markerSelected: null,
};

// Export
export default HostMarker;
