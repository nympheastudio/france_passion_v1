/* eslint-disable object-curly-newline */
// == Import npm
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Alert, Platform } from 'react-native';


import { useNavigation } from '@react-navigation/native';


// Import routes
import { PAGE_FICHE ,   PAGE_MENTIONS_LEGALES, PAGE_LISTE,  PAGE_ETAPE} from '@components/navigations/routes';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import Stars from '@components/partials/Stars';

// == Import icons
import messageIcon from '@styles/images/icon-message_rounded_alt-sm-rose/icon-message_rounded_alt-sm-rose.png';
import carIcon from '@styles/images/icon-car-sm-rose/icon-car-sm-rose.png';

// == Import styles
import { avis } from '@styles/Themes';

// == Import service
import { getFormatedDate } from '@services/Fiche';





// == Composant


const Review = ({ review  }) => {
	

	
	const navigation = useNavigation();
	const handleMorePress = (d) => {
		
		navigation.navigate(PAGE_FICHE);

	};

	const showUpdateAlert = (d) => {


		Alert.alert(
		'accueillant_id',
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
	
	

	<View style={avis.avisCard}>




	<TextCustom fontType="bold" style={avis.lieu}>
	{`${review.accueillant_ville} (${review.accueillant_code_postal})`}
	</TextCustom>
	<TextCustom fontType="medium" style={avis.nomPropriete}>
	{review.accueillant_nom_propriete ? review.accueillant_nom_propriete : review.accueillant_nom}
	</TextCustom>
	<TextCustom fontType="regular" style={avis.date}>
	{`${global.i18n.t('TEXTE_AVIS_PREFIXE_DATE')} ${getFormatedDate(review.date)}`}
	</TextCustom>
	<View style={avis.noteContainer}>
	<Image source={messageIcon} style={avis.noteIcon} />
	<Stars score={review.note_accueil} size={12} />
	<Image source={carIcon} style={[avis.noteIcon, avis.noteIconCar]} />
	<Stars score={review.note_aire} size={12} />
	</View>
	<TextCustom style={avis.message}>{review.message}</TextCustom>
	
	</View>
	)
};
//<TouchableOpacity  style={{backgroundColor: "red", padding: 20}}  ></TouchableOpacity>


// == Export
export default Review;
