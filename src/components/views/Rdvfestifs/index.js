// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, FlatList, Share, View, Button,TouchableOpacity, Image } from 'react-native';

import axios from 'axios';
// Import components


import cardImg from '@styles/images/image-default-card/image-default-card.png';
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { liste } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';
// == Composant
// const Rdvfestifs = ({ token, deviceId, language }) => (
// <Text>RDV festifs</Text>
// );



import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

// Import routes
import { PAGE_FICHE } from '@components/navigations/routes';


import { ActivityIndicator } from 'react-native';
import { Image as ImgLazy } from 'react-native-elements';

import { API_KEY,SERVER_URL , SITE_URL } from '@app/app.config';



const Rdvfestifs = ({ token, deviceId, language, marker, hosts, setMarkerSelected  }) => {

	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const navigation = useNavigation();
	//const titre = 'RDVs Festifs';
	//const btn_voir_fiche = 'Voir la fiche de l\'accueillant';
	/* const onShare = async () => {
		try {
		  const result = await Share.share({
			message:
			  d+ 'test partage',
		  });
		  if (result.action === Share.sharedAction) {
			if (result.activityType) {
			  // shared with activity type of result.activityType
			} else {
			  // shared
			}
		  } else if (result.action === Share.dismissedAction) {
			// dismissed
		  }
		} catch (error) {
		  alert(error.message);
		}
	  };
		<Button onPress={onShare(item.ID_ACCUEILLANT)} title="Partager" />
	*/
	//console.log(hosts);

	useEffect(() => {
		// axios.get('https://reactnative.dev/movies.json')
		//baseURL: 'http://api.alterne.fr/public/',
		axios.get(SERVER_URL + 'rdv_festifs')
		.then(({ data }) => {
			//console.log("defaultApp -> data", data.rdvs)
			setData(data.rdvs);


		})
		.catch((error) => console.error(error))
		.finally(() => setLoading(false));
	}, []);


	const handleMorePress = (d) => {

		//console.log(d);

		const key_current_host = Object.keys(hosts).find(key => hosts[key].id === d);

		//console.log(key_current_host);

		setMarkerSelected(hosts[key_current_host]);
		navigation.navigate(PAGE_FICHE);



	};




	return (
	<View style={liste.mainContainer}>

	<View fontType="bold" style={liste.titlePage}>
	<TextCustom fontType="bold" style={[text, titre3]}>
	{global.i18n.t('TITRE_RDV_FESTIFS')}
	</TextCustom>
	</View>

	<FlatList
	data={data}
	keyExtractor={(item, index) => {
			// console.log("index", index)
			return index.toString();
		}}
	renderItem={({ item }) => {

			//console.log("item", item);//ID_ACCUEILLANT

			let img_rdv = SITE_URL + item.ILLUSTRATION;
			//console.log(img_rdv );
			return (


			<View style={liste.cardContainer}>
			<View style={liste.cardTopContainer}>

			{item.ILLUSTRATION
				? <ImgLazy style={liste.cardTopBackgroundImage} source={{uri: img_rdv}} PlaceholderContent={<ActivityIndicator size="large" color="#144C95" />} />
				: (
				<View style={liste.cardTopDefaultImageContainer}>

				<Image source={cardImg} style={liste.cardTopDefaultImage} />

				</View>
				)}




			</View>
			<View style={liste.cardBottomContainer}>

			<Text fontType="medium" style={{fontSize: 22,color: '#144C95'}}>{item.TITRE}</Text>
			<Text fontType="bold" style={liste.cardAddressText}>
			{item.TELEPHONE}
			</Text>
			<Text  fontType="bold" style={liste.cardAddressText}>{item.DESCRIPTION}</Text>
			<TouchableOpacity onPress={() => handleMorePress(item.ID_ACCUEILLANT)}>
			<Text fontType="medium"  style={{	color: 'white', // <-- The magic
	textAlign: 'center', // <-- The magic
	fontWeight: 'bold',
	fontSize: 20,
	backgroundColor: '#ED125F',
	borderRadius: 10,
	borderWidth: 1,
	borderColor: '#fff',
	}}>{global.i18n.t('BTN_APP_VOIR_FICHE_ETAPE')}</Text>
			</TouchableOpacity>

			</View>
			</View>

			)
		}}
	/>

	</View>
	);

};



Rdvfestifs.propTypes = {
token: PropTypes.string.isRequired,
deviceId: PropTypes.string.isRequired,
language: PropTypes.string.isRequired,
};

// == Export
export default Rdvfestifs;
