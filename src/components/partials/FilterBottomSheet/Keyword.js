// == Import npm
import React, { useState, useRef} from 'react';
import PropTypes from 'prop-types';

import { View, Image, TouchableOpacity, TextInput } from 'react-native';


// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { filter } from '@styles/Themes';

// == Import icon
import criteriaIcon from '@styles/images/icon-filter-lg-bleu/icon-filter-lg-bleu.png';
import bagIcon from '@styles/images/icon-shopping_bag-bleu/icon-shopping_bag-bleu.png';
import messageIcon from '@styles/images/icon-message_rounded_alt-bleu/icon-message_rounded_alt-bleu.png';
// == Composant

// Import Style
import { contact, connexion } from '@styles/Themes';

const Keyword = ({ keyword, toggleFilter }) => {



	const handlePress = (filterId) => {
		let objIndex = keyword.findIndex((obj => obj.name == 'BT_FILTRES_KEYWORD'));



		if(keyword[objIndex].checked === false  ){
			//keyword[objIndex].checked =true;
			//plholder_motclef = keyword[objIndex].value;
			toggleFilter(filterId);
		}

		if(keyword[objIndex].checked === true ){
			plholder_motclef = keyword[objIndex].value;
			keyword[objIndex].checked =false;
			toggleFilter(filterId);
		}

		console.log( 'statut checked:'+ keyword[objIndex].checked );

	};



	const inputOnChangeText = (e)=>{

		let objIndex = keyword.findIndex((obj => obj.name == 'BT_FILTRES_KEYWORD'));


		keyword[objIndex].value = e;


	}

	let objIndex = keyword.findIndex((obj => obj.name == 'BT_FILTRES_KEYWORD'));
	let plholder_motclef;
	const titre_motclef = global.i18n.t('TITRE_MOTS_CLEFS')

	if(keyword[objIndex].checked === true ){
		plholder_motclef = keyword[objIndex].value;
	}else{

		plholder_motclef = global.i18n.t('DESC_MOTS_CLEFS')

	}


	return (
	<View>
	<View style={filter.filterTitleContainer}>
	<Image style={filter.filterTitleIcon} source={messageIcon} />
	<TextCustom fontType="medium" style={filter.filterTitleText}>{titre_motclef}</TextCustom>
	</View>

	{keyword.map((keyword, i) => (
		<View style={filter.filterBtnWrapper} key={keyword.name}>


		<TextInput

style={contact.inputMessage}



placeholderTextColor="#aaa"

		onChangeText={inputOnChangeText}

		onEndEditing={() => handlePress(i)}

		placeholder={plholder_motclef}

		></TextInput>


		</View>
		))}
	</View>
	)
	/*
	//placeholder={() => getPlaceholder()}
<TouchableOpacity
			onPress={() => handlePress(i)}
			style={filter.filterBtnContainer}
			activeOpacity={1}></TouchableOpacity>


							<TouchableOpacity
			onPress={() => handlePress(i)}
			style={filter.filterBtnContainer}
			activeOpacity={1}
			></TouchableOpacity>

return (
	<View>
	<View style={filter.filterTitleContainer}>
		<Image style={filter.filterTitleIcon} source={criteriaIcon} />
		<TextCustom fontType="medium" style={filter.filterTitleText}>{global.i18n.t('TITRE_FILTRES_CRITERES')}</TextCustom>
	</View>
	<View style={filter.filterBtnWrapper}>
		{criteria.map((critere, i) => (
		<View style={filter.filterBtnMainContainer} key={critere.name}>
			<TouchableOpacity
			onPress={() => handlePress(i)}
			style={filter.filterBtnContainer}
			activeOpacity={1}
			>
			<View
				style={critere.checked
				? filter.checkedIconContainer
				: filter.uncheckedIconContainer}
			>
				<Image source={critere.icon} style={filter.filterBtnIcon} />
			</View>
			<TextCustom
				style={critere.checked
				? filter.checkedFilterBtnLabel
				: filter.uncheckedFilterBtnLabel}
			>
				{global.i18n.t(critere.name)}
			</TextCustom>
			</TouchableOpacity>
		</View>
		))}
	</View>
	</View>
);*/
};

// == Validation
Keyword.propTypes = {
keyword: PropTypes.array.isRequired,
toggleFilter: PropTypes.func.isRequired,
};

// == Export
export default Keyword;
