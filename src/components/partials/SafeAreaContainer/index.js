// == Import npm
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

// == Import style
import { safeAreaViewTop, safeAreaViewBottom, safeAreaViewBottomCarousel } from '@styles/Themes/interfaces/safeAreaView';

// == Composant
const SafeAreaContainer = ({ children, isCarouselActive }) => (
  <>
    <SafeAreaView style={safeAreaViewTop} />
    <SafeAreaView style={isCarouselActive ? safeAreaViewBottomCarousel : safeAreaViewBottom}>
      <StatusBar backgroundColor={safeAreaViewTop.backgroundColor} barStyle="light-content" />
      {children}
    </SafeAreaView>
  </>
);

// == Validation
SafeAreaContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isCarouselActive: PropTypes.bool.isRequired,
};

// == Export
export default SafeAreaContainer;
