/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// == Import styles
import { compte } from '@styles/Themes';

// == Import components
import TopContent from './TopContent';
import BottomContent from './BottomContent';

// == Import test data
// eslint-disable-next-line no-unused-vars
import myFakeReviews from './data';

// == Composant
const Compte = ({ user, reviews, logout }) => (
  <View style={compte.compteMainContainer}>
    <TopContent user={user} logout={logout}  />
    <BottomContent logout={logout} reviews={reviews} />
    {/* <BottomContent logout={logout} reviews={reviews.length === 0 ? myFakeReviews : reviews} /> */}
  </View>
);

// == Validation
Compte.propTypes = {
  user: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  logout: PropTypes.func.isRequired,
};

Compte.defaultProps = {
  reviews: [],
};

// == Export
export default Compte;
