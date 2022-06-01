// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';

// == Import styles
import { galery } from '@styles/Themes/fiche/routes/galery';

// == Import Component
import NoPhoto from './NoPhoto';


import { ActivityIndicator } from 'react-native';
import { Image as ImgLazy } from 'react-native-elements';

//<ImgLazy style={liste.cardTopBackgroundImage} source={{uri: img_rdv}} PlaceholderContent={<ActivityIndicator />} />




// == Composant
const Galery = ({ marker, openCarousel }) => {
  const handlePhotoPress = (i) => {
    openCarousel(i);
  };

  return (
    <>
      {marker.photos.length === 0
        ? <NoPhoto />
        : (
          <View style={galery.galeryMainContainer}>
            {marker.photos.map((photo, index) => (
              <TouchableOpacity
                onPress={() => handlePhotoPress(index)}
                key={photo.url}
                style={galery.galeryPhotoBtn}
              >
                <ImgLazy source={{ uri: photo.thumbnail_url }} style={galery.galeryPhoto} PlaceholderContent={<ActivityIndicator size="large" color="#144C95" />} />
              </TouchableOpacity>
            ))}
          </View>
        )}
    </>
  );
};

// == Validation
Galery.propTypes = {
  marker: PropTypes.object.isRequired,
  openCarousel: PropTypes.func.isRequired,
};

// == Export
export default Galery;
