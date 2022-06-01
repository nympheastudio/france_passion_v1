Expo project

Home is the map 
reviews are review linked to a marker.

i got a route for getting the markers from database (Laravel backend)
i got a route for getting reviews  from database

Right now, i m able to show markers on map, and add review



i m trying to goto marker onPress on a review from list of reviews




CityMarker.js :

// Import node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useNavigationState} from '@react-navigation/native';






const CityMarker = ({ marker, markerSelected, setMarkerSelected }) => {


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
 

  


	  
  return (
    <Marker
      identifier={`id-${marker.id}`}
      coordinate={{
        latitude: parseFloat(marker.latitude),
        longitude: parseFloat(marker.longitude),
      }}
      tracksViewChanges={false}
      onPress={handlePress}
      stopPropagation
    />
  );
};

// Validation
CityMarker.propTypes = {
  marker: PropTypes.object.isRequired,
  markerSelected: PropTypes.object,
  setMarkerSelected: PropTypes.func.isRequired,
};

CityMarker.defaultProps = {
  markerSelected: null,
};

// Export
export default CityMarker;














review.js

/* eslint-disable object-curly-newline */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Alert, Platform } from 'react-native';

import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';


// Import routes
import { PAGE_CITY} from '@components/navigations/routes';


// Import actions
import { setMarkerSelected } from '@actions/map';



const Review = ({ review, marker  }) => {
  const navigation = useNavigation();
  
  
  const handleMorePress = (d) => {
	
	console.log(d);
	//setLocation(0.0043, 0.0034);
	//setMarkerSelected(marker);
	//navigation.push(PAGE_CITY,{cityId:d,itemId:d,id:d, city_id:d});
  
   navigation.navigate(PAGE_CITY);
   
  };
  
  const showUpdateAlert = (d) => {
  
  
  Alert.alert(
    'city_id',
    'test'+d,
    [
      {
        text: 'OK',
      },
    ],
    { cancelable: false }
  );

  
}


  return (
    
	

  <View>
	<TouchableOpacity  style={{backgroundColor: "red", padding: 20}} onPress={() => handleMorePress(review.City_id)} >
		<TextCustom >{review.message}</TextCustom>
	</TouchableOpacity>
  </View>
)
};

// == Validation
Review.propTypes = {
  marker: PropTypes.object,
  review: PropTypes.object.isRequired,

};

// == Export
export default Review;

