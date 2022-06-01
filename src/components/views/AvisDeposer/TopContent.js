/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
} from 'react-native';
import { Divider } from 'react-native-paper';

// == Import Styles
import { avisDeposer } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Composant
const TopContent = ({ marker }) => (
  <>
    <View style={avisDeposer.topMainContainer}>
      <TextCustom fontType="bold" style={[text, titre3]}>
        {global.i18n.t('TITRE_DEPOSER_AVIS')}
      </TextCustom>
      <View style={avisDeposer.topHostContainer}>
        <View style={avisDeposer.topHostImageContainer}>
          {marker.photos[0] !== undefined && (
            <Image source={{ uri: `${marker.photos[0].thumbnail_url}` }} style={avisDeposer.topHostImage} />
          )}
        </View>
        <View style={{ flex: 1 }}>
          <TextCustom numberOfLines={2} fontType="bold" style={avisDeposer.topHostCityText}>{`${marker.ville} (${marker.code_postal})`}</TextCustom>
          <TextCustom style={avisDeposer.topHostNameText}>{marker.nom}</TextCustom>
        </View>
      </View>
    </View>
    <Divider style={avisDeposer.divider} />
  </>
);

// == Validation
TopContent.propTypes = {
  marker: PropTypes.object.isRequired,
};

// == Export
export default TopContent;
