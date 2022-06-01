/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';

// == Import style
import { infos } from '@styles/Themes/fiche/routes/infos';

// == Import icons
// import errorCircleIcon from '@styles/images/icon-error_circle-bleu/icon-error_circle-bleu.png';
import bellIcon from '@styles/images/icon-bell-blue/icon-bell-blue.png';
import errorCircleIcon from '@styles/images/icon-info_outline-pink/icon-info_outline-pink.png';
import homeIcon from '@styles/images/icon-home-bleu/icon-home-bleu.png';
import sunIcon from '@styles/images/icon-sun-bleu/icon-sun-bleu.png';
import bagIcon from '@styles/images/icon-shopping_bag-bleu/icon-shopping_bag-bleu.png';
import cameraIcon from '@styles/images/icon-camera-bleu/icon-camera-bleu.png';
import chalkboardIcon from '@styles/images/icon-chalkboard-bleu/icon-chalkboard-bleu.png';
import calendarIcon from '@styles/images/icon-calendar_alt-bleu/icon-calendar_alt-bleu.png';
import messageIcon from '@styles/images/icon-message_rounded_alt-bleu/icon-message_rounded_alt-bleu.png';
import linkIcon from '@styles/images/icon-link-bleu/icon-link-bleu.png';
import targetIcon from '@styles/images/icon-target_lock-bleu/icon-target_lock-bleu.png';
import vanIcon from '@styles/images/icon-van-bleu/icon-van-bleu.png';
// import errorIcon from '@styles/images/icon-error-bleu/icon-error-bleu.png';
import forbiddenIcon from '@styles/images/icon-forbidden-gris/icon-forbidden-gris.png';
import userIcon from '@styles/images/icon-user-bleu/icon-user-bleu.png';


// == Import comonents
import TextCustom from '@components/partials/TextCustom';
import InfoItem from './InfoItem';




//<InfoItem name="Statut Etape " item={marker.etape_fermee} icon={linkIcon} /> 
	
// == Composant
const Information = ({ marker }) => (
  <>
    {
      ((marker.date_accueil && global.i18n.locale === 'fr')
      || (marker.date_accueil_en && global.i18n.locale !== 'fr'))
      && (
        <View style={infos.infoAccueilContainer}>
          <Image style={infos.infoAccueilImage} source={forbiddenIcon} />
          <TextCustom style={infos.infoAccueilText}>
            {global.i18n.locale === 'fr'
              ? marker.date_accueil
              : marker.date_accueil_en}
          </TextCustom>
        </View>
      )
    }
    <Divider style={infos.infoDivider} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_FLASH_INFO')} item={marker.flash_info} icon={bellIcon} />
    {global.i18n.locale === 'fr' && <InfoItem name={global.i18n.t('TITRE_FICHE_INFORMATIONS')} item={marker.informations_fr} icon={errorCircleIcon} />}
    {global.i18n.locale === 'en' && <InfoItem name={global.i18n.t('TITRE_FICHE_INFORMATIONS')} item={marker.informations_en} icon={errorCircleIcon} />}
    {global.i18n.locale === 'de' && <InfoItem name={global.i18n.t('TITRE_FICHE_INFORMATIONS')} item={marker.informations_de} icon={errorCircleIcon} />}
    <InfoItem name={global.i18n.t('TITRE_FICHE_EXPLOITATION')} item={marker.exploitation} icon={homeIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_DATE_ACCUEILLANT')} item={marker.accueillant_depuis.replace('.jpg','')} icon={userIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_AIRE_ACCUEIL')} item={marker.aire_accueil} icon={sunIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_PRODUITS')} item={marker.produits_fiche} icon={bagIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_ACTIVITES_SUR_PLACE')} item={marker.activites_description} icon={cameraIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_COURS_STAGE')} item={marker.cours} icon={chalkboardIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_EVENEMENTS')} item={marker.evenements} icon={calendarIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_LANGUES')} item={marker.langues} icon={messageIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_SITE_WEB')} item={marker.site} icon={linkIcon} />
    <InfoItem name={global.i18n.t('TITRE_FICHE_COORDONNEES_GPS')} item={{ latitude: marker.latitude, longitude: marker.longitude }} icon={targetIcon} />
	
	<InfoItem name={global.i18n.t('TITRE_RDV_FESTIFS')} item={marker.rdv} icon={calendarIcon} />
	<InfoItem name={global.i18n.t('TITRE_STATUT_ETAPE')} item={(() => {
        switch (marker.etape_fermee) {
          case '1':   return global.i18n.t('TITRE_STATUT_FERME');

          default:      return global.i18n.t('TITRE_STATUT_OUVERT') ;//marker.etape_fermee;
        }
      })()} icon={linkIcon} /> 
	
	
    {global.i18n.locale === 'fr' && <InfoItem name={global.i18n.t('TITRE_FICHE_COMMENT_VENIR')} item={marker.indication_fr} icon={vanIcon} marker={marker} />}
    {global.i18n.locale === 'en' && <InfoItem name={global.i18n.t('TITRE_FICHE_COMMENT_VENIR')} item={marker.indication_en} icon={vanIcon} marker={marker} />}
    {global.i18n.locale === 'de' && <InfoItem name={global.i18n.t('TITRE_FICHE_COMMENT_VENIR')} item={marker.indication_de} icon={vanIcon} marker={marker} />}
	
    {/* <InfoItem name="Informations erronées ?" item="Signalez-nous si des informations sont erronées sur l'étape " icon={errorIcon} marker={marker} /> */}

  </>
);

// == Validation
Information.propTypes = {
  marker: PropTypes.object.isRequired,
};

// == Export
export default Information;
