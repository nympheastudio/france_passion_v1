/* eslint-disable react/prop-types */
// == Import npm
import * as WebBrowser from 'expo-web-browser';

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, Alert, Linking, Platform } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
// Import routes
import {
  PAGE_REGLES_OR,
  PAGE_RDV_FESTIFS,
  PAGE_CONTACT,
  PAGE_MENTIONS_LEGALES,
  PAGE_CONFIDENTIALITE,
  PAGE_LEGENDES,
} from '@components/navigations/routes';

// Import services
import { removeHostsDataStored, checkHostExpiration } from '@services/AsyncStorage/host';
import { getDeviceInfo } from '@services/Device';
import { loadLocalHosts } from '@actions/host';
// Import icones
import iconClipboard from '@styles/images/icon-clipboard-noir/icon-clipboard-noir.png';
import iconEnvelope from '@styles/images/icon-envelope-noir/icon-envelope-noir.png';
import iconInfo from '@styles/images/icon-info_outline-noir/icon-info_outline-noir.png';
import iconLock from '@styles/images/icon-lock-noir/icon-lock-noir.png';
import iconHelp from '@styles/images/icon-help_outline-noir/icon-help_outline-noir.png';
import iconTime from '@styles/images/icon-update/icon-update.png';
import calendarIcon from '@styles/images/icon-calendar_alt-noir/icon-calendar_alt-noir.png';
import iconMapNoirePlus from '@styles/images/icon-map-noire-plus/icon-map-noire-plus.png';

// Import styles
import { tabNavigator } from '@styles/Themes';

// Import components
import SubMenuItem from './SubMenuItem';
import {expo} from '../../../../../../app.json';
import { API_KEY,SERVER_URL  } from '@app/app.config';



// == Composant
const SubMenu = ({ navigation, subMenuIsOpen, loadLocalHostsFn, deviceId }) => {
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const animationValue = useRef(new Animated.Value(1000)).current;
  const setAnimationValue = (height) => {
    setSubMenuHeight(height);
    animationValue.setValue(height);
  };



  const getOs = () => {
    return Platform.Version;

  }

  const getDate = () => {
    


    return new Date().getTime();

    
  }

  function getHour() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var time = hour + ':' + min + ':' + sec;
    return time;
  }

  const getDevice = () => {
    return getDeviceInfo();
  }


  const toggleSubMenu = () => {
    Animated.timing(
      animationValue, {
        toValue: subMenuIsOpen ? 0 : subMenuHeight,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true
      },
    ).start();
  };

  useEffect(() => {
    toggleSubMenu();
  }, [subMenuIsOpen]);



  const showConfigAlert = (d) => {
    //getDeviceInfo();
console.log(JSON.stringify(Platform));
		Alert.alert(
		'INFORMATION',
		'Nom :' + expo.name +
		'\n Version N° :'+ expo.version+
	  //'\n DeviceId :'+ d +
    '\n OS :'+ Platform.OS +' ' +Platform.Version +
    '\n Modèle :'+ Platform.__constants.Model +' ' +
    '\n Empreinte :'+ Platform.__constants.Fingerprint +' '
    + '\n Build OS: MacOS BigSur '
    + '\n URL Serveur :'
    + SERVER_URL 





    ,
		[
		{
text: 'OK',
		},
		],
		{ cancelable: false }
		);


  }

  const infodev = 'Info';
 

  return (
    <Animated.View
      style={[tabNavigator.subMenuContainer, { transform: [{ translateY: animationValue }] }]}
      onLayout={(event) => setAnimationValue(event.nativeEvent.layout.height || 400)}
    >
      <SubMenuItem
        title={global.i18n.t('BT_PLUS_RDVFESTIFS')}
        image={calendarIcon}
        navigationTo={() => navigation.navigate(PAGE_RDV_FESTIFS)}
      />
      <Divider style={tabNavigator.subMenuDivider} />
	  <SubMenuItem
        title={global.i18n.t('BT_PLUS_REGLES_OR')}
        image={iconClipboard}
        navigationTo={() => navigation.navigate(PAGE_REGLES_OR)}
      />
      <Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={global.i18n.t('BT_PLUS_CONTACT_FP')}
        image={iconEnvelope}
        navigationTo={() => navigation.navigate(PAGE_CONTACT)}
      />
      <Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={global.i18n.t('BT_PLUS_MENTIONS_LEGALES')}
        image={iconInfo}
        navigationTo={() => navigation.navigate(PAGE_MENTIONS_LEGALES)}
      />
      <Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={global.i18n.t('BT_PLUS_CONFIDENTIALITE')}
        image={iconLock}
        navigationTo={() => navigation.navigate(PAGE_CONFIDENTIALITE)}
      />
      <Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={global.i18n.t('TITRE_LEGENDES')}
        image={iconHelp}
        navigationTo={() => navigation.navigate(PAGE_LEGENDES)}
      />

	 <Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={global.i18n.t('BT_PLUS_PROPOSER_ETAPE')}
        image={iconMapNoirePlus}
		navigationTo={() => {
			//console.log('Open page proposer etape !');
			loadInBrowser()}
		}


      />

      <Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={global.i18n.t('BT_PLUS_MAJ_HOSTS')}
        image={iconTime}
        navigationTo={() => {
        //  checkHostExpiration().then(() => {
            removeHostsDataStored().then(() => {
              loadLocalHostsFn()
              showUpdateAlert()
            });
         //  });
        }}
      />

<Divider style={tabNavigator.subMenuDivider} />
      <SubMenuItem
        title={infodev}
        image={iconInfo}
        navigationTo={() => {
          showConfigAlert();
        }}
      />



    </Animated.View>
  );
};

/*

origin :
checkHostExpiration().then(() => {
            removeHostsDataStored().then(() => {
              loadLocalHostsFn()
              showUpdateAlert()
            });
           })

remplacement :

removeHostsDataStored().then(() => {
            loadLocalHostsFn()
            showUpdateAlert()
          });

		   */
const loadInBrowser = () => {

	// WebBrowser.openBrowserAsync('https://www.france-passion.com/accueillants-footer/parrainer-futur-accueillant');
	/*
	 Alert.alert(
    'test',
    'test successfully!',
    [
      {
        text: 'OK',
      },
    ],
    { cancelable: false }
  );*/
   Linking.openURL('https://www.france-passion.com/accueillants-footer/parrainer-futur-accueillant').catch(err => console.error("Couldn't load page", err));
  };

//const titre = {global.i18n.t( 'TITRE_CACHE_VIDE' )};
const showUpdateAlert = () => {
  Alert.alert(
    
    global.i18n.t( 'TITRE_CACHE_VIDE' ) ,
    global.i18n.t( 'MSG_CACHE_VIDE' ) ,
    [
      {
        text: 'OK',
      },
    ],
    { cancelable: false }
  );
}

SubMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
});


const mapDispatchToProps = (dispatch) => ({
  loadLocalHostsFn: () => {
    dispatch(loadLocalHosts());
  },
});

const SubMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubMenu);

// == Export
export default SubMenuContainer;
