// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

// == Import styles
import { tabNavigator } from '@styles/Themes';

// == Import tabs
import Etape from './Etape';
import Favoris from './Favoris';
import Compte from './Compte';
import Plus from './Plus';
import SubMenu from './SubMenu';

// == Composant
const MyTabBar = ({ navigation, state }) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  // Permet le fermeture du menu plus à chaque changement de view
  useEffect(() => {
    setSubMenuIsOpen(false);
  }, [state.index]);

  return (
    <>
      {/* Fermeture du menu Plus au Touch e ndehors de celui ci */}
      {subMenuIsOpen && (
        <TouchableWithoutFeedback onPress={() => setSubMenuIsOpen(false)}>
          <View style={{ position: 'absolute', height: '100%', width: '100%' }} opacity={0} />
        </TouchableWithoutFeedback>
      )}
      <View>
        <SubMenu
          navigation={navigation}
          state={state}
          subMenuIsOpen={subMenuIsOpen}
          setSubMenuIsOpen={setSubMenuIsOpen}
        />
      </View>
      <View style={tabNavigator.tabContainer}>
        {/** Fix submenu is revealed at the bottom **/}
        <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 100, backgroundColor: '#fff' }} />
        <Etape navigation={navigation} state={state} />
        <Favoris navigation={navigation} state={state} />
        <Compte navigation={navigation} state={state} />
        <Plus state={state} toggleSubMenu={() => setSubMenuIsOpen(!subMenuIsOpen)} />
      </View>
    </>
  );
};

// == Validation
MyTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

// == Export
export default MyTabBar;
