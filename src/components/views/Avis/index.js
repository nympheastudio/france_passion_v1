// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList,  View,  TouchableOpacity } from 'react-native';

import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

// Import routes
import { PAGE_FICHE } from '@components/navigations/routes';


// == Import data
// eslint-disable-next-line no-unused-vars
import myFakeReviews from '@components/views/Compte/data';

// == Import styles
import { avis } from '@styles/Themes';

// == Import components
import Header from './Header';
import Review from './Review';
import NoReview from './NoReview';






const Avis = ({ marker,reviews, hosts, setMarkerSelected }) => {
	

	const navigation = useNavigation();
	
	//on filtre la liste des hosts par la liste des reviews
	var hosts_reviewed = hosts.filter(function (o1) {
		return reviews.some(function (o2) {
			return o1.id === o2.accueillant_id; 
	   });
	});



	 
	const handleMorePress = (d) => {
		

		
			const key_current_host = Object.keys(hosts_reviewed).find(key => hosts_reviewed[key].id === d);
			
			console.log(key_current_host);
			
			setMarkerSelected(hosts_reviewed[key_current_host]);
			navigation.navigate(PAGE_FICHE);
		 
		 

	};

	
  return (
    <FlatList
   data={reviews}
    // data={myFakeReviews}
     //data={hosts_}
    // renderItem={({ item }) => <TouchableOpacity onPress={() => handleMorePress(item.accueillant_id)}><Review review={item}  /></TouchableOpacity>	}
    renderItem={({ item }) => <TouchableOpacity onPress={() => handleMorePress(item.accueillant_id)}><Review review={item}  /></TouchableOpacity>	}
    keyExtractor={(item) => item.id.toString()}
    ListHeaderComponent={() => <Header reviews={reviews} />}
    // ListHeaderComponent={() => <Header reviews={myFakeReviews} />}
    ListEmptyComponent={() => <NoReview />}
    showsVerticalScrollIndicator={false}
    style={avis.avisMainContainer}
  />
  );
};
  
  

// == Validation
Avis.propTypes = {
  reviews: PropTypes.array,
};

Avis.defaultProps = {
  reviews: [],
};

// == Export
export default Avis;
