// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from 'react-native';

// == Import styles
import { modal } from '@styles/Themes';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Composant
const LanguageBtn = ({
  language,
  setLanguage,
  icon,
  label,
  value,
}) => {
  const handlePress = () => {
    setLanguage(value);
  };
  const isSelected = language === value;
  return (
    <TouchableOpacity style={modal.modalOptionContainer} onPress={handlePress} activeOpacity={1}>
      <View style={isSelected ? modal.activeIcon : modal.inactiveIcon}>
        <Image source={icon} />
      </View>
      <TextCustom style={isSelected ? modal.activeText : modal.inactiveText}>
        {label}
      </TextCustom>
    </TouchableOpacity>
  );
};

// == Validation
LanguageBtn.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  icon: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// == Export
export default LanguageBtn;
