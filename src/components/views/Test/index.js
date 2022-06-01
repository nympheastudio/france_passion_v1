/* eslint-disable object-curly-newline */
// Import node modules
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

const Test = ({ logout, generateError }) => {
  const handleLogoutPress = () => {
    logout();
  };
  const handleErrorPress = () => {
    generateError(500);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextCustom fontType="medium" style={{ fontSize: 20, marginBottom: 50 }}>Page en construction !</TextCustom>
      <TouchableOpacity
        onPress={handleLogoutPress}
        style={{ margin: 15, backgroundColor: '#ED125F', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 50 }}
      >
        <TextCustom style={{ color: 'white' }}>Déconnexion</TextCustom>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleErrorPress}
        style={{ margin: 15, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 50 }}
      >
        <TextCustom style={{}}>Nouvelle erreur</TextCustom>
      </TouchableOpacity>
    </View>
  );
};

// Validation
Test.propTypes = {
  logout: PropTypes.func.isRequired,
  generateError: PropTypes.func.isRequired,
};

// Export
export default Test;
