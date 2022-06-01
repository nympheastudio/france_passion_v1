// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// == Import styles
import { fiche } from '@styles/Themes';

// == Import route views
import Galery from '@containers/views/Fiche/galery';
import Review from '@containers/views/Fiche/review';
import Info from '@containers/views/Fiche/info';

// == Import components
import MyTabBar from './MyTabBar';

// == Composant
const MyTabView = ({ marker }) => {
  const [currentTab, setCurrentTab] = useState('info');

  const changeTab = (newTab) => {
    if (newTab !== currentTab) {
      setCurrentTab(newTab);
    }
  };

  return (
    <View style={{ minHeight: '100%' }}>
      <MyTabBar currentTab={currentTab} changeTab={changeTab} />
      <View style={fiche.tabViewSceneContainer}>
        {currentTab === 'info' && <Info marker={marker} />}
        {currentTab === 'review' && <Review marker={marker} />}
        {currentTab === 'galery' && <Galery marker={marker} />}
      </View>
    </View>
  );
};

// == Validation
MyTabView.propTypes = {
  marker: PropTypes.object,
};

MyTabView.defaultProps = {
  marker: {},
};

// == Export
export default MyTabView;
