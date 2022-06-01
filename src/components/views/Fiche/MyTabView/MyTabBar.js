// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ScrollView } from 'react-native';

// == Import style
import { fiche } from '@styles/Themes';

// == Import component
import TextCustom from '@components/partials/TextCustom';

// == Composant
const MyTabBar = ({ currentTab, changeTab }) => (
  <View style={fiche.tabBarMainContainer}>
    <ScrollView horizontal>
      <TouchableOpacity
        onPress={() => changeTab('info')}
        style={currentTab === 'info' ? fiche.tabBarBtnActive : fiche.tabBarBtn}
      >
        <TextCustom
          fontType="bold"
          style={currentTab === 'info' ? fiche.tabBarBtnTextActive : fiche.tabBarBtnTextInactive}
        >
          {global.i18n.t('BT_FICHE_TAB_INFOS')}
        </TextCustom>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeTab('review')}
        style={currentTab === 'review' ? fiche.tabBarBtnActive : fiche.tabBarBtn}
      >
        <TextCustom
          fontType="bold"
          style={currentTab === 'review' ? fiche.tabBarBtnTextActive : fiche.tabBarBtnTextInactive}
        >
          {global.i18n.t('BT_FICHE_TAB_AVIS')}
        </TextCustom>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeTab('galery')}
        style={currentTab === 'galery' ? fiche.tabBarBtnActive : fiche.tabBarBtn}
      >
        <TextCustom
          fontType="bold"
          style={currentTab === 'galery' ? fiche.tabBarBtnTextActive : fiche.tabBarBtnTextInactive}
        >
          {global.i18n.t('BT_FICHE_TAB_PHOTOS')}
        </TextCustom>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

// == Validation
MyTabBar.propTypes = {
  currentTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

// == Export
export default MyTabBar;
