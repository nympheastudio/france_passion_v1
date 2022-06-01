// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { filter } from '@styles/Themes';

// == Import icon
import criteriaIcon from '@styles/images/icon-filter-lg-bleu/icon-filter-lg-bleu.png';

// == Composant
const Criteria = ({ criteria, toggleFilter }) => {
  const handlePress = (filterId) => {
    toggleFilter(filterId);
  };
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
  );
};

// == Validation
Criteria.propTypes = {
  criteria: PropTypes.array.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

// == Export
export default Criteria;
