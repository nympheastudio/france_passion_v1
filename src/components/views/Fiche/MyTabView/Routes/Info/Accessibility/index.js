/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

// == Import styles
import { infos } from '@styles/Themes/fiche/routes/infos';

// == Import icons
import grandsccIcon from '@styles/images/icon-grands_cc-gris/icon-grands_cc-gris.png';
import eauIcon from '@styles/images/icon-eau/icon-eau.png';
import wcIcon from '@styles/images/icon-wc-gris/icon-wc-gris.png';
import trashIcon from '@styles/images/icon-trash-gris/icon-trash-gris.png';
import treesIcon from '@styles/images/icon-trees-gris/icon-trees-gris.png';
import cutleryIcon from '@styles/images/icon-cutlery-gris/icon-cutlery-gris.png';
import bioIcon from '@styles/images/icon-bio/icon-bio.png';
import bafIcon from '@styles/images/picto-baf/picto-baf.png';
import handicapIcon from '@styles/images/picto-handicap-lg/picto-handicap-lg.png';
import vigneronIcon from '@styles/images/logo-vigneron-independant/logo-vigneron-independant.png';
import phoneIcon from '@styles/images/icon-phone-dark/icon-phone-dark.png';

// == Import services
import { callHost } from '@services/Fiche';

// == Import components
import PictoItem from './PictoItem';

// == Composant
const Accessibility = ({ marker }) => {
  const handlePhonePress = () => {
    callHost(marker.telephone);
  };
  return (
    <View style={infos.accessibilityContainer}>
      <View style={infos.accessibilityPictoItemsContainer}>
        <PictoItem info={marker.grand_camping_car} icon={grandsccIcon} />
        <PictoItem info={marker.point_eau} icon={eauIcon} />
        <PictoItem info={marker.wc} icon={wcIcon} />
        <PictoItem info={marker.poubelle} icon={trashIcon} />
        <PictoItem info={marker.ombrage} icon={treesIcon} />
        <PictoItem info={marker.repas_sur_place} icon={cutleryIcon} />
        <PictoItem info={marker.bio} icon={bioIcon} />
        <PictoItem info={marker.baf} icon={bafIcon} />
        <PictoItem info={marker.handicap} icon={handicapIcon} />
        <PictoItem info={marker.label_vigneron} icon={vigneronIcon} />
      </View>
      {marker.telephone && (
        <TouchableOpacity style={infos.accessibilityPhoneBtn} onPress={handlePhonePress}>
          <Image source={phoneIcon} style={infos.accessibilityPhoneIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

// == Validation
Accessibility.propTypes = {
  marker: PropTypes.object.isRequired,
};

// == Export
export default Accessibility;
