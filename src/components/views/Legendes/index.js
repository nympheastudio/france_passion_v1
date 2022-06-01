/* eslint-disable no-unused-vars */
// == Import npm
import React from 'react';
import { ScrollView, View, Image } from 'react-native';

// == Import styles
import { legendes } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';

// == Import icons
import vigneronIcon from '@styles/images/icon-vigneron-gris/icon-vigneron-gris.png';
import fermierIcon from '@styles/images/icon-fermier-gris/icon-fermier-gris.png';
import autresIcon from '@styles/images/icon-autres-gris/icon-autres-gris.png';
import vigneronIndeIcon from '@styles/images/logo-vigneron-independant/logo-vigneron-independant.png';
import bafIcon from '@styles/images/picto-baf/picto-baf.png';
import parkingIcon from '@styles/images/icon-parking/icon-parking.png';
import timeIcon from '@styles/images/icon-time-gris/icon-time-gris.png';
import grandsccIcon from '@styles/images/icon-grands_cc-gris/icon-grands_cc-gris.png';
import treesIcon from '@styles/images/icon-trees-gris/icon-trees-gris.png';
import trashIcon from '@styles/images/icon-trash-gris/icon-trash-gris.png';
import forbiddenIcon from '@styles/images/icon-forbidden-gris/icon-forbidden-gris.png';
import handicapIcon from '@styles/images/picto-handicap-lg/picto-handicap-lg.png';
import eauIcon from '@styles/images/icon-eau/icon-eau.png';
import wcIcon from '@styles/images/icon-wc-gris/icon-wc-gris.png';
import bioIcon from '@styles/images/icon-bio/icon-bio.png';
import cutleryIcon from '@styles/images/icon-cutlery-gris/icon-cutlery-gris.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import TopContent from './TopContent';
import LegendItem from './LegendItem';

// == Composant
const Legendes = () => (
  <ScrollView style={legendes.mainContainer}>
    <TextCustom fontType="bold" style={[text, titre3, legendes.titleText]}>
      {global.i18n.t('TITRE_LEGENDES')}
    </TextCustom>
    <View style={legendes.itemsContainer}>
      <LegendItem icon={vigneronIcon} label={global.i18n.t('TEXTE_LEGENDE_VIGNERON')} />
      <LegendItem icon={fermierIcon} label={global.i18n.t('TEXTE_LEGENDE_FERMIER')} />
      <LegendItem icon={autresIcon} label={global.i18n.t('TEXTE_LEGENDE_AUTRE_ACTIVITE')} />
      <LegendItem icon={vigneronIndeIcon} label={global.i18n.t('TEXTE_LEGENDE_VIGNERON_INDE')} />
      <LegendItem icon={bafIcon} label={global.i18n.t('TEXTE_LEGENDE_BIENVENUE')} />
      <LegendItem icon={parkingIcon} label={global.i18n.t('TEXTE_LEGENDE_PLACES_DISPO')} />
      <LegendItem icon={timeIcon} label={global.i18n.t('TEXTE_LEGENDE_HEURE_ARRIVEE')} />
      <LegendItem icon={forbiddenIcon} label={global.i18n.t('TEXTE_LEGENDE_FERMER_DU_AU')} />
      <LegendItem icon={grandsccIcon} label={global.i18n.t('TEXTE_LEGENDE_ACCESS_GRANDS_CC')} />
      <LegendItem icon={treesIcon} label={global.i18n.t('TEXTE_LEGENDE_OMBRAGE')} />
      <LegendItem icon={trashIcon} label={global.i18n.t('TEXTE_LEGENDE_POUBELLE')} />
      <LegendItem icon={handicapIcon} label={global.i18n.t('TEXTE_LEGENDE_TOURISME_HANDICAP')} />
      <LegendItem icon={eauIcon} label={global.i18n.t('TEXTE_LEGENDE_EAU')} />
      <LegendItem icon={wcIcon} label={global.i18n.t('TEXTE_LEGENDE_WC')} />
      <LegendItem icon={bioIcon} label={global.i18n.t('TEXTE_LEGENDE_BIO')} />
      <LegendItem icon={cutleryIcon} label={global.i18n.t('TEXTE_LEGENDE_REPAS_SUR_PLACE')} />
    </View>
  </ScrollView>
);

// == Export
export default Legendes;
