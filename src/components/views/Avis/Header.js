// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Import styles
import { avis } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';

// == Composant
const Header = ({ reviews }) => (
  <>
    <TextCustom fontType="bold" style={[text, titre3]}>
      {global.i18n.t('TITRE_MES_AVIS')}
    </TextCustom>
    <TextCustom fontType="medium" style={avis.subTitle}>
      {`${reviews.length} ${global.i18n.t('TEXTE_AVIS_DEPOSES')}${reviews.length > 1 ? 's' : ''}`}
    </TextCustom>
  </>
);

// == Validation
Header.propTypes = {
  reviews: PropTypes.array.isRequired,
};

// == Export
export default Header;
