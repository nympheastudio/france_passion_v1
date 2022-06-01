// Import node modules
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// Import styles
import { etape } from '@styles/Themes';

// Import components
import Map from '@containers/views/Etape/Map';
import SearchBar from '@containers/views/Etape/SearchBar';
import Result from '@containers/views/Etape/SearchBar/Result';
import Loader from '@components/partials/Loader';

// Import services
import { removeHostsDataStored, checkHostExpiration } from '@services/AsyncStorage/host';
import { removeReviewsDataStored, checkReviewExpiration } from '@services/AsyncStorage/review';

const Etape = ({
  hosts,
  isLoading,
  loadLocalHosts,
  loadLocalReviews,
}) => {
  // Focus de Etape
  useFocusEffect(useCallback(() => {
    if (hosts.length <= 0 && !isLoading) {
      // On charge les accueillants et les avis
      loadLocalHosts();
      loadLocalReviews();
    }
  }, [hosts]));

  // Focus de Etape
  useFocusEffect(useCallback(() => {
    // On checke sur les accueillants et avis n'ont pas été fetché récemments.
    // Tous les mois pour les accueillants
    checkHostExpiration().then((areHostsExpired) => {
      if (areHostsExpired) {
        removeHostsDataStored().then(() => loadLocalHosts());
      }
    });
    // Toutes les semaines pour les avis
    checkReviewExpiration().then((areReviewsExpired) => {
      if (areReviewsExpired) {
        removeReviewsDataStored().then(() => loadLocalReviews());
      }
    });
  }, []));

  return (
    <View style={etape.container}>
      {hosts.length <= 0 && <Loader message={global.i18n.t('TEXTE_TELECHARGEMENT_ACCUEILLANTS')} />}
      <SearchBar />
      <Map />
      <Result />
    </View>
  );
};

// Validation
Etape.propTypes = {
  hosts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadLocalHosts: PropTypes.func.isRequired,
  loadLocalReviews: PropTypes.func.isRequired,
};

// Export
export default Etape;
