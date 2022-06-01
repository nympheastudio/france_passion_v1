// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { filter } from '@styles/Themes';

// == Import icon
import messageIcon from '@styles/images/icon-message_rounded_alt-bleu/icon-message_rounded_alt-bleu.png';

// == Composant
const Languages = ({ languages, toggleFilter }) => {
  const handlePress = (filterId) => {
    toggleFilter(filterId);
  };
  return (
    <View>
      <View style={filter.filterTitleContainer}>
        <Image style={filter.filterTitleIcon} source={messageIcon} />
        <TextCustom fontType="medium" style={filter.filterTitleText}>{global.i18n.t('TITRE_FILTRES_LANGUES')}</TextCustom>
      </View>
      <View style={filter.filterBtnWrapper}>
        {languages.map((language, i) => (
          <View style={filter.langFilterBtnMainContainer} key={language.name}>
            <TouchableOpacity
              onPress={() => handlePress(i)}
              style={filter.filterBtnContainer}
              activeOpacity={1}
            >
              <View
                style={language.checked
                  ? filter.checkedIconContainer
                  : filter.uncheckedIconContainer}
              >
                <Image source={language.icon} style={filter.filterBtnIcon} />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

// == Validation
Languages.propTypes = {
  languages: PropTypes.array.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

// == Export
export default Languages;
