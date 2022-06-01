/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {useNavigationState} from '@react-navigation/native';
 
// == Import routes
import { PAGE_CONTACT } from '@components/navigations/routes';

// == Import style
import { infos } from '@styles/Themes/fiche/routes/infos';

// == Import icons
// import arrowRightIcon from '@styles/images/icon-arrow_right-sm-gris/icon-arrow_right-sm-gris.png';

// == Import services
import { openLink } from '@services/Fiche'; 

// == Import components
import TextCustom from '@components/partials/TextCustom';
import MapItem from './MapItem';



// == Composant
const InfoItem = ({ name, item, icon, marker }) => {
  const navigation = useNavigation();

  const state = useNavigationState(state => state);
const routeName = (state.routeNames[state.index]);
//console.log(state.params);
  const Container = (name === global.i18n.t('TITRE_FICHE_SITE_WEB')) ? TouchableOpacity : View;

 //console.log( navigation.state.routeName );
//console.log(navigation.state); 
  
  const specificItem = [
    global.i18n.t('TITRE_FICHE_INFORMATIONS'),
    global.i18n.t('TITRE_FICHE_COORDONNEES_GPS'),
    'Informations erronées ?',
    global.i18n.t('TITRE_FICHE_LANGUES'),
  ];

  const handlePress = () => {
    switch (name) {
      case global.i18n.t('TITRE_FICHE_SITE_WEB'):
        openLink(item);
        break;
      case 'Informations erronées ?':
        navigation.navigate(PAGE_CONTACT, { hostId: marker.id });
        break;
      default:
        break;
    }
  };

  if (!item || item[0] === '' || (name === global.i18n.t('TITRE_FICHE_DATE_ACCUEILLANT') && item.length < 4)) {
    return null;
  }

  return (
    <>
      <Container onPress={handlePress}>
        <View style={infos.infoItemTitleContainer}>
          <Image source={icon} style={infos.infoItemTitleIcon} />
          <TextCustom
            fontType="medium"
            style={
              name === global.i18n.t('TITRE_FICHE_INFORMATIONS')
                ? { ...infos.infoItemTitleText, color: '#ED125F' }
                : infos.infoItemTitleText
                }
          >
            {name}
          </TextCustom>
        </View>
        <View>
		

  
  
          {name === global.i18n.t('TITRE_FICHE_COORDONNEES_GPS') && (
            <>
              <TextCustom selectable style={{ ...infos.infoItemBasicContent, marginBottom: 0 }}>
                {global.i18n.t('TEXTE_FICHE_LATITUDE')} : {item.latitude}
              </TextCustom>
              <TextCustom selectable style={infos.infoItemBasicContent}>
                {global.i18n.t('TEXTE_FICHE_LONGITUDE')} : {item.longitude}
              </TextCustom>
            </>
          )}

          {name === global.i18n.t('TITRE_FICHE_LANGUES') && (
            <TextCustom style={{ ...infos.infoItemBasicContent, textTransform: 'uppercase' }}>
              {item.map((lang) => lang)}
            </TextCustom>
          )}

          {name === global.i18n.t('TITRE_FICHE_INFORMATIONS') && (
            <TextCustom style={{ ...infos.infoItemBasicContent, color: '#ED125F' }}>{item}</TextCustom>
			 
			
          )}
		  
		
			 
			
         

          {!specificItem.includes(name) && (
            <TextCustom style={infos.infoItemBasicContent}>{item}</TextCustom>
          )}
		  
		  
 
		   
		   
        </View>
      </Container>
      {name === global.i18n.t('TITRE_FICHE_COMMENT_VENIR')
        ? <MapItem marker={marker} />
        : name !== 'Informations erronées ?'
          ? <Divider style={infos.infoDivider} />
          : null}
    </>
  );
};

/*
		  
		
		  */
// == Validation
InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  icon: PropTypes.number.isRequired,
  marker: PropTypes.object,
};

InfoItem.defaultProps = {
  item: null,
  marker: null,
};

// == Export
export default InfoItem;
