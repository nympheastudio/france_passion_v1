// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { filter } from '@styles/Themes';

// == Import icon
import bagIcon from '@styles/images/icon-shopping_bag-bleu/icon-shopping_bag-bleu.png';

// == Composant
const Categories = ({ categories, toggleFilter }) => {
  const handlePress = (filterId) => {
   //console.log(filterId);
	toggleFilter(filterId);
	
  };
  
  /*
  const inputOnChangeText = (e)=>{
	window["keyword_match"] = 0;
	window["keyword"] = e; //it's not recommended, todo => use context
	
}

*/


  return (
    <View>
	


	
	
      <View style={filter.filterTitleContainer}>
        <Image style={filter.filterTitleIcon} source={bagIcon} />
        <TextCustom fontType="medium" style={filter.filterTitleText}>{global.i18n.t('TITRE_FILTRES_CATEGORIES')}</TextCustom>
      </View>

      <View style={filter.filterBtnWrapper}>
        {categories.map((category, i) => (
          <View style={filter.filterBtnMainContainer} key={category.name}>
            <TouchableOpacity
              onPress={() => handlePress(i)}
              style={filter.filterBtnContainer}
              activeOpacity={1}
            >
              <View
                style={category.checked
                  ? filter.checkedIconContainer
                  : filter.uncheckedIconContainer}
              >
                <Image source={category.icon} style={filter.filterBtnIcon} />
              </View>
              <TextCustom
                style={category.checked
                  ? filter.checkedFilterBtnLabel
                  : filter.uncheckedFilterBtnLabel}
              >
                {global.i18n.t(category.name)}
              </TextCustom>
            </TouchableOpacity>
          </View>
        ))}
      </View>

    </View>
  );
};

// == Validation
Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

// == Export
export default Categories;
