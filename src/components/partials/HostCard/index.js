/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import routes
import { PAGE_FICHE,PAGE_ETAPE } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

import TopContent from '@components/partials/HostCard/TopContent';
import BottomContent from '@components/partials/HostCard/BottomContent';
import Favorite from '@components/partials/HostCard/Favorite';
import GotoMarkerMap from '@components/partials/HostCard/GotoMarkerMap';




import mapIcon from '@styles/images/icon-map-rose/icon-map-rose.png';
// == Import Style
import { liste } from '@styles/Themes';

// == Composant
const HostCard = ({
  marker,
  userLocation,
  user,
  setMarkerSelected,
  saveUserFavorite,
  deleteUserFavorite,
  basicCard,
  reviews,
}) => {
  const navigation = useNavigation();
  const isFavorite = user.favoris.includes(marker.id);

  const handleNavPress = () => {
    setMarkerSelected(marker);
    navigation.navigate(PAGE_FICHE);
  };
  
 const showMarkeronMap = () => {
     setMarkerSelected(marker);
     navigation.navigate(PAGE_ETAPE);
   };

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteUserFavorite(marker.id);
    } else {
      saveUserFavorite(marker.id);
    }
  };
  
  let btn_voir_marqueur = 'Voir sur la carte';

  return (
    <TouchableOpacity style={liste.cardContainer} onPress={handleNavPress} activeOpacity={1}>
      <TopContent marker={marker} userLocation={userLocation} reviews={reviews} />
      <BottomContent marker={marker} basicCard={basicCard} />
      <Favorite isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      
	  {basicCard && (
        <>
         <TouchableOpacity onPress={showMarkeronMap} style={liste.cardBottomContainer} ><Text><Image source={mapIcon}  /> {global.i18n.t('BTN_VOIR_MARQUEUR')}</Text></TouchableOpacity>
	  
        </>
      )}
	  
	  
	  
    </TouchableOpacity>
    
  );
};

// == Validation
HostCard.propTypes = {
  marker: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setMarkerSelected: PropTypes.func.isRequired,
  saveUserFavorite: PropTypes.func.isRequired,
  deleteUserFavorite: PropTypes.func.isRequired,
  basicCard: PropTypes.bool,
  reviews: PropTypes.array.isRequired,
};

HostCard.defaultProps = {
  basicCard: false,
};

// == Export
export default HostCard;
