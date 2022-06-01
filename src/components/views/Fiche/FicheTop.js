/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { getDistance } from 'geolib';
import { useNavigation } from '@react-navigation/native';

// == Import styles
import { fiche } from '@styles/Themes';

// == Import icons
import leftArrowIcon from '@styles/images/icon-arrow_left-rose/icon-arrow_left-rose.png';
import heartRoseIcon from '@styles/images/icon-heart-rose/icon-heart-rose.png';
import heartBlancIcon from '@styles/images/icon-heart-blanc/icon-heart-blanc.png';
import parkingIcon from '@styles/images/icon-parking/icon-parking.png';
import timeIcon from '@styles/images/icon-time-gris/icon-time-gris.png';
import mapIcon from '@styles/images/icon-gps/icon-gps.png';
import vigneronIcon from '@styles/images/icon-vigneron-blanc/icon-vigneron-blanc.png';
import fermierIcon from '@styles/images/icon-fermier-blanc/icon-fermier-blanc.png';
import autresIcon from '@styles/images/icon-autres-blanc/icon-autres-blanc.png';
import defaultImg from '@styles/images/image-default-fiche/image-default-fiche.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import PopUpMap from '@containers/partials/PopUpMap';

// == Import services
import { openItinerary } from '@services/Fiche';


import { ActivityIndicator } from 'react-native';
import { Image as ImgLazy } from 'react-native-elements';

//<ImgLazy style={liste.cardTopBackgroundImage} source={{uri: img_rdv}} PlaceholderContent={<ActivityIndicator />} />


// == Composant
const FicheTop = ({
  marker,
  userLocation,
  user,
  saveUserFavorite,
  deleteUserFavorite,
}) => {
	
	
	//console.log(marker);
	
	
  const navigation = useNavigation();
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const isFavorite = user.favoris.includes(marker.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteUserFavorite(marker.id);
    } else {
      saveUserFavorite(marker.id);
    }
  };
  const handleBackBtnPress = () => {
    navigation.goBack();
	

  };
  const handleFavPress = (id) => {
    toggleFavorite(id);
  };
  const handleDistPress = () => {
    if (Platform.OS === 'ios') {
      setIsPopUpVisible(true);
    }
    if (Platform.OS === 'android') {
      openItinerary(marker);
    }
  };

  return (
    <>
      <View style={fiche.ficheTopContainer}>
        <View style={fiche.ficheTopImageContainer}>
          {marker.photos[0]
            ? (
              <>
                <ImgLazy style={fiche.ficheTopImage} source={{ uri: `${marker.photos[0].url}` }}  PlaceholderContent={<ActivityIndicator size="large" color="#144C95" />}  />
                <View style={fiche.ficheTopImageBg} />
              </>
            )
            : (
              <View style={fiche.ficheTopNoImage}>
                <Image style={fiche.ficheTopDefaultImage} source={defaultImg} />
              </View>
            )}

          {/* Back button */}
          <TouchableOpacity onPress={handleBackBtnPress} style={fiche.ficheTopBackBtn}>
            <Image style={fiche.ficheTopBackBtnIcon} source={leftArrowIcon} />
          </TouchableOpacity>

          {/* Fav button */}
          <TouchableOpacity
            onPress={handleFavPress}
            style={isFavorite ? fiche.ficheTopNoFavBtn : fiche.ficheTopFavBtn}
          >
            <Image source={isFavorite ? heartBlancIcon : heartRoseIcon} />
          </TouchableOpacity>

          {/* Parking & Time infos */}
          <View style={fiche.ficheTopParkTimeContainer}>
            <Image source={parkingIcon} style={fiche.ficheTopParkTimeIcon} />
            <TextCustom>{marker.parking}</TextCustom>
            {marker.horaires && (
              <>
                <Image source={timeIcon} style={fiche.ficheTopTimeIcon} />
                <TextCustom>{marker.horaires}</TextCustom>
              </>
            )}
          </View>

          {/* Distance button */}
          <View style={fiche.ficheTopDistContainer}>
            <TouchableOpacity style={fiche.ficheTopDistImageContainer} onPress={handleDistPress}>
              <Image source={mapIcon} style={{ resizeMode: 'contain' }} />
            </TouchableOpacity>
            {userLocation.latitude && userLocation.longitude && (
              <TextCustom fontType="medium" style={fiche.ficheTopDistText}>
                {global.i18n.t('TEXTE_FICHE_DISTANCE_A')} {getDistance(userLocation, { latitude: marker.latitude, longitude: marker.longitude }, 100) / 1000}km
              </TextCustom>
            )}
          </View>
        </View>

        <View style={fiche.ficheTopTitleMainContainer}>
          {/* Host location */}
          <TextCustom fontType="bold" style={fiche.ficheTopTitleCityText}>
            {marker.ville} ({marker.code_postal})
          </TextCustom>

          {/* Host type icon handler */}
          <View style={fiche.ficheTopExploitationContainer}>
            {marker.vigneron && (
              <View style={fiche.ficheTopExploitationImageContainer}>
                <Image style={fiche.ficheTopExploitationImage} source={vigneronIcon} />
              </View>
            )}
            {marker.fermier && (
              <View style={fiche.ficheTopExploitationImageContainer}>
                <Image style={fiche.ficheTopExploitationImage} source={fermierIcon} />
              </View>
            )}
            {marker.autres && !marker.fermier && !marker.vigneron && (
              <View style={fiche.ficheTopExploitationImageContainer}>
                <Image style={fiche.ficheTopExploitationImage} source={autresIcon} />
              </View>
            )}

            {/* Host name */}
            <View style={fiche.ficheTopExploitationNameContainer}>
              <TextCustom fontType="bold" style={fiche.ficheTopExploitationNom}>{marker.nom}</TextCustom>
              <TextCustom style={fiche.ficheTopEploitationPropriete}>{marker.nom_propriete}</TextCustom>
            </View>
          </View>
        </View>
      </View>
      <PopUpMap isVisible={isPopUpVisible} setIsVisible={setIsPopUpVisible} />
    </>
  );
};

// == Validation
FicheTop.propTypes = {
  marker: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  saveUserFavorite: PropTypes.func.isRequired,
  deleteUserFavorite: PropTypes.func.isRequired,
};

// == Export
export default FicheTop;
