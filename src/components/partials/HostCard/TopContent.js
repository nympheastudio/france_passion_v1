// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { getDistance } from 'geolib';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Icons
import mapIcon from '@styles/images/icon-map-rose/icon-map-rose.png';
import starIcon from '@styles/images/icon-star_outline-lg-rose/icon-star_outline-lg-rose.png';
import parkingIcon from '@styles/images/icon-parking/icon-parking.png';
import timeIcon from '@styles/images/icon-time-gris/icon-time-gris.png';
import cardImg from '@styles/images/image-default-card/image-default-card.png';

// == Import Style
import { liste } from '@styles/Themes';

// == Import services
import { getHostReviewInfo, getHostReviews } from '@services/Fiche';

import { ActivityIndicator } from 'react-native';
import { Image as ImgLazy } from 'react-native-elements';

//<ImgLazy style={liste.cardTopBackgroundImage} source={{uri: img_rdv}} PlaceholderContent={<ActivityIndicator />} />
// == Composant
const TopContent = ({ marker, userLocation, reviews }) => (
  <View style={liste.cardTopContainer}>
    {marker.photos[0]
      ? <ImgLazy style={liste.cardTopBackgroundImage} source={{ uri: `${marker.photos[0].url}` }} PlaceholderContent={<ActivityIndicator size="large" color="#144C95" />} />
      : (
        <View style={liste.cardTopDefaultImageContainer}>
          <Image source={cardImg} style={liste.cardTopDefaultImage} />
        </View>
      )}
    {userLocation.latitude && userLocation.longitude && (
      <View style={liste.cardMarkerDistanceContainer}>
        <Image source={mapIcon} style={liste.cardMarkerdistanceIcon} />
        <TextCustom style={liste.cardMarkerdistanceText}>
          {/* eslint-disable-next-line max-len */}
          {getDistance(userLocation, { latitude: marker.latitude, longitude: marker.longitude }, 100) / 1000} km
        </TextCustom>
      </View>
    )}
    <View style={liste.cardParkingTimeContainer}>
      <Image source={parkingIcon} />
      <TextCustom style={liste.cardParkingTimeText}>{marker.parking}</TextCustom>
      {marker.horaires && (
        <>
          <Image source={timeIcon} style={liste.cardTimeImage} />
          <TextCustom style={liste.cardParkingTimeText}>
            {marker.horaires}
          </TextCustom>
        </>
      )}
    </View>

    {reviews.length > 0 && (
      <View style={liste.cardReviewContainer}>
        <Image source={starIcon} />
        <TextCustom style={liste.cardReviewText}>
          {getHostReviewInfo(getHostReviews(reviews, marker.id)).reviewNumber}
        </TextCustom>
      </View>
    )}
  </View>
);

// == Validation
TopContent.propTypes = {
  marker: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

// == Export
export default React.memo(TopContent);
