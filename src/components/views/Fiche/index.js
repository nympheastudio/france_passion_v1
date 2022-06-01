// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// == Import styles
import { fiche } from '@styles/Themes';

// == Import component
import FicheTop from '@containers/views/Fiche/FicheTop';
import MyTabView from './MyTabView';

// == Composant
const Fiche = ({ marker }) => {
  const isFocused = useIsFocused();

  // On ne monté pas le composant dans ces 2 conditions
  if (!marker || !isFocused) {
    return (null);
  }

  return (
    <ScrollView
      style={fiche.ficheScrollViewContainer}
      contentContainerStyle={{ minHeight: '100%' }}
    >
      <FicheTop marker={marker} />
      <MyTabView marker={marker}  />
    </ScrollView>
  );
};

// == Validation
Fiche.propTypes = {
  marker: PropTypes.object,
};

Fiche.defaultProps = {
  marker: null,
};

// == Export
export default Fiche;
