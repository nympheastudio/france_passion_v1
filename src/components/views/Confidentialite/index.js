// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Cms from '@containers/partials/Cms';


// == Composant
const Confidentialite = ({ token, deviceId, language }) => (
  <Cms token={token} deviceId={deviceId} language={language} pageType="rgpd" />
);

Confidentialite.propTypes = {
  token: PropTypes.string.isRequired,
  deviceId: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

// == Export
export default Confidentialite;
