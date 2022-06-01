// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-native-map-link';

// == Import

// == Composant
const PopUpMap = ({
  isVisible,
  setIsVisible,
  marker,
  location,
}) => (
  <Popup
    isVisible={isVisible}
    onCancelPressed={() => setIsVisible(false)}
    onAppPressed={() => setIsVisible(false)}
    onBackButtonPressed={() => setIsVisible(false)}
    modalProps={{
      animationIn: 'slideInUp',
    }}
    // appsWhiteList={['google-maps', 'apple-maps', 'waze']}
    appsWhiteList={[]}
    options={{
      latitude: marker.latitude,
      longitude: marker.longitude,
      alwaysIncludeGoogle: true,
      title: `${marker.nom_propriete}, ${marker.ville}`,
      sourceLatitude: location.latitude,
      sourceLongitude: location.longitude,
      dialogTitle: global.i18n.t('TITRE_FICHE_GPS_LANCER_ITINERAIRE'),
      dialogMessage: global.i18n.t('MESSAGE_FICHE_GPS_CHOISIR_APP'),
      cancelText: global.i18n.t('BT_FICHE_GPS_ANNULER'),
    }}
    style={{
      container: {},
      itemContainer: {},
      image: {},
      itemText: { fontFamily: 'Poppins-Bold' },
      headerContainer: {},
      titleText: {
        fontFamily: 'Poppins-Bold',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'left',
        marginBottom: -10,
        color: '#13131D',
      },
      subtitleText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        textAlign: 'left',
        color: '#999',
      },
      cancelButtonContainer: {},
      cancelButtonText: {
        fontFamily: 'Poppins-Regular',
        letterSpacing: 1,
        fontWeight: 'normal',
        color: '#999',
      },
      separatorStyle: {},
      activityIndicatorContainer: {},
    }}
  />
);

// == Validation
PopUpMap.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  marker: PropTypes.object.isRequired,
  location: PropTypes.object,
};

PopUpMap.defaultProps = {
  location: null,
};

// == Export
export default PopUpMap;
